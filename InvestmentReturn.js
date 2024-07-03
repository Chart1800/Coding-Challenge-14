
// This code is part of a simple financial calculator to help perform basic calculations

// U94741303

// Investment Return Calculations

const calculateInvestmentReturn = ( Principal, Rate, Time) => {
    const r = rate / 100; // Annual Interest Rate
    const n = 1; // Compounded Annual Interest
    const futureValue = Principal * Math.pow((1 + r/n), n*Time);
    return futureValue;
};

export {calculateInvestmentReturn};