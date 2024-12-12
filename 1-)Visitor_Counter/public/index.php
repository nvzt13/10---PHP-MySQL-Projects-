<?php include '../src/connect.php'; ?>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <title>Visiyor Counter</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
<div class="container">
  <div class="counter-wrapper">
    <h2>Website Counter</h2>
  <p class="text-center fs-5" id="counter"><?php include "../src/count.php" ?></p>
  <button id="silButton" type="button" class="btn btn-lg btn-primary my-5" >Reset</button>
  </div>
</div>

    <script src="./assets/javascript/app.js"></script>
</body>
</html>