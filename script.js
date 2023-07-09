const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    })
};

if(close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    })
};

// -----------Google form--------------

const scriptURL = 'https://script.google.com/macros/s/AKfycby7BwW1ae3ONzpKFJz9RPlhkh2P9Rkk43x1gKAarmPcktxexxZp5P_vqw9tWzqXA8pA3w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})