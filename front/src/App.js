
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useEffect } from "react";
import cardService from './services/card.service';
import CardList from './components/card.list.component';
import CardForm from './components/card.form.component';

function App() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (!cards) {
      getCards();
    }
  })

  const getCards = async () => {
    let res = await cardService.getAll();
    setCards(res);
  }

  return (
    <div className="App">
      <CardForm></CardForm>
      <CardList cards={cards}></CardList>
    </div>
  );
}

export default App;
