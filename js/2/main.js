let str = prompt("enter yot word :");

function compare(str){
    var newStr = "";
    for (let i = str.length -1 ;i >=0;i--){
        newStr = newStr + str[i];
    }
    if(newStr === str){
        return true;
    }
    else{
        return false;
    }
}

console.log(compare(str));