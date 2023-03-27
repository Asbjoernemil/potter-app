"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const harry = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: "holly,phoenix feather,11",
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  };

  // Hermione Granger
  const hermione = {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: "vine,dragon heartstring",
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  };

  // Ron Weasley
  const ron = {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: "willow,unicorn tail-hair,14",
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  };

  showCharacter(harry);
  showCharacter(ron);
  showCharacter(hermione);

  //
}

function showCharacter(character) {
  console.log(character);
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
				<img src="${character.image}">
				<h2> Full name: ${character.name}</h2>
                <p>Date of Birth: ${character.dateOfBirth}</p>
                <p>House: ${character.house}</p>
                <p>${character.name} is played by actor: ${character.actor}</p>
			</article>
	`;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHtml);

  // kan clicke på karakter
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  // funktion inde i funtion og åbner vinduet
  function characterClicked() {
    document.querySelector("dialog").showModal();
  }
}

const butters = {
  name: `Leopold "Butters" Stotch`,
  nickname:
    "Inspector Butters, Marjorine, Mantequilla, Paladin Butters the Merciful, Professor Chaos",
  image:
    "http://southparkstudios.mtvnimages.com/shared/characters/kids/butters-stotch.png",
  occupation: "Student",
  age: 10,
  voicedBy: "Matt Stone",
  gender: "Male",
  religion: "Roman Catholic , Temporary: Blaintologist*",
  catchPhrase: "Do you know what i am saying?",
  hairColor: "Blond",
  schoolGrade: 4,
  episodes: "S01E01 to S26E05",
  appearances: 317,
  firstAppearance: "S01E01",
};
