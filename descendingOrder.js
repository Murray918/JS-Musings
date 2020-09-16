
function descendingOrder(number) {
    return parseInt(
      number 
        .toString()
        .split("") 
        .sort()
        .reverse() 
        .join(""),
      10
    );
  }
  
  descendingOrder(1234567); //?
  