getFetch();
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=FXgwttJKaHekN40bPxsLHLVG44m7Hlj5LcQBkQHt&count=1";

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      document.querySelector("h1").innerText = data[0].title;
      document.querySelector("img").src = data[0].hdurl;
      document.querySelector("h2").innerText = data[0].date;
      document.querySelector("#description").innerText = data[0].explanation;
      if (data[0].media_type === "image") {
        document.querySelector("iframe").style.display = "none";
        document.querySelector("img").style.display = "block";
        document.querySelector("img").src = data[0].hdurl;
      } else {
        document.querySelector("iframe").style.display = "block";
        document.querySelector("iframe").title = data[0].title;
        document.querySelector("img").style.display = "none";
        document.querySelector("iframe").src =
          data[0].url + "&autoplay=1&mute=1";
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
