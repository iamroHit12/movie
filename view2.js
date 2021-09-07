$(document).ready(async function(){
    var urlParams = new URLSearchParams(window.location.search);
    var page_no = urlParams.get('page')

    var page = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US&sort_by=popularity.desc&page=${page_no}`)
    
    page.data.results.forEach((item)=>{
        var link = `/read.html?id=${item.id}`;
        const data = document.createElement("div");
        data.innerHTML = `<div class="moviesCard mt-3">
        <img src=${'http://image.tmdb.org/t/p/original'+`${item.poster_path}`}
            alt="">
        <div class="m-0">
            <h3 class="mt-2 mt-sm-0">${item.original_title}</h3>
            <div class="d-flex">
                <div class="me-auto d-flex justify-content-center align-items-center">
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
                <div class="ms-auto d-flex justify-content-center align-items-center">
                    <button class="btn shadow-none"><a href=${link}>read more</a></button>
                </div>
            </div>
        </div>
    </div>`

    $('.gallery').append(data)
    })
})

$(document).ready(async function() {
    var page = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=403c1367f4654d78c7dc442cf20384a5&language=en-US&sort_by=popularity.desc')
    var total = page.data.total_pages;

    var urlParams = new URLSearchParams(window.location.search);
    var page_no = parseInt(urlParams.get('page'))

    if(page_no == total){
        $('#next').hide();
    }else{
        $('#next').click(function(){
            var next = page_no + 1;
            document.location.search = `page=${next}`
        })
    }

    if(page_no == 1){
        $('#prev').hide();
    }else{
        $('#prev').click(function(){
            var prev = page_no - 1;
            document.location.search = `page=${prev}`
        })
    }

    $('#info').html(`Page ${page_no} of ${total}`)

    $('#form').submit(function(e){
        e.preventDefault();
        var val = parseInt(document.getElementById('input').value);
        if(val>total){
            window.alert('Page limit exceeded !')
            document.location.search = `page=1`
        }else{
            document.location.search = `page=${val}`
        }
    })
})