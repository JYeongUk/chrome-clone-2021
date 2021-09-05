const quotes = [
  {
    quote: "If you can give your child only one gift, let it be enthusiasm.",
    author: "Bruce Barton",
  },
  {
    quote: "God doesn't require us to suceed; he only requires that you try.",
    author: "Mother Teresa",
  },
  {
    quote: "Excellence is doing ordinary things extraordinarily well.",
    author: "John W. Gardner",
  },
  {
    quote: "Life-transforming ideas have always come to me through books.",
    author: "Bell Hooks",
  },
  {
    quote:
      "The chains of habit are generally too small to be felt until they are too strong to be broken.",
    author: "Samuel Johnson",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "When the well is dry, we know the worth of water.",
    author: "Benjamin Franklin",
  },
  {
    quote: "While we stop to think, we often miss our opportunity.",
    author: "Publilius Syrus",
  },
  {
    quote: "Happiness adds and multiplies, as we divide it with others.",
    author: "A. Nielsen",
  },
  {
    quote: "You are awesome just the way you are.",
    author: "Nick Vujicic",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
