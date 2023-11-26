import { useState } from "react";
import Form from "../../../components/Form/Form";
import { imageUpload } from "../../../api/utlis";
import useAuth from "../../../hooks/useAuth";
import { addRoom } from "../../../api/rooms";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploadImageName, setUploadImageName] = useState("Upload Image");
  const navigaet = useNavigate();
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    const imgae_url = await imageUpload(image);

    const roomData = {
      location,
      category,
      title,
      to,
      from,
      price,
      guests,
      bedrooms,
      bathrooms,
      host,
      description,
      image: imgae_url?.data?.display_url,
    };

    console.table(roomData);

    try {
      setLoading(true);
      const data = await addRoom(roomData);
      toast.success("Room Added!");
      navigaet("/dashboard/my-listings");
      setUploadImageName("Uploaded!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // handle date change from react-date-change calender
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };

  // handle uploadImage
  const handleUploadImage = (image) => {
    setUploadImageName(image?.name);
  };

  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        dates={dates}
        loading={loading}
        uploadImageName={uploadImageName}
        handleUploadImage={handleUploadImage}
      />
    </div>
  );
};

export default AddRoom;
