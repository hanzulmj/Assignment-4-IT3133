import React, {useState,useEffect} from "react";
import { animals } from "../data/AnimalsDb";
import Card from "./Card";
import "./Game.css";

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

    const handleAnimalClick = (selectedAnimal)=>{
        if(selectedAnimal === target){
            setResult("You won!");
        }
        else
        {
            setResult("You lost!")
            
        }
    };

    return(
    <div className="container">
      <h1 className="title">Animal Recognition Game</h1>
      <h2 className="subtitle">Find: {target}</h2>
      <div className="grid-container">
        {animals.map((animal, indexA) => (
          <Card
            key={indexA}
            animal={animal}
            onClick={() => handleAnimalClick(animal.name)}
          />
        ))}
      </div>
      {result && <div className="result">{result}</div>}
      <button className="play-again-btn" onClick={setRandomAnimal}>Play Again</button>
    </div>
    );

};

export default Game;