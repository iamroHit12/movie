console.log('hello rohit')

// $( document ).ready(function() {
//     axios.get('https://imdb-api.com/en/API/MostPopularTVs/k_8gh2w48z').then((res)=>{
//       console.log(res)
//       var val = res.data.items.map(item=>{return `<div class="swiper-slide">
//         <img src=${item.image} width="100%" height="500px" />
//       </div>`})

//       $('.landing_carousel').append(`${val}`)
//     })
//     axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_8gh2w48z',{
//       }).then((res) => {
//         var theaterPopular = res.data.items.map(item=>{return `<div class="swiper-slide">
//           <img src=${item.image} width='400px' height='250px' />
//           <div class="d-flex mt-3">
//             <div class="me-auto">
//               <h3>${item.fullTitle}</h3>
//               <h5>
//                 <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M15 20.0875L22.725 24.75L20.675 15.9625L27.5 10.05L18.5125 9.2875L15 1L11.4875 9.2875L2.5 10.05L9.325 15.9625L7.275 24.75L15 20.0875Z" fill="#FFB800"/>
//                 </svg>
//                 ${item.imDbRating}/10
//               </h5>
//             </div>
//             <button class="btn ms-auto me-4 text-center">read more</button>
//           </div>
//           </div>`})

//         $('.theaterPopular').append(`${theaterPopular}`)
//     })

//     axios.get('https://imdb-api.com/en/API/ComingSoon/k_8gh2w48z',{
//       }).then((res) => {
//         var theaterSoon = res.data.items.map(item=>{return `<div class="swiper-slide">
//           <img src=${item.image} width='400px' height='250px' />
//           <div class="d-flex mt-3">
//             <div class="me-auto">
//               <h3>${item.fullTitle}</h3>
//               <h5>
//                 <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M15 20.0875L22.725 24.75L20.675 15.9625L27.5 10.05L18.5125 9.2875L15 1L11.4875 9.2875L2.5 10.05L9.325 15.9625L7.275 24.75L15 20.0875Z" fill="#FFB800"/>
//                 </svg>
//                 ${item.imDbRating}/10
//               </h5>
//             </div>
//             <button class="btn ms-auto me-4 text-center">read more</button>
//           </div>
//           </div>`})

//         $('.theaterSoon').append(`${theaterSoon}`)
//     })

//     axios.get('https://imdb-api.com/en/API/MostPopularTVs/k_8gh2w48z',{
//       }).then((res) => {
//         var tvPopular = res.data.items.map(item=>{return `<div class="swiper-slide">
//           <img src=${item.image} width='400px' height='250px' />
//           <div class="d-flex mt-3">
//             <div class="me-auto">
//               <h3>${item.fullTitle}</h3>
//               <h5>
//                 <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M15 20.0875L22.725 24.75L20.675 15.9625L27.5 10.05L18.5125 9.2875L15 1L11.4875 9.2875L2.5 10.05L9.325 15.9625L7.275 24.75L15 20.0875Z" fill="#FFB800"/>
//                 </svg>
//                 ${item.imDbRating}/10
//               </h5>
//             </div>
//             <button class="btn ms-auto me-4 text-center">read more</button>
//           </div>
//           </div>`})

//         $('.tvPopular').append(`${tvPopular}`)
//     })

//     axios.get('https://imdb-api.com/en/API/Top250TVs/k_8gh2w48z',{
//       }).then((res) => {
//         var tvSoon = res.data.items.map(item=>{return `<div class="swiper-slide">
//           <img src=${item.image} width='400px' height='250px' />
//           <div class="d-flex mt-3">
//             <div class="me-auto">
//               <h3>${item.fullTitle}</h3>
//               <h5>
//                 <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M15 20.0875L22.725 24.75L20.675 15.9625L27.5 10.05L18.5125 9.2875L15 1L11.4875 9.2875L2.5 10.05L9.325 15.9625L7.275 24.75L15 20.0875Z" fill="#FFB800"/>
//                 </svg>
//                 ${item.imDbRating}/10
//               </h5>
//             </div>
//             <button class="btn ms-auto me-4 text-center">read more</button>
//           </div>
//           </div>`})

//         $('.tvSoon').append(`${tvSoon}`)
//     })
// });

$( document ).ready(function() {
  $('.target').hide();
  $('#div1').show();
});

$( document ).ready(function() {
  $('.tv_target').hide();
  $('#Tvdiv1').show();
});

function read(key){
  console.log(key)
}