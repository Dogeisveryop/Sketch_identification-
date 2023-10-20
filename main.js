function setup(){
    canvas = createCanvas(300 , 300 );
    canvas.center();
    background("White");
    canvas.mouseReleased(classify_canvas);
    synth = window.speechSynthesis ; 
}

function preload() {
    classifier = ml5.imageClassifier("DoodleNet"); 
}

function draw() {
    strokeWeight(7);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX ,pmouseY ,mouseX ,mouseY);
    }

}

function classify_canvas(){
    classifier.classify(canvas,gotresults);
}

function gotresults(error , result ) {
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("label").innerHTML = "Label : "+ result[0].label ; 
        document.getElementById("Confidence").innerHTML = "Confidence : " + Math.round( result[0].confidence*100) + "%";
        
        utterthis = new SpeechSynthesisUtterance(result[0].label);
        synth.speak(utterthis);
    }
    
}

function clearr() {
    background("white");
}