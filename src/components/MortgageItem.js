import React from 'react';

const MortgageItem = ({ mortgage }) => {
    return (
      <div>
      <p>Application number: {mortgage.id}</p>
      <p>Name: {mortgage.name}</p>
      <p>Salary1: {mortgage.salary1}</p>
      <p>Salary2: {mortgage.salary2}</p>
      <p>Deposit: {mortgage.deposit}</p>
      <p>Other monthly commitments: {mortgage.commitments}</p>
      <p>Loan: {mortgage.loan}</p>
      <hr/>
      </div>
    );
}

export default MortgageItem;
