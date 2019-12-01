function speechRecognition(event) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'pl';
  recognition.interimResults = false;
  recognition.maxAlternatives = 2;
  recognition.start();

  const btnStyle = event.currentTarget.style;
  recognition.onstart = () => {
    btnStyle.backgroundColor = 'green';
  };

  recognition.onresult = e => {
    document.querySelector('.search').value = e.results[0][0].transcript;
    btnStyle.backgroundColor = 'rgba(0,0,0, 0.2)';
  };
}

export default function() {
  if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) {
    const chooseBtn = document.querySelector('#getDatas');
    const speechBtn = document.createElement('button');
    speechBtn.classList.add('speech-btn');
    speechBtn.innerHTML = `<img src='https://i.imgur.com/mCm6m8R.png' style='max-height:50%; filter:invert(100%)'>`;
    chooseBtn.insertBefore(speechBtn, chooseBtn.lastElementChild);
    speechBtn.addEventListener('click', speechRecognition);
  }
}
