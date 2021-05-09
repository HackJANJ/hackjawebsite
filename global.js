/*
Global.js

This project is done without any framework but there are still
useful elements to repeat. This script does that
*/
function updateNavBar() {
	var navBarsToUpdate = document.getElementsByClassName("update-this-navbar");
	for (let i = 0; i < navBarsToUpdate.length; i++) {
		console.log("updating navbar")
		let elem = navBarsToUpdate[i];
		elem.innerHTML += `<a href="index" class="p-3 text-decoration-none text-light">Home</a>
    <a href="apply" class="pl-md-0 p-3 text-light">Register</a>
    <a href="agenda" class="pl-md-0 p-3 text-light">Agenda</a>
    <a href="workshops" class="pl-md-0 p-3 text-light">Workshops</a>
    <a href="faq" class="pl-md-0 p-3 text-light">FAQ</a>
     <a href="mentorfaq" class="pl-md-0 p-3 text-light">Mentor FAQ</a>
     <a href="volunteer" class="pl-md-0 p-3 text-light">Volunteers</a>
     <a href="stemnight" class="pl-md-0 p-3 text-light">Stem Night</a>
     <a href="codecamp" class="pl-md-0 p-3 text-light">Code Camp</a>
     <a href="about" class="p-3 text-decoration-none text-light">Our Team</a>
    `
	}
}
function updateAllFooters() {
	var footersToUpdate = document.getElementsByClassName("update-this-footer");

	for (let i = 0; i < footersToUpdate.length; i++) {
		let elem = footersToUpdate[i];
		elem.innerHTML += `<div class="container my-5">

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
            <div class="maincard">
						<img class = "mainsimg" src = "https://cdn.discordapp.com/attachments/801679194790428723/830650817534492672/hackja_logos.png">
            </div>  


         

            <br>
       
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
    </div>`;
	}
}

updateAllFooters();
updateNavBar();
