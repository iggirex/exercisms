class Transcriptor {
  toRna(input) {
    var newString = ""
    var Arr = []
    for (var i =0; i <input.length; i++) {
      if(input.length===1){
      if(input[i]=== "C") {
        return("G")
      } else if(input[i] === "G") {
        return("C")
      } else if(input[i] === "A") {
        return("U")
      } else if(input[i] === "T") {
        return("A")
        }
      } else {
        if(input[i]=== "C") {
          Arr.push("G")
        } else if(input[i] === "G") {
          Arr.push("C")
        } else if(input[i] === "A") {
          Arr.push("U")
        } else if(input[i] === "T") {
          Arr.push("A")
          }
      }
    }
    newString = Arr.join("")
    return newString
  }
}
module.exports = Transcriptor;
