/*global $:false, console:false */
var notelist = ["C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5"];
var notelistStr = ["C&nbsp;", "D<sup>&#X266D;</sup>", "D&nbsp;", "E<sup>&#X266D;</sup>", "E&nbsp;", "F&nbsp;", "G<sup>&#X266D;</sup>", "G&nbsp;", "A<sup>&#X266D;</sup>", "A&nbsp;", "B<sup>&#X266D;</sup>", "B&nbsp;", "C&nbsp;", "D<sup>&#X266D;</sup>", "D&nbsp;", "E<sup>&#X266D;</sup>", "E&nbsp;", "F&nbsp;", "G<sup>&#X266D;</sup>", "G&nbsp;", "A<sup>&#X266D;</sup>", "A&nbsp;", "B<sup>&#X266D;</sup>", "B&nbsp;", "C&nbsp;", "D<sup>&#X266D;</sup>", "D&nbsp;", "E<sup>&#X266D;</sup>", "E&nbsp;", "F&nbsp;", "G<sup>&#X266D;</sup>", "G&nbsp;", "A<sup>&#X266D;</sup>", "A&nbsp;", "B<sup>&#X266D;</sup>", "B&nbsp;"];

var map = {
  C3: "0",
  Db3: "1",
  D3: "2",
  Eb3: "3",
  E3: "4",
  F3: "5",
  Gb3: "6",
  G3: "7",
  Ab3: "8",
  A3: "9",
  Bb3: "10",
  B3: "11",
  C4: "12",
  Db4: "13",
  D4: "14",
  Eb4: "15",
  E4: "16",
  F4: "17",
  Gb4: "18",
  G4: "19",
  Ab4: "20",
  A4: "21",
  Bb4: "22",
  B4: "23",
  C5: "24",
  Db5: "25",
  D5: "26",
  Eb5: "27",
  E5: "28",
  F5: "29",
  Gb5: "30",
  G5: "31",
  Ab5: "32",
  A5: "33",
  Bb5: "34",
  B5: "35",

};

var chords = {
  maj: ["4", "7"],
  min: ["3", "7"],
  dom7: ["4", "7", "10"],
  maj7: ["4", "7", "11"],
  min7: ["3", "7", "10"],
  dim: ["3", "6"],
  dim7: ["3", "6", "9"],
  halfDim: ["3", "6", "10"],
  arg: ["4", "8"],
  arg7: ["4", "8", "10"],
  sus4: ["5", "7"],
  s7sus4: ["5", "7", "10"],

  //  maj6_jazz: ["4", "7", "9", "14"],
  //  min6_jazz: ["3", "7", "9", "14"],
  //  dom7_jazz: ["4", "10", "14"],
  //  dom7_jazz13: ["-2", "4", "9"],
  //  maj7_jazz: ["4", "7", "11", "14"],
  //  min7_jazz: ["3", "7", "10", "14"],
  //  dim_jazz: ["3", "9", "14"],
  //  halfDim_jazz: ["3", "6", "10", "14"],
  //  sus4_jazz: ["5", "9", "10", "14"],

  maj6_jazz: ["4", "7", "9", "14"],
  min6_jazz: ["3", "7", "9", "14"],
  dom7_jazz: ["-8", "-2", "2"],
  dom7_jazz13: ["-2", "4", "9"],
  maj7_jazz: ["4", "7", "11", "14"],
  maj7_jazz2: ["-1", "2", "4", "7"],
  min7_jazz: ["3", "7", "10", "14"],
  min7_jazz2: ["-2", "2", "3", "7"],
  dim_jazz: ["3", "9", "14"],
  halfDim_jazz: ["3", "6", "10", "14"],
  arg7_jazz: ["-2", "4", "8"],
  s7sus4_jazz: ["5", "9", "10", "14"],

  scale_ionian: ["2", "4", "5", "7", "9", "11"],
  scale_dorian: ["2", "3", "5", "7", "9", "10"],
  scale_phrigian: ["1", "3", "5", "7", "8", "10"],
  scale_lydian: ["2", "4", "6", "7", "9", "11"],
  scale_mixolydian: ["2", "4", "5", "7", "9", "10"],
  scale_aeolian: ["2", "3", "5", "7", "8", "10"],
  scale_locrian: ["1", "3", "5", "6", "8", "10"],

  scale_melodicminor: ["2", "3", "5", "7", "9", "11"],

  scale_altered: ["1", "3", "4", "6", "8", "10"],

  scale_dombebopasc: ["2", "4", "5", "7", "9", "10", "11"],
  scale_dombebopdesc: ["2", "4", "5", "7", "8", "9", "10", "12"],
  scale_majorbebop: ["2", "4", "5", "7", "8", "9", "11"],

  scale_wholetone: ["2", "4", "6", "8", "10"],
  scale_comdim: ["1", "3", "4", "6", "7", "9", "10"],
  scale_chromatic: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],

  scale_majorpentatonic: ["2", "4", "7", "9"],
  scale_minorpentatonic: ["3", "5", "7", "10"],

  scale_blues: ["3", "5", "6", "7", "10"],
};

