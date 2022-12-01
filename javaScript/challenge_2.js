// gets vehicle speed 
function submit() {
   
    let speed = parseInt(document.getElementById("Speed").value)
    
  
  
  // stores number of demerits
  let demerit;
  
  // checks if speed is less than or equal to 70 returns ok
  if ( speed <=70){
      document.getElementById("output").innerHTML = 'OK'
      
  
      
  }
  // checks if speed is greater than 70 but not more than 75 adds one demerit point
  else if (speed <=75){
      demerit = 1
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
      
  
  
  }
  // checks if speed is greater than 75 but not more than 80 adds two demerit points
  else if (speed <=80){
      demerit =2
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  
  }
  // checks if speed is greater than 80 but not more than 85 adds three demerit points
  else if (speed <=85){
      demerit =3
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  
  }
  // checks if speed is greater than 85 but not more than 90 adds four demerit points
  else if (speed <=90){
      demerit =4
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  }
  
  // checks if speed is greater than 90 but not more than 95 adds five demerit points
  else if (speed <=95){
      demerit =5
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  }
  // checks if speed is greater than 95 but not more than 100 adds six demerit points
  else if (speed <=100){
      demerit =6
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  }
  // checks if speed is greater than 100 but not more than 105 adds seven demerit points
  else if (speed <=105){
      demerit =7
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  }
  //checks if speed is greater than 105 but not more than 110 adds eight demerit points
  else if (speed <=110){
      demerit =8
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  }
  // checks if speed is greater than 110 but not more than 115 adds nine demerit points
  else if (speed <=115){
      demerit =9
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  }
  //checks if speed is greater than 115 but not more than 120 adds ten demerit points
  else if (speed <=120){
      demerit =10
     document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  }
  // checks if speed is greater than 120 but not more than 125 adds ten demerit points
  else if (speed <=125){
      demerit =11
      document.getElementById("output").innerHTML =(`Demerit: ${demerit}`);
  
  }
  // deals with speeds greater than 350
  else if (speed >350 ){
      document.getElementById("output").innerHTML =("Enter valid input");
  }
 
      // checks if speed is greater than 125, demerits equal to 12 points suspends drivers license 
  
  else {
      document.getElementById("output").innerHTML =("License suspended");
      
  }
  }
  