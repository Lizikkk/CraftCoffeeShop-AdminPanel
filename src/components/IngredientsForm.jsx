import { useRef } from "react"

const IngredientsForm = ({onFormSubmit, title, price, description, strength, flavor}) => {
    const titleRef = useRef()
    const priceRef = useRef()
    const descriptionRef = useRef()
    const strengthRef = useRef()
    const flavorRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (
            titleRef.current?.value.trim() &&
            priceRef.current?.value.trim() &&
            descriptionRef.current?.value.trim() &&
            flavorRef.current?.value.trim()
        ) {
            onFormSubmit(
                titleRef.current.value,
                priceRef.current.value,
                descriptionRef.current.value,
                flavorRef.current.value,
                strength
            );
        } else {
            alert('Please fill out all required fields!');
        }
    };

    

    return <form onSubmit={onSubmit}>

        <h2>Add Ingredient</h2>
        
        <p>Ingredient</p>
        <input
        type='text'
        placeholder="Title"
        ref={titleRef}
        defaultValue={title}
        />

        <p>Price</p>
        <input
        type="number"
        step="0.01"
        placeholder="Price"
        ref={priceRef}
        defaultValue={price}
        />

        <p>Description</p>
        <input
        type='text'
        placeholder="Description"
        ref={descriptionRef}
        defaultValue={description}
        />

        <p>Flavor</p>
        <input
        type='text'
        placeholder="Flavor"
        ref={flavorRef}
        defaultValue={flavor}
        />

        <p>Strength</p>
        <input
        type='text'
        placeholder="Strength (optional)"
        ref={strengthRef}
        defaultValue={strength}
        />

        <button>Add Ingredient</button>
    </form>


}

export default IngredientsForm;