const btnhamberger = document.querySelector("#btnhmb");
const over = document.querySelector("#bg");
const box = document.querySelector("#box");

btnhamberger.addEventListener('click', () => {
    if(btnhamberger.classList.contains('open') && box.classList.contains('box') ){
        box.classList.remove('box');
        box.classList.add('fade-out');
        box.classList.remove('fade-in');
        btnhamberger.classList.remove('open');
        over.classList.remove('overlay');
        over.classList.add('fade-out');
        over.classList.remove('fade-in');
    }
    else{
        btnhamberger.classList.add('open');
        over.classList.add('overlay');
        over.classList.add('fade-in');
        box.classList.add('fade-in');
        box.classList.add('box');
        box.classList.remove('fade-out');
        over.classList.remove('fade-out');
    }
}
);
