// Hamburger
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

// FAQ
const accordionItemHeaders = document.querySelectorAll('.accordion-item-header')

accordionItemHeaders.forEach(accordionItemHeader =>{
  accordionItemHeader.addEventListener('click', e =>{
    accordionItemHeader.classList.toggle("active")
    // FAQ Transition ANimation
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")){
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  })
})

