// script.js
function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");
    
    // Change text content
    welcomeText.innerText = "JavaScript is Dynamic and Fun!";
    
    // Add a pulsating animation
    welcomeText.classList.add("pulse-animation");
    
    // Change button color randomly
    button.style.backgroundColor = getRandomColor();
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function createShapes() {
    const container = document.querySelector('.floating-shapes');
    
    for (let i = 0; i < 50; i++) {
      const shape = document.createElement('div');
      shape.classList.add('shape');
      shape.style.left = `${Math.random() * 100}vw`;
      shape.style.animationDuration = `${5 + Math.random() * 10}s`;
      container.appendChild(shape);
    }
  }
  
  createShapes();

  function displayGreeting() {
    const name = document.getElementById('name-input').value;
    const greetingMessage = document.getElementById('greeting-message');
    greetingMessage.innerText = `Welcome to JavaScript, ${name}!`;
  }

  function createParticles(event) {
    const particlesContainer = document.getElementById('particles-container');
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${event.clientX}px`;
      particle.style.top = `${event.clientY}px`;
      particle.style.setProperty('--x', `${Math.random() * 100 - 50}px`);
      particle.style.setProperty('--y', `${Math.random() * 100 - 50}px`);
      particlesContainer.appendChild(particle);
  
      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    }
  }

  const message = "Welcome to JavaScript";
let index = 0;

function typeMessage() {
  const typingMessage = document.getElementById('typing-message');
  if (index < message.length) {
    typingMessage.innerHTML += message[index];
    index++;
    setTimeout(typeMessage, 100);
  }
}

typeMessage();

  