<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Game</title>
	<meta name=”viewport” content=”width=device-width, initial-scale=1″ />
	<link rel="stylesheet" type="text/css" media="screen and (min-width:960px)" href="../css/game_960px.css">
	<link rel="stylesheet" type="text/css" media="screen and (min-width:960px)" href="../css/common_960px.css">
	<link rel="stylesheet" type="text/css" media="screen and (min-width:1900px)" href="../css/common_1900px.css">
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/common.js"></script>
	
</head>
<body onload="startLoad()">

	<div id="header">
		<div id="banner">
			<img src="../img/banner.png" />
		</div>
		<img src="../img/logo_960px.png" />
		<img id="black_c" src="../img/chess_B.png" style="display: none;" />
		<img id="white_c" src="../img/chess_W.png" style="display: none;" />
	</div>
		
	<div id="nav_box">
		<ul id="nav">
			<li><a href="index.html">主页</a></li> 
			<li><a href="#">个人战绩</a></li> 
			<li><a href="#">游戏大厅</a></li> 
			<li class="current"><a href="gamepage.html">快速游戏</a></li> 
			<li><a href="#">好友</a></li> 
			<li><a href="login.html">登录</a></li>
		</ul> 	
	</div>
	
	<div id="contain">
	<canvas id="canvas" onmousedown="play(event)" width="640" height="640"></canvas>
	</div>
<script type="text/javascript" src="../js/game.js"></script>
	<div id="footer">
		<p>Designed and built by August<p><br/>
		<p>Email:august_ztr@outlook.com</p>
	</div>
</body>
</html>