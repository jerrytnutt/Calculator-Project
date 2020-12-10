
const screenBottom = document.getElementById("screenBottom");
const screenTop = document.getElementById("screenTop");

const equalButton = document.getElementById("equal");
const decimalButton = document.getElementById("decimal");
const backspaceButton = document.getElementById("backspace");


var topNums = ''
var bottomNums = ''



function addNumber(num){
    screenBottom.innerHTML += num
    bottomNums = screenBottom.innerHTML
    
}

[...document.querySelectorAll('.numButton')].forEach(function(item) {
  item.addEventListener('click', function() {
    addNumber(item.innerHTML)
     });
      });





function checkOperation(operator){
    if (['+','x','/','-'].includes(topNums[topNums.length - 1]) && screenBottom.innerHTML != ''){
        return operate()
        
        
    } else if (screenBottom.innerHTML != ''){
        bottomNums = screenBottom.innerHTML
        screenBottom.innerHTML = ''
        screenTop.innerHTML = bottomNums + operator
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
  if (bottomNums.includes(".")){
    //pass

  }else{
  bottomNums = bottomNums + '.'
  screenBottom.innerHTML = bottomNums
  }
}


backspaceButton.addEventListener('click',removeNumber)
function removeNumber(){
  bottomNums = bottomNums.slice(0, -1) 
  screenBottom.innerHTML = bottomNums
}


equalButton.addEventListener('click',operate)

function operate(){
  // Check to see if a new operator has been selected
    var operator = topNums[topNums.length - 1]
    if (operator == '=' && screenBottom.innerHTML !=''){
     // pass
    }else{

    var num1 = topNums.substring(0,topNums.length - 1)
    var num2 = screenBottom.innerHTML
    screenTop.innerHTML += (num2 + '=')
    num1 =  parseFloat(num1)
    num2 =  parseFloat(num2)
    topNums = screenTop.innerHTML
    switch(operator) {
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
            //pass
        
      }
      // Properly round off if num3 is a long decimal
      num3 = Math.round((num3 + Number.EPSILON) * 100) / 100
    screenBottom.innerHTML = num3
    }
 
      
}
