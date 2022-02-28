import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import ItemForm from "./ItemForm"

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  //  function handleSubmitItemForm(newItem){
  //     const newItemsArray= [
  //       "id": newItemsArray.length + 1,
  //       "name" : newItem.name,
  //       "category" : newItem.category,
      
  
  function submitNewItem(item){
    console.log(item)
    setItems([...items,item])
  }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} submitNewItem={submitNewItem} />
      
    </div>
  );
  }

export default App;
