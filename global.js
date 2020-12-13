/*
Global.js

This project is done without any framework but there are still
useful elements to repeat. This script does that
*/

function updateAllFooters () {
  var footersToUpdate = document.getElementsByClassName("update-this-footer");

  for (let i=0; i<footersToUpdate.length; i++) {
    let elem = footersToUpdate[i];
    elem.innerHTML += `
      <p>\"No way\" Not possible</p>
    `;
  }
}

updateAllFooters();