import { cars } from '../js/carsdata.js';

const mainContainer = document.getElementById("container");

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

makE.textContent = "Make: " + myCar.Make;
modeL.textContent = "Model: " + myCar.Model;
yeaR.textContent = "Year: " + myCar.Year;
imG.setAttribute("src", "/images/gt7/cars/" + myCar.image);

mainContainer.appendChild(makE);
makE.appendChild(modeL);
makE.appendChild(yeaR);
makE.appendChild(imG);

});

document.body.appendChild(mainContainer);
