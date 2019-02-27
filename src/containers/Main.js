import React, {Component} from 'react';
import Header from '../components/Header';
import MortgageForm from '../components/MortgageForm';
import MortgageList from '../components/MortgageList';
import '../styles/style.css';

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      applications: []
    }
    this.handleApplicationSubmit = this.handleApplicationSubmit.bind(this);
  }

  handleApplicationSubmit(newApplication){
    newApplication.id = Date.now();
    newApplication.loan = (((parseFloat(newApplication.salary1) + parseFloat(newApplication.salary2)) * 3) + parseFloat(newApplication.deposit) - parseFloat(newApplication.commitments));
    const updatedApplications = [...this.state.applications, newApplication];
    this.setState({applications: updatedApplications});
  }




  render() {
    return (
      <div className='main-box'>
        <Header title='Mortgage Calculator' />
        <p>Application Form</p>
      <MortgageForm onFormSubmit={this.handleApplicationSubmit} />
      <MortgageList applications={this.state.applications} />
      </div>
    );
  }


}

export default Main;
