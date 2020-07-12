
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

var minutesheading = document.getElementById("minutes");
var secondsheading = document.getElementById("seconds");
var millisecondsheading = document.getElementById("milliseconds");
var a=document.getElementById("start")
var b=document.getElementById("pause")

var interval;

// html main jo 3 h1 bnae thy unhain get karlia apna pas
// ab humain function banana hai jo repetative Chale 

// pehla hum milliseconds ko increment karain ga jab woh 
// 100 tk phncha ga to seconds chala ga jab seconds 60
// par phnch jaega to minutes increment hojae ga

//  maine yeh kara hai ka timer function jab mera chale 
// ga milliseconds ko increment kara ga increment karna ka baad isko html main daal da ga

// ab humain condition lagani hai ka milliseconds jab 100 tk phnch jae to sec main ap increment 
// kardo or maine condition lagali ka jab millisec bara ho 100 sa to second incremrnt 
// hojae or second wali heading main sec ko insert kardo

function timer(){

milliseconds++
millisecondsheading.innerHTML = milliseconds;
if(milliseconds >= 100){
    seconds++
    secondsheading.innerHTML= seconds
    milliseconds =0;
}else if(seconds >= 60){
 minutes++;
 seconds = 0;
 minutesheading.innerHTML = minutes
}
}

function start(){
    interval = setInterval(timer,10)
    a.disabled=true
    
}

function stop(){
    clearInterval (interval);
    if (b = true) {
		a.disabled=false
	}
}

function reset(){
 minutes = 0;
 seconds = 0;
 milliseconds = 0;

 minutesheading.innerHTML = minutes
 secondsheading.innerHTML = seconds
 millisecondsheading.innerHTML = milliseconds
 stop();

}
