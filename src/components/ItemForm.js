import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({handleNewItem}) {
   const [itemName, setItemName] = useState('')
   const [itemCategory, setItemCategory] = useState('Produce')
   console.log(itemName)
    function handleNameChange(event){
      event.preventDefault()
      setItemName(event.target.value)
      
    }
    function handleCategoryChange(event){
      event.preventDefault()
      setItemCategory(event.target.value)
    }

    function handleSubmit(event){
      event.preventDefault()
      const formData = {  id: uuid(),name: itemName, category: itemCategory}
      handleNewItem(formData)
      console.log(formData)
    }
   
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category"
        onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
