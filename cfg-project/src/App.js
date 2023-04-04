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
                title = 'Unicorn riding'
                imageUrl = 'https://i.pinimg.com/originals/34/4d/97/344d974eb7aa7f5396cf8150e4a91c0e.jpg'
                body = 'Incredible opportunity to get on The Majestic Creature!'
                handleClick={handleClick}
                />
                <Card
                title = 'Haggis hunting'
                imageUrl = 'https://ih1.redbubble.net/image.1440444641.8733/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
                body = 'Unique adventure seeking wild Haggis! Neeps and tattis provided.'
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