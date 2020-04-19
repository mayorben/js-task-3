function divisionNum(num) {
    let values = [];
    let  result;
    for (let j = 1; j <= num; j++) {
      if (j % 2 === 0 && j % 3 === 0 && j % 5 === 0) {
         result = "yu-gi-oh"
      } else if (j % 2 === 0 && j % 3 === 0) {
         result = "yu-gi"
      } else if (j % 2 === 0 && j % 5 === 0) {
         result = "yu-oh"
      } else if (j % 3 === 0 && j % 5 === 0) {
         result = "gi-oh"
      } else if (j % 2 === 0) {
         result = "yu"
      } else if (j % 3 === 0) {
         result = "gi"
      } else if (j % 5 === 0) {
         result = "oh"
      } else {  result = j}
    
     values.push( result);
      
    };
    console.log(values)
  };
  divisionNum(100);
  divisionNum(77);