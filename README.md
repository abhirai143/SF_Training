# Overview
Use this repository to set your base environment for Intelliswift's college internship training. The repository comes with a starter html page, a starter JavaScript file, and some sample JSON data to play with. The setup uses a light weight webserver `lite-server` and an easy to use CSS library - `Semantic UI`.

# Setup
## Prerequisites
Following software need to be installed.
- Latest Node.js from https://nodejs.org/en/
- VS Code from https://code.visualstudio.com/
- git from https://git-scm.com/downloads
- Chrome browser is preferred but Mozilla Firefox should also work.

## Configure Project
- On a command prompt, clone the repository using command `git clone https://github.com/shashig/jsbase.git` in a directory of your choice. It will create directory `jsbase` with the contents of this repository. 
- In VS Code, use `File > Open Folder` (Windows) or `File > Open` (Mac) to open the `jsbase` folder.
- Open the integrated terminal window in VS Code and run command `npm install`. This will download the dependencies into the `node_modules` folder.

## Running the Project
- Execute command `npm start` on terminal window. This will start the `lite-server` on port 3000 and open a new tab on your default browser to show the project home - index.html. 
- The server automatically watches for changes in any html, JavaScript, and CSS files and automatically refreshes the browser tab. This allows you a seamless development experience.

### Ensuring things are properly setup and running
- Open Chrome developer console in the tab where the app home page is open. You should see no errors and see the following text logged: `data imported into data constant`.
- Typing anything into the text box should result in the same text being displayed below the text box.
- Clicking on the button should log the following JavaScript object: `{movies: 100, hindiMovies: 100, languages: 187, countries: 251, genres: 19}` in the console.

# Understanding Starter Code & Data Files
- `index.html`
  - refers to `index.js`
  - refers to `styles.css` - You can add your styles here. 
  - refers to `semantic-ui` CSS from a CDN. This is really not required for this training, but, having a nice UI feels good. Also, learning some standard CSS library is always useful. This will be useful in picking up other CSS libraries as well. 
  - Has a text field and button that use methods within `index.js`.
- `index.js` 
  - Dynamically imports `./src/moviesPlay.js` which exports data arrays `movies`, `hindiMovies`, `languages`, `countries`, & `genres` and `getCounts()` method that returns an object with object counts in forementioned arrays.
  - Defines 3 sample methods that are currently used by the `index.html`.
- Data Files
  - `movies.js` exports 4 arrays. Details of data structure for each of these arrays is provided as a comment on top of this file. 
    - 100 movies with movie information and at most 10 key cast information. 
    - languages
    - countries
    - genres
  - `hindiMovies.js` - 100 hindi movies with movie information and at most 10 key cast information. Data structure is same as the movies array in the `movies.js` file. 
  - __Note__: Unfortunately, the movie `posterUrl` and the cast `profilePath` urls are not accurate. However, we can use the movie id and cast id to get the correct image id using `themoviedb` APIs.


# Acknowledgements
- Movies data sourced from https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset/data. The data has been further massaged and simplified for use in the learning environment. A smaller volume of data is used. 
- Languages, Countries, and Genres data sourced from https://www.themoviedb.org. 