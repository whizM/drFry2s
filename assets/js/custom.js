ScrollReveal().reveal('.fade_left', { 
  duration: 1600, 
  origin: 'left', 
  distance: '50px',
  // reset: true   
});

ScrollReveal().reveal('.fade_right', { 
  duration: 1600, 
  origin: 'right', 
  distance: '50px',
  // reset: true   
});

ScrollReveal().reveal('.fade_bottom_ttl', { 
  duration: 1500, 
  origin: 'bottom', 
  distance: '50px',
  // reset: true   
});

ScrollReveal().reveal('.fade_bottom_content', { 
  duration: 2500, 
  origin: 'bottom', 
  distance: '50px',
  // reset: true   
});




const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// Hide all answer sections initially
$('.item-answer').hide();

// Click event for question items
$('.item-ques').click(function() {
  // Toggle the answer for the clicked question
  $(this).next('.item-answer').slideToggle(300);

  // Toggle the rotation of the extend icon
  $(this).find('.item-ques__extend svg').toggleClass('rotated');

  // Close other open answers (optional, remove if you want multiple answers open at once)
  $('.item-answer').not($(this).next()).slideUp(300);
  $('.item-ques__extend svg').not($(this).find('.item-ques__extend svg')).removeClass('rotated');
});




