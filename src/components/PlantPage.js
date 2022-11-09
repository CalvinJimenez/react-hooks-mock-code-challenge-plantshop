import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {


  const [plants, setPlants] = useState ([])

  useEffect(() => {
      fetch('http://localhost:6001/plants')
      .then (r => r.json())
      .then (plantData => setPlants(plantData))
    }, [] )

    const [searchText , setSearchText] = useState ('')

    const filteredPlantsArray = plants.filter((plantObj) => {
      return (
        plantObj.name.toLowerCase().includes(searchText.toLowerCase())
      )
      }
    )
  return (
    <main>
      <NewPlantForm newPlants={plants} setPlants={setPlants}/>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <PlantList plants={filteredPlantsArray}/>
    </main>
  );
}

export default PlantPage;
