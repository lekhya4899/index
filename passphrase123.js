let isValidPassphrase = (text) => {
    let words = text.split(" ");
    let minimumFourWords = ( ( words.length) >= 4);
    let minimumTwoCharsEach = words.every(word => word.length >= 2);
    let conditionsSatisfied = (minimumFourWords) && (minimumTwoCharsEach);
    return conditionsSatisfied;
   }
   console.log(isValidPassphrase("AICTE"))
   console.log(isValidPassphrase("sai krishna is playing the cricket"));
   
   module.exports = isValidPassphrase;