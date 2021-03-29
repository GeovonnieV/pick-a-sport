import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import sass file for styling
import "./styles/app.scss";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

function App() {
  return (
    <>
    <LoginPage />
    <Home />
    </>
  );
}

export default App;
