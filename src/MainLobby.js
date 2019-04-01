import React from 'react'; 
import './App.css';
import Cards from './Cards';
import InputAdd from './InputAdd';

class MainLobby extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cardInfo: '',
      list: []
    }
  }

  componentWillMount(){
    this.setState({
      list: this.props.cardData.cardBinders
    })
  }

  submitNewCard = (index) => {
    let addArray = this.state.list
    addArray[index].Info.push({cardInfo: this.state.cardInfo})
    this.setState({
      list: [...addArray]
    })
  }

  cardValueChange = (event) => {
    this.setState({
      cardInfo: event.target.value
    })
  }

  arrowButtonEvent = (direction, parentIndex, childIndex) => {
    
    let arrowAddArray = this.state.list
    let removeItem = arrowAddArray[parentIndex].Info.splice(childIndex,1)
    direction === "right" ? 
                  arrowAddArray[parentIndex+1].Info.splice(childIndex+1,0,...removeItem):
                  arrowAddArray[parentIndex-1].Info.splice(childIndex+1,0,...removeItem)
    
    this.setState({
      list: [...arrowAddArray]
    })
  }


  render(){
    console.log(this.state.list)
    return (
      <div className = "Card-outerborder">
        {this.state.list.map((card, index, array) => 
          <div className = "Card-border" key = {index} >
            <div className = "Card-title">{card.Title} {index}</div>
            <Cards Cards = {card} 
                  ParentIndex = {index} 
                  DataArray = {array} 
                  ArrowButtonEvent = {this.arrowButtonEvent}
            />
            <InputAdd InputChange = {this.cardValueChange} 
                      IndexofCard = {index} 
                      InputSubmit = {this.submitNewCard}
            />
          </div>
        )}
      </div>
    )
  }
}

export default MainLobby;