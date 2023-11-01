function getLetter(s) {
    let letter;
    // Write your code here
    if(["a","e", "i", "o", "u" ].includes(s[0])){
        letter = "A"
    }
    else if(["b", "c", "d", "f", "g"].includes(s[0])){
        letter = "B"
    }
    else if(["h", "j", "k", "l", "m"].includes(s[0])){
        letter = "C"
    }
    else{
        letter = "D"
    }
    
    return letter;
}