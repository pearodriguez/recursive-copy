function RecursiveCopy(str, n) {
  function Recurse (str, n) {
  if (n === 0) 
    return str + " has been copied";
  else 
    return RecursiveCopy(str, n);
  }
    let string = str;
    return string + Recurse(string, n-1);
}

console.log(RecursiveCopy('Ape', 3))

console.log(RecursiveCopy('Blah', 4))