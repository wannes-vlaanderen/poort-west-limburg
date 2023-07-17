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
  title.style.fontSize = 24
  const description = document.createElement("p")
  description.id = 'description'
  description.classList.add('txt-s', 'py12', 'none', 'block-ml')
  description.style.fontSize = 13
  
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
