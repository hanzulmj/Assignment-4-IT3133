import React, {useState,useEffect} from "react";
import { animals } from "../data/AnimalsDb";
import Card from "./Card";

const Game =()=>{
    const [target,setTarget] = useState("");
    const [result,setResult]=useState("");

    useEffect(()=>{

        setRandomAnimal();
    },[]);

    const setRandomAnimal = ()=>{
        const index = Math.floor(Math.random()*animals.length);
        setTarget(animals[index].name); 
    };

    const handleAnimalClick = (selectdAnimal)=>{
        if(selectedAnimal == target){
            setResult("You are win!");
        }
        else
        {
            setResult("You are lost!")
            
        }
    };

    return(
        <div>
      <h1>Animal Recognition Game</h1>
      <h2>Find: {targetAnimal}</h2>
      <div>
        {animals.map((animal, indexA) => (
          <Card
            key={indexA}
            animal={animal}
            onClick={() => handleAnimalClick(animal.name)}
          />
        ))}
      </div>
      {result && <h3>{result}</h3>}
      <button onClick={setRandomAnimal}>Play Again</button>
    </div>
    );

};

export default Game;