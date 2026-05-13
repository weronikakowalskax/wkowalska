import dayjs from 'dayjs'
import './style.css'

const form = document.getElementById('birthdayForm');
const bdayInput = document.getElementById('birthdayInput');
const dialog = document.getElementById('resultDialog');
const closeButton = document.getElementById('closeDialog');
const dialogContent = document.getElementById('dialogContent')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const birthDate = dayjs(bdayInput.value);
    const today = dayjs();
    const daysLived = today.diff(birthDate, 'days');
    const birthdayFunction = birthDate.date() === today.date() && birthDate.month() === today.month();

    if (birthdayFunction) {
        alert("Wszystkiego najlepszego!");
    }
    dialogContent.innerHTML = `Od wpisanej daty do dnia dzisiejszego minęło: <strong>${daysLived}</strong> dni.`;

    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});
