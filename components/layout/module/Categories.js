import styles from "./Categories.module.css";
import Link from "next/link";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Sport from "../icons/Sport";
import Hatchback from "../icons/Hatchback";

function Categories() {
  return (
    <div className={styles.container}>
      <div>
        <span>
          Sedan
          <Sedan />
        </span>
      </div>
      <div>
        <span>
          Suv
          <Suv />
        </span>
      </div>
      <div>
        <span>
          Hatchback
          <Hatchback />
        </span>
      </div>
      <div>
        <span>
          Sport
          <Sport />
        </span>
      </div>
    </div>
  );
}

export default Categories;
