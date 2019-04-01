import React from 'react';

class InputAdd extends React.PureComponent {
  render(){
    const {InputChange, IndexofCard, InputSubmit} = this.props
    return (
      <div>
        <input type = "text" onChange = {(event) => InputChange(event)} />
        <button onClick = {() => InputSubmit(IndexofCard)}>ADD</button>
      </div>
    )
  }
}

export default InputAdd
