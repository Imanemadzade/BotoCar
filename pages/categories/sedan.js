
import carsData from "../../data/carsData";
import CarsList from "../../components/layout/temlates/CarsList";
function Sedan() {
  const sedanCar = carsData.filter((car) => car.category === "sedan");
  return <CarsList data={sedanCar} />;
}

export default Sedan;
