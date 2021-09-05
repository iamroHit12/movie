$(document).ready(async function(){
    var items = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US')

    var mappedItem = items.data.results.map(function(item){
        return `<div class="swiper-slide slide">
            <img src=${'http://image.tmdb.org/t/p/original'+`${item.poster_path}`} alt="">
        </div>`
    })

    $('.land-wrapper').append(mappedItem)
})

// top rated

$(document).ready(async function(){
    var items = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US&sort_by=vote_count.desc')

    var mappedItem1 = items.data.results.map(function(item){
        var link1 = `/read.html?id=${item.id}`
        return `<div class="swiper-slide">
        <div class="moviesCard">
            <img src=${'http://image.tmdb.org/t/p/original'+`${item.poster_path}`}
                alt="">
            <div class="moviesCard_foot row no-gutters m-0">
                <h3>${item.original_title}</h3>
                <div class="d-flex">
                    <div class="d-flex justify-content-center align-items-center">
                        <h5>
                            <svg width="28" height="30" viewBox="0 0 28 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 20.0875L22.725 24.75L20.675 15.9625L27.5 10.05L18.5125 9.2875L15 1L11.4875 9.2875L2.5 10.05L9.325 15.9625L7.275 24.75L15 20.0875Z"
                                    fill="#FFB800" />
                            </svg>
                            ${item.vote_average}
                        </h5>
                    </div>
                    <button class="btn foot ms-auto shadow-none"><a href=${link1}>read more</a></button>
                </div>
            </div>
        </div>
    </div>`
    })

    $('.top_rated').append(mappedItem1)
})

// most reviewed

$(document).ready(async function(){
    var items = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US&sort_by=popularity.desc')

    var mappedItem2 = items.data.results.map(function(item){
        var link2 = `/read.html?id=${item.id}`
        return `<div class="swiper-slide">
        <div class="moviesCard">
            <img src=${'http://image.tmdb.org/t/p/original'+`${item.poster_path}`}
                alt="">
            <div class="moviesCard_foot row no-gutters m-0">
                <h3>${item.original_title}</h3>
                <div class="d-flex">
                    <div class="d-flex justify-content-center align-items-center">
                        <h5>
                            <svg width="28" height="30" viewBox="0 0 28 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 20.0875L22.725 24.75L20.675 15.9625L27.5 10.05L18.5125 9.2875L15 1L11.4875 9.2875L2.5 10.05L9.325 15.9625L7.275 24.75L15 20.0875Z"
                                    fill="#FFB800" />
                            </svg>
                            ${item.vote_average}
                        </h5>
                    </div>
                    <button class="btn foot ms-auto shadow-none"><a href=${link2}>read more</a></button>
                </div>
            </div>
        </div>
    </div>`
    })

    $('.most_reviewed').append(mappedItem2)
})

// our picks

$(document).ready(async function(){
    var items = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US&sort_by=popularity.desc')

    var mappedItem3 = items.data.results.map(function(item){
        var link3 = `/read.html?id=${item.id}`
        return `<div class="swiper-slide">
        <div class="moviesCard">
            <img src=${'http://image.tmdb.org/t/p/original'+`${item.poster_path}`}
                alt="">
            <div class="moviesCard_foot row no-gutters m-0">
                <h3>${item.original_title}</h3>
                <div class="d-flex">
                    <div class="d-flex justify-content-center align-items-center">
                        <h5>
                            <svg width="28" height="30" viewBox="0 0 28 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 20.0875L22.725 24.75L20.675 15.9625L27.5 10.05L18.5125 9.2875L15 1L11.4875 9.2875L2.5 10.05L9.325 15.9625L7.275 24.75L15 20.0875Z"
                                    fill="#FFB800" />
                            </svg>
                            ${item.vote_average}
                        </h5>
                    </div>
                    <button class="btn foot ms-auto shadow-none"><a href=${link3}>read more</a></button>
                </div>
            </div>
        </div>
    </div>`
    })

    $('.our_pick').append(mappedItem3)
})