const dots = document.querySelectorAll('.crew-nav-list-item');

const image = document.querySelector('#crewImage');
const name = document.querySelector('#crewName');
const bio = document.querySelector('#crewBio');
const role = document.querySelector('#crewRole');

let currentDotSelected = document.querySelector('.crew-active');

/**
 * Get crew data from local data
 */
const getCrewData = (crewName = null) => {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const crew = crewName
        ? data.crew.find((crew) => crew.name === crewName)
        : data.crew[0];

      image.src = crew.images.png;
      name.innerText = crew.name;
      bio.innerText = crew.bio;
      role.innerText = crew.role;
    });
};

// Get crew data
getCrewData();

// Set current dot selected on load and on click
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    currentDotSelected.classList.remove('crew-active');
    dot.classList.add('crew-active');
    currentDotSelected = document.querySelector('.crew-active');
    getCrewData(dot.dataset.crew);
  });
});
