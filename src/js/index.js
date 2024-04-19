import _ from 'lodash';
import '../style/css/app.css';
import '../style/sass/main.scss';
import img1 from '../assets/ApexX_01.jpg';

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

// function imgComponent(img) {
//     const imgElement = document.createElement('img');
//     imgElement.src = img;
//     const element = document.createElement('div');
//     element.appendChild(imgElement);
// }
// console.log(imgComponent(img1));

// document.body.appendChild(imgComponent(img1));

// console.log(img);

console.log('Hello world!');