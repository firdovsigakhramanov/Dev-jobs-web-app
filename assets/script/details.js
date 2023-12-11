let id = new URLSearchParams(window.location.search).get("id");
let company = document.querySelector(".company");
let jobDetails = document.querySelector(".job-details");
let companyImg = document.querySelector(".company-img>img");
let companyName = document.querySelector(".company-name > p:first-child");
let companySite = document.querySelector(".company-name > p:last-child");
let footerJobName = document.querySelector(".footer__job-name");
let detailsThemeSwitch = document.querySelector(
  ".details__theme-switch  input"
);

let findById = data.find((item) => {
  return item.id == id;
});

generateInnerPage(findById);

function generateInnerPage(findById) {
  companyImg.src = findById.img;
  companyName.innerHTML = findById.title;
  companySite.innerHTML = findById.innerData.jobUrl;
  footerJobName.innerHTML = findById.title;
  jobDetails.innerHTML = `
        <div class="job-title">
          <div class="job-left">
            <div class="job-date">
              <p>${findById.time}</p>
              <img class="oval" src="./assets/img/Oval.svg" alt="" />
              <p>${findById.workTime}</p>
            </div>
            <div class="job-name">${findById.title}</div>
            <div class="job-loaction">${findById.location}</div>
          </div>
          <div class="job-right">
            <div class="btn-primary">Apply Now</div>
          </div>
        </div>
        <div class="info text">${findById.innerData.info}</div>
        <p class="job-details__section-title">Requirements</p>
        <div class="text">${findById.innerData.requirement.info}</div>
        <p class="job-details__section-title">What You Will Do</p>
        <div class="text">${findById.innerData.whatYouWillDo.info}</div>
  `;
}

window.onload = function () {
  let pageTheme = localStorage.getItem("theme");
  if (pageTheme == "dark") {
    detailsThemeSwitch.classList.add("active");
    detailsThemeSwitch.checked = true;
    root.style.setProperty("--background-color", "#121721");
    root.style.setProperty("--very-dark-blue", "#FFF");
    root.style.setProperty("--white", "#19202D");
  }
};

console.log(detailsThemeSwitch);

detailsThemeSwitch.addEventListener("click", function (e) {
  if (!detailsThemeSwitch.checked) {
    localStorage.setItem("theme", "light");
    root.style.setProperty("--header-background-color", "#5964e0");
    root.style.setProperty("--white", "#fff");
    root.style.setProperty("--filter-bar-border", "rgba(110, 127, 151, 0.2)");
    root.style.setProperty("--background-color", "#f4f6f8");
    root.style.setProperty("--very-dark-blue", "#19202d");
    root.style.setProperty("--dark-grey", "#6e8098");
    root.style.setProperty("--light-violet", "#939bf4");
    root.style.setProperty(
      "--secondary-btn-background",
      "rgba(87, 98, 224, 0.1)"
    );
    root.style.setProperty(
      "--secondary-btn-hover",
      "rgba(87, 98, 224, 0.3512)"
    );

  } else {
    localStorage.setItem("theme", "dark");
    root.style.setProperty("--background-color", "#121721");
    root.style.setProperty("--very-dark-blue", "#FFF");
    root.style.setProperty("--white", "#19202D");
  }
});
