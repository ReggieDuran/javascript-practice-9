const buttons = document.querySelectorAll('button');

// button.onclick = function() {

// };

// const buttonClickHandler = event => {
//     event.target.disabled = true;
//     console.log(event);
// };

const anotherButtonClickHandler = () => {
    console.log('This was clicked!');
}

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//  
// });

// buttons.forEach(btn => {
//     btn.addEventListener('click', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//     console.log(event);
// })

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event)
});