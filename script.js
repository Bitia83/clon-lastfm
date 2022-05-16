//Eventos
window.addEventListener("load", cargarOverview);//Al cargar la pagina carga el overview 
document.getElementById(`overview`).addEventListener(`click`, cargarOverview);//carga lista rock
document.getElementById(`rock`).addEventListener(`click`, listRock);//carga lista rock

function cargarOverview() {
  fetch('music.json')
  .then((response) => response.json())
   // .then((data) => console.log(data))
  .then((music) => {
    let musicaElements = "";
    for (let i = 0; i < music.length; i++) { <tr>
        <td>${i + 1}</td>
        <td> ${music[i].artist.name}</td>
       <td><b>${music[i].name}</b></td>
       <td> ${music[i].listeners}</td>
        </tr>`;
    }
    musicaElements += `
         
  document.getElementById('music-body').innerHTML = musicaElements
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
// crear una funcion para un lista rock
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
  }


   // const nombreDeMusica = music.map((music) => music.name);
   // console.log(nombreDeMusica);
// });
