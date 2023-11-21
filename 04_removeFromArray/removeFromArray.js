const removeFromArray = function(arr,...num) {
    const baru= [];
    for(let value of arr){
        if(num.includes(value))continue;
        baru.push(value);
    }
    return baru;
};

// Do not edit below this line
module.exports = removeFromArray;
