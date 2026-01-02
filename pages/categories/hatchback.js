import CarsList from "../../components/layout/temlates/CarsList";
import carsData from "../../data/carsData";
function Hatchback() {
   const hatchbackCar = carsData.filter((car) => car.category === "hatchback");
  
   return <CarsList data={hatchbackCar} />;
}

export default Hatchback;
