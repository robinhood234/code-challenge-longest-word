function longestWord(str){

  let words = str.split(" ");
  let longestWord = "";

  for(let word of words){
      if (word.length > longestWord.length){
        longestWord = word

      };
      console.log(longestWord)
  }

return longestWord
}


console.log(longestWord('this is a very long word'));
console.log(longestWord('the creature is the largest word in this text'))




