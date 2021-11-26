 var resultbox=$("#headbox");
 
 function insert(a){
     var beforinsert=resultbox.val();

  resultbox.val(beforinsert+a);
 }

 function clearbox(){

    resultbox.val("");
 }

 function result(){

  



    var final= eval(resultbox.val());

    resultbox.val(final);
 }

 function deletbox(){

    var present=resultbox.val();

    if(present!=''){

        resultbox.val(present.slice(0,-1));
    }
 }