function countTheWords(input) {
    const word = input[0];
    let countWords = 1;
    for (let index = 0; index < word.length; index++) {
        if (word[index] === " ") {
            countWords++;
        }
        
    }
    if (countWords > 10) {
        console.log(`The message is too long to be send! Has ${countWords} words.`)
    }
    else {
        console.log(`The message was sent successfully!`);
    }
}
countTheWords(["This message has exactly eleven words. One more as it's allowed!"]);
countTheWords(["This message has ten words and you can send it!"]);

