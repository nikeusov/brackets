  
module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let elem of bracketsConfig) 
  {
    arr.push(elem.join(''))
  }
  
  for (let i = 0; i < arr.length; i++) 
  {
    if (str.includes(arr[i])) 
    {
      str = str.replace(arr[i], '');
      i =- 1
    }
  }
 return str.length === 0;
}