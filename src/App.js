import "./style/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
