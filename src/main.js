import dayjs from 'dayjs'
import './style.css';


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

    let nextBirthday = birthDate.year(today.year());
    if (today.isAfter(nextBirthday, 'day')) {
        nextBirthday = nextBirthday.add(1, 'year');
    }
    const weeksToBirthday = nextBirthday.diff(today, 'weeks');
    let resultText = `Od wpisanej daty do dnia dzisiejszego minęło: <strong>${daysLived}</strong> dni.<br><br>`;

    if (!birthdayFunction) {
        if (weeksToBirthday === 0) {
            resultText += `Masz urodziny w tym tygodniu!`;
        } else {
            resultText += `Do Twoich urodzin pozostało <strong>${weeksToBirthday}</strong> tygodni.`;
        }
    }
    dialogContent.innerHTML = resultText;

    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});
