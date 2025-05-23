let data = [];

fetch('data.json')
  .then(res => res.json())
  .then(json => data = json);

function search() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  const filtered = data.filter(item => item.title.toLowerCase().includes(input));
  if (filtered.length === 0) {
    resultsContainer.innerHTML = '<li class="text-gray-500">無搜尋結果</li>';
  } else {
    filtered.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}" class="text-blue-600 hover:underline" target="_blank">${item.title}</a>`;
      resultsContainer.appendChild(li);
    });
  }
}