var chords2 = {
  maj: ["M3", "P5"],
  min: ["m3", "P5"],
  dom7: ["M3", "P5", "m7"],
  maj7: ["M3", "P5", "M7"],
  min7: ["m3", "P5", "m7"],
  dim: ["m3", "d5"],
  dim7: ["m3", "d5", "d7"],
  halfDim: ["m3", "d5", "m7"],
  arg: ["M3", "A5"],
  arg7: ["M3", "A5", "m7"],
  sus4: ["P4", "P5"],
  s7sus4: ["P4", "P5", "m7"],

  //  maj6_jazz: ["M3", "P5", "M6", "9"],
  //  min6_jazz: ["m3", "P5", "M6", "9"],
  //  dom7_jazz: ["M3", "m7", "9"],
  //  maj7_jazz: ["M3", "P5", "M7", "9"],
  //  min7_jazz: ["m3", "P5", "m7", "9"],
  //  dim_jazz: ["m3", "d7", "9"],
  //  halfDim_jazz: ["m3", "d5", "m7", "9"],
  //  s7sus4_jazz: ["P4", "13", "m7", "9"],

  maj6_jazz: ["M3", "P5", "M6", "9"],
  min6_jazz: ["m3", "P5", "M6", "9"],
  dom7_jazz: ["M3", "m7", "9"],
  dom7_jazz13: ["m7", "M3", "13"],
  maj7_jazz: ["M3", "P5", "M7", "9"],
  maj7_jazz2: ["M7", "9", "M3", "P5"],
  min7_jazz: ["m3", "P5", "m7", "9"],
  min7_jazz2: ["m7", "9", "m3", "P5"],
  dim_jazz: ["m3", "d7", "9"],
  halfDim_jazz: ["m3", "d5", "m7", "9"],
  arg7_jazz: ["m7", "M3", "A5"],
  s7sus4_jazz: ["P4", "13", "m7", "9"],

  scale_ionian: ["M2", "M3", "P4", "P5", "M6", "M7"],
  scale_dorian: ["M2", "m3", "P4", "P5", "M6", "m7"],
  scale_phrigian: ["m2", "m3", "P4", "P5", "m6", "m7"],
  scale_lydian: ["M2", "M3", "A4", "P5", "M6", "M7"],
  scale_mixolydian: ["M2", "M3", "P4", "P5", "M6", "m7"],
  scale_aeolian: ["M2", "m3", "P4", "P5", "m6", "m7"],
  scale_locrian: ["m2", "m3", "P4", "d5", "m6", "m7"],

  scale_melodicminor: ["M2", "m3", "P4", "P5", "M6", "M7"],

  scale_altered: ["m2", "M2", "M3", "A4", "A5", "m7"],

  scale_dombebopasc: ["M2", "M3", "P4", "P5", "M6", "m7", "M7"],
  scale_dombebopdesc: ["M2", "M3", "P4", "P5", "m6", "M6", "m7", "P8"],
  scale_majorbebop: ["M2", "M3", "P4", "P5", "A5", "M6", "M7"],

  scale_wholetone: ["M2", "M3", "A4", "m6", "m7"],
  scale_comdim: ["m2", "m3", "d4", "d5", "P5", "M6", "m7"],
  scale_chromatic: ["A1", "M2", "A2", "M3", "P4", "A4", "P5", "A5", "M6", "A6", "M7"],

  scale_majorpentatonic: ["M2", "M3", "P5", "M6"],
  scale_minorpentatonic: ["m3", "P4", "P5", "m7"],

  scale_blues: ["m3", "P4", "d5", "P5", "m7"],
};

