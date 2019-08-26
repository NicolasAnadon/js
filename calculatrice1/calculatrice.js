function myFunction() {
  var x,y,z,oper;
  x=prompt("1er nombre");
  y=prompt("2eme nombre");
  oper=prompt("operateur");
  
  if(oper=="+"){
    z=Number(x)+Number(y);
  }
  if(oper=="/"){
    z=Number(x)/Number(y);
  }
  if(oper=="*"){
    z=Number(x)*Number(y);
  }
  if(oper=="-"){
    z=Number(x)-Number(y);
  }
  
 else if(oper==!null){
    z="erreur"
  }
  else if(x==!null){
    z="erreur"
  }
  else if(y==!null){
    z="erreur"
  }
  
  return(z);
    }
document.getElementById("demo").innerHTML =myFunction();



