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

makE.textContent = myCar.Make;
modeL.textcontent = myCar.Model;

mainContainer.appendChild(makE);
mainContainer.appendChild(modeL);

});

document.body.appendChild(mainContainer);
