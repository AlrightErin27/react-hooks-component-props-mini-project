import React from "react";

function About({ about, src = "https://via.placeholder.com/215" }) {
  return (
    <aside>
      <img src={src} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
