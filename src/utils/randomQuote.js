const quotesObj = [
  {
    quote:
      "What makes a child gifted and talented may not always be good grades in school, but a different way of looking at the world and learning.",
    name: "Chuck Grassley",
  },
  {
    quote:
      "Most men and women, by birth or nature, lack the means to advance in wealth or power, but all have the ability to advance in knowledge.",
    name: "Pitagoras",
  },
  {
    quote:
      "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
    name: "Mortimer Adler",
  },
  {
    quote:
      "The content of a book holds the power of education and it is with this power that we can shape our future and change lives.",
    name: "Malala Yousafzaiq",
  },
  {
    quote:
      "Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.",
    name: "Walter Cronkite",
  },
  {
    quote:
      "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.",
    name: "Carl Sagan",
  },
  {
    quote:
      "Reading should not be presented to children as a chore, a duty. It should be offered as a gift.",
    name: "Kate DiCamillo",
  },
  {
    quote: "If you don’t like to read, you haven’t found the right book.",
    name: "J.K. Rowling",
  },
];

export default function getQuote() {
  let i = Math.floor(Math.random() * quotesObj.length);
  return quotesObj[i];
}
