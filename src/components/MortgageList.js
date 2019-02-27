import React, {Component} from 'react';
import MortgageItem from './MortgageItem';

class MortgageList extends Component {

  render(){
      const mortgageNodes = this.props.applications.map((application) => {
        console.log(application);
        return (
          <MortgageItem key={application.id} mortgage={application}></MortgageItem>
        )

      })

      return (
        <div className="mortgage-list">
        {mortgageNodes}
        </div>
      )
    }

}


export default MortgageList;
