import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./componenti/Navbar";
// import Prova from "./componenti/Prova";
import Footer from "./componenti/Footer";
import Main from "./componenti/Main";

function App() {
  return (
    <div>
      <MyNavbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
