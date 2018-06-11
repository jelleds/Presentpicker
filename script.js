
$(document).ready(function(){
   
   //de 2 arrays bepalen
    var arr1=["Jelle", "Verbeken", "Lindsay", "Yenthe", "Delphine"];
    var arr2=["Jelle", "Verbeken", "Lindsay", "Yenthe", "Delphine"];

   

    $("#unicorn").on("click", function(){
    
    //variables
        //zorgen dat de personen random uit de lijst worden gehaald   
        var random1=arr1[Math.floor(Math.random() * arr1.length)];
        var random2=arr2[Math.floor(Math.random() * arr2.length)];
        // de indexen van deze personen opvragen
        var index1 = arr1.indexOf(random1);
        var index2 = arr2.indexOf(random2);
        //de 2 personen
        var persoon1=document.getElementById("persoon1");
        var persoon2=document.getElementById("persoon2");
        //de lijst van mensen
        var array1 = document.getElementById("array1");
        var players = document.getElementById("players"); 

    //Begin of FOR loop
        for(var i in arr1){

            if(random1===random2){   
                 
                arr1.splice(index1,0);
                arr2.splice(index2,0);
                                 
            }else{
                if(random1===arr1[i] || random2===arr2[i]){
                    arr1.splice(index1,1);
                    arr2.splice(index2,1);
                    console.log((arr1.length)+1);
                }
            }

        } //End of FOR loop
        

    //Printing the random names on the screen
        persoon1.innerHTML=random1;
        persoon2.innerHTML=random2;

    if(arr1.length===0 || arr2.length===0){
        persoon1.innerHTML="De lijst is leeg";
        persoon2.innerHTML="";
    }
        
    });//End of OnClick function

    //printing the players on the screen
        for(var i in arr1){
            console.log(arr1[i]);
            players.innerHTML+="<h4>"+ arr1[i] + "</h4>";
        }
   

});//End of ready function 