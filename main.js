NoseX=0
NoseY=0
leftWrist=0
rightWrist=0
Difference=0
function setup(){
canvas=createCanvas(500, 500)
canvas.position(560, 150)
Video=createCapture(VIDEO)
Video.hide()
Video.size(500, 500)
poseNet=ml5.poseNet(Video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model has been loaded");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
NoseX=results[0].pose.nose.x;
NoseY=results[0].pose.nose.y;
console.log("NoseX= "+NoseX + "and NoseY= " + NoseY);
leftWrist=results[0].pose.leftWrist.x;
rightWrist=results[0].pose.rightWrist.x;
Difference=floor(leftWrist-rightWrist);
}
}
function draw(){
    background("yellow");
    fill("blue");
    stroke("red");
    strokeWeight(5);
    text("Anirudh", NoseX, NoseY);
    textSize(Difference);
    document.getElementById("span_square").innerHTML="Width and height of the font will be equal to "+ Difference+"px"
}