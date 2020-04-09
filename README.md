# Tracker_ReactNative
Simple Tracking app developed using react native
Server code (developed using nodeJS and Express) is also included in the project 
To run the code in react native follow the steps below 

#1 . Setup the server environment

	a.  Move to server folder - cd <path to track-server>
	b.  Enter the following commands :
		npm run dev
	c. Open a different tab in terminal and run the following command
		ngrok http 3000 (This will start a temporary public server , which can be accessed from any physical device, so note the URL address showing after executing this command

#2. Setup the app
	a. Move to app folder - cd <pah to tracker-app/tracks>
	b. Open 'tracker.js' and change 'baseURL' to the URL noted before after ngrok command (in server environment setup)
	c. Run the app using command - npm start -c
