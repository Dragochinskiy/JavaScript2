// ДЗ 1
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

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return '<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>';
  }
}












// ДЗ 2
// Создаем класс для списка товаров GoodsList.
class GoodsList {
  constructor() {
    this.goods = [];
  }
  // Метод для заполнения списка goods.
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  //
  render() { // 1. Запускаем отрисовку
    let listHtml = ''; // 2. Создаем пустую переменную listHtml
    this.goods.forEach(good => { // 3. Перебираем список товаров goods и запоминаем в good
      const goodItem = new GoodsItem(good.title, good.price); // 4. Записываем в goodItem данные из goods
      listHtml += goodItem.render(); // 5. В переменную listHtml добавляем данные из goods и запускаем render снова?
    });
    document.querySelector('.goods-list').innerHTML = listHtml; // 6. Находим класс goods-list и добавляем данные из goods
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

// Создаем класс корзины товаров Cart
class Cart {
  // Массив со всеми товарами добавленными в корзину
  constructor() {
    this.addGoods = [];
  }
}

// Создаем класс элемента корзины товаров Cart
class ElementCart {
  // В корзине должны отображаться элементы как в списке
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
  }
  // На случай если вид будет изменен
  render() { }
}

// Определяем суммарную стоимость товаров GoodsList
const totalPrice = list.goods.reduce((acc, product) => {
  return acc + product.price;
}, 0);

// console.log(totalPrice);