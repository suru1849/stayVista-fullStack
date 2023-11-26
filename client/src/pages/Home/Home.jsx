import { Helmet } from "react-helmet-async";
import Rooms from "../../components/Rooms/Rooms";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Categories />
      <Rooms />
    </div>
  );
};

export default Home;
