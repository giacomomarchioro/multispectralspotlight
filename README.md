# YAD: Mouseover spot-lights for enhancing the interpretation of images

> A yad (Hebrew: יד‎, literally "hand"; Yiddish: האַנט‎) is a Jewish ritual pointer, popularly known as a Torah pointer, used by the reader to follow the text during the Torah reading from the parchment Torah scrolls.

This repository contains a collection of implementations using CSS and javascript for visualizing in the browser imaging 
data using mouse-over iteraction. Current implementations aim to assist the visualization of multi-spectral imaging data, alowing to visualize a channel selected by the user. This feature is particularly useful in Cultural Heritage diagnostic for reading illegible text in manuscripts, identifing under-drawings, pentimenti and sub-scripts. Below is shown an example over a Ethiopinan manuscript viewed under VIS and infared light: 

<p align="center">
  <img width="460" height="300" src="https://github.com/giacomomarchioro/multispectralspotlight/blob/master/testimages/results2.gif?raw=true">
</p>



In this document and in the CSS and javascript implementations the **visible layer** is the image that is seen by defult. While the **spotlight** is the region of interest (usually circular) that is triggered by the mouse-over interaction.

# Test and use the implementations
All the implementations at the moment are based on normalized SCSS and [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js). 

## Multi-spectral visualization
For visualizing an image behind a reference layer (e.g. comparing visible image with another band) you can test a basic implementation of the code hosted in this repository [here](https://codepen.io/giacomo-marchioro/pen/ZEGZRVe).

For the testing this implementation locally lunch ./multispectral-spotlight-reference/dist/index.html.

Other valid implementations have been re-adapted for comparison and can be tested [here](https://codepen.io/giacomo-marchioro/pen/jOPRwpY)and [here](https://codepen.io/giacomo-marchioro/pen/GRJLERK).


## Magnifying glass effect
For a magnifying glass I've re-adapted the code of [Arya Kalshi](https://codepen.io/kalashi/pen/EjAkC!) for testing it over a manuscript can be used this [link](https://codepen.io/giacomo-marchioro/pen/mdJYVoq).


# To-do features

- selection of the radius using a slider.


