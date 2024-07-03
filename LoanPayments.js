
// This code is part of a simple financial calculator to help perform basic calculations

// U94741303

// Loan Payment Calculations

const calculateLoanPayment = (Principle, Rate, Time) => {
    const r = rate / 100 / 12; // Interest Rate Per Month
    const n = time * 12; // Total of Monthly Payments
    const MonthlyPayment = Principal * (r * Math.pow(1 + r, n)) / (Math.pow (1 +r, n) - 1 );
    return MonthlyPayment;
};

export {calculateLoanPayment};
