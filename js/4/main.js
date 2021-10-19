let arr = [10, [25, 13], [14, [55]], 2];

function flatten(input) {
   const stack = [...input];
   const res = [];
   while(stack.length) {
    
     const next = stack.pop();
     if(Array.isArray(next)) {
      
       stack.push(...next);
     } else {
       res.push(next);
     }
   }
   
   return res.reverse();
 }

 console.log(flatten(arr)); ;