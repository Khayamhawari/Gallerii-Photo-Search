window.onload = function () {
  fetch(`https://api.unsplash.com/photos?per_page=30&client_id=${API_KEY}`).then(convert_to_json)
    .then(function (data) {
      generateCards(data);
    });
    showMore.addEventListener('click', () => {
      generateCards(data);
    });
}

// const showMore = document.getElementById('show-more-btn');

function generateCards(data) {
  console.log(data);
  const container = document.getElementById('image-container');
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
    card.appendChild(anchor)
    container.appendChild(card)
  }
}
