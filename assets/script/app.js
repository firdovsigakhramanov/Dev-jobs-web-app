let themeSwitch = document.querySelector(".switch > input");
const root = document.querySelector(":root");
const cardContainer = document.querySelector(".card-container");
const searchBar = document.querySelector(".search-bar> input");
const filterLocation = document.querySelector(".filter-location > input");
const filterCheckbox = document.querySelector(
  ".filter-time input[type=checkbox]"
);
const searchBtn = document.querySelector(".btn-search");
let result = [];

const data = [
  {
    id: "1",
    title: "Senior Software Engineer",
    img: "./assets/img/Group 3 Copy 3.svg",
    time: "5h ago",
    workTime: "Part time",
    company: "Scoot",
    location: "United Kingdom",
    innerData: {
      jobLogo: "./assets/img/Group 3.svg",
      jobUrl: "scoot.com",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
      requirement: {
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
        list: [
          {
            id: 1,
            text: "lorem dolar sit amet",
          },
          {
            id: 2,
            text: "lorem dolar sadasd asnfihf",
          },
          {
            id: 3,
            text: "ahsab hawba snaubwdn",
          },
          {
            id: 4,
            text: "ahsab hawba snaubwdn",
          },
        ],
      },
      whatYouWillDo: {
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
        list: [
          {
            id: 1,
            text: "lorem dolar sit amet",
          },
          {
            id: 2,
            text: "lorem dolar sadasd asnfihf",
          },
          {
            id: 3,
            text: "ahsab hawba snaubwdn",
          },
          {
            id: 4,
            text: "ahsab hawba snaubwdn",
          },
        ],
      },
    },
  },
  {
    id: "2",
    title: "Haskell and PureScript Dev",
    img: "./assets/img/Group 3.svg",
    time: "20h ago",
    workTime: "Part time",
    company: "Haskell and PureScript Dev",
    location: "United States",
    innerData: {
      jobLogo: "./assets/img/Group 3.svg",
      jobUrl: "scoot.com",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
      requirement: {
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
        list: [
          {
            id: 1,
            text: "lorem dolar sit amet",
          },
          {
            id: 2,
            text: "lorem dolar sadasd asnfihf",
          },
          {
            id: 3,
            text: "ahsab hawba snaubwdn",
          },
          {
            id: 4,
            text: "ahsab hawba snaubwdn",
          },
        ],
      },
      whatYouWillDo: {
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
        list: [
          {
            id: 1,
            text: "lorem dolar sit amet",
          },
          {
            id: 2,
            text: "lorem dolar sadasd asnfihf",
          },
          {
            id: 3,
            text: "ahsab hawba snaubwdn",
          },
          {
            id: 4,
            text: "ahsab hawba snaubwdn",
          },
        ],
      },
    },
  },
  {
    id: "3",
    title: "Midlevel Back End Engineer",
    img: "./assets/img/Group 5 Copy 2.svg",
    time: "1dg ago",
    workTime: "Part time",
    company: "Vector",
    location: "Russia",
    innerData: {
      jobLogo: "./assets/img/Group 3.svg",
      jobUrl: "scoot.com",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
      requirement: {
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
        list: [
          {
            id: 1,
            text: "lorem dolar sit amet",
          },
          {
            id: 2,
            text: "lorem dolar sadasd asnfihf",
          },
          {
            id: 3,
            text: "ahsab hawba snaubwdn",
          },
          {
            id: 4,
            text: "ahsab hawba snaubwdn",
          },
        ],
      },
      whatYouWillDo: {
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
        list: [
          {
            id: 1,
            text: "lorem dolar sit amet",
          },
          {
            id: 2,
            text: "lorem dolar sadasd asnfihf",
          },
          {
            id: 3,
            text: "ahsab hawba snaubwdn",
          },
          {
            id: 4,
            text: "ahsab hawba snaubwdn",
          },
        ],
      },
    },
  },
  {
    id: "4",
    title: "Computer Engineer",
    img: "./assets/img/Group10.svg",
    time: "2dg ago",
    workTime: "Full time",
    company: "Office Lite",
    location: "Japan",
    innerData: {
      jobLogo: "./assets/img/Group 3.svg",
      jobUrl: "scoot.com",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
      requirement: {
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
        list: [
          {
            id: 1,
            text: "lorem dolar sit amet",
          },
          {
            id: 2,
            text: "lorem dolar sadasd asnfihf",
          },
          {
            id: 3,
            text: "ahsab hawba snaubwdn",
          },
          {
            id: 4,
            text: "ahsab hawba snaubwdn",
          },
        ],
      },
      whatYouWillDo: {
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas praesentium illum explicabo mollitia, debitis odit officiis culpa delectus ipsum magnam nisi, veritatis quibusdam! Ex quam hic consectetur voluptatum impedit!",
        list: [
          {
            id: 1,
            text: "lorem dolar sit amet",
          },
          {
            id: 2,
            text: "lorem dolar sadasd asnfihf",
          },
          {
            id: 3,
            text: "ahsab hawba snaubwdn",
          },
          {
            id: 4,
            text: "ahsab hawba snaubwdn",
          },
        ],
      },
    },
  },
  {
    id: "5",
    title: "Data Science Engineer",
    img: "./assets/img/Group 11.svg",
    time: "2dg ago",
    workTime: "Full time",
    company: "Office Lite",
    location: "Brasil",
  },
  {
    id: "6",
    title: "Senior Software Engineer",
    img: "./assets/img/Group13.svg",
    time: "2dg ago",
    workTime: "Full time",
    company: "Office Lite",
    location: "Chine",
  },
  {
    id: "7",
    title: "Electric Engineer",
    img: "./assets/img/Group14.svg",
    time: "2dg ago",
    workTime: "Full time",
    company: "Office Lite",
    location: "Chine",
  },
  {
    id: "8",
    title: "Data Science Engineer",
    img: "./assets/img/Group 3.svg",
    time: "2dg ago",
    workTime: "Full time",
    company: "Office Lite",
    location: "Argentina",
  },
];

function getData(x) {
  let dataHtml = "";
  x.forEach((item) => {
    dataHtml += `
        <a href="./details.html?id=${item.id}" class="card">
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
    root.style.setProperty("--background-color", "#121721");
    root.style.setProperty("--very-dark-blue", "#FFF");
    root.style.setProperty("--white", "#19202D");
  } else {
    themeSwitch.checked = false;
  }
};

themeSwitch.addEventListener("click", function (e) {
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

function search(searchTerm, key, data) {
  searchTerm = searchTerm.toLowerCase();
  const filteredData = data.filter((item) => {
    const currentValue = item[key].toLowerCase();
    return currentValue.includes(searchTerm);
  });
  return filteredData;
}

searchBtn.addEventListener("click", function (e) {
  result = search(searchBar.value, "title", data);
  result = search(filterLocation.value, "location", result);
  if (filterCheckbox.checked) {
    result = search("Full Time", "workTime", result);
  }
  getData(result);
});

// searchBar.addEventListener("keyup", function (e) {
//   result = search(e.target.value, "title", data);
//   getData(result);
//   console.log(result);
// });

// filterLocation.addEventListener("keyup", function (e) {
//   result = search(e.target.value, "location", data);
//   getData(result);
//   console.log(result);
// });

// filterCheckbox.addEventListener("click", function (e) {
//   if (e.target.checked) {
//     result = search("Full Time", "workTime", data);
//     getData(result);
//   } else {
//     getData(data);
//   }
// });
