song = "";
leftWristX ="";
leftWristY ="";
rightWristX ="";
rightWristY ="";

 function setup(){
   canvas = createCanvas(500,400);
   canvas.center();
   canvas.position(440,200);

   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
     console.log("LeftWristX ="+ leftWristX + "LeftWristY" + leftWristY );

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    console.log("RightWristX ="+ rightWristX + "RightWristY ="+ rightWristY);
    }
}

function draw(){
    image(video,0,0,500,400);
}


function preload(){
    song = loadSound("BTS-Dynamite.mp3");
}

function play(){
    song.play();
    song.setVolume(0.3);
    song.rate(1);  
    }
    


   
