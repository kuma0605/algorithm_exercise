import React, {Component} from "react";
import pickSort from '../algorithmExe/pickSort.js';
class BubbleSort extends Component {
  constructor(){
    super();
    this.state={value: '', sorted:[]};

    // bind原因
    // 从render里onChange 理解为不做bind，this指向会偏离
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    this.setState({sorted: pickSort(this.state.value.trim().split(" "))})
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <div>pick sort</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange}></textarea>
          </label>
          <br/>
          <input type='submit' value='提交'></input>
          <br/>
          <span>{this.state.sorted.join(' ')}</span>
        </form>
      </div>
    )
  }
}

export default BubbleSort;