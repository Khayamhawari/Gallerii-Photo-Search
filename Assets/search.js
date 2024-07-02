window.onload = function () {
    const location = window.location.href;
    const url = new URL(location);
    const search_parameters = new URLSearchParams(url.search);

    if (!search_parameters.has('q') || search_parameters.get('q') == "") {
        window.location.href = "./index.html";
    }

    fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${search_parameters.get('q')}&client_id=${API_KEY}`).then(convert_to_json)
        .then(function(data) {
            generateCards(data.results);

            document.getElementsByName('q')[0].value = search_parameters.get('q');
            document.getElementById('search_query').innerText = search_parameters.get('q');
        })
}

// const showMore = document.getElementById('show-more-btn');

function generateCards(data) {
    console.log(data);
    const container = document.getElementById('result-container');
    for (let i = 0; i < data.length; i++) {
        const singal_item = data[i];
        const card = document.createElement('div');
        const img = document.createElement('img');
        const anchor = document.createElement('a');

        card.classList.add('item');
        anchor.href = `./detail.html?id=${singal_item.id}`;
        card.style.backgroundColor = singal_item.color;
        img.src = singal_item.urls.thumb;

        anchor.appendChild(img);
        card.appendChild(anchor);
        container.appendChild(card);
    }
}

