
import Categories from "../../components/layout/module/Categories";
import SearchBar from "../../components/layout/module/SearchBar";
import CarsPage from "../../components/layout/temlates/CarsPage";
import carsData from "../../data/carsData";

function Details() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
