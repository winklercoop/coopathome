;<!--
// ==============================================
// Copyright 2003 by jsCode.com
// Source: jsCode.com
// Author: etLux
// Free for all; but please leave in the header.
// ==============================================

// Set up the image files to be used.
var theImages5 = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array. Rememeber
// to increment the theImages[x] index!

// 1//
theImages5[1] = '/assets/slider1.jpg'
theImages5[2] = '/assets/slider2.jpg'
theImages5[3] = '/assets/slider3.jpg'
theImages5[4] = '/assets/slider4.jpg'
theImages5[5] = '/assets/slider5.jpg'
theImages5[6] = '/assets/slider6.jpg'
theImages5[7] = '/assets/slider7.jpg'
theImages5[8] = '/assets/slider8.jpg'
theImages5[9] = '/assets/slider9.jpg'
theImages5[10] = '/assets/slider10.jpg'
theImages5[11] = '/assets/slider11.jpg'
theImages5[12] = '/assets/slider12.jpg'
theImages5[13] = '/assets/slider13.jpg'
theImages5[14] = '/assets/slider14.jpg'
theImages5[15] = '/assets/slider15.jpg'
theImages5[16] = '/assets/slider16.jpg'
theImages5[17] = '/assets/slider17.jpg'
theImages5[18] = '/assets/slider18.jpg'
theImages5[19] = '/assets/slider19.jpg'
theImages5[20] = '/assets/slider20.jpg'
theImages5[21] = '/assets/slider21.jpg'

// ======================================
// do not change anything below this line
// ======================================

var j = 0
var p = theImages5.length;

var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages5[i]
}

var whichImage5 = Math.round(Math.random()*(p-1));
function showImage5(){
document.write('<img src="'+theImages5[whichImage5]+'">');
}

//-->