/*
var interval = {
    m3: "3",
    M3: "4",
    P4: "5",
    d5: "6",
    P5: "7",
    A5: "8",
    M6: "9",
    d7: "9",
    m7: "10",
    M7: "11",
    P8: "12",
    m9: "13",
    M9: "14"
}
*/

var selectedChord = "scale_ionian";
var selectedNote = "C3";

$(function () {
  /*
  $(window).bind("load", function () {
    hideUrlBar(200);
  });

  $(window).bind("orientationchange", function () {
    hideUrlBar(200);
  });
*/

  $("#demo-page2").pagecontainer({
    beforeshow: function (event, ui) {
      console.log("pageshow 22");
    }
  });
  $("#demo-page").pagecontainer({
    beforeshow: function (event, ui) {
      console.log("pageshow 1");
    }
  });
  $('#demo-page2').on('pagebeforeshow', function (event) {
    console.log("pageshow 2");
  });

  $("#demo-page2").on("pagecontainerbeforeshow", function (event, ui) {
    console.log("pageshow 2a");
  });

  $("#select-choice-1").selectmenu();
  $("#select-choice-2").selectmenu();
  $("#select-choice-3").selectmenu();
  $("#select-choice-vn1").selectmenu();
  $("#select-choice-vn2").selectmenu();
  $("#select-choice-vn3").selectmenu();

  $("#select-choice-3").val(selectedChord).selectmenu("refresh");
  $("#select-choice-vn3").val(selectedChord).selectmenu("refresh");

  $(".keyboard1 div").click(function () {
    selectedNote = $(this).attr("id");
    $(".keyboard1 div").css("border-color", "white");
    $(this).css("border-color", "red");
    console.log('keyboard clicked=' + selectedNote);
    // playNote($(this));
    buildChord();
    buildChord2();
  });

  $("#select-choice-1").change(function () {
    selectedChord = $(this).val();
    //$("#select-choice-2").val("").trigger('change');
    //$("#select-choice-2").selectmenu("option", "theme", "b");
    //$("#select-choice-2").selectmenu( "option", "overlayTheme", "d" );
    $("#select-choice-2").val("").selectmenu("refresh");
    $("#select-choice-3").val("").selectmenu("refresh");
    $("#select-choice-vn1").val(selectedChord).selectmenu("refresh");
    $("#select-choice-vn2").val("").selectmenu("refresh");
    $("#select-choice-vn3").val("").selectmenu("refresh");
    buildChord();
    buildChord2();
  });
  $("#select-choice-2").change(function () {
    selectedChord = $(this).val();
    $("#select-choice-1").val("").selectmenu("refresh");
    $("#select-choice-3").val("").selectmenu("refresh");
    $("#select-choice-vn1").val("").selectmenu("refresh");
    $("#select-choice-vn2").val(selectedChord).selectmenu("refresh");
    $("#select-choice-vn3").val("").selectmenu("refresh");
    buildChord();
    buildChord2();
  });
  $("#select-choice-3").change(function () {
    selectedChord = $(this).val();
    $("#select-choice-1").val("").selectmenu("refresh");
    $("#select-choice-2").val("").selectmenu("refresh");
    $("#select-choice-vn1").val("").selectmenu("refresh");
    $("#select-choice-vn2").val("").selectmenu("refresh");
    $("#select-choice-vn3").val(selectedChord).selectmenu("refresh");
    buildChord();
    buildChord2();
  });

  $("#violin .thumb-pos").click(function () {
    //var selectedVnNote = $(this).attr("id");
    var selectedVnNote = $(this).data("note");
    selectedNote = selectedVnNote.substring(2);
    $("#violin .thumb-pos").css("border-color", "white");
    $(this).css("border-color", "red");
    console.log('vn clicked=' + selectedNote);
    // playNote($(this));
    buildChord2();
    buildChord();
  });

  $("#select-choice-vn1").change(function () {
    selectedChord = $(this).val();
    $("#select-choice-vn2").val("").selectmenu("refresh");
    $("#select-choice-vn3").val("").selectmenu("refresh");
    $("#select-choice-1").val(selectedChord).selectmenu("refresh");
    $("#select-choice-2").val("").selectmenu("refresh");
    $("#select-choice-3").val("").selectmenu("refresh");
    buildChord2();
    buildChord();
  });
  $("#select-choice-vn2").change(function () {
    selectedChord = $(this).val();
    $("#select-choice-vn1").val("").selectmenu("refresh");
    $("#select-choice-vn3").val("").selectmenu("refresh");
    $("#select-choice-1").val("").selectmenu("refresh");
    $("#select-choice-2").val(selectedChord).selectmenu("refresh");
    $("#select-choice-3").val("").selectmenu("refresh");
    buildChord2();
    buildChord();
  });
  $("#select-choice-vn3").change(function () {
    selectedChord = $(this).val();
    $("#select-choice-vn1").val("").selectmenu("refresh");
    $("#select-choice-vn2").val("").selectmenu("refresh");
    $("#select-choice-1").val("").selectmenu("refresh");
    $("#select-choice-2").val("").selectmenu("refresh");
    $("#select-choice-3").val(selectedChord).selectmenu("refresh");
    buildChord2();
    buildChord();
  });
});

