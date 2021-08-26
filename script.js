// ------------------------- signup--------------------------------
let fname=document.getElementById("fname");
let email=document.getElementById("email");
let password=document.getElementById("password");
let sss =document.getElementById("sss");
let yes= document.getElementById("yes");
let error=document.getElementById("error");


function myFunction(){
    if(fname.value===""||fname.value==null||fname.value.length <= 5 ){
        sss.style.display = "none";
        error.innerHTML="Enter Your name min 5CH "
    }
    else if(email.value===""||email.value==null ){
        sss.style.display = "none";
        error.innerHTML="Enter Your email "
    }
    else if(password.value===""||password.value==null ||password.value.length <=15){
        sss.style.display = "none";
        error.innerHTML="Enter Your password min 15 "
    }
    else if(password.value.length > 15){
        sss.style.display = "block";
        error.innerHTML=" "
    }
    else
    sss.style.display = "block";

    if( password.value.length > 3){
        document.getElementById("span1").style.backgroundColor = "red";
       
   }
   if( password.value.length >6){
    document.getElementById("span1").style.backgroundColor = "yellow";
       document.getElementById("span2").style.backgroundColor = "yellow";
      
   }
   if(password.value.length >=10){
    document.getElementById("span1").style.backgroundColor = "green";
    document.getElementById("span2").style.backgroundColor = "green";
    document.getElementById("span3").style.backgroundColor = "green";
      
   }
   if(password.value.length >=15){
    document.getElementById("span1").style.backgroundColor = "green";
    document.getElementById("span2").style.backgroundColor = "green";
    document.getElementById("span3").style.backgroundColor = "green";
    document.getElementById("span4").style.backgroundColor = "green";
    }
};


// ------------------------------index2--------------------------------

var API_Key="api_key=b14e0d0a5744eadbded54b795209fc69";
var BASE_URL = "https://api.themoviedb.org/3";
var API_URL = BASE_URL+"/discover/movie?sort_by=popularity.desc&"+ API_Key;
var IMG_URL = "https://image.tmdb.org/t/p/w500";
var searchURL ="https://api.themoviedb.org/3/search/movie?api_key=b14e0d0a5744eadbded54b795209fc69";
const form =document.getElementById("form");
const search=document.getElementById("search");
const main=document.getElementById("main");





function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
    console.log(data);
    showMovies(data.results);
    })
}


function showMovies(movies){
    main.innerHTML="";
    movies.forEach(movie => {
        const {poster_path,title, vote_average, overview}=movie;
        const movieEl=document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML=`
        <div class="card">
        <div class="con">
        <div class="front">
        <img src="${IMG_URL + poster_path}" alt="${title}"/>
        </div>
        <div class="back">
            <h3>Overview:</h3>
            "${overview}"
            <button> Watch </button>
        </div>
        </div>
        </div>
        <div class="movie_info">
            <h3>"${title}"<h3>
            <span class="${getClassByRate(vote_average)}"> ${vote_average}</span>
        </div>
        `
        
        main.appendChild(movieEl);
    });
}

getMovies(API_URL);
function getClassByRate(vote){
    if(vote >= 8){
        return "green";
    } else if (vote >= 5){
        return "orange";
    }else{
        return "red";
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm=search.value;
    if (searchTerm){
        getMovies(searchURL + '&query=' + searchTerm);
    }else {
        getMovies(API_URL);
    }
});


var acc = document.getElementsByClassName("accordion");
var i;
// var fa =document.querySelector(".fa-plus")
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}