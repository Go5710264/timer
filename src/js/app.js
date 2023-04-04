document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.querySelector('input'); // доступ к полю ввода форматирования таймера
  const buttonEl = document.querySelector('button'); // доступ к кнопке для запуска таймера
  const timerEl = document.querySelector('span'); // доступ к таймеру
  let timeout;

  // Напишите реализацию createTimerAnimator
  // который будет анимировать timerEl
  const createTimerAnimator = () => (seconds) => {
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor(seconds / 60) - hh * 60;
    const ss = seconds % 60;

    timerEl.textContent = `${hh}:${mm}:${ss}`;
  };

  const animateTimer = createTimerAnimator();

  inputEl.addEventListener('input', () => {
    // Очистите input так, чтобы в значении
    // оставались только числа

    if (timeout) {
      clearTimeout(timeout);
    }

    setTimeout(() => {
      inputEl.value = inputEl.value.replace(/\D/g, '');
    }, 600);
  });

  buttonEl.addEventListener('click', () => {
    let seconds = Number(inputEl.value); // поступает количество секунд

    setInterval(() => {
      animateTimer(seconds);
      // seconds--; // eslint выбрасывает ошибку
      seconds -= 1;
    }, 1000);

    inputEl.value = '';
  });
});
