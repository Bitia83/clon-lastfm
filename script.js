//Eventos
window.addEventListener("load", cargarOverview);// US 1: carga de página inicial. Al cargar la pagina carga el overview.
document.getElementById(`overview`).addEventListener(`click`, cargarOverview);//US 2: ver listado Overview al hacer click en overview
document.getElementById(`top10`).addEventListener(`click`, cargarTenList);//US 3: ver listado top 10 al hacer click en top ten
document.getElementById(`rock`).addEventListener(`click`, listRock);//US 4: ver listado rock al hacer click en rock
document.getElementById(`hip-hop`).addEventListener(`click`, cargarHipHop);//US 5: ver lista hip hopal hacer click en  hip-hop
document.getElementById(`indie`).addEventListener(`click`, cargarIndie);//US 6: ver lista indie al hacer click en indie
document.getElementById(`jazz`).addEventListener(`click`, cargarJazz);//US 7: ver lista jazz al hacer click en jazz
document.getElementById(`reggae`).addEventListener(`click`, cargarReggae);//US 8: lista reggae al hacer click en  reggae

// lista para hacer click en the biggest
document.getElementById(`biggest`).addEventListener(`click`, cargarTheBiggest);
//Funciones

function cargarPage() {
  fetch('music.json')
  .then((response) => response.json())
    
  .then((music) => {
    let musicaElements = "";
    /* Inicio del código para que se ordenen los datos por número de listeners de may */
    music.sort((a, b) => {
     let listenersA = parseInt(a.listeners);
      let listenersB = parseInt(b.listeners);
      return listenersB - listenersA;
      });
     console.log(music);
    /* Fin del código para que se ordenen los datos por número de listeners de mayor */
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

//US 1: carga de página inicial. US 2: ver listado Overview. Carga las 50 caciones más escuchadas


function cargarOverview() {
  fetch('music.json')
  .then((response) => response.json())
    
  .then((music) => {
    let musicaElements = "";
    /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
    music.sort((a, b) => {
     let listenersA = parseInt(a.listeners);
      let listenersB = parseInt(b.listeners);
      return listenersB - listenersA;
      });
     console.log(music);
    /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
    for (let i = 0; i < music.length; i++) {
    musicaElements += `
         <tr>
          <td><a><i class="fa-solid fa-play"></i></a></td>
          <td>${i + 1}</td>
          <td><a href= ${music[i].artist.url}> ${music[i].artist.name}</a></td>
          <td><a href= ${music[i].url}><b>${music[i].name}</b></a></td>
          <td> ${music[i].listeners} listener</td>
         </tr>`;
    }
  
  document.getElementById('music-body').innerHTML = musicaElements;
    });
    };

// US 3: ver listado top 10
function cargarTenList() {
  fetch('music.json')
  .then((response) => response.json())
  .then((music) => {
    let musicaElements = "";
    music.sort((a, b) => {
      let listenersA = parseInt(a.listeners);
      let listenersB = parseInt(b.listeners);
      return listenersB - listenersA;
       });   
   let tenListArray = music.filter((music, i) => i <= 9);
       // genres.includes ('reggae'));
     
      /* Fin del código para que se ordenen los datos por número de listeners 
     de 
      mayor a menor */
        tenListArray.forEach((music, i) => {
          musicaElements += `
          <tr>
            <td><a><i class="fa-solid fa-play"></i></a></td>
            <td>${i + 1}</td>
            <td><a href= ${music.artist.url}> ${music.artist.name}</a></td>
            <td><a href= ${music.url}><b>${music.name}</b></a></td>
            <td> ${music.listeners} listener</td>
        </tr`;
    });
    document.getElementById('music-body').innerHTML = musicaElements;
  });
 };

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
     let listenersA = parseInt(a.listeners);
      let listenersB = parseInt(b.listeners);
      return listenersB - listenersA;
       });  
      /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
      rockArray.forEach((music, i) => {
        musicaElements += `
          <tr>
            <td><a><i class="fa-solid fa-play"></i></a></td>
            <td>${i + 1}</td>
            <td><a href= ${music.artist.url}> ${music.artist.name}</a></td>
            <td><a href= ${music.url}><b>${music.name}</b></a></td>
            <td> ${music.listeners} listeners</td>
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
        let listenersA = parseInt(a.listeners);
      let listenersB = parseInt(b.listeners);
      return listenersB - listenersA;
       });  
      /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
    hipHopArray.forEach((music, i) => {
      musicaElements += `
      <tr>
        <td><a><i class="fa-solid fa-play"></i></a></td>
        <td>${i + 1}</td>
        <td><a href= ${music.artist.url}> ${music.artist.name}</a></td>
        <td><a href= ${music.url}><b>${music.name}</b></a></td>
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
   // console.log(indieArray);
    /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
    indieArray.sort((a, b) => {
        let listenersA = parseInt(a.listeners);
      let listenersB = parseInt(b.listeners);
      return listenersB - listenersA;
       });  
    /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
    indieArray.forEach((music, i) => {
      musicaElements += `
      <tr>
        <td><a><i class="fa-solid fa-play"></i></a></td>
        <td>${i + 1}</td>
        <td><a href= ${music.artist.url}> ${music.artist.name}</a></td>
        <td><a href= ${music.url}><b>${music.name}</b></a></td>
        <td> ${music.listeners} listeners</td>
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
      let listenersA = parseInt(a.listeners);
      let listenersB = parseInt(b.listeners);
      return listenersB - listenersA;
       });  
    /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
    jazzArray.forEach((music, i) => {
      musicaElements += `
      <tr>
        <td><a><i class="fa-solid fa-play"></i></a></td>
        <td>${i + 1}</td>
        <td><a href= ${music.artist.url}> ${music.artist.name}</a></td>
        <td><a href= ${music.url}><b>${music.name}</b></a></td>
        <td> ${music.listeners} listener</td>
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
      let reggaeArray = music.filter(music => music.genres.includes ('chillout'));
      console.log(reggaeArray);
      /* Inicio del código para que se ordenen los datos por número de listeners de mayor a menor */
      reggaeArray.sort((a, b) => {
        let listenersA = parseInt(a.listeners);
        let listenersB = parseInt(b.listeners);
        return listenersB - listenersA;
         });      
        
      /* Fin del código para que se ordenen los datos por número de listeners de mayor a menor */
      reggaeArray.forEach((music, i) => {
        musicaElements += `
        <tr>
          <td><a><i class="fa-solid fa-play"></i></a></td>
          <td>${i + 1}</td>
          <td><a href= ${music.artist.url}> ${music.artist.name}</a></td>
          <td><a href= ${music.url}><b>${music.name}</b></a></td>
          <td> ${music.listeners} listeners</td>
        </tr`;
      });
      document.getElementById('music-body').innerHTML = musicaElements;
    });
  };


function cargarTheBiggest() {
  fetch('music.json')
    .then((response) => response.json())
    .then(function (music) {
      let musicaElements = "";
      let artistArray = music.reduce((artistSinRepetir, musicArtist) => {
        if (!artistSinRepetir.find(d => d == musicArtist.artist.name)) {
          artistSinRepetir.push(musicArtist.artist.name)
        }
        return artistSinRepetir;
      }, [])
      console.log(artistArray);
      
      artistArray = artistArray.map(function (elemento) {
        return { name: elemento };
      });
      console.log(artistArray)
    

      artistArray.forEach((artist) => {
        let filter = music.filter(a => a.artist.name.includes(artist.name))
        console.log(filter);
       
        let contador = filter.reduce((a, b) => a + parseInt(b.listeners), 0)
        artist.listeners = contador;
      })

      console.log(artistArray);
      let musicOrdenado = artistArray.sort(function (a, b) {
        if (a.listeners > b.listeners) {
          return -1;
        } else if (a.listeners < b.listeners) {
          return 1;
        } else {
          return 0;
        }
      });
      // console.log(musicOrdenado);
      let grupoBiggest = musicOrdenado[0].name;
      let biggestArray = music.filter(music => music.artist.name.includes(grupoBiggest))
     
      
      
      biggestArray.forEach((music, i) => {
        musicaElements += `
        <tr>
          <td><a><i class="fa-solid fa-play"></i></a></td>
          <td>${i + 1}</td>
          <td><a href= ${music.artist.url}> ${music.artist.name}</a></td>
          <td><a href= ${music.url}><b>${music.name}</b></a></td>
          <td> ${music.listeners} listeners</td>
        </tr`;
      });
    
      document.getElementById('music-body').innerHTML = musicaElements;
    })
};

