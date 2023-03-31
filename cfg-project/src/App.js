import "./App.css";
import Card from "./Card.js";
import Form from "./Form";
import { useState } from "react";


function App() {
  const [showForm, setShowForm] = useState(false);

  const handleClick= () => {
    setShowForm(true);
  };

  return (
    <div id="App">
      <header className="App-header">
        <nav id="nav">
          <h1>Scottish Adventures</h1>
          <h3 id="number" className="titles">01338 786546</h3>
          <i class="fa-solid fa-magnifying-glass"></i>
          <div id="search" class="search-container">
            <form class="no-submit">
              <input class="no-submit" type="search" placeholder="Find your next adventure..." method="GET"/>
            </form>
          </div>
        </nav>
      </header>
      <div id="card" className="cards">
        <div id="card-wrapper">
                <Card
                title = 'Yoga Class'
                imageUrl = 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                body = 'Card body, lorem ipsum, bla bla bla'
                handleClick={handleClick}
                />
                <Card
                title = 'Indoor cycling'
                imageUrl = 'https://media.istockphoto.com/id/918931148/photo/fit-people-working-out-at-exercising-class-in-the-gym.jpg?s=612x612&w=0&k=20&c=-2fPHUiGAjZJXeSqZTw8ipfeUOkI_w8H0wEGcbD7oPc='
                body = 'blablabla'
                handleClick={handleClick}
                />
              <Card
              title = 'Do nothing class'
              imageUrl = 'https://images.pexels.com/photos/258330/pexels-photo-258330.jpeg?cs=srgb&dl=pexels-pixabay-258330.jpg&fm=jpg'
              body = 'Class is dedicated to all - parents, workers, aliens. Come, relax and do nothing!'
              handleClick={handleClick}
              />
        </div>
      </div>  
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
}
export default App;