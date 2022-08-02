// fetch()method:It is defined on the window object,which we can use to perform request.
// This method will return promise ..
// Promise will either be fullfilled or rejected

fetch('https://fakestoreapi.com/products')
.then(data =>{
//.then(res => res.json())
//.then(data => console.log(data[2].title)) // console.log(data)
// ----- same as above ----
return data.json();  // converts json data to javascript object
})
.then((javascriptobject) => {
// console.log(javascriptobject[2].title);
// document.getElementById('root')
//innerHTML=data[2].title;
// innerHTML=javascriptobject[2].title;

let data1= ""; // variable data1 and we want it to be empty
 // my array is javascriptobject which contains my whole data map takes three arguments
// first= current value(values -- which will take all the data of my array from 1=id to the last)
// second= index number (for accessing objects)
// third = array which we are working on
//
 javascriptobject.map((values)=>{
  data1= ' <div class="card" > 
  <h1 class="title">${values.title}</h1>
  <img src=${values.image} alt="img" class="images">
  <p>${values.description}</p>  
  <p class="price">${values.price}</p>   
  <p class="category">${values.category}</p> 
  </div> ';
           
});
  document.getElementById("cards").innerHTML=data1;

}).catch((err) => {
  console.log(err); // handling error if it returns error
} )


