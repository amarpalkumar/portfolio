'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { 
  console.log(elem);
  if (elem) elem.classList.toggle("active"); 
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) {
  // sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  // });
}

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
  elementToggleFunc(modalContainer);
  elementToggleFunc(overlay);
}

// Add click event to all modal items if elements exist
if (testimonialsItem.length && modalContainer && modalCloseBtn && overlay && modalImg && modalTitle && modalText) {
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");
      
      if (avatar && title && text) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
        modalTitle.innerHTML = title.innerHTML;
        modalText.innerHTML = text.innerHTML;
        testimonialsModalFunc();
      }
    });
  }

  // Close modal on button and overlay click
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select && selectItems.length && selectValue) {
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });

  // Add event to all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
if (form && formInputs.length && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all navigation links if elements exist
if (navigationLinks.length && pages.length) {
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      for (let j = 0; j < pages.length; j++) {
        if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
          pages[j].classList.add("active");
          navigationLinks[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }
    });
  }
}

// code for send email using emailjs
  
// Initialize EmailJS with your user ID
(function() {
  // Check if emailjs is loaded
  if (typeof emailjs === 'undefined') {
    console.error('EmailJS SDK is not loaded!');
    return;
  }
  emailjs.init("ryZL7O-Q_2gf1ZTUc"); // Replace with your actual EmailJS user ID
})();

// Handle form submission
document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = {
    Name: this.querySelector('input[name="Name"]').value,
    Email: this.querySelector('input[name="Email"]').value,
    Mobile: this.querySelector('input[name="Mobile"]').value,
    Company: this.querySelector('input[name="Company"]').value,
    message: this.querySelector('textarea[name="message"]').value,
  };

  console.log("call email -->",formData);
  const data = {message:JSON.stringify(formData)}

  // Send email using EmailJS
  emailjs.send("service_kryi52a","template_lyclep8", data)
    .then(function(response) {
      alert('Message sent successfully!');
      console.log('Email sent!', response.status, response.text);
    }, function(error) {
      alert('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    });
});
