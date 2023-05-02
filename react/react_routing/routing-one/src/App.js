import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router";

const Home = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

const Decoration = (props) => {
  const { color } = useParams(); //
  const { word } = useParams(); // 


  return (
    <div>
      <h1 style={{ color: { color } }}>The word is: { word }</h1>
    </div>
  );
}

const Number = (props) => {
  const { id } = useParams();
  return (
    <h1>The number is: {id}</h1>
  );
}

const Word = (props) => {
  const { word } = useParams();
  return (
    <h1>The word is: {word}</h1>
  );
}

// const About = (props) => {
//   return (
//     <div>
//       <h1 style={{ color: "blue" }}>About Component</h1>
//       <Link to={"/"}>Go Home</Link>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/:word/:color" element={<Decoration />} />
        <Route path="/:id" element={<Number />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<Word />} />
      </Routes>
    </div>
  );
}

export default App
