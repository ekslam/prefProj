

let sum = 0;
let x = 0;


function dis(val) 
         { 
             
            var finalGrade = document.getElementById("result").value = val;
            let displayLetter = finalGrade;

            //INPUT MORE THAN ONE LETTER
            if (x == 0){
                var finalGrade_display = document.getElementById("fresult").value += "(" + val + ")";

                document.getElementById("result").value = "(" + displayLetter + ")";
                console.log(++x);
             } else {
                document.getElementById("result").value = "+(" + displayLetter + ")+";
                var finalGrade_display = document.getElementById("fresult").value += "+(" + val + ")";

               
                console.log(++x);
             }

             //GRADE EQUIVALENT IN ACCORDANCE TO UNITS
             switch (displayLetter)
             {
                 case "A":
                     sum += 4 * 3;
                     break;
                 case "B+":
                     sum += 3.5 * 3;
                     break;
                 case "B":
                     sum += 3 * 3;
                     break;
                 case "C+":
                     sum += 2.5 * 3;
                     break;
                 case "C":
                     sum += 2 * 3;
                     break;
                 case "D":
                     sum += 1 * 3;
                     break;
                 case "F/FD":
                     sum += 0 * 3;
                     break;
                 default:
                     break;
             }

         } 
           
         //function that evaluates the digit and return result 
function solve() 
         { 
            var res =  sum + "/" + (x * 3) + " = " ;
           
             var roff = Math.round((sum / (x * 3)) * 100) / 100
             

            document.getElementById("result1").value = res+ " "+parseFloat(roff);

         
         } 
           
         //function that clear the display 
function clr() 
         { 
             document.getElementById("result").value = ""
             document.getElementById("result1").value = "0.0"
             document.getElementById("fresult").value = ""
             c = 0;
             sum = 0;
         }
