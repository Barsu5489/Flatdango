/*
 * firstMovie - function to fetch and render first movie
 * mMovieData - func
 * renderData - function to render data to DOM   
*/

function firstMovie()
{
   
    fetch('http://localhost:8000/films/1')
    .then(res => res.json())
    .then(data => 
        {   
            console.log(data)
            const movie = document.querySelector('.movie');
            //Rendering first movie
            movie.innerHTML = 
            `
            <div class="img">
                <img src="${data.poster}" alt="poster" srcset="">
            </div>
            <div class="movie-details">
            <h1>${data.title}</h1>
              <ul id="details">
                <li>Run Time: ${data.runtime} minutes</li>
                <li>Show Time: ${data.showtime}</li>
                <li>Available Tickets: ${data.capacity - data.tickets_sold}</li>
              </ul>
            </div>
            `
        })
}
function movieData()
{
    
    fetch('http://localhost:8000/films')
    .then(res =>res.json())
    .then(data => 
        {
            renderData(data)
        })    
}
let render = "";
function renderData(data)
{
  //  const section = document.querySelector('.section');
    for(let i =1; i< data.length; i++)
        {   
            // Container to all elements
            const section = document.querySelector('.section');
            //Creating image div container 
            const imgDiv = document.createElement('div')
            imgDiv.classList.add('img')
            //creating image tag
            const img = document.createElement('img')
            img.src = data[i].poster
            //creating div to contain movie details
            const movieDetails = document.createElement('div')
            movieDetails.classList.add('movie-details')
            //creating header tag
            const movieTitle = document.createElement('h1')
            movieTitle.classList.add('heading')
            movieDetails.innerText = data[i].title
            // Appending elements into the container div
            section.appendChild(imgDiv)
            section.appendChild(movieDetails)
            imgDiv.appendChild(img)
            imgDiv.appendChild(movieTitle)
            // Creating list elements and button 
            const l1 = document.createElement('li')
            const li2 = document.createElement('li')
            const li3 = document.createElement('li')
            const btn = document.createElement('button')
            btn.innerText = 'Buy Ticket'
            btn.classList.add('list4')
            l1.innerText = data[i].runtime
            li2.innerText = data[i].showtime
            li3.innerText = data[i].capacity - data[i].tickets_sold
            //Appending li and button
            section.appendChild(l1)
            section.appendChild(li2)
            section.appendChild(li3)
            section.appendChild(btn)

                // Implementing button functionality
               const btnn =  document.querySelector('.list4').addEventListener('click', (e)=>
                {
                    if(li3.textContent > 0)
                    {
                        li3.style.display = 'block'
                        li3.textContent --
                    }
                    else if(li3.textContent == 0)
                    {
                        btn.style.display = 'none'
                        li3.textContent = 'sold Out'
                    }        

                })
        
        }
}

document.addEventListener('DOMContentLoaded', ()=>
{
    firstMovie()
    movieData()
    
})