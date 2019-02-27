import React, {Component} from 'react';
class MortgageForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      salary1: 0,
      salary2: 0,
      deposit: 0,
      commitments: 0
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSalary1Change = this.handleSalary1Change.bind(this);
    this.handleSalary2Change = this.handleSalary2Change.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleCommitmentsChange = this.handleCommitmentsChange.bind(this);
    this.handleApplicationSubmit = this.handleApplicationSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleSalary1Change(event){
    this.setState({salary1: event.target.value});
  }

  handleSalary2Change(event){
    this.setState({salary2: event.target.value});
  }

  handleDepositChange(event){
    this.setState({deposit: event.target.value});
  }

  handleCommitmentsChange(event){
    this.setState({commitments: event.target.value});
  }

  handleApplicationSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim();
    const salary1 = this.state.salary1;
    const salary2 = this.state.salary2;
    const deposit = this.state.deposit;
    const commitments = this.state.commitments;


    if (!name || !salary1){
      return
    }

    this.props.onFormSubmit({name: name, salary1: salary1, salary2: salary2, deposit: deposit, commitments: commitments})
    this.setState({name:'', salary1:0, salary2:0, deposit: 0, commitments:0});
  }


  render(){
    return(
      <div>
      <form className="mortgage-form" onSubmit={this.handleApplicationSubmit}>

      <p>Name:<input type="text" placeholder="Name"
      value={this.state.name}
      onChange={this.handleNameChange}/></p>

      <p>Salary 1:<input type="number" placeholder="Salary1"
      value={this.state.salary1}
      onChange={this.handleSalary1Change}/></p>

      <p>Salary 2:<input type="number" placeholder="Salary2"
      value={this.state.salary2}
      onChange={this.handleSalary2Change}/></p>

      <p>Deposit:<input type="number" placeholder="Deposit"
      value={this.state.deposit}
      onChange={this.handleDepositChange}/></p>

      <p>Commitments:<input type="number" placeholder="Commitments"
      value={this.state.commitments}
      onChange={this.handleCommitmentsChange}/></p>

      <input type="submit" value="Add Application"/>


      </form>

<hr/>

      </div>
    )
  }


}

export default MortgageForm;
