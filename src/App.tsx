import React from "react";
import KenoGame from "components/KenoGame";

const currentKenoStakes = [50, 100, 200, 500, 1000];

const App = () => (
  <KenoGame currentKenoStakes={currentKenoStakes} kenoNumbersQuantity={80} />
);

export default App;
