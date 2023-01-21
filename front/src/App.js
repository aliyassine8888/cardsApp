
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import cardService from './services/card.service';
import CardList from './components/card.list.component';
import CardForm from './components/card.form.component';
import CardNotification from './components/card.notification.component';

function App() {

  const [cards, setCards] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!cards) {
      getCards();
    }
  });

  const getCards = async () => {
    let res = await cardService.getAll();
    setCards(res);
  }

  const notificationCallback = () =>{
    setNotification(null);
  }

  const addCard = async (card) => {
    let res = await cardService.add({...card});

    if(res && res.error===false){
      setNotification({key:uuidv4() ,severity:'success', message:`Card ${card.pan} has been added successfully`});
    }else{
      setNotification({key:uuidv4(), severity:'error', message:`An error occured while adding card number ${card.pan} - ${res.message}`});
    }
    getCards();
  }

  return (
    <div className="App" data-testid="App">
      <CardForm addCard={addCard}></CardForm>
      { notification && <CardNotification {...notification} notificationCallback={notificationCallback}></CardNotification>}
      <CardList cards={cards}></CardList>
    </div>
  );
}

export default App;
