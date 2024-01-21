//fetch API
// The Fetch API provides an interface for fetching (sendinglreceiving) resources.
// It uses Request and Response objects.
// The fetch() method is used to fetch a resource (data).

const URl ="https://cat-fact.herokuapp.com/facts";
const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");




//let promise = fetch( url [options] )          (options like GET delete if no option is giving it take GET as default)

// let promise =fetch(URl);s
// console.log(promise);

//using async-await
const getFact =async () => {
  console.log("getting data...");
  let Response = await  fetch(URl);
  console.log(Response);  //JSON format
  let data = await Response.json();
  console.log(data[1]);
  fact.innerText = data[4].text;
  console.log(data.facts);
};

//using promise chaining
// function getFact(){
//     fetch(URl).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
//     fact.innerText = data[4].text;
// });
// }


btn.addEventListener("click", getFact);


// AJAX is Asynchronous JS & XML
// JSON is JavaScript Object Notation
// json() method : returns a second promise that resolves with the result of parsing the
// response body text as JSON. (Input is JSON, output is JS object)


//Requests & Response
// HTTP Verbs    (GET, POST,DELETE)
// Response Status Code (200 = Success, 400 = Bad Request)
// *HTTP response headers also contain details about the
// responses, such as content type, HTTP status code etc.