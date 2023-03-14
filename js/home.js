const movies = [
  {
    name: "NGƯỜI KIẾN VÀ CHIẾN  BINH ONG: Thế giới lượng tử ",
    summary:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
    image: "../assets/img/antman.jpeg",
    director: "Anthony Russo, Joe Russo",
    cast: "Robert Downey Jr, Chris Evans",
    genre: "Action, Adventure, Sci-Fi",
    duration: "120p",
    release_date: "17/02/2023",
    schedule: [
      {
        date: "2023-03-15",
        showtimes: [
          {
            start_time: "10:00",
            end_time: "12:01",
          },
          {
            start_time: "12:30",
            end_time: "14:31",
          },
        ],
      },
      {
        date: "2023-03-16",
        showtimes: [
          {
            start_time: "11:00",
            end_time: "13:01",
          },
          {
            start_time: "13:30",
            end_time: "15:31",
          },
        ],
      },
    ],
  },
  {
    name: "The Dark Knight",
    summary:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "../assets/img/muongapanh.jpeg",
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger",
    genre: "Action, Crime, Drama",
    duration: "100m",
    release_date: "24/02/2023",
    schedule: [
      {
        date: "2023-03-16",
        showtimes: [
          {
            start_time: "11:30",
            end_time: "13:32",
          },
          {
            start_time: "14:00",
            end_time: "16:02",
          },
          {
            start_time: "18:30",
            end_time: "20:32",
          },
        ],
      },
      {
        date: "2023-03-17",
        showtimes: [
          {
            start_time: "11:30",
            end_time: "13:32",
          },
          {
            start_time: "14:00",
            end_time: "16:02",
          },
          {
            start_time: "18:30",
            end_time: "20:32",
          },
        ],
      },
    ],
  },
  {
    name: "SIÊU LỪA GẶP SIÊU LẦY",
    summary:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
    image: "../assets/img/sieulua.jpeg",
    director: "Anthony Russo, Joe Russo",
    cast: "Robert Downey Jr, Chris Evans",
    genre: "Action, Adventure, Sci-Fi",
    duration: "85m",
    release_date: "03/03/2023",
    schedule: [
      {
        date: "2023-03-15",
        showtimes: [
          {
            start_time: "10:00",
            end_time: "12:01",
          },
          {
            start_time: "12:30",
            end_time: "14:31",
          },
        ],
      },
      {
        date: "2023-03-16",
        showtimes: [
          {
            start_time: "11:00",
            end_time: "13:01",
          },
          {
            start_time: "13:30",
            end_time: "15:31",
          },
        ],
      },
      {
        date: "2023-03-17",
        showtimes: [
          {
            start_time: "11:00",
            end_time: "13:01",
          },
          {
            start_time: "13:30",
            end_time: "15:31",
          },
        ],
      },
    ],
  },
];

const dateFilter = document.querySelector(".control");
const container = document.querySelector(".container");
const moviesName = document.querySelectorAll("h1");

let moviesByDate = {};

movies.map((movie) => {
  movie.schedule.map((schedule) => {
    if (!moviesByDate[schedule.date]) {
      moviesByDate[schedule.date] = [];
      const button = document.createElement("button");
      button.value = schedule.date;
      button.textContent = schedule.date;
      dateFilter.appendChild(button);
    }
    moviesByDate[schedule.date].push({
      name: movie.name,
      image: movie.image,
      date: schedule.date,
      showtimes: schedule.showtimes,
    });
  });
});

const buttonList = document.querySelectorAll("button");

moviesByDate[buttonList[0].value].map((movie) => {
  const nameMovie = document.createElement("h1");
  const imgMovie = document.createElement("img");
  nameMovie.innerText = movie.name;
  imgMovie.src = movie.image;
  container.append(nameMovie);
  container.append(imgMovie);
});

buttonList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const type = e.currentTarget.value;
    container.innerHTML = "";
    moviesByDate[type].map((movie) => {
      const nameMovie = document.createElement("h1");
      const imgMovie = document.createElement("img");
      nameMovie.innerText = movie.name;
      imgMovie.src = movie.image;
      container.append(nameMovie);
      container.append(imgMovie);
    });
  });
});
