// storesstudent marks
function submit () { 
    
    
    let max = parseInt(document.getElementById("marks").value)
    

// stores the students grade


 // accounts for grade input greater than 100
if (max >=101){ 
    document.getElementById("grade").innerHTML = 'invalid input'
 

}
// accounts for max greater than or equal to 80 shows A as students grade
else if (max >=80){
    document.getElementById("grade").innerHTML ='A'

}
// accounts for max greater than or equal to 60 shows B as students grade
else if ( max >=60 ){
  
    document.getElementById("grade").innerHTML ='B'
   
}
 //accounts for max greater than or equal to 49 shows C as students grade
else if (max >=49) {
   
    document.getElementById("grade").innerHTML ='C'
   
}
// accounts for max greater than or equal to 40 shows D as students grade
else if (max >=40 ){
    
    document.getElementById("grade").innerHTML ='D'
    
}
 // accounts for max less than 40 shows E as students grade
else {  
 
    document.getElementById("grade").innerHTML ='E'
}
}