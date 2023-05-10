const menuIcon = document.querySelector("#menu");
const menuBar = document.querySelector("#menubar");

menuIcon.addEventListener("click", () => {
  let isExpanded = menuIcon.getAttribute("aria-expanded");
  let logo = document.querySelector("#logo");
  if (isExpanded == "false") {
    isExpanded = "true";
  } else {
    isExpanded = "false";
  }
  menuIcon.setAttribute("aria-expanded", isExpanded);

  if (isExpanded == "true") {
    menuIcon.innerHTML = `<i class="fa-solid fa-x text-white"></i>`;
    logo.setAttribute("src", "./images/logo-bookmark-white.svg");
  } else {
    menuIcon.innerHTML = `<i class="fa-solid fa-bars "></i>`;
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
});

// features
const tabs = document.querySelectorAll("[role='feature-nav']");
tabs.forEach((tab) => {
  const articles = document.querySelectorAll("article");
  tab.addEventListener("click", (e) => {
    let tabId = e.target.id;
    document.querySelector(".active").classList.remove("active");
    if (tabId) {
      tab.classList.add("active");
    }
    articles.forEach((article) => {
      if (article.classList.contains("flex")) {
        article.classList.remove("flex");
        article.classList.add("hidden");
      }
      if (article.id == tabId) {
        article.classList.add("flex");
        article.classList.remove("hidden");
      }
    });
  });
});
// faqs
const faqs = document.querySelectorAll("#faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    let faqsContainer = document.querySelector("#faqs-container");
    let faqAnswers = document.querySelectorAll("#faq-answer");
    let arrowIcons = document.querySelectorAll("#arrow-icon");
    // add hidden class to all answers including shown ones
    faqAnswers.forEach((faqAns) => {
      faqAns.classList.add("hidden");
    });
    arrowIcons.forEach((icon) => {
      icon.classList.remove("arrow-invert");
    });

    faq.classList.toggle("open");

    let faqAnswer = faq.querySelector("#faq-answer");
    let arrowIcon = faq.querySelector("#arrow-icon");
    arrowIcon.classList.remove("arrow-invert");
    if (faq.classList.contains("open")) {
      // removing the targeted hidden class
      faqAnswer.classList.remove("hidden");
      arrowIcon.classList.add("arrow-invert");
    } else {
      faqAnswer.classList.add("hidden");
      arrowIcon.classList.remove("arrow-invert");
    }
  });
});
// form validation
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.querySelector("#email");
  const formGroup = document.querySelector("#form-group");
  const errorIcon = document.querySelector("#error-icon");
  const errorMsg = document.querySelector("#error-msg");
  if (email.value == "") {
    errorMsg.innerText = "Email cannot be empty";
    email.classList.add("error");
    errorIcon.classList.remove("hidden");
    errorMsg.classList.remove("hidden");
    formGroup.classList.add("error-form-group");
  } else if (!regex.test(email.value)) {
    errorMsg.innerText = "Whoops! make sure it's an email";
    email.classList.add("error");
    errorIcon.classList.remove("hidden");
    errorMsg.classList.remove("hidden");
  } else {
    errorIcon.classList.add("hidden");
    errorMsg.classList.add("hidden");
    email.classList.remove("error");
  }
});
