import Filter from "../components/home/Filters";
import ProductsList from "../components/products/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "../store/slices/loader.slice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <Filter />
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
