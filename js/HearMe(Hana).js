/*
function ClearFields() {
     
document.getElementById('txtPassword').value = '';
document.getElementById('txtretypePassword').value = '';

}


window.onload = ClearFields();
*/
var audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context
// Webkit/blink browsers need prefix, Safari won't work without window.

var analyser = audioCtx.createAnalyser();
var gainNode = audioCtx.createGain();
var distortion = audioCtx.createWaveShaper();
var biquadFilter = audioCtx.createBiquadFilter();

navigator.getUserMedia (
  // constraints - only audio needed for this app
  {
    audio: true
  },

// Success callback
  function(stream) {
    source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(gainNode);
    gainNode.connect(audioCtx.destination); // connecting the different audio graph nodes together

    translating(stream);
    
  },

  // Error callback
  function(err) {
    console.log('The following gUM error occured: ' + err);
  }
);

//Anna
function noteFromPitch( frequency ) {
	var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
	return Math.round( noteNum ) + 69;
}
//Anna

var noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]; //Anna


function translating(stream) {

    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount; // half the FFT value
    var dataArray = new Uint8Array(bufferLength); // create an array to store the data

    function draw() {

      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray); // get waveform data and put it into the array created above
      console.log(dataArray[0]); //Anna
      var note =  noteFromPitch(dataArray[0]); //Anna
      document.getElementById("test").innerHTML = noteStrings[note%12]; //Anna


    draw();
    
}
}

/*
var noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


function noteFromPitch( frequency ) {
	var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
	return Math.round( noteNum ) + 69;
}


var note =  noteFromPitch( );
test.innerHTML = noteStrings[note%12];
*/


