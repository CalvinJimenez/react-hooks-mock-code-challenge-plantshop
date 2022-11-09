import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantCards = plants.map ( plantsObj => {
    return <PlantCard key={plantsObj.id} plant={plantsObj}/>
})
  return (
    <ul className="cards">
      {plantCards}
    </ul>
    
  );
}

export default PlantList;
