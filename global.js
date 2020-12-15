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
    <div class="container my-5">

      <!-- Sponsor images -->
      <div class="card text-center">
        <div class="card-header">
            <p class="lead text-mono text-success my-2">
              HackJA would not be possible without our <b><i>amazing</i></b> sponsors.
            </p>
        </div>

        <div class="card-body">
          <br>
          <br>
          <div class="row justify-content-md-center">
            <div class="col">
              <img class="footer-sponsor-img" src="https://cdn.glitch.com/9997fac9-1a66-40ea-9959-2e849e187dcf%2FADP.png?v=1607894106864" alt="ADP">
            </div>
            <div class="col">
              <img class="footer-sponsor-img" src="https://cdn.glitch.com/9997fac9-1a66-40ea-9959-2e849e187dcf%2FBayerFund_Reversed-Color-for-dark-backgrounds.png?v=1607818504955" alt="Bayer">
            </div>
          </div>  
        </div>
      </div>

      <!-- JANJ Content -->
      <div>
        <br>
        <br>
        <div class="row align-items-center justify-content-center">
            <div style="display: flex;">
              <div>
                <span>
                  HackJA &copy; Copyright 2020<br />
                  An event run by Junior Achievement of New Jersey
                </span>
              </div>

              <img class="mx-5" style="width: auto; height: auto;" alt="Junior Achievement USA, a member of JA worldwide" src="https://cdn.glitch.com/9997fac9-1a66-40ea-9959-2e849e187dcf%2FJanj_logo.png?v=1607889948448">
            </div>
        </div>

      </div>
    </div>
    `;
  }
}

updateAllFooters();
