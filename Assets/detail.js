window.onload = function(){
    const location = window.location.href;
    const url = new URL(location);
    const search_params = new URLSearchParams(url.search);

    if(!search_params.has('id') || search_params.get('id') == ""){
        window.location.href = "./index.html";
    }

    fetch(`https://api.unsplash.com/photos/${search_params.get('id')}?client_id=${API_KEY}`).then(convert_to_json)
    .then(function(data){
       loadDetails(data);

       document.getElementById('image_id').innerText = search_params.get('id');
    })
}

function loadDetails(data){
    console.log(data);
    
    document.getElementById('detail_image').src = data.urls.regular;
    document.getElementById('detail_image').style.backgroundColor = data.color;
    document.getElementById('description_text').innerText = data.description;
    document.getElementById('username').innerText = data.user.username;
    document.getElementById('detail_likes').innerText = data.likes;
    document.getElementById('detail_likes').innerText = data.likes;
    document.getElementById('detail_views').innerText = data.views;
    document.getElementById('alt_description').innerText = data.alt_description;
    document.getElementById('image_color').style.backgroundColor = data.color;
    document.getElementById('color_text').innerText = data.color;
    document.getElementById('download_btn').href = data.links.download;

    const date = new Date(data.created_at);
    const detail_date = `${date.getUTCDay() + 2}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
    document.getElementById('detail_date').innerText = detail_date;
}