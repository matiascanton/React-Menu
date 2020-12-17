import React, { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './components/data';

// Obtenemos todas las categorias de data.js
// Como vienen repetidas conel new Set obtenemos solo una de c/u
// y como necesitas agregar 'all', entonces encerramos todo en un arreglo
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function App() {

  const [menuItems, setMenuItems] = useState(items);

  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
