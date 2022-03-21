import React from "react";

function Article({ title, preview, date = "January 1, 1970", minutes }) {
  let displayMins = "";
  let roundMinFives = (Math.round(minutes / 5) * 5) / 5;
  let roundMinTen = (Math.round(minutes / 10) * 10) / 10;

  if (minutes < 30) {
    for (let i = 0; i < roundMinFives; i++) {
      displayMins += `☕️`;
    }
    displayMins += minutes;
  } else if (minutes >= 30) {
    for (let i = 0; i < roundMinTen; i++) {
      displayMins += `🍱`;
    }
    displayMins += minutes;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{displayMins}</p>
    </article>
  );
}

export default Article;
