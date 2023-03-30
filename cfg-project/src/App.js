import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import './card.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
              <Card
              title = 'Yoga Class'
              imageUrl = 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
              body = 'Card body, lorem ipsum, bla bla bla'
              />
          </div>
          <div>
              <Card
              title = 'Indoor cycling'
              imageUrl = 'https://media.istockphoto.com/id/918931148/photo/fit-people-working-out-at-exercising-class-in-the-gym.jpg?s=612x612&w=0&k=20&c=-2fPHUiGAjZJXeSqZTw8ipfeUOkI_w8H0wEGcbD7oPc='
              body = 'blablabla'
              />
          </div>
          <div>
            <Card
            title = 'Do nothing class'
            imageUrl = 'https://images.pexels.com/photos/258330/pexels-photo-258330.jpeg?cs=srgb&dl=pexels-pixabay-258330.jpg&fm=jpg'
            body = 'Class is dedicated to all - parents, workers, aliens. Come, relax and do nothing!'
            />
          </div>
      </header>
    </div>
  );
}
export default App;