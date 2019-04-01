import React from 'react';
import './App.css';

class Cards extends React.PureComponent {
  render(){
    const { Cards, ParentIndex, DataArray, ArrowButtonEvent} = this.props
    return (
      Cards.Info.map((card, index) => {
        return(
          <div className = "CardIndex" key = {index}>
            {ParentIndex !== 0 ? <button onClick = {() => ArrowButtonEvent("left", ParentIndex, index)}>left</button> : null}
              <div>{card.cardInfo}</div>
            {ParentIndex !== DataArray.length - 1 ? <button onClick = {() => ArrowButtonEvent("right", ParentIndex, index)}>right</button> : null}
          </div>
        )
      })
    )
  }
}

export default Cards

