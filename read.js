$(document).ready(async function(){
    var urlParams = new URLSearchParams(window.location.search);
    var movie_id = urlParams.get('id')

    // header and overview

    var item = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US`)

    $('#title').html( item.data.original_title)
    $('#rate').html( item.data.vote_average)
    $('#pic').attr('src',`http://image.tmdb.org/t/p/original${item.data.poster_path}`)
    $('#overview_text').html(item.data.overview)

    var photos = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US&page=1`)
    console.log(photos.data)
    // related movies

    var related = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US&page=1`);

    $('#related_pic1').attr('src',`http://image.tmdb.org/t/p/original${related.data.results[0].poster_path}`)
    $('#related_pic2').attr('src',`http://image.tmdb.org/t/p/original${related.data.results[1].poster_path}`)
    $('#related_pic3').attr('src',`http://image.tmdb.org/t/p/original${related.data.results[2].poster_path}`)
    $('#related_pic4').attr('src',`http://image.tmdb.org/t/p/original${related.data.results[3].poster_path}`)
    $('#related_pic5').attr('src',`http://image.tmdb.org/t/p/original${related.data.results[4].poster_path}`)
    $('#related_pic6').attr('src',`http://image.tmdb.org/t/p/original${related.data.results[5].poster_path}`)

    $('#related_mName1').html(related.data.results[0].original_title)
    $('#related_mName2').html(related.data.results[1].original_title)
    $('#related_mName3').html(related.data.results[2].original_title)
    $('#related_mName4').html(related.data.results[3].original_title)
    $('#related_mName5').html(related.data.results[4].original_title)
    $('#related_mName6').html(related.data.results[5].original_title)

    $('#related_rate1').html(related.data.results[0].vote_average.toFixed(1))
    $('#related_rate2').html(related.data.results[1].vote_average.toFixed(1))
    $('#related_rate3').html(related.data.results[2].vote_average.toFixed(1))
    $('#related_rate4').html(related.data.results[3].vote_average.toFixed(1))
    $('#related_rate5').html(related.data.results[4].vote_average.toFixed(1))
    $('#related_rate6').html(related.data.results[5].vote_average.toFixed(1))

    $('#href1').attr('href',`/read.html?id=${related.data.results[0].id}`)
    $('#href2').attr('href',`/read.html?id=${related.data.results[1].id}`)
    $('#href3').attr('href',`/read.html?id=${related.data.results[2].id}`)
    $('#href4').attr('href',`/read.html?id=${related.data.results[3].id}`)
    $('#href5').attr('href',`/read.html?id=${related.data.results[4].id}`)
    $('#href6').attr('href',`/read.html?id=${related.data.results[5].id}`)

    // reviews

    var reviews = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US&page=1`)
    $('#found_review').html(reviews.data.results.length)
    var review = reviews.data.results.map(function (review) {
        if(review.author_details.avatar_path == null){
            var img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png'
        }else{
            var img = `${'http://image.tmdb.org/t/p/original'+`${review.author_details.avatar_path}`}`
        }
        return `<div class="review d-md-flex">
        <div class="d-flex justify-content-center">
            <img src=${img}
                alt="">
        </div>
        <div class="mt-3 mt-md-0 mx-md-5">
            <h3>${review.author}</h3>
            <svg width="347" height="30" viewBox="0 0 347 30" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15 20.0875L22.725 24.75L20.675 15.9625L27.5 10.05L18.5125 9.2875L15 1L11.4875 9.2875L2.5 10.05L9.325 15.9625L7.275 24.75L15 20.0875Z"
                    fill="#FFB800" />
                <path
                    d="M50 20.0875L57.725 24.75L55.675 15.9625L62.5 10.05L53.5125 9.2875L50 1L46.4875 9.2875L37.5 10.05L44.325 15.9625L42.275 24.75L50 20.0875Z"
                    fill="#FFB800" />
                <path
                    d="M85 20.0875L92.725 24.75L90.675 15.9625L97.5 10.05L88.5125 9.2875L85 1L81.4875 9.2875L72.5 10.05L79.325 15.9625L77.275 24.75L85 20.0875Z"
                    fill="#FFB800" />
                <path
                    d="M120 20.0875L127.725 24.75L125.675 15.9625L132.5 10.05L123.513 9.2875L120 1L116.488 9.2875L107.5 10.05L114.325 15.9625L112.275 24.75L120 20.0875Z"
                    fill="#FFB800" />
                <path
                    d="M155 20.0875L162.725 24.75L160.675 15.9625L167.5 10.05L158.513 9.2875L155 1L151.488 9.2875L142.5 10.05L149.325 15.9625L147.275 24.75L155 20.0875Z"
                    fill="#FFB800" />
                <path
                    d="M190 20.0875L197.725 24.75L195.675 15.9625L202.5 10.05L193.513 9.2875L190 1L186.488 9.2875L177.5 10.05L184.325 15.9625L182.275 24.75L190 20.0875Z"
                    fill="#FFB800" />
                <path
                    d="M225 20.0875L232.725 24.75L230.675 15.9625L237.5 10.05L228.513 9.2875L225 1L221.488 9.2875L212.5 10.05L219.325 15.9625L217.275 24.75L225 20.0875Z"
                    fill="#FFB800" />
                <path
                    d="M260 20.0875L267.725 24.75L265.675 15.9625L272.5 10.05L263.513 9.2875L260 1L256.488 9.2875L247.5 10.05L254.325 15.9625L252.275 24.75L260 20.0875Z"
                    fill="#FFB800" />
                <path
                    d="M297 20.0875L304.725 24.75L302.675 15.9625L309.5 10.05L300.513 9.2875L297 1L293.488 9.2875L284.5 10.05L291.325 15.9625L289.275 24.75L297 20.0875Z"
                    fill="#FFB800" />
                <path
                    d="M332 20.0875L339.725 24.75L337.675 15.9625L344.5 10.05L335.513 9.2875L332 1L328.488 9.2875L319.5 10.05L326.325 15.9625L324.275 24.75L332 20.0875Z"
                    fill="white" />
            </svg>
            <h3>${review.updated_at}</h3>
        </div>
    </div>
    <p class="text mt-3">${review.content}</p>
    <div class="hr mt-2 mb-3"></div>`
    })

    $('.review_container').append(review)
})