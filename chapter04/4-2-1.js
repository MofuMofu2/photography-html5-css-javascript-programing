// canvas要素を参照する
const canvas = document.getElementById("canvas");
// Canvasの絵筆の状態＝コンテキストというらしい。MDNでもctxと定義しているので真似する
const ctx = canvas.getContext("2d");

// 線のスタイルを描く
ctx.strokeStyle = "#ff0000";
ctx.fillStyle = "#00ff00";
ctx.lineWidth = 5;

// 線を引くという宣言
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(150, 50);
ctx.lineTo(200, 100);
ctx.stroke();
