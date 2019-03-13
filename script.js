let total = 0;
let c = 0;


function dis(val) 
         { 
             
            var grade = document.getElementById("result").value = val;
            let txt = grade;

            //INPUT MORE THAN ONE LETTER
            if (c == 0){
                var grade_display = document.getElementById("fresult").value += "(" + val + ")";

                document.getElementById("result").value = "(" + txt + ")";
                console.log(++c);
             } else {
                document.getElementById("result").value = "+(" + txt + ")+";
                var grade_display = document.getElementById("fresult").value += "+(" + val + ")";

               
                console.log(++c);
             }

             //GRADE EQUIVALENT IN ACCORDANCE TO UNITS
             switch (txt)
             {
                 case "A":
                     total += 4 * 3;
                     break;
                 case "B+":
                     total += 3.5 * 3;
                     break;
                 case "B":
                     total += 3 * 3;
                     break;
                 case "C+":
                     total += 2.5 * 3;
                     break;
                 case "C":
                     total += 2 * 3;
                     break;
                 case "D":
                     total += 1 * 3;
                     break;
                 case "F/FD":
                     total += 0 * 3;
                     break;
                 default:
                     break;
             }

         } 
           
         //function that evaluates the digit and return result 
function solve() 
         { 
            var res =  total + "/" + (c * 3) + " = " ;
           
             var roff = Math.round((total / (c * 3)) * 100) / 100
             

            document.getElementById("result1").value = res+ " "+parseFloat(roff);

         
         } 
           
         //function that clear the display 
function clr() 
         { 
             document.getElementById("result").value = ""
             document.getElementById("result1").value = "0.0"
             document.getElementById("fresult").value = ""
             c = 0;
             total = 0;
         }
