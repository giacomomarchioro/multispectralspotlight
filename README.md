# YAD: Mouseover spot-lights for enhancing the interpretation of images

> A yad (Hebrew: יד‎, literally "hand"; Yiddish: האַנט‎) is a Jewish ritual pointer, popularly known as a Torah pointer, used by the reader to follow the text during the Torah reading from the parchment Torah scrolls.

This repository contains a collection of implementations using CSS and javascript for visualizing in the browser imaging 
data using mouse-over iteraction. Current implementations aim to assist the visualization of multi-spectral imaging data, alowing to visualize a channel selected by the user. This feature is particularly useful in Cultural Heritage diagnostic for reading illegible text in manuscripts, identifing under-drawings, pentimenti and sub-scripts. Below is shown an example over a Ethiopinan manuscript viewed under VIS and infared light: 

![Example over a manuscritp](https://github.com/giacomomarchioro/multispectralspotlight/blob/master/testimages/results2.gif?raw=true)


In this document and in the CSS and javascript implementations the **visible layer** is the image that is seen by defult. While the **spotlight** is the region of interest (usually circular) that is triggered by the mouse-over interaction.

# Implementations
All the implementations at the moment are based on normalized SCSS and [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js). For visualizing an image behind a reference layer (e.g. comparing visible image with another band) you can test a basic implementation of the code hosted in this repository [here](https://codepen.io/giacomo-marchioro/pen/ZEGZRVe).
Other valid implementations have been re-adapted for comparison and can be tested (here)[https://codepen.io/giacomo-marchioro/pen/jOPRwpY] and [here](https://codepen.io/giacomo-marchioro/pen/GRJLERK).


# To-do features

- selection of the radius using a slider.


