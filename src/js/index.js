import _ from 'lodash';
import '../styles/app.css';

// console.log(_);
// const element = document.createElement('h1');
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// document.body.appendChild(element);

function component() {
    const element = document.createElement('h1');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('test');

    return element;
}

document.body.appendChild(component());

console.log('Hello world!');