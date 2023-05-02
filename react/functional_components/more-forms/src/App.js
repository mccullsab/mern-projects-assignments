import logo from './logo.svg';
import './App.css';
import Form from './components/UserForm';



function App() {
  return (
    <div className="App">
      {/* could put props below withion the form  */}
      <Form /> 
    </div>
  );
}

export default App;


// If the email is less than 5 characters, 
// output an error message 
// saying the field must be at least 5 characters.
