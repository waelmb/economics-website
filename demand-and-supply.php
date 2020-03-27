<?php echo file_get_contents("html/header.html"); ?>
</head>
<body id="demand-and-supply">
<?php echo file_get_contents("html/header2.html"); ?>
<div class="wrapper">
    <div class="container">
      <h2>Demand and Supply</h2>
      <div class="upper">
        <div class="surplus">
          <p>Surplus</p>
          <ul>
            <li><button onclick="toggleConsumerSurplus()">Consumer Surplus</button></li>
            <li><button onclick="toggleProducerSurplus()">Producer Surplus</button></li>
            <li><button>Dead Weight Lost</button></li>
          </ul>
        </div>
        <div class="chart">
          <canvas id="myChart"></canvas>
          <div id="consumerSurplus"></div>
          <div id="producerSurplus"></div>
        </div>
      </div>
      <div class="explanation">
        <!-- class="btn-icon"  class="btn-reset"-->
          <h3 class="explanation-header">Explanation</h3>
          <button onclick="resetChart(); setDisplayedExpToDefault()"><a>Reset</a></button>
        <p id="default"> In this space, an explanation of the desired shift will appear.</p>
        <p id="incomeError"> Select whether the good is a normal good or an inferior good. </p>
        <!-- Demand -->
        <p id="expIncomeIncNormal">Demand will increase because the good is seen as a luxury, and with more disposable income, a consumer will be able to afford more of the good. An increase in demand causes both equilibrium price and quantity to increase. </p>
        <p id="expIncomedecNormal">Demand will decrease because the consumer has less disposable income to afford the normal good, which is seen as a luxury. A decrease in demand causes both equilibrium price and quantity to decrease. </p>
        <p id="expIncomeIncInferior">Demand will decrease because consumers will begin preferring normal goods as their income rises. A decrease in demand causes both equilibrium price and quantity to decrease.</p>
        <p id="expIncomedecInferior">Demand will increase because the consumer has less disposable income, and therefore must resort to more affordable products. An increase in demand causes both equilibrium price and quantity to increase.</p>
        <p id="expPrefInc">Demand will increase because as a good is seen as more desirable, consumers are more driven to purchase it. An increase in demand causes both equilibrium price and quantity to increase.</p>
        <p id="expPrefDec">Demand will decrease because the good is seen as less desirable, and consequently less of it will be purchased. A decrease in demand causes both equilibrium price and quantity to decrease. </p>
        <p id="expSubInc">Demand will increase because this good is now seen as more affordable in comparison to its competitors. An increase in demand causes both equilibrium price and quantity to increase.</p>
        <p id="expSubDec">Demand will decrease because competing goods are now more affordable in comparison to this good. A decrease in demand causes both equilibrium price and quantity to decrease. </p>
        <p id="expCompInc">Demand will decrease because the complementing goods are necessary for purchase in addition to this good, so the total purchase is less desirable. A decrease in demand causes both equilibrium price and quantity to decrease. </p>
        <p id="expCompDec">Demand will increase because the complementing goods are necessary for purchase in addition to this good, so the total purchase is more desirable. An increase in demand causes both equilibrium price and quantity to increase. </p>
        <p id="expAccessInc">Demand will decrease because the consumer is confident that the good will be available later, so there isn’t a need to purchase the good now. A decrease in demand causes both equilibrium price and quantity to decrease.</p>
        <p id="expAccessDec">Demand will increase because the consumer is not sure if the good will be available in the future, so they need to purchase the good now. An increase in demand causes both equilibrium price and quantity to increase.</p>
        <p id="expFuturePInc">Demand will increase because the good is currently at a lower price than it will be in the future, and the consumer will try to acquire the good while it is still more affordable. An increase in demand causes both equilibrium price and quantity to increase. </p>
        <p id="expFuturePDec">Demand will decrease because the good will be more affordable in the future, so the consumer will hold off on the purchase until they can acquire the lower price. A decrease in demand causes both equilibrium price and quantity to decrease. </p>
        <p id="expFutureQInc">Demand will decrease because a better and improved good will be available in the future, so the consumer will hold off on the purchase to acquire a better quality good later on. A decrease in demand causes both equilibrium price and quantity to decrease</p>
        <p id="expFutureQDec">Demand will increase because the good is currently in its most desirable state. An increase in demand causes both equilibrium price and quantity to increase.</p>
        <p id="expFutureIInc">Demand will increase because the consumer is expecting to have more disposable income in the future, prompting the consumer to go out and purchase goods. An increase in demand causes both equilibrium price and quantity to increase. </p>
        <p id="expFutureIDec">Demand will decrease because the consumer is expecting to have less disposable income in the future, prompting the consumer to hold off on their purchases. A decrease in demand causes both equilibrium price and quantity to decrease. </p>
        <p id="expBuyersInc">Demand will increase because there are now more consumers who are willing to purchase the product. An increase in demand causes both equilibrium price and quantity to increase.</p>
        <p id="expBuyersDec">Demand will decrease because there are now less consumers who are willing to purchase the product. A decrease in demand causes both equilibrium price and quantity to decrease.</p>
        <!-- Supply -->
        <p id="expPInputsInc">Supply will decrease because if the production cost of a good increases, the producers will not be able to make as much of the good. A decrease in supply causes equilibrium quantity to decrease but causes equilibrium price to increase.</p>
        <p id="expPInputsDec">Supply will increase because if the production cost of a good decreases, the producers will be able to make more of the good. An increase in supply causes equilibrium quantity to increase but causes equilibrium price to decrease.</p>
        <p id="expTechInc">Supply will increase because improvements in technology allow producers to make a good more efficiently, allowing them to make more of the good. An increase in supply causes equilibrium quantity to increase but causes equilibrium price to decrease.</p>
        <p id="expTechDec">Supply will decrease because regressions in technology cause producers to make a good less efficiently, forcing them to make less of the good. A decrease in supply causes equilibrium quantity to decrease but causes equilibrium price to increase.</p>
        <p id="expProdInc">Supply will increase because more producers in the market means that there are more firms available to supply the good. An increase in supply causes equilibrium quantity to increase but causes equilibrium price to decrease.</p>
        <p id="expProdDec">Supply will decrease because less producers in the market means that there are less firms available to supply the good. A decrease in supply causes equilibrium quantity to decrease but causes equilibrium price to increase.</p>
        <p id="expSubsidy">Supply will increase because subsidies decrease the production costs of producers, allowing them to supply more of the good. An increase in supply causes equilibrium quantity to increase but causes equilibrium price to decrease.</p>
        <p id="expTax">Supply will decrease because taxes increase the production costs of producers, forcing them to supply less of the good. A decrease in supply causes equilibrium quantity to decrease but causes equilibrium price to increase.</p>
        <!-- Double Shifts -->
        <p id="expBothInc">The new equilibrium price cannot be predicted, but the equilibrium quantity will increase</p>
        <p id="expBothDec">The new equilibrium price cannot be predicted, but the equilibrium quantity will decrease</p>
        <p id="expIncDDecS">The new equilibrium price will increase, but the equilibrium quantity cannot be predicted</p>
        <p id="expDecDIncS">The new equilibrium price will decrease, but the equilibrium quantity cannot be predicted</p>
      </div> <!--  Explanation -->
      <div class="lower">
        <div class="demand">
          <h3>Shifts in Demand</h3>
          <ol>
            <li>
              <div class="button-alignment">
                Income
                <div class="btn-icon">
                  <button class="arrow-up" onclick="incomeIncrease()"><a>Increase</a></button>
                  <button class="arrow-down" onclick="incomeDecrease()"><a>Decrease</a></button>
                </div>
              </div>
              <ul class="align-sublist">
                <li class="button-alignment">Good is
                  <div>
                    <button id="normalGoodButton" onclick="toggleNormalGood()">Normal</button>
                    <button id="inferiorGoodButton" onclick="toggleInferiorGood()">Inferior</button>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div class="button-alignment">
                <div>Tastes and Preferences</div>
                <div class="btn-icon">
                  <button class="arrow-up" onclick="increaseDemandChart(); setDisplayedExpTo('expPrefInc', true, true)"><a class="btn-increase">Increase</a></button>
                  <button class="arrow-down" onclick="decreaseDemandChart(); setDisplayedExpTo('expPrefDec', true, false)"><a class="btn-increase">Decrease</a></button>
                </div>
              </div>
            </li>
            <li>Related Goods:
              <ul class="align-sublist">
                <li>
                  <div class="button-alignment">
                    <div>Price of Substitutes</div>
                    <div class="btn-icon">
                      <button class="arrow-up" onclick="increaseDemandChart(); setDisplayedExpTo('expSubInc', true, true)"><a>Increase</a></button>
                      <button class="arrow-down" onclick="decreaseDemandChart(); setDisplayedExpTo('expSubDec', true, false)"><a>Decrease</a></button>
                    </div>
                  </div>
                </li>
                <li class="button-alignment">Price of Compliments
                  <div class="btn-icon">
                    <button class="arrow-up" onclick="decreaseDemandChart(); setDisplayedExpTo('expCompInc', true, false)"><a>Increase</a></button>
                    <button class="arrow-down" onclick="increaseDemandChart(); setDisplayedExpTo('expCompDec', true, true)"><a>Decrease</a></button>
                  </div>
                </li>
              </ul>
            </li>
            <li>Future Expectations:
              <ul class="align-sublist">
                <li class="button-alignment">
                  Expected access in future
                  <div class="btn-icon">
                    <button class="arrow-up" onclick="decreaseDemandChart(); setDisplayedExpTo('expAccessInc', true, false)"><a>Increase</a></button>
                    <button class="arrow-down" onclick="increaseDemandChart(); setDisplayedExpTo('expAccessDec', true, true)"><a>Decrease</a></button>
                  </div>
                </li>
                <li class="button-alignment">Expected price in future
                  <div class="btn-icon">
                    <button class="arrow-up" onclick="increaseDemandChart(); setDisplayedExpTo('expFuturePInc', true, true)"><a>Increase</a></button>
                    <button class="arrow-down" onclick="decreaseDemandChart(); setDisplayedExpTo('expFuturePDec', true, false)"><a>Decrease</a></button>
                  </div>
                </li>
                <li class="button-alignment">Expected quality in future
                  <div class="btn-icon">
                    <button class="arrow-up" onclick="decreaseDemandChart(); setDisplayedExpTo('expFutureQInc', true, false)"><a>Increase</a></button>
                    <button class="arrow-down"onclick="increaseDemandChart(); setDisplayedExpTo('expFutureQDec', true, true)"><a>Decrease</a></button>
                  </div>
                </li>
                <li class="button-alignment">Expected income in future
                  <div class="btn-icon">
                    <button class="arrow-up" onclick="increaseDemandChart(); setDisplayedExpTo('expFutureIInc', true, true)"><a>Increase</a></button>
                    <button class="arrow-down" onclick="decreaseDemandChart(); setDisplayedExpTo('expFutureIDec', true, false)"><a>Decrease</a></button>
                  </div>
                </li>
              </ul>
            </li>
            <li class="button-alignment">Number of Buyers in the Market
              <div class="btn-icon">
                <button class="arrow-up" onclick="increaseDemandChart(); setDisplayedExpTo('expBuyersInc', true, true)"><a>Increase</a></button>
                <button class="arrow-down" onclick="decreaseDemandChart(); setDisplayedExpTo('expBuyersDec', true, false)"><a>Decrease</a></button>
              </div>
            </li>
          </ol>
        </div>
        <div class="supply">
          <h3>Shifts in Supply</h3>
          <ol>
            <li class="button-alignment">Price of Inputs
              <div class="btn-icon">
                <button class="arrow-up" onclick="decreaseSupplyChart(); setDisplayedExpTo('expPInputsInc', false, false)"><a>Increase</a></button>
                <button class="arrow-down" onclick="increaseSupplyChart(); setDisplayedExpTo('expPInputsDec', false, true)"><a>Decrease</a></button>
              </div>
            </li>
            <li class="button-alignment">Change in Technology
              <div class="btn-icon">
                <button class="arrow-up" onclick="increaseSupplyChart(); setDisplayedExpTo('expTechInc', false, true)"><a>Increase</a></button>
                <button class="arrow-down" onclick="decreaseSupplyChart(); setDisplayedExpTo('expTechDec', false, false)"><a>Decrease</a></button>
              </div>
            </li>
            <li class="button-alignment">Number of Producers
              <div class="btn-icon">
                <button class="arrow-up" onclick="increaseSupplyChart(); setDisplayedExpTo('expProdInc', false, true)"><a>Increase</a></button>
                <button class="arrow-down" onclick="decreaseSupplyChart(); setDisplayedExpTo('expProdDec', false, false)"><a>Decrease</a></button>
              </div>
            </li>
            <li class="button-alignment">Government Policies
              <div>
                <button onclick="increaseSupplyChart(); setDisplayedExpTo('expSubsidy', false, true)">Subsidies</button>
                <button onclick="decreaseSupplyChart(); setDisplayedExpTo('expTax', false, false)">Taxation</button>
              </div>
            </li>
          </ol>
        </div>
      </div>
  </div>  <!-- .container-->
</div> <!-- .wrapper-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
<script src="demand-and-supply.js"></script>
<?php echo file_get_contents("html/footer.html"); ?>
