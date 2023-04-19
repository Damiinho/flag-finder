import "./App.css";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        {/* <Nav /> */}
        <Main />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
