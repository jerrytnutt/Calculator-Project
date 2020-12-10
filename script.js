
const screenBottom = document.getElementById("screenBottom");
const screenTop = document.getElementById("screenTop");

const equalButton = document.getElementById("equal");
const decimalButton = document.getElementById("decimal");


var topNums = ''
var bottomNums = ''



function addNumber(num){
    screenBottom.innerHTML += num
    
    
}

[...document.querySelectorAll('.numButton')].forEach(function(item) {
  item.addEventListener('click', function() {
    addNumber(item.innerHTML)
     });
      });





function checkOperation(operand){
    if (['+','x','/','-'].includes(topNums[topNums.length - 1]) && screenBottom.innerHTML != ''){
        return equateNums()
        
        
    } else if (screenBottom.innerHTML != ''){
        bottomNums = screenBottom.innerHTML
        screenBottom.innerHTML = ''
        screenTop.innerHTML = bottomNums + operand
        topNums = screenTop.innerHTML
    }

}

[...document.querySelectorAll('.operatorButton')].forEach(function(item) {
  item.addEventListener('click', function() {
    checkOperation(item.innerHTML)
        });
         });
  
 




[...document.querySelectorAll('.clear')].forEach(function(item) {
  item.addEventListener('click', function() {
    if (item.innerHTML == 'AC'){
      screenBottom.innerHTML = ''
      bottomNums = ''
      topNums = ''
      screenTop.innerHTML = ''

    }else if ((item.innerHTML == 'C'))
    screenBottom.innerHTML = ''
    bottomNums = ''
    
        });
         });
  
         
decimalButton.addEventListener('click',addDecimal)
function addDecimal(){
  bottomNums = screenBottom.innerHTML
  bottomNums = bottomNums + '.'
  screenBottom.innerHTML = bottomNums
  //console.log(bottomNums + 5)
}

equalButton.addEventListener('click',equateNums)
function equateNums(){
    var operand = topNums[topNums.length - 1]
    if (operand == '=' && screenBottom.innerHTML !=''){
      console.log(77)
    }else{

    
    var num1 = topNums.substring(0,topNums.length - 1)
    var num2 = screenBottom.innerHTML
    screenTop.innerHTML += (num2 + '=')
    num1 =  parseFloat(num1)
    num2 =  parseFloat(num2)
    topNums = screenTop.innerHTML
    switch(operand) {
        case '+':
            var num3 = num1 + num2
          break;
        case '-':
          var num3 = num1 - num2
          
          break;
        case 'x':
          var num3 = num1 * num2
          
            
        break;
          case '/':
            var num3 = num1 / num2
           
          
          break;
        default:
            console.log(7)
        
      }
    screenBottom.innerHTML = num3
    }
 
      
}
