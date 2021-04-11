/*
Global.js

This project is done without any framework but there are still
useful elements to repeat. This script does that
*/
function updateNavBar(){
  var navBarsToUpdate = document.getElementsByClassName("update-this-navbar");
  for (let i=0; i<navBarsToUpdate.length; i++) {
    console.log("updating navbar")
    let elem = navBarsToUpdate[i];
    elem.innerHTML +=`<a href="index" class="p-3 text-decoration-none text-light">Home</a>
    <a href="apply" class="pl-md-0 p-3 text-light">Register</a>
    <a href="agenda" class="pl-md-0 p-3 text-light">Agenda</a>
    <a href="workshops" class="pl-md-0 p-3 text-light">Workshops</a>
    <a href="faq" class="pl-md-0 p-3 text-light">FAQ</a>
     <a href="mentorfaq" class="pl-md-0 p-3 text-light">Mentor FAQ</a>
     <a href="volunteer" class="pl-md-0 p-3 text-light">Volunteers</a>
     <a href="about" class="p-3 text-decoration-none text-light">Our Team</a>
    `
  }
}
function updateAllFooters () {
  var footersToUpdate = document.getElementsByClassName("update-this-footer");

  for (let i=0; i<footersToUpdate.length; i++) {
    let elem = footersToUpdate[i];
    elem.innerHTML += `
    <div class="container my-5">

      <!-- Sponsor images -->
      <div class="card text-center">
        <div class="card-header">
            <br>
              <h1 class="lead text-mono text-success my-2">
                <b><i>Thank you</i></b> to our sponsors:
              </h1>
            <br>

            <br>
            <!-- Premium sponsors -->
            <div class="row justify-content-md-center">
              <div class="col">
                <img style="max-width:80%;text-align:center;" class="footer-sponsor-img" src="https://cdn.glitch.com/9997fac9-1a66-40ea-9959-2e849e187dcf%2FADP.png?v=1607894106864" alt="ADP">
              </div>
              <div class="col">
                <img style="max-width:110%;text-align:center;" class="footer-sponsor-img" src="https://cdn.glitch.com/9997fac9-1a66-40ea-9959-2e849e187dcf%2FBayerFund_Reversed-Color-for-dark-backgrounds.png?v=1607818504955" alt="Bayer">
              </div>
            </div>  
   <div class="row justify-content-md-center">
              <div class="col">
                <img style="max-width:80%;text-align:center;" class="footer-sponsor-img" src="https://cdn.discordapp.com/attachments/801679194790428723/830635523248619530/JJ_Logo-removebg-preview.png" alt="Johnson & Johnson">
              </div>

            </div>  
            <div class="row justify-content-md-center">
          <div class="col">
                <img style = "max-width:90%;position:absolute" class="footer-sponsor-img" src="https://i.ibb.co/RTN3bkH/EY-Logo-Beam-Tag-Stacked-RGB-EN-1-removebg-preview.png" alt="EY">
              </div>
              <div class="col">
                <img style = "text-align:center;" class="footer-sponsor-img" src="imgs/vz_interlaced.png" alt="Verizon">
              </div>

            </div>

            <br>
            <!-- Smaller sponsors 
            <div class="row justify-content-md-center">
              <div class="col-4">
                <img style="transform: translate(-80%, -60%); max-height: 50%" class="footer-sponsor-img" src="https://launchx.com/assets/images/launchXLogo.png" alt="LaunchX">
              </div>
              <div class="col-1"></div>
              <div class="col-4">
                <img style="max-height: 90%;" class="footer-sponsor-img" src="https://static.wixstatic.com/media/c42fea_9d1970a5afdd47978ba9646a72c6dc1e~mv2.png/v1/fill/w_286,h_104,al_c,q_85,usm_0.66_1.00_0.01/echoAR%20-%20Logo%202020%20-%20Knockout.webp" alt="EchoAR">
              </div>
            </div>  -->
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
                <img class="mx-5" style="max-width: 100%; width: auto; height: auto;" alt="Junior Achievement NJ, a member of JA worldwide" src="https://janj.ja.org/contentAsset/image/38554408-7871-446e-8027-a113b71504d7/hostThumbnail/filter/Resize/resize_h/80">
              </div>
        </div>

      </div>
    </div>
    `;
  }
}

updateAllFooters();
updateNavBar();
