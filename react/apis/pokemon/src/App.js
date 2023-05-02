import './App.css';
import Display from './components/Display';
import Axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [pokeList, setpokeList] = useState([])

  const fetchPoke = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000").then((res) => {
      let tempList = [];
      for(let i = 0; i<res.data.results.length; i++){
        tempList.push(res.data.results[i].name);
      }
      setpokeList(tempList);
    });
  }

  return (
    <div className="App">
      <button onClick={fetchPoke}>Fetch Pokemon</button>
      <ul>
        {pokeList.map((item, index) => {
          return (<li key={index}>{item}</li>)
        })}
      </ul>
    </div>
  );
}

// useEffect(() => {
//   fetchPoke();
// }, []);


export default App;
