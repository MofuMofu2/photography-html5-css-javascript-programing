const button = document.getElementById("calc");

function calcBMI() {
  // 本ではvarになっているが、再代入が必要でなければconstが推奨されるので変更する
  const inputWeight = document.getElementById("weight").value;
  const inputHeight = document.getElementById("height").value;

  // 入力された値を数値に変換する
  const convertWeight = parseInt(inputWeight);
  const convertHeight = parseInt(inputHeight);

  // 数値だったら計算する
  if (!isNaN(convertWeight) && !isNaN(convertHeight)) {
    // BMI = 身長 / 体重の二乗
    const bmiResult = inputWeight / (inputHeight * inputHeight);

    // 結果の表示
    document.getElementById(
      "result"
    ).textContent = `あなたのBMIは${bmiResult}です。`;
  } else {
    document.getElementById("result").textContent = "整数を入力してください。";
  }
}

button.addEventListener("click", calcBMI);
