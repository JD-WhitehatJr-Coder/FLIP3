mustacheX =0;
mustacheY =0;

function preload() {
mustache = loadImage('https://i.postimg.cc/G3BkYhsq/m.png')
}

function setup() {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(200, 300);
video.center();
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
  if(results.length > 0)
  {
   console.log(results);
   console.log("mustache x = "+ results[0].pose.nose.x);
   console.log("mustache y = "+ results[0].pose.nose.y);
   mustacheX = results[0].pose.nose.x;
   mustacheY = results[0].pose.nose.y;
  }
}

function modelLoaded() {
   console.log("PoseNet is initialized");
}
function draw() {
image(video, 0, 0, 350, 350);
image(mustache, mustacheX +51, mustacheY +30, 50, 50)

}
function take_snapshot() {
   save('myMustacheFilter_img.png');
}