// const api = 'https://www.cbar.az/currencies/08.07.2022.xml';

// function getData(api) {
//     fetch(api)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => console.warn(err));
// }

// getData(api);


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => {
//     data.forEach(elem=>{

//         let cards = `              <div class="col-lg-4 mt-5">
//         <div class="card" style="width: 18rem;">
//           <img class="card-img-top" src="..." alt="Card image cap">
//           <div class="card-body">
//             <h5 class="card-title">${elem.title}</h5>
//             <p class="card-text"> ${elem.body}</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div> `

//       document.querySelector('#realCurrency .row').innerHTML += cards
        
        
//     });
// })


// var myHeaders = new Headers();
// myHeaders.append("apikey", "N8EL9MfzRMKxeKgTYvigijfWg9EgKPOv");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/currency_data", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


 
// fetch('https://www.cbar.az/currencies/14.07.2022.xml')
// .then(function(resp) {
//     return resp.text();
// })
// .then(function(data) {
//     console.log(data);
// });

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");



var settings = {
    "async":true,
    "scrossDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}


$.ajax(settings).done(function(response){

    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;




});