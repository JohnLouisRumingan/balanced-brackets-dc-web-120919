function isBalanced (string) {

    //create a process inside here that will return false, otherwise true

    //returns false for obvious edge cases where a string cannot possibly be balanced
    if(string.length % 2 === 1){
        return false 
    }

    let isOpenParenthesis = 0;
    let isOpenBracket = 0;
    let isOpenCurly = 0;

    for (let i=0; i<string.length-1; i++){
        
        if(string[i]===")"){
          isOpenParenthesis -= 1;
          if(isOpenParenthesis < 0){
            return false
          }
        }
        else if(string[i]==="]"){
          isOpenBracket -= 1;
          if(isOpenBracket < 0 ){
            return false
          }
        }
        else if(string[i]==="}"){
          isOpenCurly -= 1;
          if(isOpenCurly < 0){
            return false
          }
        }

        if(string[i]==="("){
            isOpenParenthesis += 1;
        }
        else if(string[i]==="["){
            isOpenBracket += 1;
        }
        else if(string[i]==="{"){
            isOpenCurly += 1 ;
        }
        
    }

    return true  
}

