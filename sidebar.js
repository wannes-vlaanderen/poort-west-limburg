function createSidebar() {
  /*
  This function creates a sidebar next to a map, the html should have a map div already in place, eg.
  <body>
    <div id="map">
  </body>

  Everything else gets taken care of
  */
  const div1 = document.createElement("div")
  div1.classList.add('flex-parent', 'viewport-full', 'relative', 'scroll-hidden')
  div1.id = "div1"
  const div2 = document.createElement("div")
  div2.classList.add('flex-child', 'w-full', 'w360-ml', 'absolute', 'static-ml', 'left', 'bottom')
  div2.style.backgroundColor = "#f5f4ec"
  const sidebar = document.createElement("div")
  sidebar.id = 'sidebarA'
  sidebar.classList.add('flex-parent', 'flex-parent--column-ml', 'flex-parent--center-main', 'py12', 'px12')
  sidebar.style.backgroundColor = "#f5f4ec"
  const title = document.createElement("h3")
  title.id = "title"
  title.classList.add('txt-l-ml', 'txt-m', 'txt-bold', 'mb6', 'mr0-ml', 'mr24', 'align-center', 'block')
  //title.style.backgroundColor = "#dddddd"
  const description = document.createElement("p")
  description.id = 'description'
  description.classList.add('txt-s', 'py12', 'none', 'block-ml')
  //description.style.backgroundColor = "#dddddd"
  
  const buttonDiv = document.createElement("div")
  buttonDiv.classList.add('flex-parent', 'flex-parent--center-main', 'relative-ml', 'absolute', 'right', 'top', 'mt0-ml', 'px6')
  buttonDiv.id = "buttonDiv"
  const listing = document.createElement("div")
  listing.id = 'listings'
  listing.classList.add('flex-child', 'py12', 'px12', 'listings', 'scroll-auto', 'bg-white')
  
  sidebar.appendChild(title)
  sidebar.appendChild(description)
  sidebar.appendChild(buttonDiv) // option to add button for filters here
  sidebar.appendChild(listing)
  
  div2.appendChild(sidebar)
  div1.appendChild(div2)
  
  const map = document.getElementById('map')
  map.parentNode.removeChild(map)
  map.classList.add('flex-child', 'flex-child--grow', 'w-auto', 'viewport-full-ml', 'viewport-twothirds')
  div1.appendChild(map)
  
  document.body.appendChild(div1)
}

function buildLocationList(locationData) {
  // Add a new listing section to the sidebar.
  const listings = document.getElementById('listings');
  listings.innerHTML = '';
  locationData.features.forEach((location, i) => {
    const prop = location.properties;

    const item = listings.appendChild(document.createElement('div'));
    // Setup properties
    item.id = 'item' + prop.id;
    item.classList.add('item');

    // Add the link to the individual listing created above.
    const button = item.appendChild(document.createElement('button'));
    button.classList.add('title');
    button.id = 'button' + prop.id;

    const p = button.appendChild(document.createElement('p'))
    p.lineHeight = 1.25
    p.innerHTML = prop[config.sideBarInfo[0]]

    // Add details to the individual listing.
    const details = item.appendChild(document.createElement('div'));
    details.classList.add('content');

    for (let i = 1; i < config.sideBarInfo.length; i++) {
      const div = document.createElement('div');
      div.innerText += prop[config.sideBarInfo[i]];
      details.appendChild(div);
    }

    button.addEventListener('click', () => {
      const clickedListing = location.geometry.coordinates;
      flyToLocation(clickedListing);
      createPopup(location);

      const activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');

      const divList = document.querySelectorAll('.content');
      const divCount = divList.length;
      for (i = 0; i < divCount; i++) {
        divList[i].style.maxHeight = null;
      }

      for (let i = 0; i < geojsonData.features.length; i++) {
        this.parentNode.classList.remove('active');
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });
}
