import { cars } from '../js/carsdata.js';

const mainContainer = document.getElementById("container");

mainContainer.className = "container";

const allCars = cars.map(myCar => {
  let carsYeah = cars.find(CAR => {
    return CAR.model === myCar.model;
  });

  return {
    // this is how the script finds the item in the array.
    Model: carsYeah.model,
    Make: carsYeah.make,
    Id: carsYeah.id,
    image: carsYeah.img,
    PP: carsYeah.pp,
    DT: carsYeah.drivetrain,
    Year: carsYeah.year,
  };
});

allCars.forEach(myCar => {

let makE = document.createElement("p");
let modeL = document.createElement("p");
let imG = document.createElement("img");
let yeaR = document.createElement("p");
let pP = document.createElement("p");
let link = document.createElement("a");

makE.className = "box";
imG.className = "imagecard";

makE.textContent = "Make: " + myCar.Make;
modeL.textContent = "Model: " + myCar.Model;
yeaR.textContent = "Year: " + myCar.Year;
pP.textContent = "Performance Points: " + myCar.PP
imG.setAttribute("src", "/images/gt7/cars/" + myCar.image);
link.setAttribute("href", "/images/gt7/cars/" + myCar.image);

mainContainer.appendChild(makE);
makE.appendChild(modeL);
makE.appendChild(yeaR);
makE.appendChild(pP);
makE.appendChild(link);
link.appendChild(imG);

});

document.body.appendChild(mainContainer);
