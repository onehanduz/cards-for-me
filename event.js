document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (memoNums.length !== 1 && resultarr == 0) {
    if (evt.keyCode == 39) {
      memoNext();
    }
    if (evt.keyCode == 37) {
      memoPrev();
    }
    if (evt.keyCode == 32) {
      memoReturn();
    } else if (evt.keyCode == 38 || evt.keyCode == 40) {
      memoElo();
    }
  }
};
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    if (memoNums.length == 1 && resultarr == 0) {
      evt.preventDefault();
      document.getElementById("numSettings_form").requestSubmit();
    } else if (memoNums.length !== 1 && resultarr == 0) {
      document.getElementById("memoEnd").click();
    } else if (memoNums.length !== 1 && resultarr !== 0) {
      document.getElementById("resultEnd").click();
    }
  }
});

document
  .getElementById("numSettings_form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("numSettings").style.display = "none";
    document.getElementById("numMemo").style.display = "flex";
    var numSettings = getData(e.target);
    generateNums(numSettings);
    memoNext();
    start();
    if (numSettings.autoAdvanced != false) {
      interval = setInterval(memoNext, numSettings.autoAdvanced);
    }
  });
document.getElementById("memoEnd").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("numSettings").style.display = "none";
  document.getElementById("numMemo").style.display = "none";
  document.getElementById("numResult").style.display = "block";
  pause();
  endTime = Date.now();
  resultTime[resultTime.length - 1].stop = Date.now();
  resultarr = calculateResults(resultTime);
  printHead(resultarr);
  printResult(resultarr);
  clearInterval(interval);
});
document.getElementById("resultEnd").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("numSettings").style.display = "block";
  document.getElementById("numMemo").style.display = "none";
  document.getElementById("numResult").style.display = "none";
  resultTime = [];
  memoNums = ["START"];
  startTime = 0;
  stop_time = 0;
  stop_time_counter = 0;
  pure_time = 0;
  avaragetime = 0;
  elapsedTime = 0;
  endTime = 0;
  counterClick = 0;
  resultarr = 0;
});

document.getElementById("resultSort").addEventListener("click", function (e) {
  e.preventDefault();
  sortResults(resultarr);
});

new Image().src = "./cards/2♠️.svg";
new Image().src = "./cards/3♠️.svg";
new Image().src = "./cards/4♠️.svg";
new Image().src = "./cards/5♠️.svg";
new Image().src = "./cards/6♠️.svg";
new Image().src = "./cards/7♠️.svg";
new Image().src = "./cards/8♠️.svg";
new Image().src = "./cards/9♠️.svg";
new Image().src = "./cards/J♠️.svg";
new Image().src = "./cards/K♠️.svg";
new Image().src = "./cards/Q♠️.svg";
new Image().src = "./cards/A♣️.svg";
new Image().src = "./cards/2♣️.svg";
new Image().src = "./cards/3♣️.svg";
new Image().src = "./cards/4♣️.svg";
new Image().src = "./cards/5♣️.svg";
new Image().src = "./cards/6♣️.svg";
new Image().src = "./cards/7♣️.svg";
new Image().src = "./cards/8♣️.svg";
new Image().src = "./cards/9♣️.svg";
new Image().src = "./cards/J♣️.svg";
new Image().src = "./cards/Q♣️.svg";
new Image().src = "./cards/K♣️.svg";
new Image().src = "./cards/A♥️.svg";
new Image().src = "./cards/2♥️.svg";
new Image().src = "./cards/3♥️.svg";
new Image().src = "./cards/4♥️.svg";
new Image().src = "./cards/5♥️.svg";
new Image().src = "./cards/6♥️.svg";
new Image().src = "./cards/7♥️.svg";
new Image().src = "./cards/8♥️.svg";
new Image().src = "./cards/9♥️.svg";
new Image().src = "./cards/J♥️.svg";
new Image().src = "./cards/Q♥️.svg";
new Image().src = "./cards/K♥️.svg";
new Image().src = "./cards/A♦️.svg";
new Image().src = "./cards/2♦️.svg";
new Image().src = "./cards/3♦️.svg";
new Image().src = "./cards/4♦️.svg";
new Image().src = "./cards/5♦️.svg";
new Image().src = "./cards/6♦️.svg";
new Image().src = "./cards/7♦️.svg";
new Image().src = "./cards/8♦️.svg";
new Image().src = "./cards/9♦️.svg";
new Image().src = "./cards/J♦️.svg";
new Image().src = "./cards/Q♦️.svg";
new Image().src = "./cards/K♦️.svg";
