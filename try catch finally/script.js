function reverseString(s) {
    try {
        let result = s.split("").reverse().join("");
        console.log(result);
    }
    catch{
        console.log("s.split is not a function");
        console.log(s);
    }
}
