var canvas;
var context;
var isWhite = false;
var winner = ''; 
var step=225;
var chessData = new Array(15);
var W = document.getElementById('white_c');
var B = document.getElementById('black_c');
for (var x = 0; x < 15; x++) {
  chessData[x] = new Array(15);
  for (var y = 0; y < 15; y++) {
    chessData[x][y] = 0;
  }
}

function startLoad() {
  drawRect();
}

function drawRect() {  
 
  canvas = document.getElementById("canvas");  
  context = canvas.getContext("2d");  
  context.fillStyle = '#9e9e9d';  
  context.fillRect(0, 0, 640, 640);  
 
  for (var i = 1; i < 16; i++) {   
    context.beginPath();     
    context.moveTo(40 * i, 40);  
    context.lineTo(40 * i, 600);  
    context.closePath();  
    context.stroke();  
    context.beginPath();  
    context.moveTo(40, 40 * i);  
    context.lineTo(600, 40 * i);  
    context.closePath();  
    context.stroke();
    }

    context.beginPath();
    var circle = {x : 320,y : 320,r : 5};
    context.fillStyle="#000";
    context.arc(circle.x, circle.y, circle.r, 0, Math.PI*2, false);    
    context.fill();  
} 

function drawChess(c, x, y) {
  if (x >= 0 && x < 15 && y >= 0 && y < 15) {
    if (c == W) {
      chess(W, x, y);
      isWin(W, x, y); 
      isWhite = false;
      
    } else {
      chess(B, x, y);
      isWin(B, x, y);
      isWhite = true;
    }
  }
  if(--step==0){
    winner="和局";
    alert(winner);
  }
}

function chess(c, x, y) {
  // context.fillStyle = color;
  context.beginPath();
  // context.arc(x*40+40, y*40+40, 15, 0, Math.PI * 2, true);
  context.drawImage(c, x*40+25, y*40+25);
  context.closePath();
  context.fill();
  if (c == W) {
    console.log("电脑在" + x + "," + y + "画了个白棋");
    chessData[x][y] = 1;
  } else {
    console.log("电脑在" + x + "," + y + "画了个黑棋");
    chessData[x][y] = 2;
  }
}

function play(e) {
  var c;
  var e=e||event;
  var px = e.offsetX - 20;
  var py = e.offsetY - 20;
  var x = parseInt(px / 40);
  var y = parseInt(py / 40);

  if (px < 0 || py < 0 || x > 14 || y > 14 || chessData[x][y] != 0) {
    return;
  }
  doCheck(x, y);
}

function doCheck(x, y) {
  if (winner != '' && winner != null) {
    alert(winner);
    return;
  }
  if (isWhite) {
    c = W;
  } else {
    c = B;
  }
  console.log(c + "落子的位置是：" + x + "," + y);
  drawChess(c, x, y);
}
function isWin(c, x, y) {
  console.log("判断" + c + "(" + x + "," + y + ")是否胜利");
  var temp = 2;
  if (c == W) {
    temp = 1;
  } 
  console.log("temp=" + temp);
  lrCount(temp, x, y);
  tbCount(temp, x, y);
  rtCount(temp, x, y);
  rbCount(temp, x, y);
}

function lrCount(temp, x, y) {
  var line = new Array(4);
  var count = 0;
  for (var i = x; i >= 0; i--) {
    line[0] = i;
    line[1] = y;
    if (chessData[i][y] == temp) {
      ++count;
    } else {
      i = -1;
    }
  }
  for (var i = x; i <= 14; i++) {
    line[2] = i;
    line[3] = y;
    if (chessData[i][y] == temp) {
      ++count;
    } else {
      i = 100;
    }
  }
  success(line[0], line[1], line[2], line[3], temp, --count);
}

function tbCount(temp, x, y) {
  var line = new Array(4);
  var count = 0;
  for (var i = y; i >= 0; i--) {
    line[0] = x;
    line[1] = i;
    if (chessData[x][i] == temp) {
      ++count;
    } else {
      i = -1;
    }
  }
  for (var i = y; i <= 14; i++) {
    line[2] = x;
    line[3] = i;
    if (chessData[x][i] == temp) {
      ++count;
    } else {
      i = 100;
    }
  }
  success(line[0], line[1], line[2], line[3], temp, --count);
}

function rtCount(temp, x, y) {
  var line = new Array(4);
  var count = 0;

  for (var i = x, j = y; i <= 14 && j >= 0;) {
    line[0] = i;
    line[1] = j;
    if (chessData[i][j] == temp) {
      ++count;
    } else {
      i = 100;
    }
    i++;
    j--;
  }
  for (var i = x, j = y; i >= 0 && j <= 14;) {
    line[2] = i;
    line[3] = j;
    if (chessData[i][j] == temp) {
      ++count;
    } else {
      i = -1;
    }
    i--;
    j++;
  }
  success(line[0], line[1], line[2], line[3], temp, --count);
}

function rbCount(temp, x, y) {

  var line = new Array(4);
  var count = 0;

  for (var i = x, j = y; i >= 0 && j >= 0;) {
    line[0] = i;
    line[1] = j;
    if (chessData[i][j] == temp) {
      ++count;
    } else {
      i = -1;
    }
    i--;
    j--;
  }
  for (var i = x, j = y; i <= 14 && j <= 14;) {
    line[2] = i;
    line[3] = j;
    if (chessData[i][j] == temp) {
      ++count;
    } else {
      i = 100;
    }
    i++;
    j++;
  }
  success(line[0], line[1], line[2], line[3], temp, --count);
}

function success(a, b, c, d, temp, count) {
  if (count == 5) {
    console.log("此局游戏结束啦");
    console.log("(" + a + "," + b + ")" + "到" + "(" + c + "," + d + ")");

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#FC0702';
    context.moveTo(40 * a + 40, 40 * b + 40);
    context.lineTo(40 * c + 40, 40 * d + 40);
    context.closePath();
    context.stroke();


    winner = "黑棋胜利!";
    if (temp == 1) {
      winner = "白棋胜利!";
    }

    alert(winner);
  }
}
