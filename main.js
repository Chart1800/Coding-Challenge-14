// This is a UI for a simple financial calculator to perform basic operations

// U94741303

import { calculateInterest } from 'InterestRates.js';
import { calculateLoanPayment } from 'LoanPayments.js';
import { calculateInvestmentReturn } from 'InvestmentReturn.js';

// DOM Elements
const principalInput = document.getElementById('Principal');
const rateInput = document.getElementById('Rate');
const timeInput = document.getElementById('Time');
const compoundInput = document.getElementById('Compounds');
const interestResult = document.getElementById('Interest-Result');
const loanPaymentResult = document.getElementById('Loan-Payment-Result');
const investmentResult = document.getElementById('Investment-Result');

// Event Listeners
document.getElementById('calculate-Interest').addEventListener('click', () => {
    const principal = parseFloat(PrincipalInput.value);
    const rate = parseFloat(RateInput.value);
    const time = parseFloat(TimeInput.value);

    const interest = calculateInterest(Principal, Rate, Time);
    InterestResult.textContent = `$${interest.toFixed(2)}`;
});

document.getElementById('calculate-Loan').addEventListener('click', () => {
    const principal = parseFloat(PrincipalInput.value);
    const rate = parseFloat(RateInput.value);
    const time = parseFloat(TimeInput.value);

    const loanPayment = calculateLoanPayment(Principal, Rate, Time);
    LoanPaymentResult.textContent = `$${loanPayment.toFixed(2)}`;
});

document.getElementById('calculate-Investment').addEventListener('click', () => {
    const principal = parseFloat(PrincipalInput.value);
    const rate = parseFloat(RateInput.value);
    const time = parseFloat(TimeInput.value);
    const compounds = parseFloat(CompoundInput.value);

    const investmentReturn = calculateInvestmentReturn(Principal, Rate, Time, Compounds);
    InvestmentResult.textContent = `$${InvestmentReturn.toFixed(2)}`;
});
