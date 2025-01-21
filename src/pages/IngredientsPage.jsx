import IngredientsForm from "../components/IngredientsForm"
import useRequest from "../hooks/useRequest"

const IngredientsPage = () =>{
    const {sendRequest, loading} = useRequest({url:'/api/v1/ingredient', method:'POST'})

    const onSubmit = (title, price, description, strength, flavor) => {
        sendRequest([{title, price, description, strength, flavor}])
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    if(loading) return <p>Loading ..</p>
    return(
        <div>
            <IngredientsForm onFormSubmit={onSubmit}/>
        </div>
    )





}

export default IngredientsPage