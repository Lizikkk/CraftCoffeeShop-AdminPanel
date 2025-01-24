import AddCoffeePage from '../pages/AddCoffeePage'
import AddIngredientPage from '../pages/AddIngredientsPage';
import Mainpage from "../pages/MainPage";

const routes = [
    {
        element:<Mainpage/>,
        path:'/'
    },
    {
        element:<AddCoffeePage/>,
        path: '/coffeeList'
    },
    {
        element:<AddIngredientPage/>,
        path:'/ingredients'
    }
    
]

export default routes