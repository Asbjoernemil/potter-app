"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const potterName = "Harry Potter";
  const potterGender = "male";
  const potterHouse = "Gryffindor";
  const potterDateOfBirth = "31-07-1980";
  const potterAncestry = "half-blood";
  const potterEyeColour = "green";
  const potterHairColour = "black";
  const potterActor = "Daniel Radcliffe";
  const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  console.log(
    potterName,
    potterGender,
    potterHouse,
    potterDateOfBirth,
    potterAncestry,
    potterEyeColour,
    potterHairColour,
    potterActor,
    potterImage
  );

  showCharacter(
    potterImage,
    potterName,
    potterHouse,
    potterDateOfBirth,
    potterActor
  );

  showCharacter(
    "http://hp-api.herokuapp.com/images/ron.jpg",
    "Ron Weasley",
    "Gryffindor",
    "01-03-1980",
    "Rupert Grint"
  );

  showCharacter(
    "http://hp-api.herokuapp.com/images/ron.jpg",
    "Hermione GRRRRR",
    "Gryffindor",
    "01-03-1980",
    "Emma Wason"
  );
}

function showCharacter(image, name, house, dateOfBirth, actor) {
  //   const articleElement = document.createElement("article");
  //   const imageElement = document.createElement("img");
  //   const nameElement = document.createElement("h2");
  //   const actorElement = document.createElement("p");
  //   const houseElement = document.createElement("p");
  //   const dateOfBirthElement = document.createElement("p");

  //   nameElement.textContent = `Full name: ${actor}`;
  //   imageElement.src = "http://hp-api.herokuapp.com/images/harry.jpg";
  //   dateOfBirthElement.textContent = `Date of Birth: ${dateOfBirth}`;
  //   houseElement.textContent = `House at school: ${house}`;
  //   actorElement.textContent = `${actor} is played by ${name}`;

  //   articleElement.appendChild(imageElement);
  //   articleElement.appendChild(nameElement);
  //   articleElement.appendChild(actorElement);
  //   articleElement.appendChild(houseElement);
  //   articleElement.appendChild(dateOfBirthElement);

  //   articleElement.append(
  //     imageElement,
  //     nameElement,
  //     actorElement,
  //     houseElement,
  //     dateOfBirthElement
  //   );

  //   document.querySelector("#characters").appendChild(articleElement);

  //   console.log(imageElement);
  //   console.log(houseElement);
  //   console.log(nameElement);

  const myHtml = `
			<article>
				<img src="${image}">
				<h2> Full name: ${name}</h2>
                <p>Date of Birth: ${dateOfBirth}</p>
                <p>House: ${house}</p>
                <p>${name} is played by actor: ${actor}</p>
			</article>
	`;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHtml);
}
