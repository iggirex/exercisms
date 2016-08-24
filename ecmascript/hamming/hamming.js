var counter = 0
class Hamming  {
  compute(inputA, inputB) {
    if(inputA.length !== inputB.length){
      throw new Error("DNA strands must be of equal length.")
    }
    var counter = 0
    for (var i=0; i<inputA.length; i++){
    	if(inputA[i] !== inputB[i]){
    		counter++
    	}
     }
    //  console.log("\n"+counter)
        return(counter)
  }
}

module.exports = Hamming;
