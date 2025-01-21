import { useRef } from "react";

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
      <input
        type="text"
        placeholder="Title"
        ref={titleRef}
        defaultValue={title}
      />
      <input
      placeholder="INGREDIENTS LIST"
      
      />

      <input
        type="text"
        placeholder="Description"
        ref={descriptionRef}
        defaultValue={description}
      />
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
      <input
        type="text"
        placeholder="Country"
        ref={countryRef}
        defaultValue={country}
      />
      <input
        type="text"
        placeholder="Caffeine"
        ref={caffeineRef}
        defaultValue={caffeine}
      />
      <button>Add Ingredient</button>
    </form>
  );
};

export default CoffeeForm
