let CheckDivisible = function(divisibleNumber){
        if (typeof divisibleNumber === "number"){
            //new array
            let _arrdata = [];

            for(let i = 1; i <= divisibleNumber; i++){
                if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !==0 ){
                    _arrdata.push(i);
            }

            if (i % 2 == 0){
                divisibleNumber.push("yu");
                if(i % 5 == 0){
                    divisibleNumber[divisibleNumber.length - 1] = "yo-oh"
                }
                if (i % 3 == 0){
                    divisibleNumber[divisibleNumber.length - 1] = "yu-gi";
                    if(i % 5 == 0 ){
                        divisibleNumber[divisibleNumber.length - 1] ="yu-gi-oh"
                    }
                }
            }

            if (i % 2 == 0 && i % 3 == 0){
                    if (i % 3 == 0){
                        divisibleNumber.push("gi");
                        if (i % 5 == 0){
                            divisibleNumber[divisibleNumber.length - 1] = "gi-oh";
                        
                    }
                }
            }

            if (i % 2 == 0 && i % 5 == 0){
                
            }

        }
    }
}