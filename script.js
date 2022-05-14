let musicaElements = []; 

fetch('music.json')
    .then((response) => response.json())

    //.then((data) => console.log(data))
    
   .then((music) => {
        for (let i = 0; i < music.length; i++) {
            musicaElements += `
            <tr>
            <td>${i+1}</td>
            <td> ${music[i].artist.name}</td>
            <td><b>${music[i].name}</b></td>
            <td> ${music[i].listeners}</td>
            </tr`;
     }
       document.getElementById('music-body').innerHTML = musicaElements
       


    });

  
   // const nombreDeMusica = music.map((music) => music.name);
   // console.log(nombreDeMusica);
// });
