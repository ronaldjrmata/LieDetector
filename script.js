let imageList = [
  { src: "image1.jpg", answer: "Answer 1" },
  { src: "image2.jpg", answer: "Answer 2" },
  { src: "image3.jpg", answer: "Answer 3" },
  // Add more image objects here
];

let currentQuestionIndex = 0;
let timerInterval;
let timerValue = 60;

function nextQuestion() {
  clearInterval(timerInterval);
  currentQuestionIndex = (currentQuestionIndex + 1) % imageList.length;
  showQuestion();
}

function showQuestion() {
  let currentImage = imageList[currentQuestionIndex];
  document.getElementById("random-image").src = currentImage.src;
  document.getElementById("correct-answer").style.display = "none";
  document.getElementById("answer-container").style.display = "none";
  document.getElementById("timer").textContent = timerValue;
  
  // Start Timer
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(function () {
    timerValue--;
    document.getElementById("timer").textContent = timerValue;

    if (timerValue <= 0) {
      clearInterval(timerInterval);
      showAnswer();
    }
  }, 1000);
}

function showAnswer() {
  let currentImage = imageList[currentQuestionIndex];
  document.getElementById("correct-answer").style.display = "block";
  document.getElementById("correct-answer").querySelector("span").textContent = currentImage.answer;
  document.getElementById("answer-container").style.display = "block";
}

// Listen for Enter key to show answer immediately
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    showAnswer();
  }
});

// Initialize the first question
showQuestion();