/*
function hideUrlBar(millisec) {
  setTimeout(function () {
    window.scrollTo(0, 1);
  }, millisec);

}
*/

function buildChord() {
  var note = selectedNote;
  $(".keyboard1 div").css("border-color", "white");
  $(".keyboard1 div").text("");
  //$("#" + note).css("border-color", "red");

  var rootPosNum = parseInt(map[note], 10);
  var chordStr = notelistStr[rootPosNum];
  var selectedChordMap = chords[selectedChord];
  var selectedChordMap2 = chords2[selectedChord];

  var interval1 = "";
  var interval2 = "";

  flashPostion("#" + notelist[rootPosNum], "red");

  for (var i = 0; i < selectedChordMap.length; i++) {
    var posNum = rootPosNum + parseInt(selectedChordMap[i], 10);
    chordStr = chordStr + " " + notelistStr[posNum];
    interval1 = interval1 + " " + selectedChordMap[i];
    interval2 = interval2 + " " + selectedChordMap2[i];
    flashPostion("#" + notelist[posNum], "orange");
    $("#" + notelist[posNum]).text(selectedChordMap2[i]);
  }

  $("#discription").html("Notes [" + chordStr + "] <br>Interval [" + interval2 + " ] - [" + interval1 + " ]");
  $("#discription2").html("Notes [" + chordStr + "] <br>Interval [" + interval2 + " ] - [" + interval1 + " ]");
}

function buildChord2() {
  //hideUrlBar(10);
  var note = selectedNote;
  $("#violin .thumb-pos").css("border-color", "white");
  //$(".vn" + note).css("border-color", "red");

  var rootPosNum = parseInt(map[note], 10);
  var chordStr = notelistStr[rootPosNum];
  var selectedChordMap = chords[selectedChord];
  var selectedChordMap2 = chords2[selectedChord];
  var interval1 = "";
  var interval2 = "";

  flashPostion(".vn" + notelist[rootPosNum - 12], "red");
  flashPostion(".vn" + notelist[rootPosNum], "red");
  flashPostion(".vn" + notelist[rootPosNum + 12], "red");
  flashPostion(".vn" + notelist[rootPosNum + 24], "red");
  
  for (var i = 0; i < selectedChordMap.length; i++) {
    var posNum = rootPosNum + parseInt(selectedChordMap[i], 10);
    chordStr = chordStr + " " + notelistStr[posNum];
    interval1 = interval1 + " " + selectedChordMap[i];
    interval2 = interval2 + " " + selectedChordMap2[i];
    
    flashPostion(".vn" + notelist[posNum - 12], "orange");
    flashPostion(".vn" + notelist[posNum], "orange");
    flashPostion(".vn" + notelist[posNum + 12], "orange");
    flashPostion(".vn" + notelist[posNum + 24], "orange");

    //$("#" + "vn" + notelist[posNum]).addClass("ui-focus");
  }


  $("#discription").html("Notes [" + chordStr + "] <br>Interval [" + interval2 + " ] - [" + interval1 + " ]");
  $("#discription2").html("Notes [" + chordStr + "] <br>Interval [" + interval2 + " ] - [" + interval1 + " ]");
}

function flashPostion(selector, color) {
    $(selector).fadeTo("normal", 0.33);
    $(selector).fadeTo("slow", 1.00);
    $(selector).css("border-color", color);
}

