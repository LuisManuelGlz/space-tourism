const buttons = document.querySelectorAll('.technology-nav-list-item');

const image = document.querySelector('#technologyImage');
const name = document.querySelector('#technologyName');
const description = document.querySelector('#technologyDescription');

let currentButtonSelected = document.querySelector('.technology-active');

/**
 * Get technology data from local data
 */
const getTechnologyData = (technologyName = null) => {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const technology = technologyName
        ? data.technology.find(
            (technology) => technology.name === technologyName
          )
        : data.technology[0];

      image.src = technology.images.portrait;
      name.innerText = technology.name;
      description.innerText = technology.description;
    });
};

// Get technology data
getTechnologyData();

// Set current button selected on load and on click
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    currentButtonSelected.classList.remove('technology-active');
    button.classList.add('technology-active');
    currentButtonSelected = document.querySelector('.technology-active');
    getTechnologyData(button.dataset.technology);
  });
});
