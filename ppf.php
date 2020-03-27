<?php echo file_get_contents("html/header.html"); ?>
</head>
<link rel="stylesheet" href="css/ppfStyles.css">
<body id="ppf">
<?php echo file_get_contents("html/header2.html"); ?>
<div class="wrapper">
    <div class="container">
      <h2>Production Possibilities Frontier</h2>
      <div class="upper">
        <div class="chart">
          <canvas id="myChart"></canvas>
        </div>
        <div class="explanation">
          <h3 class="explanation-header">Explanation</h3>
          <button onclick="resetChart()"><a>Reset</a></button>
        </div>
      </div>
      <div class="lower">
        <div class="shifts">
          <h3>Shifts</h3>
          <ol>
            <li>
              <div class="button-alignment">
                <div>Quantity/Quantity of resources for both goods: </div>
                <div class="btn-icon">
                  <button class="arrow-up" onclick=""><a class="btn-increase">Increase</a></button>
                  <button class="arrow-down" onclick=""><a class="btn-increase">Decrease</a></button>
                </div>
              </div>
            </li>
            <li>
              <div class="button-alignment">
                <div>Quantity/Quantity of resources for good A: </div>
                <div class="btn-icon">
                  <button class="arrow-up" onclick=""><a class="btn-increase">Increase</a></button>
                  <button class="arrow-down" onclick=""><a class="btn-increase">Decrease</a></button>
                </div>
              </div>
            </li>
            <li>
              <div class="button-alignment">
                <div>Quantity/Quantity of resources for B: </div>
                <div class="btn-icon">
                  <button class="arrow-up" onclick=""><a class="btn-increase">Increase</a></button>
                  <button class="arrow-down" onclick=""><a class="btn-increase">Decrease</a></button>
                </div>
              </div>
            </li>
          </ol>
        </div> <!-- .shifts-->
      </div> <!-- .lower-->
  </div>  <!-- .container-->
</div> <!-- .wrapper-->

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
<script src="ppf.js"></script>
<?php echo file_get_contents("html/footer.html"); ?>
