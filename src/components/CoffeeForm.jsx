import { useRef } from "react";
import '../styles/AddCoffeePage.module.css'

const CoffeeForm = ({onFormSubmit, title, ingredients, description, strength, image, price, country, caffeine }) => {

  const titleRef = useRef()
  const ingredientsRef = useRef()
  const descriptionRef = useRef()
  const strengthRef = useRef()
  const imageRef = useRef()
  const priceRef = useRef()
  const countryRef = useRef()
  const caffeineRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      titleRef.current?.value.trim() &&
      countryRef.current?.value.trim() 
    ) {
      onFormSubmit(
        titleRef.current.value,
        ingredients,
        descriptionRef.current.value,
        strength,
        image,
        price,
        country,
        caffeine
      );
    } else {
      alert("Please fill out all required fields!");
    }
  };

  return (
      <form onSubmit={onSubmit}>

      <h2>Add Product</h2>
      
      <p>Coffee</p>
      <input
        type="text"
        placeholder="Title"
        ref={titleRef}
        defaultValue={title}
      />

      <p>Ingredients</p>
      <input
      placeholder="INGREDIENTS LIST"
      />

      <p>Desciption</p>
      <input
        type="text"
        placeholder="Description"
        ref={descriptionRef}
        defaultValue={description}
      />

      <p>Strength</p>
      <input
        type="text"
        placeholder="Strength"
        ref={strengthRef}
        defaultValue={strength}
      />

      <input
        type="file"
         placeholder="Image"
         accept="image/*"
         ref={imageRef}
      />

      <p>Country</p>
      <input
        type="text"
        placeholder="Country"
        ref={countryRef}
        defaultValue={country}
      />

      <p>Caffeine</p>
      <input
        type="text"
        placeholder="Caffeine"
        ref={caffeineRef}
        defaultValue={caffeine}
      />
      <button>Add Coffee</button>
    </form>
  );
};

export default CoffeeForm
