//  зберігаємо інформацію про систему в localStorage та вивід у футлер

const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
};

localStorage.setItem('systemInfo', JSON.stringify(info));

const saved = JSON.parse(localStorage.getItem('systemInfo'));
const list = document.getElementById('storage-info');

for (const key in saved) {
    const li = document.createElement('li');
    li.textContent = key + ': ' + saved[key];
    list.appendChild(li);
}



async function loadReviews() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/15/comments');
    const comments = await response.json();

    const status = document.getElementById('reviews-status');
    const container = document.getElementById('reviews-list');

    status.textContent = '';

    for (const comment of comments) {
        const card = document.createElement('div');

        const title = document.createElement('h3');
        title.textContent = comment.name;

        const email = document.createElement('p');
        email.textContent = comment.email;

        const text = document.createElement('p');
        text.textContent = comment.body;

        card.appendChild(title);
        card.appendChild(email);
        card.appendChild(text);
        container.appendChild(card);
    }
}

loadReviews();





//форма
const modal = document.getElementById('modal');
const closeButton = document.getElementById('modal-close');

setTimeout(function() {
    modal.hidden = false;
}, 60000);

closeButton.addEventListener('click', function() {
    modal.hidden = true;
});

//тема

const hours = new Date().getHours();

if (hours < 7 || hours >= 21) {
    document.body.classList.add('dark-mode');
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});