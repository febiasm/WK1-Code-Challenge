// gets vehicle speed 
let speed =0;
// stores number of demerits
let demerit;

// checks if speed is less than or equal to 70 returns ok
if ( speed <=70){
    
    console.log('Ok');

    
}
// checks if speed is greater than 70 but not more than 75 adds one demerit point
else if (speed <=75){
    demerit = 1
    console.log(`demerit: ${demerit}`);


}
// checks if speed is greater than 75 but not more than 80 adds two demerit points
else if (speed <=80){
    demerit =2
    console.log(`demerit: ${demerit}`);

}
// checks if speed is greater than 80 but not more than 85 adds three demerit points
else if (speed <=85){
    demerit =3
    console.log(`demerit: ${demerit}`);

}
// checks if speed is greater than 85 but not more than 90 adds four demerit points
else if (speed <=90){
    demerit =4
    console.log(`demerit: ${demerit}`);
}

// checks if speed is greater than 90 but not more than 95 adds five demerit points
else if (speed <=95){
    demerit =5
    console.log(`demerit: ${demerit}`);
}
// checks if speed is greater than 95 but not more than 100 adds six demerit points
else if (speed <=100){
    demerit =6
    console.log(`demerit: ${demerit}`);
}
// checks if speed is greater than 100 but not more than 105 adds seven demerit points
else if (speed <=105){
    demerit =7
    console.log(`demerit: ${demerit}`);
}
//checks if speed is greater than 105 but not more than 110 adds eight demerit points
else if (speed <=110){
    demerit =8
    console.log(`demerit: ${demerit}`);
}
// checks if speed is greater than 110 but not more than 115 adds nine demerit points
else if (speed <=115){
    demerit =9
    console.log(`demerit: ${demerit}`);
}
//checks if speed is greater than 115 but not more than 120 adds ten demerit points
else if (speed <=120){
    demerit =10
    console.log(`demerit: ${demerit}`);
}
// checks if speed is greater than 120 but not more than 125 adds ten demerit points
else if (speed <=125){
    demerit =11
    console.log(`demerit: ${demerit}`);}



else {
    console.log('License suspended');

    // checks if speed is greater than 125, demerits equal to 12 points suspends drivers license 
}

