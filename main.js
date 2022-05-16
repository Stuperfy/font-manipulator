function setup(){
    video= createCapture(VIDEO)
    video.size(550, 500)

    canvas= createCanvas(550, 550);
    canvas.position(560, 150)

    poseNet= ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotPoses)
}
function modelloaded(){
    console.log("Model is loaded")
}
function gotPoses(result){
    if(result.length>0){
        console.log(result)
        leftwristX= result[0].pose.leftWrist.x
        rightwristX= result[0].pose.rightWrist.x
        diffrence= floor(leftwristX-rightwristX)
    }
    
}
function draw(){
    background("lavender")
    textSize(diffrence)
    fill("black")
    text("Anwesha", 50, 400)

}