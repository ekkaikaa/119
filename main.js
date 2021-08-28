function preload() {

};

function setup() {
 canvas = createCanvas (300,300)
 canvas.center();
 video = createCapture(VIDEO)
 video.hide()
 console.log("ml5 version", ml5.version);
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ernollNcn/model.json",modelloaded);
}

function draw() {
    image(video,0,0,300,300);
    classifier.classify(video,gotresults);
}

function modelloaded() {
    console.log("teachable machine has been loaded correctly");
}

function gotresults(error, results) {
/*if(error) {
    console.error(error)
}*/
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}