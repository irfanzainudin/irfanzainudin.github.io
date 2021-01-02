const root = document.getElementById('root');

const myName = document.getElementById('my-name');
const uni = document.getElementById('university');

myName.innerText = 'Irfan Zainudin';
uni.innerText = 'Software Engineering @ UNSW';

left = () => {
    const webdevProjects = document.getElementById('webdev-projects');
    const gamedevProjects = document.getElementById('gamedev-projects');

    if (webdevProjects.style.display.match('none')) {
        webdevProjects.setAttribute('style', 'display: block');
        gamedevProjects.setAttribute('style', 'display: none');
    }
}

right = () => {
    const webdevProjects = document.getElementById('webdev-projects');
    const gamedevProjects = document.getElementById('gamedev-projects');

    if (gamedevProjects.style.display.match('none')) {
        webdevProjects.setAttribute('style', 'display: none');
        gamedevProjects.setAttribute('style', 'display: block');
    }
}
