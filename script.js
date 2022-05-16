//Eventos
window.addEventListener("load", cargarOverview);// US 1: carga de página inicial. Al cargar la pagina carga el overview.
document.getElementById(`overview`).addEventListener(`click`, cargarOverview);//US 2: ver listado Overview al hacer click en overview
//document.getElementById(`top10`).addEventListener(`click`, name_function  );//US 3: ver listado top 10 al hacer click en top ten
document.getElementById(`rock`).addEventListener(`click`, listRock);//US 4: ver listado rock al hacer click en rock
document.getElementById(`hip-hop`).addEventListener(`click`, cargarHipHop);//US 5: ver lista hip hopal hacer click en  hip-hop
document.getElementById(`indie`).addEventListener(`click`, cargarIndie);//US 6: ver lista indie al hacer click en indie
//document.getElementById(`indie`).addEventListener(`click`, cargarIndie);//US 7: ver lista jazz al hacer click en jazz
document.getElementById(`reggae`).addEventListener(`click`, cargarReggae);//US 8: lista reggae al hacer click en  reggae

//Funciones
//US 1: carga de página inicial. US 2: ver listado Overview. Carga las 50 caciones más escuchadas
function cargarOverview() {
  fetch('music.json')
  .then((response) => response.json())
   // .then((data) => console.log(data))
  .then((music) => {
    let musicaElements = "";
    for (let i = 0; i < music.length; i++) {
    musicaElements += `
          <tr>
        <td>${i + 1}</td>
        <td> ${music[i].artist.name}</td>
       <td><b>${music[i].name}</b></td>
       <td> ${music[i].listeners}</td>
        </tr>`;
    }
  document.getElementById('music-body').innerHTML = musicaElements;
    });
};
  /*fetch('music.json')
 .then((response) => response.json())
  // .then((data) => console.log(data))
 .then((music) => {
   let musicaElements = "";
   for (let i = 0; i < music.length; i++) {
   musicaElements += `
         <tr>
       <td>${i + 1}</td>
       <td> ${music[i].artist.name}</td>
      <td><b>${music[i].name}</b></td>
      <td> ${music[i].listeners}</td>
       </tr>`;
   }
 document.getElementById('music-body').innerHTML = musicaElements
   });*/

// US 3: ver listado top 10


// US 4: ver listado rock
  function listRock() {
    fetch('music.json')
    .then((response) => response.json())
    .then((music) => {
      let musicaElements = "";
      let rockArray = music.filter(music => music.genres.includes ('rock'));
      console.log(rockArray);
      rockArray.forEach((music, i) => {
        musicaElements += `
          <tr>
          <td>${i + 1}</td>
          <td> ${music.artist.name}</td>
          <td><b>${music.name}</b></td>
          <td> ${music.listeners}</td>
          </tr`;
      });
      document.getElementById('music-body').innerHTML = musicaElements;
    });
  };

 //US 5: ver lista hip hop

 function cargarHipHop() {
  fetch('music.json')
  .then((response) => response.json())
  .then((music) => {
    let musicaElements = "";
    let hipHopArray = music.filter(music => music.genres.includes ('Hip-Hop'));
    console.log(hipHopArray);
    hipHopArray.forEach((music, i) => {
      musicaElements += `
        <tr>
        <td>${i + 1}</td>
        <td> ${music.artist.name}</td>
        <td><b>${music.name}</b></td>
        <td> ${music.listeners}</td>
        </tr`;
    });
    document.getElementById('music-body').innerHTML = musicaElements;
  });
};


 //US 6: ver lista indie
 function cargarIndie() {
  fetch('music.json')
  .then((response) => response.json())
  .then((music) => {
    let musicaElements = "";
    let indieArray = music.filter(music => music.genres.includes ('indie'));
    console.log(indieArray);
    indieArray.forEach((music, i) => {
      musicaElements += `
        <tr>
        <td>${i + 1}</td>
        <td> ${music.artist.name}</td>
        <td><b>${music.name}</b></td>
        <td> ${music.listeners}</td>
        </tr`;
    });
    document.getElementById('music-body').innerHTML = musicaElements;
  });
};

//US 7: ver lista jazz

 // US 8: ver lista reggae
  function cargarReggae() {
    fetch('music.json')
    .then((response) => response.json())
    .then((music) => {
      let musicaElements = "";
      let reggaeArray = music.filter(music => music.genres.includes ('reggae'));
      console.log(reggaeArray);
      reggaeArray.forEach((music, i) => {
        musicaElements += `
          <tr>
          <td>${i + 1}</td>
          <td> ${music.artist.name}</td>
          <td><b>${music.name}</b></td>
          <td> ${music.listeners}</td>
          </tr`;
      });
      document.getElementById('music-body').innerHTML = musicaElements;
    });
  };




   // const nombreDeMusica = music.map((music) => music.name);
   // console.log(nombreDeMusica);
// });
