// canvas要素を参照する
const canvas = document.getElementById("canvas");
// Canvasの絵筆の状態＝コンテキストというらしい。MDNでもctxと定義しているので真似する
const ctx = canvas.getContext("2d");

// 線のスタイルを描く
ctx.strokeStyle = "#ff0000";
ctx.fillStyle = "#00ff00";
ctx.lineWidth = 5;

// 線を引く
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 150);
ctx.stroke();

// 四角を描く
ctx.fillRect(100, 200, 200, 100);
ctx.strokeRect(100, 200, 200, 100);
