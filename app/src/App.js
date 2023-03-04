//import logo from './logo.svg';
import logo from './graphics/logo.png';
import './App.css';
import './'

function TestHtml() {
  DBConnect();
  return (
    <body>
      <div class="test">
        Horizon Tennis
      </div>
      <div class="bg">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </body>
  );
}

export default TestHtml;
