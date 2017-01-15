# Weather-App
This is a front-end AngularJS app for check weather by zip code or city name, completed as a code challenge for Emogi.

Available live here: https://hongbinc.github.io/Weather-App 

`(Due to a Yahoo weather API bug, if the website load slowly, please wait 3-5 seconds or refresh the page)`

Currently still a work in progress. As I make continued improvements, I'll update this README.

### To run and develop locally:
Note: This project requires node and npm. Instuctions for installing them can be found [here](https://docs.npmjs.com/getting-started/installing-node).

1. `git clone` the repo, and `git checkout` the master branch
2. cd into the 'Weather-App' directory
3. run the command: `npm install`
4. run the command: `npm start`

#### P.S (Yahoo Weather API Bug)
Note: Yahoo Weather API itself has an bug, sometimes it returns result = null. So I make the app repeatedly call the API until it return a result.(That's why sometimes it takes longer to load the website).

#### Remaining work (in order of priority)
1.  <del>Report Yahoo Weather API bug to Yahoo.</del>
2. Setup unit tests using Jasmine and Karma.
3. Create a validation service to check input. OR Create a auto complete for zipcode/cityname search bar. 
4. Perform Less or Sass compilation into CSS, so that styling can be done in a pre-processing language.
5. Additional Function: Choose a Place Photo API that will return a url for the photo of place, then make the image to be the fullscreen      background image.(Background image will be change if we search weather for a different place)
6. Change the code to only make one api call after Yahoo fix the bug.
