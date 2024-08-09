document.getElementById('startBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('english').classList.remove('hidden');
        startTimer(20);
    } else {
        alert('Please enter your username and password.');
    }
});

document.getElementById('submitBtn').addEventListener('click', function () {
    calculateResult();
});

function startTimer(duration) {
    let timer = duration * 60, minutes, seconds;
    const display = document.getElementById('timer');
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            calculateResult();
        }
    }, 1000);
}

function calculateResult() {
    let correctAnswers = 0;
    const totalQuestions = 10;

    // Check answers (assuming correct answers are provided)
    if (document.querySelector('input[name="eng1"]:checked')?.value === 'B') correctAnswers++;
    // Repeat the same check for questions 2 to 50

    const percentage = (correctAnswers / totalQuestions) * 100;
    alert('Your score is: ' + percentage + '%');

    generatePDF(percentage);
}

function generatePDF(score) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('Mock Exam Result', 10, 10);
    doc.text('Score: ' + score + '%', 10, 20);

    doc.save('mock_exam_result.pdf');
}
