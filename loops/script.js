function vowelsAndConsonants(s) {
    let vowel = ["a", "e", "i", "o", "u"];
    let conconant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    for(let i = 0; i < s.length; i++){
        if(vowel.includes(s[i])){
            console.log(s[i]);
        }
    }
    for(let i = 0; i < s.length; i++){
        if(conconant.includes(s[i])){
            console.log(s[i]);
        }
    }
    
}