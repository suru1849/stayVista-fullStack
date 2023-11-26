import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import "./checkOutForm.css";
import useAuth from "../../hooks/useAuth";
import {
  createPaymentIntent,
  saveBookingInfo,
  updateStatus,
} from "../../api/bookings";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ bookingInfo, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState(" ");
  const [clientSecret, setClientSecret] = useState(" ");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  // Create Payment Intent
  useEffect(() => {
    if (bookingInfo?.price > 0) {
      createPaymentIntent({ price: bookingInfo?.price }).then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
    }
  }, [bookingInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // card data lookup (Asynchronous Network Call)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error =>", error);
      setCardError(error.message);
    } else {
      setCardError(" ");
      console.log("PaymentMethod", paymentMethod);
    }

    // processing
    setProcessing(true);

    // payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log("PaymentIntent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      // save payment information to the server
      const paymentInfo = {
        ...bookingInfo,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      try {
        // update room status in db
        await saveBookingInfo(paymentInfo);

        //  update room status in db
        await updateStatus(bookingInfo.roomId, true);

        const text = `Booking successfull ! ${paymentIntent.id}`;
        toast.success(text);
        navigate("/dashboard/my-bookings");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      } finally {
        setProcessing(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex mt-2 justify-around">
        <button
          type="button"
          className="btn inline-flex justify-center rounded-md border border-transparent bg-red-600"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="btn inline-flex justify-center rounded-md border border-transparent bg-green-600"
        >
          {processing ? (
            <ImSpinner9 className="animate-spin mx-auto" size={24} />
          ) : (
            `Pay ${bookingInfo?.price}$`
          )}
        </button>
      </div>
    </form>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

// const App = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default App;

export default CheckoutForm;
