// storesstudent marks
var max =window.prompt("Enter Max");
// stores the students grade
let grade;

 // accounts for grade input greater than 100
if (max >=101){ 
 grade= "invalid input"
 console.log(grade);

}
// accounts for max greater than or equal to 80 shows A as students grade
else if (max >=80){

grade = 'A'
console.log(grade);

}
// accounts for max greater than or equal to 60 shows B as students grade
else if ( max >=60 ){
  
   grade='B';
   console.log(grade);
   
}
 //accounts for max greater than or equal to 49 shows C as students grade
else if (max >=49) {
   
    grade = 'C'
    console.log(grade);
   
}
// accounts for max greater than or equal to 40 shows D as students grade
else if (max >=40 ){
    
    grade = 'D'
    console.log(grade);
    
}
 // accounts for max less than 40 shows E as students grade
else {  
 
    grade = 'E'
    console.log(grade);
   
}

