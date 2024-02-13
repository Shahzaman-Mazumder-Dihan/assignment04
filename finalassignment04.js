function calculateMoney(ticketSale){
    if(ticketSale<0){


       return "Invalid Input";

    }
    else{

        amount=(ticketSale*120)-900;

        return amount;
    }

}



function checkName(name) {

    if(typeof(name)==='string')
    { 
     let last=name.length-1;
        if(name[last]==='a' || name[last]==='y' ||name[last]==='i' ||name[last]==='e' ||name[last]==='o' ||name[last]==='u' ||name[last]==='w'||name[last]==='A' || name[last]==='Y' ||name[last]==='I' ||name[last]==='E' ||name[last]==='O' ||name[last]==='U' ||name[last]==='W' ){
            return 'Good Name';
        }
        else{
            return 'Bad Name';
        }

    }
   else{  
    return "invalid";
 }
 
}




function deleteInvalids(array) {


    if(Array.isArray(array)){
    
        let result=[];

         for(let item of array){
             if(typeof(item)==='number' && !isNaN(item) )
             {
                    result.push(item);           
             }
            }

         return result;

    }
    else{
       return "Invalid input please give an array as input" ;
    }
  

}




function password(obj) {

    if(obj.name != "" && obj.birthYear!="" && obj.siteName!="" && obj.birthYear>=1000)
    {

        console.log(obj.birthYear);
        let pass =obj.siteName.concat('#',obj.name,'@',obj.birthYear);

       return pass;
      
    }

    else{
        return "Invalid input";
    }


    }




    
function monthlySavings(arrayinput,cost){
        if(!Array.isArray(arrayinput) || typeof(cost )!== "number"){
                return "invalid input";
        }
        else{
           let earning = 0;
                   for(let item of arrayinput){
                    if(item>=3000){
                        earning=earning+item*0.8;
                        }
                    else
                    {
                         earning = earning+item;
                    }
                   }
                    const totalsaving = earning-cost;

                    if(isNaN(totalsaving)){

                       return "Wrong input";


                    }
                    else{

                        if(totalsaving<0){
                        return "earn more"
                    }
                    else{
                        return totalsaving;
                        }
                    }

                  



        }
                      
                             
}

