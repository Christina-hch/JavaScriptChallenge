// break into separated functions!!
//variable is different in or out of for loop

function changeOptions(inputMoney, coins){
    let all = getOptions(inputMoney, coins);
    let objs= all.map(list=>listToObj(list,coins));
    let newList = [];
    for(let item of objs){
        if (newList.every(li=>!isEqual(li,item))){
            newList.push(item);
        }
    }
    return newList.length;
}

function getOptions(inputMoney, coins, cur=[],all=[]){
    if(inputMoney<=0) return 0;
    for(let i of coins){
        let temp = cur.slice(0);
        if(inputMoney>i){
            temp.push(i);
            getOptions(inputMoney-i,coins,temp,all);
        }
        if(inputMoney===i){
            temp.push(i);
            all.push(temp);
            continue;
        }
    }
    return all;  
}
  const isEqual=(obj1,obj2)=>{
    if(Object.keys(obj1).length!=Object.keys(obj2).length)
        return false;
    for(let key of Object.keys(obj1)){
        if(obj1[key]!==obj2[key]){
            return false;
        }
    }
    return true;
  }
  const listToObj=(list,coins)=>{
    let map={}
    coins.forEach(element => {
        map[element]=list.filter(li=>li==element).length;
    });
    return map;
  };

  console.log(changeOptions(5, [1, 2, 5, 10, 100]));
  
  // Leave this here so we can test your code
  module.exports = changeOptions;