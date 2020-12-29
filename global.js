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
              <img style="max-width:80%" class="footer-sponsor-img" src="https://cdn.glitch.com/9997fac9-1a66-40ea-9959-2e849e187dcf%2FADP.png?v=1607894106864" alt="ADP">
            </div>
            <div class="col">
              <img class="footer-sponsor-img" src="https://cdn.glitch.com/9997fac9-1a66-40ea-9959-2e849e187dcf%2FBayerFund_Reversed-Color-for-dark-backgrounds.png?v=1607818504955" alt="Bayer">
            </div>
      <div class="col">
              <img style="max-width:75%" class="footer-sponsor-img" src="https://launchx.com/assets/images/launchXLogo.png" alt="LaunchX">
            </div>
      <div class="col">
              <img style="max-width:80%" class="footer-sponsor-img" src="https://static.wixstatic.com/media/c42fea_d1fbddac9a524f16b3d4456d639b444a~mv2.png/v1/fill/w_750,h_375,al_c/c42fea_d1fbddac9a524f16b3d4456d639b444a~mv2.png" alt="EchoAR">
            </div>
          </div>  
        </div>
      </div>

      <!-- JANJ Content -->
      <div>
        <br>
        <br>
        <div class="row justify-content-center">
              <div class="col col-lg-4 col-md-6 col-sm-4">
                <span>
                  HackJA &copy; Copyright 2020<br />
                  An event run by Junior Achievement of New Jersey
                </span>
              </div>

              <div class="col col-lg-4 col-md-5 col-sm-8">
                <img class="mx-5" style="max-width: 100%; width: auto; height: auto;" alt="Junior Achievement USA, a member of JA worldwide" src="https://cdn.glitch.com/9997fac9-1a66-40ea-9959-2e849e187dcf%2FJanj_logo.png?v=1607889948448">
              </div>
        </div>

      </div>
    </div>
    `;
  }
}

updateAllFooters();
