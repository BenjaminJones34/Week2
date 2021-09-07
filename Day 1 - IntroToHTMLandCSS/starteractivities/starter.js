function reversing(str) {
    let returnString = ""
    for (let i = str.length - 1; i > -1; i--) {
        returnString += str[i]
    } return returnString
}


// can use console.log(str.split("").reverse().join())
console.log(reversing("Yes yes, this works just fine thank you"))