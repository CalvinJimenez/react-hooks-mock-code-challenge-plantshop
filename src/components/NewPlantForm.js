import React, {useState} from "react";

function NewPlantForm({ newPlants, setPlants }) { 

const [nameInputValue, setNameInputValue] = useState('')

const [imageInputValue, setImageInputValue] = useState('')

const [priceInputValue, setPriceInputValue] = useState (0.00)


  const handleSubmit = (se) =>{

    se.preventDefault()
    
    const newPlant = {
      name: nameInputValue,
      image: imageInputValue,
      price: priceInputValue
    }

    setPlants( [ ...newPlants , newPlant ] )
    console.log('weewee')
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >

        <input type="text" name="name" placeholder="Plant name" 
        value={nameInputValue} onChange={(se) => setNameInputValue( se.target.value)}
        />

        <input type="text" name="image" placeholder="Image URL" 
        value={imageInputValue} onChange={(se) => setImageInputValue(se.target.value)}
        />

        <input type="number" name="price" step="0.01" placeholder="Price" 
        value={priceInputValue} onChange={(se) => setPriceInputValue(se.target.value)}
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
