<!--
// ==============================================
// Copyright 2003 by jsCode.com
// Source: jsCode.com
// Author: etLux
// Free for all; but please leave in the header.
// ==============================================

// Set up the image files to be used.
var theImages2 = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array. Rememeber
// to increment the theImages[x] index!

// 1//
theImages2[1] = '/assets/slider1.jpg'
theImages2[2] = '/assets/slider2.jpg'
theImages2[3] = '/assets/slider3.jpg'
theImages2[4] = '/assets/slider4.jpg'
theImages2[5] = '/assets/slider5.jpg'
theImages2[6] = '/assets/slider6.jpg'
theImages2[7] = '/assets/slider7.jpg'
theImages2[8] = '/assets/slider8.jpg'
theImages2[9] = '/assets/slider9.jpg'
theImages2[10] = '/assets/slider10.jpg'
theImages2[11] = '/assets/slider11.jpg'
theImages2[12] = '/assets/slider12.jpg'
theImages2[13] = '/assets/slider13.jpg'
theImages2[14] = '/assets/slider14.jpg'
theImages2[15] = '/assets/slider15.jpg'
theImages2[16] = '/assets/slider16.jpg'
theImages2[17] = '/assets/slider17.jpg'
theImages2[18] = '/assets/slider18.jpg'
theImages2[19] = '/assets/slider19.jpg'
theImages2[20] = '/assets/slider20.jpg'
theImages2[21] = '/assets/slider21.jpg'

// ======================================
// do not change anything below this line
// ======================================

var j = 1
var p = theImages2.length;

var preBuffer = new Array()
for (i = 1; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages2[i]
}

var whichImage2 = Math.round(Math.random()*(p-1));
function showImage2(){
document.write('<img src="'+theImages2[whichImage2]+'">');
}

//-->