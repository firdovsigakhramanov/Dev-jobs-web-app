let themeSwitch = document.querySelector(".switch > input");
const root = document.querySelector(":root");
const cardContainer = document.querySelector(".card-container");
const searchBar = document.querySelector(".search-bar> input");
const filterLocation=document.querySelector(".filter-location > input");
const filterCheckbox = document.querySelector(".filter-time input[type=checkbox]");
let result = [];

const data = [
  {
    id: "1",
    title: "Senior Software Engineer",
    img: "./assets/images/Group 1.svg",
    time: "5h ago",
    workTime: "Part time",
    company: "Scoot",
    location: "United Kingdom",
  },
  {
    id: "2",
    title: "Haskell and PureScript Dev",
    img: "./assets/images/Group 2.svg",
    time: "20h ago",
    workTime: "Part time",
    company: "Haskell and PureScript Dev",
    location: "United States",
  },
  {
    id: "3",
    title: "Midlevel Back End Engineer",
    img: "./assets/images/Group 3.svg",
    time: "1dg ago",
    workTime: "Part time",
    company: "Vector",
    location: "Russia",
  },
  {
    id: "4",
    title: "Senior Software Engineer",
    img: "./assets/images/Group 4.svg",
    time: "2dg ago",
    workTime: "Full time",
    company: "Office Lite",
    location: "Japan",
  },
  {
    id: "5",
    title: "Senior Software Engineer",
    img: "./assets/images/Group 4.svg",
    time: "2dg ago",
    workTime: "Full time",
    company: "Office Lite",
    location: "Japan",
  },
  {
    id: "6",
    title: "Senior Software Engineer",
    img: "./assets/images/Group 4.svg",
    time: "2dg ago",
    workTime: "Full time",
    company: "Office Lite",
    location: "Japan",
  },
];

function getData(x) {
  let dataHtml='';
  x.forEach((item) => {
    dataHtml += `
        <a href="" class="card">
            <div class="card-img">
              <img src="" alt="" />
            </div>
            <div class="card__top-bar">
              <span class="card-time">${item.time}</span>
              <div class="card-oval">
                <img src="./assets/img/Oval.svg" alt="" />
              </div>
              <span>${item.workTime}</span>
            </div>
            <div class="card-title">${item.title}</div>
            <p class="card-description">${item.company}</p>
            <div class="card-location">${item.location}</div>
        </a>
        `;
  });
  cardContainer.innerHTML = dataHtml;
}

getData(data);

window.onload = function () {
  let pageTheme = localStorage.getItem("theme");
  if (pageTheme == "dark") {
    themeSwitch.classList.add("active");
    themeSwitch.checked = true;
  } else {
    themeSwitch.classList.remove("active");
  }
};

themeSwitch.addEventListener("click", function (e) {
  themeSwitch.classList.toggle("active");
  if (!themeSwitch.classList.contains("active")) {
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

function search(searchTerm, key, data) {
  searchTerm = searchTerm.toLowerCase();
  const filteredData = data.filter((item) => {
    const currentValue = item[key].toLowerCase();
    return currentValue.includes(searchTerm);
  });
  return filteredData;
}

searchBar.addEventListener("keyup", function (e) {
  result = search(e.target.value, "title", data);
  getData(result);
});


filterLocation.addEventListener("keyup", function (e) {
  result = search(e.target.value, "location", data);
  getData(result);
})

filterCheckbox.addEventListener("click", function (e) {
  if (e.target.checked) {
       result = search("Full Time", "workTime", data)
       getData(result)
  } else {
       getData(data)
  }
})

