// 1.
const h2S = document.getElementsByTagName('h2')
for (const h2 of h2S) {
    h2.style.color = 'lightblue';
}

// 2.
document.getElementById('backpack').style.background = 'tomato';
document.getElementById('backpack').style.padding = '5px';

// 3.
const cards = document.getElementsByClassName('card')
for (const card of cards) {
    card.style.borderRadius = '30px';
}

// 4. 
function clicked() {
    console.log('the button is clicked')
}

// 5.
const buttons = document.getElementsByClassName('panda-btn-buy-now');
for (const button of buttons) {
    button.addEventListener('click', function (e) {
        e.target.parentNode.removeChild(e.target);
    })
}

// 6.
document.getElementById('dlt-cnfrm').addEventListener('keyup', function (e) {
    const dltBtn = document.getElementById('panda-btn-buy');
    if (e.target.value == 'email') {
        dltBtn.removeAttribute('disabled');
    }
    else {
        dltBtn.setAttribute('disabled', true);
    }

})
