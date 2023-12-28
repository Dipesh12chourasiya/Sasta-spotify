console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Alan Walker - On My Way", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Alan Walker - Alone", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Alan Walker - Faded", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Alan Walker K-391 - Ignite", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Alan_Walker - Lily", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Alan_Walker - Play", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Alan_Walker - Shut_Up", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Alan___ISÁK - Sorry", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Alan_Walker - The_Spectre", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Alan_Walker - The_Drum", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})