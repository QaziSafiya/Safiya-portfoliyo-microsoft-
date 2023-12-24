/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/img3.png";

const imageAltText = "Self Learner";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My streaming plateform",
    description:
      "It is a streaming plateform like youtube we can see the live vedios and recorded vedios , it is made in react-js +redux.",
    url: "https://github.com/QaziSafiya/Youtube-clone-",
  },
  {
    title: "Shopping Markitplace ",
    description:
      "It is a markitplace project where we can see the buy and sell the products on a whatsup , here admin can create a markitplace group on a whatsup and join the members it is just simple like a community , ",
    url: "https://github.com/QaziSafiya/CROSSHURDEL-Markitplace",
  },
  {
    title: "Landing page ",
    description:
      "It is a landing page where we can see the functionality of login , signIn and signup .",
    url: "https://github.com/QaziSafiya/Beditaskinterns",
  },
  {
    title: "Roz ka target",
    description:
      "It is a website where we can set the daily routine plans and can delete the task after finish the task",
    url: "https://github.com/QaziSafiya/Dailyroutine-Task",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
