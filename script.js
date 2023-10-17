let quoteslist = [
  {
    quote:
      "Wisdom gathered over time I have found that every experience is a form of explanation.",
    author: "Ansel Adams",
  },
  {
    quote:
      "The thoughts we choose to think are the tools we use to paint the canvas of out.",
    author: "Louise Hay",
  },
  {
    quote:
      "When one door of happienes closes,another opens;but often we llok so long.",
    author: "Helen Leller",
  },
  {
    quote:
      "He can who thinks he can,and he cant who thinks he cant.This is an inexorable.",
    author: "Pablo picasso",
  },
  {
    quote:
      "Imagination is not a talent of some men but is the health of every man.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "By living deeply in the present moment we can understand the past better and whether.",
    author: "Thich What Hanh",
  },
  {
    quote: "Every man is a volume if you know how to read him.",
    author: "William Ellery Channing",
  },
  {
    quote:
      "you do not become good by trying to be good,but by finding the goodness.",
    author: "Eckhart Tolle",
  },
];

let quoteEle = document.getElementById("quote");
let authorEle = document.getElementById("author");

function getLocalQuotes() {
  let i = Math.floor(Math.random() * quoteslist.length);
  quoteEle.innerText = quoteslist[i].quote;
  authorEle.innerText = "--" + " " + quoteslist[i].author;
}

async function quoteAPI() {
  let response = await fetch("https://api.quotable.io/random");
  let quote = await response.json();
  quoteEle.innerText = quote.content;
  authorEle.innerText = "--" + " " + quote.author;
}

document.getElementById("getquote").onclick = quoteAPI;
