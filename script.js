const screenBottom = document.getElementById("screenBottom");
const screenTop = document.getElementById("screenTop");

const equalButton = document.getElementById("equal");
const decimalButton = document.getElementById("decimal");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const signButton = document.getElementById("sign");

// Numbers that are already part of a solved equation
var topNums = ''
// Numbers that are currently being selected
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
    // Check if an operator has already been selected
    if (['+','-','*','÷'].includes(topNums[topNums.length - 1]) && screenBottom.innerHTML != ''){
        return operate()
  } else if (screenBottom.innerHTML != ''){
        bottomNums = screenBottom.innerHTML
        screenBottom.innerHTML = ''
        screenTop.innerHTML = bottomNums +' '+ operator
        topNums = screenTop.innerHTML
        bottomNums = ''
    }

}

[...document.querySelectorAll('.operatorButton')].forEach(function(item) {
  item.addEventListener('click', function() {
    checkOperation(item.innerHTML)
        });
         });
  
 
clearButton.addEventListener('click',clearData)

function clearData(){
  screenBottom.innerHTML = ''
  bottomNums = ''
  topNums = ''
  screenTop.innerHTML = ''
}
  
decimalButton.addEventListener('click',addDecimal)

function addDecimal(){
  if (!bottomNums.includes(".")){
    bottomNums = bottomNums + '.'
    screenBottom.innerHTML = bottomNums
  }
}

backspaceButton.addEventListener('click',removeNumber)

function removeNumber(){
  bottomNums = bottomNums.slice(0, -1) 
  screenBottom.innerHTML = bottomNums
}

signButton.addEventListener('click',changeSign)

function changeSign(){
  if (bottomNums[0] == '-'){
  bottomNums = bottomNums.substring(1)
  screenBottom.innerHTML = bottomNums
  } else{
    bottomNums = '-'+ bottomNums 
    screenBottom.innerHTML = bottomNums
  }

}

equalButton.addEventListener('click',operate)

function operate(){
  // Check to see if a new operator has been selected
    var operator = topNums[topNums.length - 1]
    if (['+','-','*','÷'].includes(operator) && bottomNums != ''){

      var num1 = topNums.substring(0,topNums.length - 1)
      var num2 = screenBottom.innerHTML
      screenTop.innerHTML += ` ${num2} =`
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
          case '*':
            var num3 = num1 * num2
            break;
          case '÷':
            // Cannot divide by zero
              if (num2 == 0){
                screenBottom.innerHTML = ''
                bottomNums = ''
                topNums = ''
                screenTop.innerHTML = ''
                return alert('Sorry, but I will not allow that')
              }else{
                var num3 = num1 / num2
              }
              break;
          default:
              // pass
        }
      // Properly round off if num3 is a long decimal
      num3 = Math.round((num3 + Number.EPSILON) * 100) / 100
      screenBottom.innerHTML = num3
      }
 }

// keyboard shortcuts
window.onkeydown = function(e){
  if (e.key >= 0 && e.key <=9){
    var number = e.key.toString()
    addNumber(number)
  }else if (['+','-','*','÷'].includes(e.key)){
    return checkOperation(e.key)
  }else if (e.key == 'Enter'){
    return operate()
  }
  else if (e.key == '.'){
    return addDecimal()
  }
  else if (e.key == 'Backspace'){
    return removeNumber()
  }else if (e.key == 'a'){
     return clearData()
  }
  
}
