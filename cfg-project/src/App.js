import logo from './mountain.jpg';
import './App.css';
import Card from './Card';
import Form from './Form';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Book Activities Near You</h1>
          <img src={logo} className="App-logo"></img>
        </header>
        <body id="body">
          <div>
          <h3 id="content">Have an exciting adventure by booking one of our amazing activities</h3>
          </div>
          <div id='cards'>
            < Card />
            < Card />
          </div>
          <div id="myForm">
            <Form />
          </div>
        </body>
        <footer id='footer'>
         <p>Copyright &copy; All Rights Reserved</p>
        </footer>
      </div>
    )
}

export default App;
