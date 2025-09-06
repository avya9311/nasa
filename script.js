const title = document.querySelector('#title');
const date = document.querySelector('#date');
const image = document.querySelector('#img');
const description = document.querySelector('#description ');
const fullbox = document.querySelector('#fullbox');


function movie(){
const input = document.querySelector('#input-data').value;

fetch(`https://api.nasa.gov/planetary/apod?api_key=TDpYCWQ7mBUqrVfAhtYDWhUFoIHZgJNxhQOHU6sJ&date=${input}`)
.then((rev)=>  {return rev.json()})
.then((data)=>{
    title.innerText = data.title ;
     date.innerText =   data.date ;
     console.log(data.date);
       description.innerText = data.explanation ;
       const photo = document.createElement("img");
     photo.src = data.url;
 description.appendChild(photo);
       
  }

)
}


movie();


btn1.addEventListener("click",movie)