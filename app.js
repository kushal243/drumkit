var music = [];
var bass = document.getElementById("bass"); 
var snare = document.getElementById("snare"); 
var cymbal = document.getElementById("cymbal"); 
var smalltom = document.getElementById("smalltom"); 
var mediumtom = document.getElementById("medtom"); 
var hihats = document.getElementById("hihat"); 
function play_audio(id){
    switch(id){
        case "crash_cymbal" :
            cymbal.play();
            music.push(cymbal);
            break;
        case "bass_drum" :
            bass.play();
            music.push(bass);
            break;
        case "snare" :
            snare.play();
            music.push(snare);
            break;
        case "hi_hits" :
            hihats.play();
            music.push(hihats);
            break;
        case "tom_med" :
            mediumtom.play();
            music.push(mediumtom);
            break;
        case "tom_small" :
            smalltom.play();
            music.push(smalltom);
            break;
        default:
    }
}
document.addEventListener('keypress', (event) => {
    var code = event.code;
    if (code === "KeyA"){
        cymbal.play();
        music.push(cymbal);
    }
    else if (code === "KeyS"){
        bass.play();
        music.push(bass);
    }
    else if (code === "KeyD"){
        snare.play();
        music.push(snare);

    }
    else if (code === "KeyJ"){
        hihats.play();
        music.push(hihats);

    }
    else if (code === "KeyK"){
        mediumtom.play();
        music.push(mediumtom);

    }
    else if (code === "KeyL"){
        smalltom.play();
        music.push(smalltom);

    }
  });
  
     function play_music(){
         let interval = 1000;
            music.forEach((music, index) =>{
                setTimeout(() => {
                   music.play(); 
                }, index*interval);
            });
    };  
    
  
  function reset_music(){
      return(music =[]);
  }

