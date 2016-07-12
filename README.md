Learning Objectives

Let's get some experience using Ajax to load data into the browser from our server and building a UI from that data.

Your Mission

Let's create an interface to view someone's Github organizations.

Create a button on your page to "Load Github Orgs"
When the button is clicked, use Ajax to load the JSON data from https://api.github.com/users/jisaacks/orgs
Construct the UI from the data... what HTML structures do you need?
Style the resulting UI using Sass (see the image below)
Note that there may be different organizations, and you can change the username to see others. For example, try: addyosmani)

Screen Shot 2016-03-14 at 11.45.58 PM.png
EPIC Mode

This data can be gathered on any user from the following URL format: https://api.github.com/users/{USERNAME}/orgs replacing the {USERNAME} with the desired user. Update your code to allow a user of your site to specify (input) what GitHub user they want to see and get their data from github.com (using the URL format above).
