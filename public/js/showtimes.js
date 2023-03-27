import { movies } from "../services/fakeData.js";

const dateFilter = document.querySelector(".showtimes__calendar-gridcontainer");
const container = document.querySelector(".container");
const moviesName = document.querySelectorAll("h1");

let moviesByDate = {};

movies.map((movie) => {
  movie.schedule.map((schedule) => {
    const quantityOfItem = movie.schedule.length + 1;

    if (!moviesByDate[schedule.date]) {
      moviesByDate[schedule.date] = [];
      // const button = document.createElement("button");
      // button.value = schedule.date;
      // button.textContent = schedule.date;
      // dateFilter.appendChild(button);
      dateFilter.style.gridTemplateColumns = `repeat(${quantityOfItem}, 120px)`;
      dateFilter.style.width = `calc(120px * ${quantityOfItem})`;

      const div = document.createElement("div");
      div.style.padding = "5px";
      div.style.backgroundColor = "white";

      const innerDiv = document.createElement("div");
      innerDiv.classList.add("showtimes__calendar_grid-item");

      const p = document.createElement("p");
      p.textContent = "Thứ 4";

      const h1 = document.createElement("h1");
      h1.textContent = schedule.date;

      innerDiv.appendChild(p);
      innerDiv.appendChild(h1);
      div.appendChild(innerDiv);
      dateFilter.appendChild(div);
    }
    moviesByDate[schedule.date].push({
      name: movie.name,
      image: movie.image,
      date: schedule.date,
      showtimes: schedule.showtimes,
    });
  });
});

// const buttonList = document.querySelectorAll("button");

// moviesByDate[buttonList[0].value].map((movie) => {
//   const nameMovie = document.createElement("h1");
//   const imgMovie = document.createElement("img");
//   nameMovie.innerText = movie.name;
//   imgMovie.src = movie.image;
//   container.append(nameMovie);
//   container.append(imgMovie);
// });

// buttonList.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const type = e.currentTarget.value;
//     container.innerHTML = "";
//     moviesByDate[type].map((movie) => {
//       const nameMovie = document.createElement("h1");
//       const imgMovie = document.createElement("img");
//       nameMovie.innerText = movie.name;
//       imgMovie.src = movie.image;
//       container.append(nameMovie);
//       container.append(imgMovie);
//     });
//   });
// });
