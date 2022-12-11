function firstMovie()
{
   
    fetch('http://localhost:3000/films/1')
    .then(res => res.json())
    .then(data => 
        {   
            console.log(data)
            const movie = document.querySelector('.movie');
            //Rendering first
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
    
    fetch('http://localhost:3000/films')
    .then(res =>res.json())
    .then(data => renderData(data))    
}
let render = "";
function renderData(data)
{
  ///  const section = document.querySelector('.section');
    for(let i =0; i< data.length; i++)
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
            const movieTitle = document.createElement('h1')
            movieTitle.classList.add('heading')
            movieDetails.innerText = data[i].title
            section.appendChild(imgDiv)
            section.appendChild(movieDetails)
            imgDiv.appendChild(img)
            imgDiv.appendChild(movieTitle)
            const l1 = document.createElement('li')
            const li2 = document.createElement('li')
            const li3 = document.createElement('li')
            const btn = document.createElement('button')
            btn.innerText = 'Buy Ticket'
            btn.classList.add('list4')
            l1.innerText = data[i].runtime
            li2.innerText = data[i].showtime
            li3.innerText = data[i].capacity - data[i].tickets_sold
            section.appendChild(l1)
            section.appendChild(li2)
            section.appendChild(li3)
            section.appendChild(btn)

                //console.log('ll')
                document.querySelector('.list4').addEventListener('click', ()=>
                {
                    //li3.style.display = 'none'
                    if(li3.innerText > 0)
                    {
                        li3.style.display = 'block'
                    }
                    else if(li3.innerText == 0)
                    {
                        li3.style.display = 'none'
                    }
                    li3.innerText = (data[i].capacity - data[i].tickets_sold) - 1
                    
                    

                })
        
        }
}

document.addEventListener('DOMContentLoaded', ()=>
{
    firstMovie()
    movieData()
    
})
// function movieData()
// {
    
//     fetch('http://localhost:3000/films')
//     .then(res =>res.json())
//     .then(data => renderData(data))    
// }
// let render = "";
// function renderData(data)
// {
//     const section = document.querySelector('.section');
//     for(let i =0; i< data.length; i++)
//         {
//             const avail =  data[i].capacity - data[i].tickets_sold
//            const n =  document.createElement('button')
//            n.textContent= 'buy ticket'
//            section.appendChild(n)
//            n.addEventListener('click',()=>
//            {
//                 console.log('clicked')
//            })

//             section.innerHTML += 
//             `
//             <button>buy ticket</button>
//             <div class="img">
//                 <img src="${data[i].poster}" alt="poster" srcset="">
//             </div>
//             <div class="movie-details">
//             <h1>${data[i].title}</h1>
//               <ul id="details">
//                 <li>Run Time: ${data[i].runtime} minutes</li>
//                 <li>Show Time: ${data[i].showtime}</li>
//                 <li id="li">Available Tickets: ${avail}</li> 
//               </ul>

//             </div>
//             `
//         }
       // const section = document.querySelector('.section');
        // section.innerHTML = render

        //     const avail =  data[i].capacity - data[i].tickets_sold
        //    const n =  document.createElement('button')
        //    n.textContent= 'buy ticket'
        //    section.appendChild(n)
        //    n.addEventListener('click',()=>
        //    {
        //         console.log('clicked')
        //    })

        //     section.innerHTML += 
        //     `
        //     <button>buy ticket</button>
        //     <div class="img">
        //         <img src="${data[i].poster}" alt="poster" srcset="">
        //     </div>
        //     <div class="movie-details">
        //     <h1>${data[i].title}</h1>
        //       <ul id="details">
        //         <li>Run Time: ${data[i].runtime} minutes</li>
        //         <li>Show Time: ${data[i].showtime}</li>
        //         <li id="li">Available Tickets: ${avail}</li> 
        //       </ul>

        //     </div>
        //     `