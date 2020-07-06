// variables
let ctg = "";
let flags = "";
let tp = "";

let joke = "",
  setup = "",
  delivery = "";
//https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single
fetch(
  "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw&type=single"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

x = document.getElementById("btn");
x.addEventListener("click", do_stuff);

function do_stuff(btn) {
  btn.preventDefault();
  (joke = ""), (setup = ""), (delivery = "");
  console.log("The button has been clicked");
  if (document.getElementById("any").checked) {
    ctg = document.getElementById("any").value;
  } else if (document.getElementById("prog").checked) {
    ctg = document.getElementById("prog").value;
  } else if (document.getElementById("misc").checked) {
    ctg = document.getElementById("misc").value;
  } else if (document.getElementById("dark").checked) {
    ctg = document.getElementById("dark").value;
  } else {
    ctg = "any";
  }

  console.log(ctg);

  if (document.getElementById("nsfw").checked) {
    flags = document.getElementById("nsfw").value;
  }
  if (document.getElementById("religious").checked) {
    flags = flags + "," + document.getElementById("religious").value;
  }
  if (document.getElementById("political").checked) {
    flags = flags + "," + document.getElementById("political").value;
  }
  if (document.getElementById("racist").checked) {
    flags = flags + "," + document.getElementById("racist").value;
  }
  if (document.getElementById("sexist").checked) {
    flags = flags + "," + document.getElementById("sexist").value;
  }

  console.log(flags);

  if (document.getElementById("tp1").checked) {
    tp = document.getElementById("tp1").value;
  }
  if (document.getElementById("tp2").checked) {
    tp = document.getElementById("tp2").value;
  }

  console.log(tp);

  fetch(
    `https://sv443.net/jokeapi/v2/joke/${ctg}?blacklistFlags=${flags}&type=${tp}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (tp === "single") {
        console.log(data.joke);
        joke = data.joke;

        document.getElementById("p1").innerHTML = joke;
      } else {
        console.log(data.setup);
        setup = data.setup;
        document.getElementById("p1").innerHTML = setup;

        console.log(data.delivery);
        delivery = data.delivery;
        document.getElementById("p2").innerHTML = delivery;
      }
    });
}
