let DRUM_RACK;

// ======================================
// CSS STYLINGS - ANIMATIONS - PAGE LOAD
// ======================================

var length = $("line, ellipse")
  .get(0)
  .getTotalLength();

$("line, ellipse").css({
  "stroke-dasharray": length,
  "stroke-dashoffset": length
});

$("line, ellipse").animate(
  {
    "stroke-dashoffset": 0
  },
  2000
);

function shrinkLogo() {
  $("div.logo").animate(
    {
      width: "80px",
      height: "25.5vh",
      float: "left"
    },
    1000
  );
}

function showPage() {
  $("*").removeClass("trans");
  $("h1, div.container, footer").addClass("animated, fadeIn");
}

window.setTimeout(shrinkLogo, 2000);
window.setTimeout(showPage, 3000);

// ====================================
//  BEAT RANDOMIZER | BEATBOYE V1.0
// ====================================
function newBeat() {
  // create a new beat and update the UI
  let numberOfHats = Math.floor(Math.random() * 16);
  let numberOfSnares = Math.floor(randomishNumber() * 16);
  let numberOfKicks = Math.floor(randomishNumber() * 16);

  console.log(numberOfHats);
  console.log(numberOfSnares);
  console.log(numberOfKicks);

  function randomishNumber() {
    // create a randomish number using a bell curve
    var number = 0;
    var RUNS = 6;
    for (var i = 1; i <= RUNS; i += 1) {
      number += Math.random();
    }
    var res = number / RUNS;
    return res;
  }

  function generateNewBeat() {
    // Create an empty array, ITERATE through the array,
    // and assign values based on the 'numberOf' values
    let drumRack = [];
    for (let i = 0; i < 3; i++) {
      let sound = [];
      for (let j = 0; j < 16; j++) {
        sound.push(" ");
      }
      drumRack.push(sound);
    }
    let numberOfHatsPlaced = 0;
    while (numberOfHatsPlaced < numberOfHats) {
      let randomColumnIndex = Math.floor(Math.random() * 16);
      if (drumRack[0][randomColumnIndex] !== "B") {
        drumRack[0][randomColumnIndex] = "B";
        numberOfHatsPlaced++;
      }
    }
    let numberOfSnaresPlaced = 0;
    while (numberOfSnaresPlaced < numberOfSnares) {
      let randomColumnIndex = Math.floor(Math.random() * 16);
      if (drumRack[1][randomColumnIndex] !== "B") {
        drumRack[1][randomColumnIndex] = "B";
        numberOfSnaresPlaced++;
      }
    }
    let numberOfKicksPlaced = 0;
    while (numberOfKicksPlaced < numberOfKicks) {
      let randomColumnIndex = Math.floor(Math.random() * 16);
      if (drumRack[2][randomColumnIndex] !== "B") {
        drumRack[2][randomColumnIndex] = "B";
        numberOfKicksPlaced++;
      }
    }
    return drumRack;
  }

  DRUM_RACK = generateNewBeat();

  // ITERATE THROUGH the drumRack beat, and keep track of source
  let drumRackLength = DRUM_RACK.length;
  for (let sourceIndex = 0; sourceIndex < drumRackLength; sourceIndex += 1) {
    let source = DRUM_RACK[sourceIndex];
    let sourceElem = $(`.drumrack div:nth-of-type(${sourceIndex + 1})`);
    let noteLength = source.length;
    for (let noteIndex = 0; noteIndex < noteLength; noteIndex += 1) {
      let note = source[noteIndex];
      let noteElem = sourceElem.find(`i:nth-of-type(${noteIndex + 1})`);
      if (note === "B") {
        noteElem.text("lens");
      } else {
        noteElem.text("panorama_fish_eye");
      }
    }
    console.log(sourceElem);
    console.log(DRUM_RACK);
  }
}
$("button.generate").on("click", newBeat);

function playBeat() {
  let beatsPerMinute = $("input").val();
  let interval = 60000 / beatsPerMinute / 4;
  console.log(interval);
  let timeSig = 16;
  for (let note = 1; note <= timeSig; note += 1) {
    let hihatCurrent = DRUM_RACK[0][note - 1];
    let snareCurrent = DRUM_RACK[1][note - 1];
    let kickCurrent = DRUM_RACK[2][note - 1];
    window.setTimeout(function() {
      if (hihatCurrent === "B") {
        $("audio")[1].currentTime = 0;
        $("audio")[1].play();
      }
      if (snareCurrent === "B") {
        $("audio")[2].currentTime = 0;
        $("audio")[2].play();
      }
      if (kickCurrent === "B") {
        $("audio")[3].currentTime = 0;
        $("audio")[3].play();
      }
    }, interval * note);
  }
  // window.setTimeout(function() {
  //   playBeat();
  // }, interval * 4);
}
$("button.play").on("click", playBeat);

function toggleActive(e) {
  console.log($(e.currentTarget));
  let elem = $(e.currentTarget);
  let source = elem.attr("data-source");
  let note = elem.attr("data-note");
  if (elem.text() === "lens") {
    elem.text("panorama_fish_eye");
    DRUM_RACK[source][note] = "";
  } else {
    elem.text("lens");
    DRUM_RACK[source][note] = "B";
  }
}

$("div.drumrack i").on("click", toggleActive);

// Backbeat Function: Work in Progress

// function addBackBeat(e) {
//   let elem = $(e.currentTarget);
//   if (elem.text() === "lens") {
//     elem.text("panorama_fish_eye");
//   } else {
//     elem.text("lens");
//     // $("i[data-source="1"][data-note="4"]").text("lens");
//     // $("i[data-source="1"][data-note="12"]").text("lens");
//     DRUM_RACK[1][4] = "B";
//     DRUM_RACK[1][12] = "B";
//   }
// }
//
// $("div.controls i").on("click", addBackBeat);
