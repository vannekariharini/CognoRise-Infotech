document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
  
    const data = { email, phone, message };
  
    fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
      alert('Form submitted successfully!');
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  

  const PANTRY_URL = 'https://getpantry.cloud/apiv1/pantry/9f05025d-a111-4fa8-9ec2-9e9e01600ace/basket/newBasket';

function fetchTitles() {
  fetch(PANTRY_URL)
    .then(response => response.json())
    .then(data => {
      console.log('Data fetched from Pantry:', data);
      updateBlogSection(data);
    })
    .catch(error => {
      console.error('Error fetching from Pantry:', error);
    });
}

function updateBlogSection(data) {
  const blogSection = document.getElementById('blog');
  const cards = blogSection.querySelectorAll('.card');

  // Convert the data object to an array of values
  const titles = Object.values(data);

  // Ensure you don't exceed the number of available cards
  titles.forEach((title, index) => {
    if (cards[index]) {
      const pElement = cards[index].querySelector('.content-card p');
      pElement.textContent = title;
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchTitles();
});



const navbar = document.getElementById('navbar');
window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')

    }
}


const scrollrevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
}

ScrollReveal().reveal('.home h1',scrollrevealOption)
ScrollReveal().reveal('.home h4',{
    ...scrollrevealOption,
    delay:800,
})
ScrollReveal().reveal('.home .btn-explore',{
    ...scrollrevealOption,
    delay:1200,
})

ScrollReveal().reveal('.about .about-title',scrollrevealOption)
ScrollReveal().reveal('.about .about-desc',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.about .item-data',{
    ...scrollrevealOption,
    delay:1200,
})
ScrollReveal().reveal('.btn-explore',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.btn-more',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.card',scrollrevealOption)

ScrollReveal().reveal('.card .image',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.card .content-card h4',{
    ...scrollrevealOption,
    delay:1600,
})
ScrollReveal().reveal('.next .card .content-card  p',{
    ...scrollrevealOption,
    delay:2000,
})



ScrollReveal().reveal('.next .card .content-card p',{
    ...scrollrevealOption,
    delay:600,
})


ScrollReveal().reveal('form .input',scrollrevealOption)
ScrollReveal().reveal('row .card',scrollrevealOption)



