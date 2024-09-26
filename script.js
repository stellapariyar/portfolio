// Load particles.js configuration
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// Smooth scroll to portfolio section on button click
document.getElementById('viewPageBtn').addEventListener('click', function() {
  document.getElementById('portfolio').style.display = 'block';
  window.scrollTo({
      top: document.getElementById('portfolio').offsetTop,
      behavior: 'smooth'
  });
});

// Toggle display of additional projects
document.getElementById('showMoreBtn').addEventListener('click', function () {
  const moreProjects = document.getElementById('moreProjects');
  if (moreProjects.style.display === 'none' || moreProjects.style.display === '') {
      moreProjects.style.display = 'flex';
      this.innerHTML = 'Show Less Projects';
  } else {
      moreProjects.style.display = 'none';
      this.innerHTML = 'Show More Projects';
  }
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Get input values
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;

  // Simple validation
  if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      document.getElementById('contactForm').reset(); // Reset form fields
  } else {
      alert('Please fill out all fields.');
  }
});

// Animate skill levels on scroll
window.addEventListener('scroll', function() {
  const skillLevels = document.querySelectorAll('.skill-level');

  skillLevels.forEach(function(skillLevel) {
      const skillTop = skillLevel.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the skill bar is in the viewport
      if (skillTop < windowHeight) {
          const percentage = skillLevel.getAttribute('data-percent');
          skillLevel.style.width = percentage; // Animate the width based on data-percent
      }
  });
});
