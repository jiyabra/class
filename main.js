function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function draw() {
    background('#800000');
    fill("yellow");
    stroke("blue");
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log = ("noseX = " + noseX + "noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        difference = floor(leftwristX - rightwristX);

        console.log = ("leftwristx = " + leftwristX + "rightwristx = " + rightwristX + "difference = " + difference);
    }
}