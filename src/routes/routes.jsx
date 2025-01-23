import CoffeeListPage from "../pages/CoffeeListPage";
import IngredientsPage from "../pages/IngredientsPage";
import CoffeeList from "../pages/CoffeeList";
import AddIngredient from "../components/ingredients/AddIngredient";
import IngredientList from "../pages/IngredientList";

const routes = [
  {
    element: <CoffeeList />,
    path: "/",
  },
  {
    element: <IngredientList />,
    path: "/ingredients",
  },
];

export default routes;
