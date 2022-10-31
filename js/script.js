// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ISC2O-UNIT3-02-VOLUME-OF-A-PYRAMID/sw.js",
    {
      scope: "/ISC2O-UNIT3-02-VOLUME-OF-A-PYRAMID/",
    }
  )
}

/* This function calculates a users earnings and displays it */
function calculateVolume() {
  /* Input */
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)

  /* Proccess */
  const volume = (length * width * height) / 3

  /* Output */
  document.getElementById("volume").innerHTML =
    "The volume of your rectangular pyramid is: " + volume + " cm³"
}
