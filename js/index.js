let cars = [
    
    {
        name: "BMW 8-serie 2-door coupe grey",
        image:"car3.jpg",
        price:"$73,000",
        text:"2019-Manual-Petrol"
    },
    {
        name: "Ferrari LaFerrari 2-door coupe red",
        image:"car10.jpg",
        price:"$810,000",
        text:"2021-Convertible-Diesel"
    }
 
]
let carGallery = document.getElementById("cgallery");
let html = "";
cars.forEach(e =>{
  html += `
  <div class="card car col car-bl mx-3 mt-3 p-0 text-center" id="cgallery">
  <img src="./image/${e.image}" class="card-img-top " alt="...">
  <div class="card-body">
   <h3 class="card-header">${e.name}</h3>
    <h3 class="card-title text-info my-2 fw-bold">${e.price}</h3>
    <p class="card-text fw-bold lead">${e.text}</p>
    <a href="#" class="btn btn-info">Buy Now</a>
   </div>
 </div>
  `
   console.log(e)
   carGallery.innerHTML = html;


});