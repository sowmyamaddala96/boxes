const totalAmountText = document.getElementById('total-amount')

const radioOne = document.getElementById('radio1')
const radioTwo = document.getElementById('radio2')
const radioThree = document.getElementById('radio3')

const boxOne = document.getElementById('box1')
const boxTwo = document.getElementById('box2')
const boxThree = document.getElementById('box3')

const priceOne = document.getElementById('price1')
const priceTwo = document.getElementById('price2')
const priceThree = document.getElementById('price3')

const boxOneContent = document.getElementById('box1-content')
const boxTwoContent = document.getElementById('box2-content')
const boxThreeContent = document.getElementById('box3-content')

function commonFunctionToApplyStyles(price, boxA, boxB, boxC, radioA, radioB, radioC, boxAContent, boxBContent, boxCContent) {
    totalAmountText.textContent = price.textContent
    boxA.classList.add('selected-box')
    boxB.classList.remove('selected-box')
    boxC.classList.remove('selected-box')

    radioA.checked = true
    radioB.checked = false
    radioC.checked = false

    boxAContent.style.display = 'block'
    boxBContent.style.display = 'none'
    boxCContent.style.display = 'none'
}

function onClickBoxOne() {
    commonFunctionToApplyStyles(priceOne, boxOne, boxTwo, boxThree, radioOne, radioTwo, radioThree, boxOneContent, boxTwoContent, boxThreeContent)
}

function onClickBoxTwo() {
    commonFunctionToApplyStyles(priceTwo, boxTwo, boxOne, boxThree, radioTwo, radioOne, radioThree, boxTwoContent, boxOneContent, boxThreeContent)
}

function onClickBoxThree() {
    commonFunctionToApplyStyles(priceThree, boxThree, boxTwo, boxOne, radioThree, radioTwo, radioOne, boxThreeContent, boxTwoContent, boxOneContent)
}
