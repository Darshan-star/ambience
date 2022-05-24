const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Dilbar <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: `Humdard <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Tum Hi Ho <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: `Zaalima <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `Sanam Re <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: `Soch Na Sake <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Kabhi Jo Badal Barse <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: `Raabta <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: `Tere Liye <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `Dekhte Dekhte <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `Tera Hone Laga Hu <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `Piya O Re Piya <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `O Saathi <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `Dil Diyan Gallan <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `Be Intehaan <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `Lahore <br><div class="subtitle">Guru Randhawa</div>`,
        poster: "img/30.jpg",
    },
    {
        id:"31",
        songName: `High Rated Gabru <br><div class="subtitle">Guru Randhawa</div>`,
        poster: "img/31.jpg",
    },
    {
        id:"32",
        songName: `Ishare Tere <br><div class="subtitle">Guru Randhawa</div>`,
        poster: "img/32.jpg",
    },
    {
        id:"33",
        songName: `Made In India <br><div class="subtitle">Guru Randhawa</div>`,
        poster: "img/33.jpg",
    },
    {
        id:"34",
        songName: `Naach Meri Rani <br><div class="subtitle">Guru Randhawa</div>`,
        poster: "img/34.jpg",
    },
    {
        id:"35",
        songName: `Ban Ja Rani <br><div class="subtitle">Guru Randhawa</div>`,
        poster: "img/35.jpg",
    },
    {
        id:"36",
        songName: `Suit Suit <br><div class="subtitle">Guru Randhawa</div>`,
        poster: "img/36.jpg",
    },
    {
        id:"37",
        songName: `Leja Re <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/37.jpg",
    },
    {
        id:"38",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/38.jpg",
    },
    {
        id:"39",
        songName: `Nayan <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/39.jpg",
    },
    {
        id:"40",
        songName: `Mehendi <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/40.jpg",
    },
    {
        id:"41",
        songName: `Kinna Sona <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/41.jpg",
    },
    {
        id:"42",
        songName: `Psycho Saiyaan <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/42.jpg",
    },
    {
        id:"43",
        songName: `Baby Girl <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/43.jpg",
    },
    {
        id:"44",
        songName: `Maana Dil <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/44.jpg",
    },
    {
        id:"45",
        songName: `Sauda Khara Khara <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/45.jpg",
    },
    {
        id:"46",
        songName: `Hawa Vich <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/46.jpg",
    },
    {
        id:"47",
        songName: `Dil Na Jaaneya <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/47.jpg",
    },
    {
        id:"48",
        songName: `Ikk Kudi <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/48.jpg",
    },
    {
        id:"49",
        songName: `Ju Think <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/49.jpg",
    },
    {
        id:"50",
        songName: `Chandigarh Mein <br><div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/50.jpg",
    },
    {
        id:"51",
        songName: `Raataan Lambiyan <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/51.jpg",
    },
    {
        id:"52",
        songName: `Tum Hi Aana <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/52.jpg",
    },
    {
        id:"53",
        songName: `Akh Lad Jaave <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/53.jpg",
    },
    {
        id:"54",
        songName: `Meri Aashiqui <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/54.jpg",
    },
    {
        id:"55",
        songName: `Kaabil Hoon <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/55.jpg",
    },
    {
        id:"56",
        songName: `Kisi Se Pyaar Ho Jaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/56.jpg",
    },
    {
        id:"57",
        songName: `Dil Lauta Do <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/57.jpg",
    },
    {
        id:"58",
        songName: `Aapsra Aali <br><div class="subtitle"> Sonalee Kulkarni</div>`,
        poster: "img/58.jpg",
    },
    {
        id:"59",
        songName: `Zingaat <br><div class="subtitle"> Ajay Atul</div>`,
        poster: "img/59.jpg",
    },
    {
        id:"60",
        songName: `Lungi Dance <br><div class="subtitle"> Honey Singh </div>`,
        poster: "img/60.jpg",
    },
    {
        id:"61",
        songName: `Muqabala <br><div class="subtitle"> A.R. Rahman </div>`,
        poster: "img/61.jpg",
    },
    {
        id:"62",
        songName: `Jai Jai Shiv Shankar  <br><div class="subtitle"> Vishal & Shekhar </div>`,
        poster: "img/62.jpg",
    },
    {
        id:"63",
        songName: `Nacho Nacho <br><div class="subtitle">M M Kreem </div>`,
        poster: "img/63.jpg",
    },
    {
        id:"64",
        songName: `Excuses <br><div class="subtitle">A P Dillon</div>`,
        poster: "img/64.jpg",
    },
    {
        id:"65",
        songName: `Heat Waves  <br><div class="subtitle">Glass Animals</div>`,
        poster: "img/65.jpg",
    },
    {
        id:"66",
        songName: `Unstoppable <br><div class="subtitle">SIA</div>`,
        poster: "img/66.jpg",
    },
    {
        id:"67",
        songName: `Let Me down Slowly <br><div class="subtitle">Alec Benjamin</div>`,
        poster: "img/67.jpg",
    },
    {
        id:"68",
        songName: `See you Again <br><div class="subtitle">Charlie Puth </div>`,
        poster: "img/68.jpg",
    },
    {
        id:"69",
        songName: `Shape of You <br><div class="subtitle">Ed Sherran </div>`,
        poster: "img/69.jpg",
    },
    {
        id:"70",
        songName: `Cse la Vie <br><div class="subtitle">Khalid</div>`,
        poster: "img/70.jpg",
    },
    {
        id:"100",
        songName: `Duniyaa <br><div class="subtitle">Akhil</div>`,
        poster: "img/100.jpg",
    },
    {
        id:"101",
        songName: `Supne <br><div class="subtitle">Akhil</div>`,
        poster: "img/101.jpg",
    },
    {
        id:"102",
        songName: `Teri Khamiyaa <br><div class="subtitle">Akhil</div>`,
        poster: "img/102.jpg",
    },
    {
        id:"103",
        songName: `Zindagi <br><div class="subtitle">Akhil</div>`,
        poster: "img/103.jpg",
    },
    {
        id:"104",
        songName: `Karde Haan <br><div class="subtitle">Akhil</div>`,
        poster: "img/104.jpg",
    },
    {
        id:"105",
        songName: `Rang Gora <br><div class="subtitle">Akhil</div>`,
        poster: "img/105.jpg",
    },
    {
        id:"106",
        songName: `Life<br><div class="subtitle">Akhil</div>`,
        poster: "img/106.jpg",
    },
    {
        id:"107",
        songName: `Manali Trance<br><div class="subtitle">Honey Singh</div>`,
        poster: "img/107.jpg",
    }, 
    {
        id:"108",
        songName: `Rani Tu Mein Raja <br><div class="subtitle">Honey Singh</div>`,
        poster: "img/108.jpg",
    }, 
    {
        id:"109",
        songName: `Kanta Laga <br><div class="subtitle">Honey Singh</div>`,
        poster: "img/109.jpg",
    }, 
    {
        id:"110",
        songName: `Party With The Bhoothnath <br><div class="subtitle">Honey Singh</div>`,
        poster: "img/110.jpg",
    }, 
    {
        id:"111",
        songName: `Love Dose <br><div class="subtitle">Honey Singh</div>`,
        poster: "img/111.jpg",
    }, 
    {
        id:"112",
        songName: `Brown Rang <br><div class="subtitle">Honey Singh</div>`,
        poster: "img/112.jpg",
    }, 
    {
        id:"113",
        songName: `Blue Eyes <br><div class="subtitle">Honey Singh</div>`,
        poster: "img/113.jpg",
    },
    {
        id:"114",
        songName: `Stay<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/114.jpg",
    },
    {
        id:"115",
        songName: `Lonely<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/115.jpg",
    },
    {
        id:"116",
        songName: `Sorry<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/116.jpg",
    },
    {
        id:"117",
        songName: `Baby<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/117.jpg",
    },
    {
        id:"118",
        songName: `Favorite Girl<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/118.jpg",
    },
    {
        id:"119",
        songName: `Peaches<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/119.jpg",
    },
    {
        id:"120",
        songName: `Love Yourself<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/120.jpg",
    },
    {
        id:"121",
        songName: `Dil ko Karaar aaya<br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/121.jpg",
    },
    {
        id:"122",
        songName: `Gali Gali<br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/122.jpg",
    },
    {
        id:"123",
        songName: `Aankh Marey<br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/123.jpg",
    },
    {
        id:"124",
        songName: `O Saki Saki<br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/124.jpg",
    },
    {
        id:"125",
        songName: `Yaad Piiya Ki Aane Lagi<br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/125.jpg",
    },
    {
        id:"126",
        songName: `Tu Hi Yaar Mera<br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/126.jpg",
    },
    {
        id:"127",
        songName: `Garmi<br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/127.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})