import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header 
        className="App-header" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh', 
          backgroundColor: '#282c34', 
          color: 'white', 
          textAlign: 'center',
          padding: '20px'
        }}
      >
        <img 
          src={logo} 
          className="App-logo" 
          alt="logo" 
          style={{ height: '100px', marginBottom: '20px' }} 
        />

        <h1 
          style={{ 
            fontSize: '24px', 
            lineHeight: '1.6', 
            marginBottom: '10px'
          }}
        >
          FSAD Project Deployment<br />
          Done by ID: 2300030659<br />
          Name: Syed Mastan Vali<br />
          Section: 201
        </h1>
      </header>
    </div>
  );
}

export default App;
