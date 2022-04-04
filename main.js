Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})

camera = document.getElementById("camera")
Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>'
    })
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/V_sPJBxOU/model.json', modelloded);
function modelloded() {
    console.log('model loded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = " The first prediction is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotresult);

}

function gotresult(error, result) {
    if (error) {
        console.log(error);

    }
    else {
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("emotion_name").innerHTML = result[1].label;

        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak();

        if (result[0].label == "Happy") {
            document.getElementById("update_emoji").innerHTML = "&#128522;"
        }

        if (result[0].label == "Sad") {
            document.getElementById("update_emoji").innerHTML = "&#128532;"
        }

        if (result[0].label == "Angry") {
            document.getElementById("update_emoji").innerHTML = "&#128548;"

        }

        if (result[1].label == "Happy") {
            document.getElementById("update_emoji_2").innerHTML = "&#128522;"
        }

        if (result[1].label == "Sad") {
            document.getElementById("update_emoji_2").innerHTML = "&#128532;"
        }

        if (result[1].label == "Angry") {
            document.getElementById("update_emoji_2").innerHTML = "&#128548;"
        }
    }
}