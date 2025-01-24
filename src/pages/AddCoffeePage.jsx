import CoffeeForm from "../components/CoffeeForm"
import useRequest from "../hooks/useRequest"

const AddCoffeePage = () =>{
   const {sendRequest, loading} = useRequest({url:'/api/v1/coffee', method:'POST'})

   const onSubmit = (title, ingredients, description, strength, image, price, country, caffeine) => {
        sendRequest([{title, ingredients, description, strength, image, price, country, caffeine}])
    }

    if(loading) return <p>Loading ..</p>
    return(
        <div>
            <CoffeeForm onFormSubmit={onSubmit}/>
        </div>
    )
}

export default AddCoffeePage