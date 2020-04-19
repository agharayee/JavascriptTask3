let CheckDivisible = function(divisibleNumber){
        if (typeof divisibleNumber === "number"){
            //new array
            let _arrdata = [];

            for(let i = 1; i <= divisibleNumber; i++){
                if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !==0 ){
                    _arrdata.push(i);
            }



            if (i % 2 == 0){
                _arrdata.push("yu");
                if(i % 5 == 0){
                    _arrdata[_arrdata.length - 1] = "yu-oh";
                }
                if(i % 3 == 0){
                    _arrdata[_arrdata.length -1] = "yu-gi";
                    if (i % 5 == 0){
                        _arrdata[_arrdata.length -1] = "yu-gi-oh";
                    }
                }
            }



            if (i % 2 == 0 && i % 3 == 0){
            }else{
                if (i % 3 == 0){
                    _arrdata.push("gi");
                if (i % 5 == 0){
                    _arrdata[_arrdata.length - 1] = "go-oh";
                }
            
            }
        }



        if (i % 2 == 0 && i % 5 == 0){
        }else{
            if (i % 3 == 0 && i % 5 == 0){
            }else{
                if(i % 5 == 0){
                    _arrdata.push("oh");
                }
            }
         }
       }

       return _arrdata;
     }
     
}



CheckDivisible(100);

CheckDivisible(26);
