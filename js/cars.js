import { cars } from '../js/carsdata.js';

const mainContainer = document.getElementById("container");

const allCars = cars.map(myCar => {
  let carsYeah = cars.find(CAR => {
    return CAR.name === myCar.name;
  });

  return {
    // this is how the script finds the item in the array.
    Model: myCar.model,
    Make: carsYeah.make,
    Id: carsYeah.id,
    image: carsYeah.img,
    PP: carsYeah.pp,
    DT: carsYeah.drivetrain,
  };
});

allCars.forEach(myCar => {

let makE = document.createElement("p");
let modeL = document.createElement("p");
let imG = document.createElement("img");

makE.textContent = "Make: " + myCar.Make;
modeL.textcontent = "Model: " + myCar.Model;
imG.setAttribute("src", "/images/gt7/cars/" + myCar.image);

mainContainer.appendChild(makE);
makE.appendChild(modeL);
makE appendChild(imG);

});

document.body.appendChild(mainContainer);
