import Navbar from "../components/navbar/Navbar";
import Table from "../components/table/Table";
import styles from "../App.module.css";

const IngredientList = () => {
  const ingredientData = [
    {
      name: "ingredient1",
      price: "$12",
      flavor: "flavor1",
    },
    {
      name: "ingredient2",
      price: "$10",
      flavor: "flavor2",
    },
    {
      name: "ingredient3",
      price: "$200",
      flavor: "flavor3",
    },
  ];
  return (
    <div className={styles.listContainer}>
      <Navbar />
      <Table type="ingredients" data={ingredientData} />
    </div>
  );
};

export default IngredientList;
