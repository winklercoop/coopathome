<!--
// ==============================================
// Copyright 2003 by jsCode.com
// Source: jsCode.com
// Author: etLux
// Free for all; but please leave in the header.
// ==============================================

// Set up the image files to be used.
var theImages4 = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array. Rememeber
// to increment the theImages[x] index!

// 1//
theImages4[1] = '/assets/slider1.jpg'
theImages4[2] = '/assets/slider2.jpg'
theImages4[3] = '/assets/slider3.jpg'
theImages4[4] = '/assets/slider4.jpg'
theImages4[5] = '/assets/slider5.jpg'
theImages4[6] = '/assets/slider6.jpg'
theImages4[7] = '/assets/slider7.jpg'
theImages4[8] = '/assets/slider8.jpg'
theImages4[9] = '/assets/slider9.jpg'
theImages4[10] = '/assets/slider10.jpg'
theImages4[11] = '/assets/slider11.jpg'
theImages4[12] = '/assets/slider12.jpg'
theImages4[13] = '/assets/slider13.jpg'
theImages4[14] = '/assets/slider14.jpg'
theImages4[15] = '/assets/slider15.jpg'
theImages4[16] = '/assets/slider16.jpg'
theImages4[17] = '/assets/slider17.jpg'
theImages4[18] = '/assets/slider18.jpg'
theImages4[19] = '/assets/slider19.jpg'
theImages4[20] = '/assets/slider20.jpg'
theImages4[21] = '/assets/slider21.jpg'

// ======================================
// do not change anything below this line
// ======================================

var j = 0
var p = theImages4.length;

var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages4[i]
}

var whichImage4 = Math.round(Math.random()*(p-1));
function showImage4(){
document.write('<img src="'+theImages4[whichImage4]+'">');
}

//-->