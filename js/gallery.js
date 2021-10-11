let cars = [
    {
        name: "Audi A4 4-door sedan blue",
        image:"car1.jpg",
        price:"$23,000",
        text:"2020-Diesel-Manual"
    },
    {
        name: "Audi A8 4-door sedan silver",
        image:"car2.jpg",
        price:"$70,000",
        text:"2021-Automatic-Diesel"
    },
    {
        name: "BMW 8-serie 2-door coupe grey",
        image:"car3.jpg",
        price:"$73,000",
        text:"2019-Manual-Petrol"
    },
    {
        name: "BMW X7-serie 5-door SUV",
        image:"car4.jpg",
        price:"$23,500",
        text:"2021-Manual-Hybrid"
    },
    {
        name: "BMW 7-serie 4-door sedan white",
        image:"car5.jpg",
        price:"$13,000",
        text:"2020-Manual-Diesel"
    },
    {
        name: "BMW 6-serie 2-door convertible red",
        image:"car6.jpg",
        price:"$14,600",
        text:"2020-Automatic-Hybrid"
    },
    {
        name: "Audi e-tron 5-door SUV blue",
        image:"car7.jpg",
        price:"$63,000",
        text:"2018-Automatic-Electric"
    },
    {
        name: "Audi A4 Allroad 5-door wagon white",
        image:"car8.jpg",
        price:"$23,000",
        text:"2021-Automatic-Hybrid"
    },
    {
        name: "Cadillac Escalade 5-door SUV brown",
        image:"car9.jpg",
        price:"$14,000",
        text:"2015-Manual-petrol"
    },
    {
        name: "Ferrari LaFerrari 2-door coupe red",
        image:"car10.jpg",
        price:"$810,000",
        text:"2021-Convertible-Diesel"
    },
    {
        name: "Cadillac ATS 2-door coupe red",
        image:"car11.jpg",
        price:"$13,500",
        text:"2017-Semi Automatic-Diesel"
    },
    {
        name: "Ferrari Portofino  convertible silver",
        image:"car12.jpg",
        price:"$79,000",
        text:"2021-Convertible-Diesel"
    },
   
]
let carGallery = document.getElementById("cgallery");
let html = "";
cars.forEach(element => {
    html += `
    <div class="card car col-lg-4 col-md-6 m-3 p-0 text-center" id="cgallery">
     <img src="./image/${element.image}" class="card-img-top " alt="...">
     <div class="card-body">
      <h3 class="card-header">${element.name}</h3>
       <h3 class="card-title text-info my-2 fw-bold">${element.price}</h3>
       <p class="card-text fw-bold lead">${element.text}</p>
       <a href="#" class="btn btn-info">Buy Now</a>
      </div>
    </div>
    `
    console.log(element)
    carGallery.innerHTML = html;
});