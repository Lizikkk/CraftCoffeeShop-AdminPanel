import Navbar from "../components/navbar/Navbar";
import Table from "../components/table/Table";
import styles from "../App.module.css";

const CoffeeList = () => {
  const coffeeData = [
    {
      title: "Espresso",
      country: "Italy",
      caffeine: "60mg",
      totalPrice: "$3",
    },
    {
      title: "Latte",
      country: "France",
      caffeine: "50mg",
      totalPrice: "$4",
    },
    {
      title: "Cappuccino",
      country: "Italy",
      caffeine: "70mg",
      totalPrice: "$5",
    },
  ];
  return (
    <div className={styles.listContainer}>
      <Navbar />
      <Table type="coffee" data={coffeeData} />
    </div>
  );
};

export default CoffeeList;
