var oceanBlue = "";
var lightSwitch = "";

var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

function preload() {
    oceanBlue = loadSound("ocean-blue.mp3");
    lightSwitch = loadSound("light-switch.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(480, 160);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
  }
}

function draw() {
    image(video, 0, 0, 400, 400);
}