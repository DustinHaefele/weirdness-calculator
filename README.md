
<h1 align="center"> Weirdness Calculator </h1> <br>

<p align="center">
  Using GIFs to find out how weird you are since November 2019.
</p>



## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Contributors](#contributors)
- [Build Process](#build-process)
- [Acknowledgments](#acknowledgments)


## Introduction

Use the Giphy API to find GIFs.  You can select 5 GIFs that you like and we will tell you how weird you are based on your selections.

## Features

A few of the things you can do with Weirdness Calculator:

* Search for GIFs using any search term.
* Once you get a GIF you can tell us how weird you want it and we'll give you one that matches your request
* Add GIFs to your favorites
* Remove GIFs from favorites
* Calculate how weird you are based on your selections
* Start over again!

<p align="center">
  <kbd>
  <img src = "./screenShot.png" width=700>
  </kbd>
</p>

## Contributors

Just me - Dustin Haefele

## Build Process

- Clone or download the repo
- Register for a Giphy developer account or login by going to [https://developers.giphy.com/](https://developers.giphy.com/) and clicking 'Get Started'
- Select 'Create an App', insert the information' select 'I only want to use the Giphy API' and submit the form.
- Copy the example.env file to a .env file and set the 'REACT_APP_GIPHY_API_KEY' to the key that you just recieved from Giphy and save the file.
- Run `npm install` from your terminal to install dependencies
- Run `npm start` to start the app.
- To see the app in action navigate to the local host port that your terminal specifies for me its [localhost:3000](http://localhost:3000).


## Acknowledgments

Thanks to [Politech](http://www.politech.io/) for allowing me to complete this coding challenge, to [GiphyAPI](https://developers.giphy.com/docs/api/endpoint#translate) for the API usage and this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




