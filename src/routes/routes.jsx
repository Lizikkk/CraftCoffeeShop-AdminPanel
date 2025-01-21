import CoffeeListPage from "../pages/CoffeeListPage";
import IngredientsPage from "../pages/IngredientsPage";
import Mainpage from "../pages/MainPage";

const routes = [
    {
        element:<Mainpage/>,
        path:'/'
    },
    {
        element:<CoffeeListPage/>,
        path: '/coffeeList'
    },
    {
        element:<IngredientsPage/>,
        path:'/ingredients'
    }
    
]

export default routes