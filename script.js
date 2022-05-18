//Eventos
window.addEventListener("load", cargarOverview);// US 1: carga de página inicial. Al cargar la pagina carga el overview.
document.getElementById(`overview`).addEventListener(`click`, cargarOverview);//US 2: ver listado Overview al hacer click en overview
document.getElementById(`top10`).addEventListener(`click`, cargarTop10  );//US 3: ver listado top 10 al hacer click en top ten
document.getElementById(`rock`).addEventListener(`click`, listRock);//US 4: ver listado rock al hacer click en rock
document.getElementById(`hip-hop`).addEventListener(`click`, cargarHipHop);//US 5: ver lista hip hopal hacer click en  hip-hop
document.getElementById(`indie`).addEventListener(`click`, cargarIndie);//US 6: ver lista indie al hacer click en indie
document.getElementById(`jazz`).addEventListener(`click`, cargarJazz);//US 7: ver lista jazz al hacer click en jazz
document.getElementById(`reggae`).addEventListener(`click`, cargarReggae);//US 8: lista reggae al hacer click en  reggae

//Funciones
//US 1: carga de página inicial. US 2: ver listado Overview. Carga las 50 caciones más escuchadas
function cargarOverview() {
  fetch('music.json')
  .then((response) => response.json())
   // .then((data) => console.log(data))
  .then((music) => {
    let musicaElements = "";
    /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
    music.sort((a, b) => {
    if (a.listeners == b.listener) {
      return 0;
    } if (a.listeners > b.listeners) {
      return -1;
    }
    return 1;
    });
    /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
    for (let i = 0; i < music.length; i++) {
    musicaElements += `
        <tr>
          <td><a><i class="fa-solid fa-play"></i></a></td>
          <td>${i + 1}</td>
          <td><a href= ${music[i].artist.url}> ${music[i].artist.name}</a></td>
          <td><a href= ${music[i].url}><b>${music[i].name}</b></a></td>
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
function cargarTop10() {
    fetch('music.json')
  .then((response) => response.json())
   // .then((data) => console.log(data))
  .then((music) => {
    let musicaElements = "";
    /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
    music.sort((a, b) => {
    if (a.listeners == b.listener) {
      return 0;
    } if (a.listeners > b.listeners) {
      return -1;
    }
    return 1;
    });
    /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
   
    for (let i = 0; i < music.length; i++) {
    musicaElements += `
      <tr>
        <td><a><i class="fa-solid fa-play"></i></a></td>
        <td>${i + 1}</td>
        <td><a href= ${music[i].artist.url}> ${music[i].artist.name}</a></td>
        <td><a href= ${music[i].url}><b>${music[i].name}</b></a></td>
        <td> ${music[i].listeners}</td>
      </tr>`;
    }
  document.getElementById('music-body').innerHTML = musicaElements;
    });
}

// US 4: ver listado rock
  function listRock() {
    fetch('music.json')
    .then((response) => response.json())
    .then((music) => {
      let musicaElements = "";
      let rockArray = music.filter(music => music.genres.includes ('rock'));
      // console.log(rockArray);
      /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
      rockArray.sort((a, b) => {
        if (a.listeners == b.listener) {
          return 0;
        } if (a.listeners > b.listeners) {
          return -1;
        }
        return 1;
      });
      /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
      rockArray.forEach((music, i) => {
        musicaElements += `
          <tr>
          <td><a><i class="fa-solid fa-play"></i></a></td>
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
    /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
    hipHopArray.sort((a, b) => {
      if (a.listeners == b.listener) {
        return 0;
      } if (a.listeners > b.listeners) {
        return -1;
      }
      return 1;
    });   
    /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
    hipHopArray.forEach((music, i) => {
      musicaElements += `
        <tr>
        <td><a><i class="fa-solid fa-play"></i></a></td>
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
    /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
    indieArray.sort((a, b) => {
      if (a.listeners == b.listener) {
        return 0;
      } if (a.listeners > b.listeners) {
        return -1;
      }
      return 1;
    });
    /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
    indieArray.forEach((music, i) => {
      musicaElements += `
        <tr>
        <td><a><i class="fa-solid fa-play"></i></a></td>
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
function cargarJazz() {
  fetch('music.json')
  .then((response) => response.json())
  .then((music) => {
    let musicaElements = "";
    let jazzArray = music.filter(music => music.genres.includes ('jazz'));
    console.log(jazzArray);
    /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
    jazzArray.sort((a, b) => {
      if (a.listeners == b.listener) {
        return 0;
      } if (a.listeners > b.listeners) {
        return -1;
      }
      return 1;
    });
    /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
    jazzArray.forEach((music, i) => {
      musicaElements += `
        <tr>
        <td><a><i class="fa-solid fa-play"></i></a></td>
        <td>${i + 1}</td>
        <td> ${music.artist.name}</td>
        <td><b>${music.name}</b></td>
        <td> ${music.listeners}</td>
        </tr`;
    });
    document.getElementById('music-body').innerHTML = musicaElements;
  });
};
 // US 8: ver lista reggae
  function cargarReggae() {
    fetch('music.json')
    .then((response) => response.json())
    .then((music) => {
      let musicaElements = "";
      let reggaeArray = music.filter(music => music.genres.includes ('reggae'));
      console.log(reggaeArray);
      /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
      reggaeArray.sort((a, b) => {
        if (a.listeners == b.listener) {
          return 0;
        } if (a.listeners > b.listeners) {
          return -1;
        }
        return 1;
      });
      /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
      reggaeArray.forEach((music, i) => {
        musicaElements += `
          <tr>
          <td><a><i class="fa-solid fa-play"></i></a></td>
          <td>${i + 1}</td>
          <td> ${music.artist.name}</td>
          <td><b>${music.name}</b></td>
          <td> ${music.listeners}</td>
          </tr`;
      });
      document.getElementById('music-body').innerHTML = musicaElements;
    });
  };

  function cargarBiggest() {
    fetch('music.json')
  .then((response) => response.json())
   // .then((data) => console.log(data))
  .then((music) => {
    let musicaElements = "";
    /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
    
    music.sort((a, b) => {
    if (a.listeners == b.listener) {
      return 0;
    } if (a.listeners > b.listeners) {
      return -1;
    }
    return 1;
    });
    /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
   
    for (let i = 0; i < music.length; i++) {
    musicaElements += `
          <tr>
          <td><a><i class="fa-solid fa-play"></i></a></td>
        <td>${i + 1}</td>
        <td> ${music[i].artist.name}</td>
       <td><b>${music[i].name}</b></td>
       <td> ${music[i].listeners}</td>
        </tr>`;
    }
  document.getElementById('music-body').innerHTML = musicaElements;
    });
}


   // const nombreDeMusica = music.map((music) => music.name);
   // console.log(nombreDeMusica);
// });