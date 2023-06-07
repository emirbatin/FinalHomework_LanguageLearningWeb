function playHaru1() {
    var audio = new Audio("../assets/voices/Haru1.mp3");
    audio.play();
    audio.onended = function() {
        audio.pause();
        audio.currentTime = 0;
    };
}

function playHaru2() {
    var audio = new Audio("../assets/voices/Haru2.mp3");
    audio.play();
    audio.onended = function() {
        audio.pause();
        audio.currentTime = 0;
    };
}

function playHaru3() {
    var audio = new Audio("../assets/voices/Haru3.mp3");
    audio.play();
    audio.onended = function() {
        audio.pause();
        audio.currentTime = 0;
    };
}

function playAi1() {
    var audio = new Audio("../assets/voices/Ai1.mp3");
    audio.play();
    audio.onended = function() {
        audio.pause();
        audio.currentTime = 0;
    };
}

function playAi2() {
    var audio = new Audio("../assets/voices/Ai2.mp3");
    audio.play();
    audio.onended = function() {
        audio.pause();
        audio.currentTime = 0;
    };
}