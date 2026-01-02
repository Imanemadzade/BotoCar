import Categories from "../components/layout/module/Categories";
import SearchBar from "../components/layout/module/SearchBar";
import CarsPage from "../components/layout/temlates/CarsPage";
import carsData from "../data/carsData";
import AllButton from "../components/layout/module/AllButton";


 function Index() {
const cars=carsData.slice(0,3);

  return (
    <div>
    <SearchBar />
    <Categories />
    <AllButton />
    <CarsPage data={cars} />
  </div>
  );
}

export default Index;