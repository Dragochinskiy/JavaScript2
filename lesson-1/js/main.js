const products = [
  { id: 1, title: 'Notebook', price: 1000, img: 'http://via.placeholder.com/650x360' },
  { id: 2, title: 'Mouse', price: 100 },
  { id: 3, title: 'Keyboard', price: 250 },
  { id: 4, title: 'Gamepad', price: 150 }
];

const renderProduct = (product, img = 'http://via.placeholder.com/640x360') => {
  return `<div class="product-item">
            <h3>${product.title}</h3>
            <img src="${img}" alt="">
            <p>${product.price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderPage = list => {
  document.querySelector('.products').innerHTML =
    list.map(product => renderProduct(product)).join('');
};

renderPage(products);