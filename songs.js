"use strict"
let stringContainer = document.getElementById("list-view");
let songs = [];
let button = document.getElementById("add");
let userSong = document.getElementById("userSong");
let userArtist = document.getElementById("userArtist");
let userAlbum = document.getElementById("userAlbum");

songs[songs.length] = "Legs >  Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song >  Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > Alanis Moris*ette on the album Jagged Little Pill";


//Using push/unshift array methods to add songs to beginning/end of array
songs.push("Reptilia >  The Strokes on the album Room on Fire");
songs.unshift("Spirits >  The Strumbellas on the album TBA");


// Adding event listener to add info submitted by user
button.addEventListener("click", function(){
  let userNewString = `${userSong.value} > ${userArtist.value} on the album ${userAlbum.value}`
  
  // SR!!!!!!!!!!!!!!!!!!!!!!
  //pushing user string into songs array
    songs.push(userNewString)
    

//SR!!!!!!!!!!!!!!!!!!!!!!!!!
//For loop to iterate through songs
for (let i = 0; i < songs.length; i++) {
//adding replace methods to remove "*","@","(","!" and replace ">" with "-"
  let cleanStrings = songs[i].replace (/[*@(!]/g,"").replace(">","-")
  
  //Printing list of songs to DOM
   stringContainer.innerHTML += `<div>${cleanStrings}</div>`;

  }

});
