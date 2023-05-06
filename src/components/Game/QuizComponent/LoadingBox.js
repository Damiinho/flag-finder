import React, { useState, useEffect } from "react";

const facts = [
  "zielony, żółty i czerwony to barwy panafrykańskie (choć niektórzy uważają że czarny zamiast żółtego)",
  "flaga Litwy wykorzystuje barwy panafrykańskie",
  "barwy pansłowiańskie to niebieski, biały i czerwony",
  "barwami panarabskimi są barwy czerwona, zielona, biała i czarna",
  "krzyż nordycki występuje tylko w flagach nordyckich",
  "flaga Królestwa Francji była cała biała",
  "do 2011 roku flaga Libii składała się wyłącznie z zielonej barwy",
];

const LoadingBox = () => {
  const [count, setCount] = useState(3);
  const [fact, setFact] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  }, []);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="main-game__loading">
      <p className="main-game__loading__count">{count}</p>
      <div className="main-game__loading__fact">
        <p className="main-game__loading__fact-title">Czy wiesz, że...</p>
        <p className="main-game__loading__fact-text">{fact}</p>
      </div>
    </div>
  );
};

export default LoadingBox;
