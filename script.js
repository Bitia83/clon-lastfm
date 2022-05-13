let musicaElements = []; 

fetch('http://127.0.0.1:5500/music.json')
    .then((response) => response.json())
  // .then((data) => console.log(data))
    
   .then((music) => {
        for (let i = 0; i < music.length; i++) {
            musicaElements += `
            <tr>
                <td>${music-container[i].rank}</td>
                <td>${music-container[i].artist.name}</td>
                <td>${music-container[i].name}</td>
                <td>${music-container[i].listeners}</td>
            </tr`;
     }
        document.getElementById('music-body').innerHTML = musicaElements
    });

  
   // const nombreDeMusica = music.map((music) => music.name);
   // console.log(nombreDeMusica);
// });
