
$(document).ready(function(){

 //de 2 arrays bepalen
    var arr1=["Jelle", "Verbeken", "Lindsay", "Yenthe", "Delphine"];
    var arr2=["Jelle", "Verbeken", "Lindsay", "Yenthe", "Delphine"];

    var random1=arr1[Math.floor(Math.random() * arr1.length)];
    var random2=arr2[Math.floor(Math.random() * arr2.length)];

    var index1 = arr1.indexOf(random1);
    var index2 = arr2.indexOf(random2); 
    
    var persoon1=document.getElementById("persoon1");
    var persoon2=document.getElementById("persoon2");

    var players = document.getElementById("players");
    
    function addPlayer(){
        //nieuwe speler
        var newPlayer = document.getElementById("addPlayerInput").value;
        arr1.push(newPlayer);
        arr2.push(newPlayer);

        //voeg geen lege strings toe aan de array
         if (newPlayer === ""){
                arr1.pop();
                arr2.pop();
            }

            console.log(arr1);
    }//end add Player function

    function deletePlayer(){

        var delPlayer=document.getElementById("deletePlayerInput").value;
        var indexDelPlayer= arr1.indexOf(delPlayer);
    
        for(var i in arr1){
            if(delPlayer === arr1[i]){
                delPlayer=arr1[i];
                arr1.splice(indexDelPlayer,1);
                arr2.splice(indexDelPlayer,1);
            }
        } 
    }//end delete function

    function PrintingPlayerList(){
                
        for(var i in arr1){
            players.innerHTML+="<h4>"+ arr1[i] + "</h4>";
        }
    }//end printing list function

    function EmptyTheList(){
            //Begin of FOR loop
            console.log("test");
                for(var i in arr1){
                    console.log("good");

                    if(random1===random2){   
                         
                        arr1.splice(index1,0);
                        arr2.splice(index2,0);
                        console.log("good1");
                                         
                    }else{
                        if(random1===arr1[i] || random2===arr2[i]){
                            arr1.splice(index1,1);
                            arr2.splice(index2,1);
                            console.log("good2");
                        }
                    }

                } //End of FOR loop
    }//end Empty list function

    function PrintingPlayers(){
            //Printing the random names on the screen
                persoon1.innerHTML=random1;
                persoon2.innerHTML=random2;

            if(arr1.length===0 || arr2.length===0){
                persoon1.innerHTML="De lijst is leeg";
                persoon2.innerHTML="";
            }
    }//end printing the players function
    
    //pressing the unicorn
    $("#unicorn").on("click", function(){

        EmptyTheList();  

        PrintingPlayers();    
    });//End of OnClick function

    //adding players
    $("#addPlayerBtn").on("click",function(){
    
    addPlayer();  
    });//end addplayers

    //deleting players
    $("#deletePlayerBtn").on("click",function(){
    
    deletePlayer(); 
    });//end deleting players
   

    //printing the list of players
    PrintingPlayerList();
    


});//End of ready function 








