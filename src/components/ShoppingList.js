import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, submitNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredSearchName, setFilteredSearchName] = useState("")
  
function handleSearchInput(event){
  setFilteredSearchName(event.target.value)

}
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
//how to display this array of filtered items??
  
  const filteredSearchItems = itemsToDisplay.filter((item)=>{
   return item.name.includes(filteredSearchName)
   
  })

  function handleNewItem(item){
    submitNewItem(item)
    console.log(item)

  }

  return (
    <div className="ShoppingList">
      
      <Filter onCategoryChange={handleCategoryChange} onSearchChange ={handleSearchInput} searchInput ={filteredSearchName} filteredSearchItems = {filteredSearchItems}/>
      <ul className="Items">
        {filteredSearchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
          
        ))}
      </ul>
      <ItemForm handleNewItem ={handleNewItem}/>
    </div>
  );
}

export default ShoppingList;
