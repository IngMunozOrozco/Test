document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el cronómetro
    let timeRemaining = 50 * 60; // 50 minutos en segundos
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeRemaining > 0) {
            timeRemaining--;
        } else {
            clearInterval(timerInterval);
            // Aquí puedes manejar la lógica cuando el tiempo se acabe (por ejemplo, enviar el formulario automáticamente)
            alert("Time is up!");
            document.getElementById('quizForm').submit(); // Enviar el formulario automáticamente cuando el tiempo se agote
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);
});

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'block';
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswers = {
        'q1-1': 'Robert is the new roommate of Billy.',
        'q1-2': 'Yes, he likes to have a new roommate.',
        'q1-3': 'He is from Canada.',
        'q1-4': 'He is from Colombia.',
        'q1-5': 'He is Canadian.',
        'q1-6': 'He is Colombian.',
        'q1-7': 'It is Bogota.',
        'q1-8': 'He is a Chemistry student.',
        'q1-9': 'Robert is going to study Chemistry.',
        'q1-10': 'His last name is Vance.',
        'q2-1': 'an',
        'q2-2': 'a',
        'q2-3': 'the',
        'q2-4': 'a',
        'q2-5': 'an',
        'q2-6': 'a',
        'q2-7': 'an',
        'q2-8': 'the',
        'q2-9': 'an',
        'q2-10': 'a',
        'q3-1': 'phone',
        'q3-2': 'five',
        'q3-3': 'teacher',
        'q3-4': 'morning',
        'q3-5': 'school',
        'q3-6': 'friends',
        'q4-1': 'eight years old.',
        'q4-2': 'in a beautiful house.',
        'q4-3': 'Anthony.',
        'q4-4': 'dad goes to work.',
        'q4-5': 'Sanson.',
        'q4-6': 'at seven o clock in the evening.'
    };

    const formElements = document.getElementById('quizForm').elements;

    // Recorrer todas las preguntas y verificar respuestas
    for (let element of formElements) {
        if (element.name && correctAnswers[element.name] !== undefined) {
            if (element.tagName === 'SELECT' || element.tagName === 'INPUT') {
                if (element.value === correctAnswers[element.name]) {
                    element.style.backgroundColor = 'lightgreen';
                } else {
                    element.style.backgroundColor = 'lightcoral';
                }
            }
        }
    }

    // Mostrar un mensaje o resultado si lo deseas
    document.getElementById('result').innerText = 'Quiz submitted! Check the colors to see your correct and incorrect answers.';
});
