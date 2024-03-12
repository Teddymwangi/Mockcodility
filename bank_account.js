function solution(A, D) {
    let balance = 0;
    let cardPaymentsCount = 0;
    let cardPaymentsTotal = 0;
    
    const feePerMonth = 5;
    const months = new Set();
    
    const transactions = [];
    
    // Parse transactions and group by month
    for (let i = 0; i < A.length; i++) {
        const date = new Date(D[i]);
        const month = date.getMonth() + 1;
        const amount = A[i];
        
        if (!transactions[month]) {
            transactions[month] = [];
            months.add(month);
        }
        
        transactions[month].push(amount);
    }
    
    // Compute balance and count card payments
    for (let month = 1; month <= 12; month++) {
        const monthlyTransactions = transactions[month] || [];
        let monthlyIncome = 0;
        let monthlyExpenditure = 0;
        
        for (const amount of monthlyTransactions) {
            if (amount >= 0) {
                monthlyIncome += amount;
            } else {
                monthlyExpenditure -= amount;
                cardPaymentsCount++;
                cardPaymentsTotal -= amount;
            }
        }
        
        balance += monthlyIncome - monthlyExpenditure - feePerMonth;
    }
    
    // Check if the fee should be waived
    if (cardPaymentsCount >= 3 && cardPaymentsTotal >= 100) {
        balance += feePerMonth * months.size;
    }
    
    return balance;
}

// Test cases
console.log(solution([100,100,100,-10], ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29'])); // Output: 230
console.log(solution([180,-50,-25,-25], ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31'])); // Output: 25
console.log(solution([1,-1,0,-105,1], ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12'])); // Output: -164
console.log(solution([100,100,-10,-20,-30], ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08'])); // Output: 80
console.log(solution([-60,60,-40,-20], ['2020-10-01', '2020-02-02', '2020-10-10', '2020-10-30'])); // Output: -115
