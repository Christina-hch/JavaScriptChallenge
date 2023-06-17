function maxProfitDays(stockPrices) {
    const profit = [];
    for(let buy = 0;buy<stockPrices.length;buy++){
        for(let sell = buy+1; sell<stockPrices.length;sell++){
            if(stockPrices[sell]-stockPrices[buy]<=0){
                continue;
            }
            profit.push({'buy':buy,'sell':sell,'profit':stockPrices[sell]-stockPrices[buy]})
        }
    }
    const max = profit.sort((a,b)=>b.profit-a.profit)[0];
    return [max.buy,max.sell];
}

const stockPrices = [17, 11, 60, 25, 150, 75, 31, 120];
console.log(maxProfitDays(stockPrices));