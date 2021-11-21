const tabs = document.querySelectorAll('.destination-nav-list-item');

const image = document.querySelector('#destinationImage');
const name = document.querySelector('#destinationName');
const description = document.querySelector('#destinationDescription');
const distance = document.querySelector('#destinationDistance');
const travel = document.querySelector('#destinationTravel');

let currentTabSelected = document.querySelector('.destination-active');

/**
 * Get destination data from local data
 */
const getDestinationData = (destinationName = null) => {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const destination = destinationName
        ? data.destinations.find(
            (destination) => destination.name === destinationName
          )
        : data.destinations[0];

      image.src = destination.images.png;
      name.innerText = destination.name;
      description.innerText = destination.description;
      distance.innerText = destination.distance;
      travel.innerText = destination.travel;
    });
};

// Get destination data
getDestinationData();

// Set current tab selected on load and on click
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    currentTabSelected.classList.remove('destination-active');
    tab.classList.add('destination-active');
    currentTabSelected = document.querySelector('.destination-active');
    getDestinationData(tab.dataset.destination);
  });
});
