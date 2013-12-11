<!--
// ==============================================
// Copyright 2003 by jsCode.com
// Source: jsCode.com
// Author: etLux
// Free for all; but please leave in the header.
// ==============================================

// Set up the image files to be used.
var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array. Rememeber
// to increment the theImages[x] index!

// 1//
theImages[1] = '/assets/slider1.jpg'
theImages[2] = '/assets/slider2.jpg'
theImages[3] = '/assets/slider3.jpg'
theImages[4] = '/assets/slider4.jpg'
theImages[5] = '/assets/slider5.jpg'
theImages[6] = '/assets/slider6.jpg'
theImages[7] = '/assets/slider7.jpg'
theImages[8] = '/assets/slider8.jpg'
theImages[9] = '/assets/slider9.jpg'
theImages[10] = '/assets/slider10.jpg'
theImages[11] = '/assets/slider11.jpg'
theImages[12] = '/assets/slider12.jpg'
theImages[13] = '/assets/slider13.jpg'
theImages[14] = '/assets/slider14.jpg'
theImages[15] = '/assets/slider15.jpg'
theImages[16] = '/assets/slider16.jpg'
theImages[17] = '/assets/slider17.jpg'
theImages[18] = '/assets/slider18.jpg'
theImages[19] = '/assets/slider19.jpg'
theImages[20] = '/assets/slider20.jpg'
theImages[21] = '/assets/slider21.jpg'

// ======================================
// do not change anything below this line
// ======================================

var j = 0
var p = theImages.length;

var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}

var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+theImages[whichImage]+'">');
}

//-->