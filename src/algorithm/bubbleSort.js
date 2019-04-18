import React, {Component} from "react";

class BubbleSort extends Component {
  constructor(){
    super();
    this.state={value: ''};

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    console.log(this instanceof BubbleSort)
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <div>bubble sort</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <input type='submit' value='提交'></input>
        </form>
      </div>
    )
  }
}

export default BubbleSort;