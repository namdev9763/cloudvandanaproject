
const sentence="This is a sunny day";
function reverseWords(sentence) 
{
    let words = sentence.split(' ');
    let reversedWords = words.map(function(word)
     {
      let reversedWord = '';
      for (let i = word.length - 1; i >= 0; i--) 
      {
        reversedWord += word[i];
      }
      return reversedWord;
    }
);
    let reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  console.log( reverseWords(sentence))