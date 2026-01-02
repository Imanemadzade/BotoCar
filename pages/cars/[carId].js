import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsDetail from "../../components/layout/temlates/CarsDetail";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];
  

  return <CarsDetail {...carDetails} />;
}

export default CarDetail;
