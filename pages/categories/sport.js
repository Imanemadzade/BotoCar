import CarsList from "../../components/layout/temlates/CarsList";
import carsData from "../../data/carsData";

function Sport() {
  const sportCar = carsData.filter((car) => car.category === "sport");
  return <CarsList data={sportCar} />;
}

export default Sport;
