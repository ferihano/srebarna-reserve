function toggleSection(sectionId, btn) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none") {
      section.style.display = "block";
      btn.textContent = "Покажи по-малко";
    } else {
      section.style.display = "none";
      btn.textContent = "Прочети повече";
    }
  };


const imageContainer = document.querySelector('.image-container');


const footer = document.querySelector('#footer-container');


function checkVisibility() {
    const footerPosition = footer.getBoundingClientRect().top; 

    if (footerPosition <= window.innerHeight) {
        
        imageContainer.classList.add('hidden');
    } else {
        
        imageContainer.classList.remove('hidden');
    }
}


window.addEventListener('scroll', function() {
    
    if (window.scrollY > 100) {
        imageContainer.classList.add('scrolled');
    } else {
        imageContainer.classList.remove('scrolled');
    }

    
    checkVisibility();
});




