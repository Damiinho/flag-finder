import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import AppProvider from "./contexts/AppContext";
import Load from "./components/Load";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("inactive");
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("inactive");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppProvider>
      {isLoading ? (
        <Load />
      ) : (
        <div className="App">
          <Header />
          <Main />
        </div>
      )}
    </AppProvider>
  );
}

export default App;
