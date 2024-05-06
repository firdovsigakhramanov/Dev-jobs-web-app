//! ---------------------- Variables ------------------------

let themeSwitch = document.querySelector(".switch > input");
const root = document.querySelector(":root");
const cardContainer = document.querySelector(".card-container");
const searchBar = document.querySelector(".search-bar> input");
const filterLocation = document.querySelector(".filter-location > input");
const filterCheckbox = document.querySelector(
  ".filter-time input[type=checkbox]"
);
const searchBtn = document.querySelector(".btn-search");
let jobId = document.querySelector("#job-id");
let jobTitle = document.querySelector("#job-title");
let jobImg = document.querySelector("#job-img");
let jobWorkType = document.querySelector("#job-work-type");
let jobCompany = document.querySelector("#job-company");
let jobLocation = document.querySelector("#job-location");
let jobUrl = document.querySelector("#job-website");
let jobInfo = document.querySelector("#job-info");
let jobRequarement = document.querySelector("#job-requarement");
let whatYouWillDo = document.querySelector("#what-you-will-do");

let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let firstPage = document.querySelector(".first-page");
let secondPage = document.querySelector(".second-page");
let createForm = document.querySelector(".create-form");
let editForm = document.querySelector(".edit-form");

let company = document.querySelector(".company");
let jobDetails = document.querySelector(".job-details");
let companyImg = document.querySelector(".company-img>img");
let companyName = document.querySelector(".company-name > p:first-child");
let companySite = document.querySelector(".company-name > p:last-child");
let footerJobName = document.querySelector(".footer__job-name");

let page = getCurrentUrl();
let data = JSON.parse(localStorage.getItem("data")) || [];
let result = [];

//? ---------------------- Index ------------------------

function getData(x) {
  let dataHtml = "";
  x.forEach((item) => {
    dataHtml += `
    <div class="card">
    <div class="card-img">
      <img src="${item.img}" alt="" />
    </div>
    <div class="card__top-bar">
      <span class="card-time">${item.time}</span>
      <div class="card-oval">
        <img src="./assets/img/Oval.svg" alt="" />
      </div>
      <span>${item.workTime}</span>
    </div>
    <a href="./details.html?id=${item.id}" class="card-title"
      >${item.title}</a
    >
    <p class="card-description">${item.company}</p>
    <div class="card-footer">
      <div class="card-location">${item.location}</div>
      <div class="card-footer__right">
        <a href="./edit.html?id=${item.id}" class="card-footer__img">
          <img src="./assets/img/pen-to-square-solid.svg" alt="" />
        </a>
        <div class="card-footer__img"  onclick="deleteCard(${item.id})">
          <img src="./assets/img/trash-solid.svg" />
        </div>
      </div>
    </div>
  </div>`;
  });
  cardContainer.innerHTML = dataHtml;
}

if (page.pageName === "index.html") {
  getData(data);

  function deleteCard(id) {
    let x = data.findIndex((item) => item?.id == id);
    data.splice(x, 1);
    localStorage.setItem("data", JSON.stringify(data));
    getData(data);
  }
}

function getCurrentUrl() {
  let id = new URLSearchParams(window.location.search).get("id");
  let pageName = window.location.pathname.split("/").pop();

  return {
    id: id,
    pageName: pageName,
  };
}

function windowOnload() {
  window.onload = function () {
    let pageTheme = localStorage.getItem("theme");
    if (pageTheme == "dark") {
      themeSwitch.classList.add("active");
      themeSwitch.checked = true;
      root.style.setProperty("--background-color", "#121721");
      root.style.setProperty("--very-dark-blue", "#FFF");
      root.style.setProperty("--white", "#19202D");
    } else {
      themeSwitch.checked = false;
    }
  };
}

//? ----------------- Edit ---------------------

if (page.pageName === "edit.html") {
  let editData = getDatabyId(page.id, data);
  jobId.value = editData.id;
  jobTitle.value = editData.title;
  jobImg.value = editData.img;

  jobWorkType.value = editData.workTime;
  jobCompany.value = editData.company;
  jobLocation.value = editData.location;
  jobUrl.value = editData.innerData.url;
  jobInfo.value = editData.innerData.info;
  jobRequarement.value = editData.innerData.requarement;
  whatYouWillDo.value = editData.innerData.whatYouWillDo;
  console.log(editData);
  editForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newData = {
      id: jobId.value,
      title: jobTitle.value,
      img: jobImg.value,
      time: new Date().toLocaleString("ru-RU"),
      workTime: jobWorkType.value,
      company: jobCompany.value,
      location: jobLocation.value,
      innerData: {
        url: jobUrl.value,
        info: jobInfo.value,
        requarement: jobRequarement.value,
        whatYouWillDo: whatYouWillDo.value,
      },
    };

    let updateData = data.map((item) => {
      if (item.id == page.id) {
        return {
          ...item,
          ...newData,
        };
      } else {
        return item;
      }
    });

    localStorage.setItem("data", JSON.stringify(updateData));
    alert("Data Edit Success");
    window.location.href = "/index.html";
  });
}

function getDatabyId(id, data) {
  return data.find((item) => {
    return item.id == id;
  });
}

//? ------------------------------------------------

windowOnload();

function themeFunction() {
  themeSwitch?.addEventListener("click", function (e) {
    if (!themeSwitch.checked) {
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
}

themeFunction();

function search(searchTerm, key, data) {
  searchTerm = searchTerm.toLowerCase();
  const filteredData = data.filter((item) => {
    const currentValue = item[key].toLowerCase();
    return currentValue.includes(searchTerm);
  });
  return filteredData;
}

searchBtn?.addEventListener("click", function (e) {
  result = search(searchBar.value, "title", data);
  result = search(filterLocation.value, "location", result);
  if (filterCheckbox.checked) {
    result = search("Full Time", "workTime", result);
  }
  getData(result);
});

//? ---------------------- Create ------------------------

createForm?.addEventListener("submit", function (e) {
  e.preventDefault();
  const newData = {
    id: jobId.value,
    title: jobTitle.value,
    img: jobImg.value,
    time: new Date().toLocaleString("ru-RU"),
    workTime: jobWorkType.value,
    company: jobCompany.value,
    location: jobLocation.value,
    innerData: {
      url: jobUrl.value,
      info: jobInfo.value,
      requarement: jobRequarement.value,
      whatYouWillDo: whatYouWillDo.value,
    },
  };

  let emptyKeys = [];

  for (const [key, value] of Object.entries(newData)) {
    if (value == "") {
      emptyKeys.push(key);
    }
  }
  if (emptyKeys.length === 0) {
    data.push(newData);
    localStorage.setItem("data", JSON.stringify(data));
    alert("Added job");
    window.location.href = "/index.html";
  }
});

jobId?.addEventListener("change", function (e) {
  console.log(search(e.target.value, "id", data));
});

nextBtn?.addEventListener("click", function (e) {
  firstPage.classList.add("hide");
  secondPage.classList.remove("hide");
});

prevBtn?.addEventListener("click", function (e) {
  secondPage.classList.add("hide");
  firstPage.classList.remove("hide");
});

//? ---------------------- Details ------------------------

let findById = data.find((item) => {
  return item.id == page.id;
});

generateInnerPage(findById);

function generateInnerPage(findById) {
  companyImg.src = findById.img;
  companyName.innerHTML = findById.title;
  companySite.innerHTML = findById.innerData.url;
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
        <div class="text">${findById.innerData.requarement}</div>
        <p class="job-details__section-title">What You Will Do</p>
        <div class="text">${findById.innerData.whatYouWillDo}</div>
  `;
}


