const aElement = document.getElementById('A')
const bElement = document.getElementById('B')
const cElement = document.getElementById('C')

const $aElement = $("#A")
const $bElement = $("#B")
const $cElement = $("#C")

function add2() {
  const aValue = parseInt(aElement.value)
  const bValue = parseInt(bElement.value)
  const cValue = aValue + bValue

  cElement.value = cValue
}
function sub2() {
  const aValue = parseInt(aElement.value)
  const bValue = parseInt(bElement.value)
  const cValue = aValue - bValue

  cElement.value = cValue

}

function add3() {
  const a = parseInt($aElement.val())
  const b = parseInt($bElement.val())
  $cElement.val(a + b)
}

function sub3() {

}
const $addBtn = $("#addBtn")
const $subBtn = $("#subtractBtn")
const $multBtn = $("#multiplyBtn")

$addBtn.click(add3)
$subBtn.click(sub3)

function helloBtn() {
  alert('hello world')
}