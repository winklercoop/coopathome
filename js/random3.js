<!--
// ==============================================
// Copyright 2003 by jsCode.com
// Source: jsCode.com
// Author: etLux
// Free for all; but please leave in the header.
// ==============================================

// Set up the image files to be used.
var theImages3 = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array. Rememeber
// to increment the theImages[x] index!

// 1//
theImages3[1] = '/assets/slider1.jpg'
theImages3[2] = '/assets/slider2.jpg'
theImages3[3] = '/assets/slider3.jpg'
theImages3[4] = '/assets/slider4.jpg'
theImages3[5] = '/assets/slider5.jpg'
theImages3[6] = '/assets/slider6.jpg'
theImages3[7] = '/assets/slider7.jpg'
theImages3[8] = '/assets/slider8.jpg'
theImages3[9] = '/assets/slider9.jpg'
theImages3[10] = '/assets/slider10.jpg'
theImages3[11] = '/assets/slider11.jpg'
theImages3[12] = '/assets/slider12.jpg'
theImages3[13] = '/assets/slider13.jpg'
theImages3[14] = '/assets/slider14.jpg'
theImages3[15] = '/assets/slider15.jpg'
theImages3[16] = '/assets/slider16.jpg'
theImages3[17] = '/assets/slider17.jpg'
theImages3[18] = '/assets/slider18.jpg'
theImages3[19] = '/assets/slider19.jpg'
theImages3[20] = '/assets/slider20.jpg'
theImages3[21] = '/assets/slider21.jpg'

// ======================================
// do not change anything below this line
// ======================================

var j = 0
var p = theImages3.length;

var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages3[i]
}

var whichImage3 = Math.round(Math.random()*(p-1));
function showImage3(){
document.write('<img src="'+theImages3[whichImage3]+'">');
}

//-->