import React, { Component } from 'react';
import './App.css';
import MainLobby from './MainLobby';

class App extends Component {
  render() {
    const cardData = {
      cardBinders: [
        {
          CardId: 0,
          Title: 'Johnson',
          Info: [
            {
              cardInfo: 'I am Johnson'
            }
          ]
        },
        {
          CardId: 1,
          Title: 'Simmon',
          Info: [
            {
              cardInfo: 'I am Simmon'
            }
          ]
        },
        {
          CardId: 2,
          Title: 'Anderson',
          Info: [
            {
              cardInfo: 'I am Anderson'
            }
          ]
        },
        {
          CardId: 3,
          Title: 'Ericson',
          Info: [
            {
              cardInfo: 'I am Ericson'
            }
          ]
        }
      ]
  }
    return (
      <div className = "Card-container">
        <MainLobby cardData={cardData} />
      </div>
    );
  }
}

export default App;
