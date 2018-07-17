# Conflict Urbanism: Colombia - Website
This is the repository for the [Conflict Urbanism: Colombia](https://centerforspatialresearch.github.io/colombia_site/) project site.

## Data
The data for this project was provided by the [Registro Único de Víctimas](https://www.unidadvictimas.gov.co/es/registro-unico-de-victimas-ruv/37394) and may not be shared or used outside of this website without explicit permission.

## Credits
The team for this project was:
* Laura Kurgan: Associate Professor of Architecture at the Graduate School of Architecture Planning and Preservation at Columbia University, where she directs the Visual Studies curriculum, and the Center for Spatial Research. She is the author of Close Up at a Distance: Mapping, Technology, and Politics (Zone Books, 2013). Her work explores things ranging from digital mapping technologies to the ethics and politics of mapping, and the art, science and visualization of data.
* Juan Francisco Saldarriaga: Associate Research Scholar at the Center for Spatial Research at Columbia University and an adjunct assistant professor of urban planning and architecture at the Graduate School of Architecture, Planning and Preservation (GSAPP). He does research at the intersection of data, GIS, urbanism, architecture and the humanities and teaches graduate level seminars on mapping, advanced GIS and data visualization.
* Angelika Rettberg: associate professor at the Political Science Department at Universidad de los Andes, Bogotá, where she leads the Research Program on Armed Conflict and Peacebuilding and the M.A. Program on Peacebuilding. Her research has focused on several aspects of the political economy of armed conflict and peacebuilding, such as the relationship between legal resources, armed conflict, and criminality in several Colombian regions, the dynamics of transitional justice, and business behavior in contexts of armed conflict and peacebuilding.
* We also had help from Dare Brawley, Mike Howard, Jeevan Farias, Stella Ioannidou, Patrick Li, Anjali Singhvi, and Jonathan Izen.

## Site documentation:
### Folder structure
* `index.html` (landing page)
* `js` (folder): JavaScript libraries such as `bootstrap.js`, `d3.js`, `leaflet.js`, `mapzen.js`, `tangram.js`, and `three.js`
* `img` (folder): Images for the landing page, the `about.html` page, and social media icons.
* `fonts` (folder): Various glyphicons
* `css` (folder): `CSS` files, including all the `bootstrap` css files and the custom `css` files:
  * `about-specific.css`
  * `interactive-visualizations.css`
  * `map.css`
  * `project-specific.css`
  * `site-specific.css`
* `applications` (folder): `html` files and folders for the different pages in the project:
  * `map.html`: main interactive map `html` file
  * `interactiveViz.html`: main interactive visualization `html` file
  * `animation.html`: main animation `html` file
  * `about.html`: main about `html` file
  * `webmap` (folder): folder containing the different elements and files for the `map.html` page:
    * `png` icon files for the map
    * `jpg` files for the terrain shading
    * `scene_files` (folder): contains the styling files for the map:
      * `yaml` files for style of the map and labels
      * `jpg` files for the terrain shading
    * `img` (folder): folder containing satellite images for the municipalities in the map
    * `allTiles` (folder): folder containing the map tiles for the base map
  * `data` (folder): folder containing the `csv` files for the interactive data visualization and the webmap

### Technical documentation
#### Overall site
The Conflict Urbanism: Colombia site uses `bootstrap` and `jquery`. Both libraries contribute to the layout and functionality of the site. To edit the layout and styling of the site see the `site-specific.css` `about-specific.css`, `interactive-visualizations.css`, `map.css`, and `project-specific.css` files.

#### Interactive map
The map was built using the `leaflet`, `mapzen`, `tangram`, and `d3` JavaScript libraries.

`Leaflet.js` controls all the map functionality. It is a straight forward map, with zoom in and out control.

`Mapzen.js` and `Tangram.js` control the base data on the map. This includes topography, cities, rivers, and boundaries. The topography data comes from AWS and the rest of the data comes from the tiles in the `applications/webmap/allTiles` folder.

The styling for the basemap is detailed in the `yaml` files in `applications/webmap/scene_files`. The `Tangram` and `Mapzen` libraries interpret this styling and render it on the map. They are loaded on the map as `Tangram.leafletlayers` once the `map` object is created.

More information on the `Tangram` / `Mapzen` libraries can be found [here](https://mapzen.com/documentation/tangram/).

Finally, `d3.js` is used to load the forced displacement lines on top of the map and to interact with the left hand panel and dropdown menus. Data for this comes from the `csv` files in the `applications/data` folder.

#### Animation
The animation page is quite simple. It only loads a video that was previously uploaded to [Viemo.com](https://vimeo.com/178423175).

#### Interactive data visualization
The main library used in this page is `Three.js`. Documentation for this library can be found [here](https://threejs.org/docs/index.html#manual/introduction/Creating-a-scene). This library was chosen over `p5.js` or `d3.js` because it was much more efficient at handling large amounts of 'particles'. However, `d3.js` is still used to handle some of the interactivity in the page.

The data for this visualization lives in the `csv` and `tsv` files in the `applications/data` folder.

First, the data is loaded using `d3.js` and then the visualization function happens with `Three.js`.

#### About
The `about.html` file is again very simple. It just contains text, links and images that live in the `img/aboutImg` folder.
