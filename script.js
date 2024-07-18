document.addEventListener('DOMContentLoaded', () => {
    const teachBtn = document.getElementById('teach-btn');
    const learnBtn = document.getElementById('learn-btn');
    const sessionList = document.getElementById('session-list');

    teachBtn.addEventListener('click', () => {
        const subject = prompt('What subject would you like to teach?');
        if (subject) {
            addSession(`Teaching session: ${subject}`);
        }
    });

    learnBtn.addEventListener('click', () => {
        const subject = prompt('What subject would you like to learn?');
        if (subject) {
            addSession(`Learning session: ${subject}`);
        }
    });

    function addSession(sessionText) {
        const li = document.createElement('li');
        li.textContent = sessionText;
        sessionList.appendChild(li);
    }
});