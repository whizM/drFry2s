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