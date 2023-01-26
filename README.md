# Bühler mockup app
## By Kristiyan Georgiev

Written in TypeScript, html and css. 
Built with Webpack. 
This app was made as coding test, however it is not fully static and features a way to dynamically load additional machines from a file and update their state live.

Because this app is to serve only as a test, I am requesting the used icons from Google's servers directly. I understand that in a real application, these icons would be stored and imported locally.

The design was fully coppied from the reference given. Due to the general simplicity of the assignment, I had to improvise certain aspects, such as the before mentioned dynamic machine loading and live status update.

### Zip contents:

The zip contains the source code and an already built version of the app (located in the 'dist' folder).

Source code:

- mockupdb/ 			Contains the mockup json file for machine importing
- src/ 					Main source code directory
- style/ 				Contains all css styling and images
- index.html			Base html file
- index.ts 				Application entry point
- package.json	
- tsconfig.json 		TypeScript configuration file
- webpack.config.js 	Webpack configuration file


Build directory (dist/):

- style/icons/ 			In this test app, contains only the Bühler logo
- bundle.css			Compiled styles for the app
- bundle.js				Compiled scripts
- index.html			Application entry point

### Build instructions:

To download the development dependencies, run:

	> npm install -dev

To build the app afterwards, run:

	> npm run build

Then simply open the 'dist/index.html' file!
