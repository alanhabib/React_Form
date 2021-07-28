import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://brooklyneagle.com/wp-content/uploads/2020/12/LeBron-James.jpg",
      age: 35,
      note: "He can't really shoot but switches teams often",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
