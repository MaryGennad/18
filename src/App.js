import { useState } from "react";
import Product from "./Product";


function App() {
  const [products, setProducts] = useState([
    {
      "name": 'Сочная буженина в фольге',
      'image': '/img/1.jpg',
      'title': 'Продукты (на 4 порции)',
      'ingridients': [
        'Свинина (лопатка) - 400-500 г',
        'Морковь (небольшая) - 1 шт. ',
        'Чеснок - 3 зубка',
        'Соль - 1 ч. ложка (по вкусу)',
        'Приправа для шашлыка - по вкусу'
      ],
      'description': 'Сначала мясо шпигуется чесноком и натирается специями, маринуется в контейнере не менее 12 часов. Затем запекается, а после отлёживается в холодильнике ещё сутки. При соблюдении этих правил буженина получается очень нежной, но плотной, при нарезке не ломается и не крошится.'
    },

    {
      'name': 'Овощи на гриле',
      'image': '/img/2.jpg',
      'title': 'Продукты (на 4 порции)',
      'ingridients': [
        'баклажаны',
        'сладкий перец ',
        'томаты',
        'патиссоны',
        'Приправа для шашлыка - по вкусу картофель'
      ],
      'description': 'Затем овощи нужно порезать (хотя, при желании можно запечь их и целиком). Для нарезки лучше использовать деревянную доску, например, из тика. Такая доска выглядит красиво и эстетично, после запекания овощи можно выложить прямо на нее, что очень удобно на пикнике.'
    }
  ])

// tes

  return (
    <>
      <h1>React Props & States</h1>
      {products.map((product, index) => {
        return (
          <>
            {/* <h2 key={index}>{product.name}</h2> */}
            <Product
              key={index}
              product={product}
              onchange={(e, attrName) => {
                let newProducts = [...products]
                newProducts[index][attrName] = e.target.value
                setProducts(newProducts)
                // console.log('Корневой : ' + e.target.value);
              }} />
            {/* <input value={product.name} onChange={(e) => {
              let newProducts = [...products]
              newProducts[index].name = e.target.value
              setProducts(newProducts)
            }} /> */}
    
          </>
        )
      })}
    </>
  );
}

export default App;
