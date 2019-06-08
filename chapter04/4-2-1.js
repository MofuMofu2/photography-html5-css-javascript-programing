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

// 別の図形を作る
ctx.beginPath();
ctx.strokeStyle = "#ff00ff";
ctx.moveTo(300, 100);
// 短い辺を1本描く
ctx.lineTo(350, 50);
// 長い辺を1本描く
ctx.lineTo(400, 100);
// 辺を閉じる
ctx.closePath();
// 描画する
ctx.stroke();
