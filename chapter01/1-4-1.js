const button = document.getElementById("calc");

function calcBMI() {
  // 本ではvarになっているが、再代入が必要でなければconstが推奨されるので変更する
  const inputWeight = document.getElementById("weight");
  const inputHeight = document.getElementById("height");

  // BMI = 身長 / 体重の二乗
  const bmiResult = inputWeight / (inputHeight * inputHeight);

  // 結果の表示
  document.getElementById(
    "result"
  ).textContent = `あなたのBMIは${bmiResult}です。`;
}

button.addEventListener("click", calcBMI);
