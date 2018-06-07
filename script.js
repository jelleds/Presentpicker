
$(document).ready(function(){
   
    var arr1=["Jelle", "Verbeken", "Lindsay", "Yenthe", "Delphine"];
    var arr2=["Jelle", "Verbeken", "Lindsay", "Yenthe", "Delphine"];

    $("#unicorn").on("click", function(){
       
        var random1=arr1[Math.floor(Math.random() * arr1.length)];
        var random2=arr2[Math.floor(Math.random() * arr2.length)];
        var index1 = arr1.indexOf(random1);
        var index2 = arr2.indexOf(random2);
        
        
        console.log("Persoon 1: " + random1);
        console.log("index1: " + index1);
        console.log("Persoon 2: " + random2);
        console.log("index2: " + index2);

        
         if(random1===random2){   
             
                arr1.splice(index1,0);
                console.log(arr1);
                arr2.splice(index2,0);
                console.log(arr2);
             
             
            
            }else{
                
                if (random1==="Yenthe" || random2 ==="Yenthe"){
            
                    arr1.splice(index1,1);
                    console.log(arr1);
                    arr2.splice(index2,1);
                    console.log(arr2);

                }else if (random1==="Jelle" || random2 ==="Jelle"){
                
                        arr1.splice(index1,1);
                        console.log(arr1);
                        arr2.splice(index2,1);
                        console.log(arr2);

                }else if (random1==="Delphine" || random2 ==="Delphine"){

                        arr1.splice(index1,1);
                        console.log(arr1);
                        arr2.splice(index2,1);
                        console.log(arr2);

                }else if (random1==="Verbeken" || random2 ==="Verbeken"){ 

                        arr1.splice(index1,1);
                        console.log(arr1);
                        arr2.splice(index2,1);
                        console.log(arr2);

                }else if (random1==="Lindsay" || random2 ==="Verbeken"){

                        arr1.splice(index1,1);
                        console.log(arr1);
                        arr2.splice(index2,1);
                        console.log(arr2);

                }

            if(arr1.length==0 || arr2.length==0){
                    console.log("De lijst is leeg");
                    arr1=[];
                    arr2=[];
            }


                

            } //End of Else statement
        
        
    });//End of On Click function
    
    
});//End of ready function 