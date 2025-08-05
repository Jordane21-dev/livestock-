  // src/pages/ShopPage.jsx
  import React, { useState, useEffect } from 'react';
import SheepCard from '../components/SheepCard';
import '../index.css';

function ShopPage() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark class on <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  const allSheepData = [
    { id: '60001', breed: 'Merino', age: 1, price: 120, sex: 'Male', fertility: 'Fertile', temperament: 'Calm', dob: '2024-08-04', imageUrl: '/assets/sheeps/merino-1.jpg' },
    { id: '60002', breed: 'Merino', age: 2, price: 180, sex: 'Female', fertility: 'Fertile', temperament: 'Docile', dob: '2023-08-04', imageUrl: '/assets/sheeps/merino-2.jpg' },
    { id: '60003', breed: 'Merino', age: 3, price: 220, sex: 'Female', fertility: 'Infertile', temperament: 'Shy', dob: '2022-08-04', imageUrl: '/assets/sheeps/merino-3.jpg' },
    { id: '60004', breed: 'Merino', age: 4, price: 250, sex: 'Male', fertility: 'Fertile', temperament: 'Aggressive', dob: '2021-08-04', imageUrl: '/assets/sheeps/merino-4.jpg' },
    { id: '60005', breed: 'Merino', age: 5, price: 300, sex: 'Male', fertility: 'Infertile', temperament: 'Docile', dob: '2020-08-04', imageUrl: '/assets/sheeps/merino-1.jpg' },
    { id: '60006', breed: 'Merino', age: 6, price: 320, sex: 'Female', fertility: 'Fertile', temperament: 'Calm', dob: '2019-08-04', imageUrl: '/assets/sheeps/merino-2.jpg' },
    { id: '60007', breed: 'Merino', age: 7, price: 350, sex: 'Female', fertility: 'Fertile', temperament: 'Shy', dob: '2018-08-04', imageUrl: '/assets/sheeps/merino-3.jpg' },
    { id: '60008', breed: 'Merino', age: 3, price: 230, sex: 'Male', fertility: 'Fertile', temperament: 'Aggressive', dob: '2022-08-04', imageUrl: '/assets/sheeps/merino-4.jpg' },
    { id: '60009', breed: 'Merino', age: 4, price: 270, sex: 'Female', fertility: 'Infertile', temperament: 'Docile', dob: '2021-08-04', imageUrl: '/assets/sheeps/merino-1.jpg' },
    { id: '60010', breed: 'Merino', age: 2, price: 190, sex: 'Male', fertility: 'Fertile', temperament: 'Calm', dob: '2023-08-04', imageUrl: '/assets/sheeps/merino-2.jpg' },

    { id: '80001', breed: 'Suffolk', age: 1, price: 140, sex: 'Female', fertility: 'Fertile', temperament: 'Shy', dob: '2024-08-04', imageUrl: '/assets/sheeps/suffolk-1.jpg' },
    { id: '50001', breed: 'Dorper', age: 2, price: 160, sex: 'Male', fertility: 'Infertile', temperament: 'Docile', dob: '2023-08-04', imageUrl: '/assets/sheeps/dorper-1.jpg' },
    { id: '80002', breed: 'Suffolk', age: 3, price: 200, sex: 'Male', fertility: 'Fertile', temperament: 'Aggressive', dob: '2022-08-04', imageUrl: '/assets/sheeps/suffolk-2.jpg' },
    { id: '50002', breed: 'Dorper', age: 4, price: 210, sex: 'Female', fertility: 'Fertile', temperament: 'Shy', dob: '2021-08-04', imageUrl: '/assets/sheeps/dorper-2.jpg' },
    { id: '80003', breed: 'Suffolk', age: 5, price: 260, sex: 'Female', fertility: 'Fertile', temperament: 'Calm', dob: '2020-08-04', imageUrl: '/assets/sheeps/suffolk-1.jpg' },
    { id: '50003', breed: 'Dorper', age: 6, price: 280, sex: 'Male', fertility: 'Infertile', temperament: 'Aggressive', dob: '2019-08-04', imageUrl: '/assets/sheeps/dorper-3.jpg' },
    { id: '80004', breed: 'Suffolk', age: 7, price: 320, sex: 'Male', fertility: 'Fertile', temperament: 'Docile', dob: '2018-08-04', imageUrl: '/assets/sheeps/suffolk-2.jpg' },
    { id: '50004', breed: 'Dorper', age: 1, price: 150, sex: 'Female', fertility: 'Fertile', temperament: 'Shy', dob: '2024-08-04', imageUrl: '/assets/sheeps/dorper-4.jpg' },
    { id: '80005', breed: 'Suffolk', age: 2, price: 170, sex: 'Male', fertility: 'Infertile', temperament: 'Aggressive', dob: '2023-08-04', imageUrl: '/assets/sheeps/suffolk-1.jpg' },
    { id: '50005', breed: 'Dorper', age: 3, price: 200, sex: 'Female', fertility: 'Fertile', temperament: 'Calm', dob: '2022-08-04', imageUrl: '/assets/sheeps/dorper-5.jpg' },

    { id: '80006', breed: 'Suffolk', age: 4, price: 230, sex: 'Female', fertility: 'Infertile', temperament: 'Docile', dob: '2021-08-04', imageUrl: '/assets/sheeps/suffolk-2.jpg' },
    { id: '50006', breed: 'Dorper', age: 5, price: 260, sex: 'Male', fertility: 'Fertile', temperament: 'Aggressive', dob: '2020-08-04', imageUrl: '/assets/sheeps/dorper-1.jpg' },
    { id: '80007', breed: 'Suffolk', age: 6, price: 280, sex: 'Male', fertility: 'Infertile', temperament: 'Calm', dob: '2019-08-04', imageUrl: '/assets/sheeps/suffolk-1.jpg' },
    { id: '50007', breed: 'Dorper', age: 7, price: 310, sex: 'Female', fertility: 'Fertile', temperament: 'Docile', dob: '2018-08-04', imageUrl: '/assets/sheeps/dorper-2.jpg' },
    { id: '80008', breed: 'Suffolk', age: 2, price: 190, sex: 'Female', fertility: 'Fertile', temperament: 'Shy', dob: '2023-08-04', imageUrl: '/assets/sheeps/suffolk-2.jpg' },
    { id: '50008', breed: 'Dorper', age: 3, price: 220, sex: 'Male', fertility: 'Fertile', temperament: 'Aggressive', dob: '2022-08-04', imageUrl: '/assets/sheeps/dorper-3.jpg' },
    { id: '80009', breed: 'Suffolk', age: 4, price: 240, sex: 'Male', fertility: 'Infertile', temperament: 'Calm', dob: '2021-08-04', imageUrl: '/assets/sheeps/suffolk-1.jpg' },
    { id: '50009', breed: 'Dorper', age: 5, price: 270, sex: 'Female', fertility: 'Infertile', temperament: 'Docile', dob: '2020-08-04', imageUrl: '/assets/sheeps/dorper-4.jpg' },
    { id: '80010', breed: 'Suffolk', age: 6, price: 290, sex: 'Female', fertility: 'Fertile', temperament: 'Shy', dob: '2019-08-04', imageUrl: '/assets/sheeps/suffolk-2.jpg' },
    { id: '50010', breed: 'Dorper', age: 7, price: 330, sex: 'Male', fertility: 'Fertile', temperament: 'Aggressive', dob: '2018-08-04', imageUrl: '/assets/sheeps/dorper-5.jpg' },

    { id: '80011', breed: 'Suffolk', age: 1, price: 149, sex: 'Female', fertility: 'Fertile', temperament: 'Shy', dob: '2024-08-04', imageUrl: '/assets/sheeps/suffolk-1.jpg' },
    { id: '50011', breed: 'Dorper', age: 2, price: 260, sex: 'Male', fertility: 'Infertile', temperament: 'Docile', dob: '2023-08-04', imageUrl: '/assets/sheeps/dorper-1.jpg' },
    { id: '80012', breed: 'Suffolk', age: 3, price: 280, sex: 'Male', fertility: 'Fertile', temperament: 'Aggressive', dob: '2022-08-04', imageUrl: '/assets/sheeps/suffolk-2.jpg' },
    { id: '50012', breed: 'Dorper', age: 4, price: 280, sex: 'Female', fertility: 'Fertile', temperament: 'Shy', dob: '2021-08-04', imageUrl: '/assets/sheeps/dorper-2.jpg' },
    { id: '80013', breed: 'Suffolk', age: 5, price: 560, sex: 'Female', fertility: 'Fertile', temperament: 'Calm', dob: '2020-08-04', imageUrl: '/assets/sheeps/suffolk-1.jpg' },
    { id: '50013', breed: 'Dorper', age: 6, price: 340, sex: 'Male', fertility: 'Infertile', temperament: 'Aggressive', dob: '2019-08-04', imageUrl: '/assets/sheeps/dorper-3.jpg' },
    { id: '80014', breed: 'Suffolk', age: 7, price: 520, sex: 'Male', fertility: 'Fertile', temperament: 'Docile', dob: '2018-08-04', imageUrl: '/assets/sheeps/suffolk-2.jpg' },
    { id: '50014', breed: 'Dorper', age: 1, price: 240, sex: 'Female', fertility: 'Fertile', temperament: 'Shy', dob: '2024-08-04', imageUrl: '/assets/sheeps/dorper-4.jpg' },
    { id: '80015', breed: 'Suffolk', age: 2, price: 370, sex: 'Male', fertility: 'Infertile', temperament: 'Aggressive', dob: '2023-08-04', imageUrl: '/assets/sheeps/suffolk-1.jpg' },
    { id: '50015', breed: 'Dorper', age: 3, price: 420, sex: 'Female', fertility: 'Fertile', temperament: 'Calm', dob: '2022-08-04', imageUrl: '/assets/sheeps/dorper-5.jpg' },

  ];

  function ShopPage() {
    const [breedFilter, setBreedFilter] = useState('');
    const [sexFilter, setSexFilter] = useState('');
    const [fertilityFilter, setFertilityFilter] = useState('');
    const [temperamentFilter, setTemperamentFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [page, setPage] = useState(1);
    const [openDetails, setOpenDetails] = useState(null);
    const perPage = 5;

    // sheep data omitted here for brevity (you already have it)
    const filtered = allSheepData
      .filter(s =>
        (breedFilter === '' || s.breed === breedFilter) &&
        (sexFilter === '' || s.sex === sexFilter) &&
        (fertilityFilter === '' || s.fertility === fertilityFilter) &&
        (temperamentFilter === '' || s.temperament === temperamentFilter)
      )
      .sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        if (sortOrder === 'desc') return b.price - a.price;
        return 0;
      });

    const paginated = filtered.slice((page - 1) * perPage, page * perPage);
    const totalPages = Math.ceil(filtered.length / perPage);

    return (
      
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Sheep Shop</h1>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Available Sheep</h2>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded border bg-gray-200 dark:bg-gray-700 dark:text-white"
              title="Toggle Dark Mode"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded border bg-gray-200 dark:bg-gray-700 dark:text-white"
            title="Toggle Dark Mode"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
    </div>
        {/* Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
          <select className="p-2 border rounded" value={breedFilter} onChange={e => setBreedFilter(e.target.value)}>
            <option value="">All Breeds</option>
            <option value="Merino">Merino</option>
            <option value="Suffolk">Suffolk</option>
            <option value="Dorper">Dorper</option>
          </select>

          <select className="p-2 border rounded" value={sexFilter} onChange={e => setSexFilter(e.target.value)}>
            <option value="">All Sexes</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select className="p-2 border rounded" value={fertilityFilter} onChange={e => setFertilityFilter(e.target.value)}>
            <option value="">All Fertility</option>
            <option value="Fertile">Fertile</option>
            <option value="Infertile">Infertile</option>
          </select>

          <select className="p-2 border rounded" value={temperamentFilter} onChange={e => setTemperamentFilter(e.target.value)}>
            <option value="">All Temperaments</option>
            <option value="Calm">Calm</option>
            <option value="Aggressive">Aggressive</option>
            <option value="Docile">Docile</option>
            <option value="Shy">Shy</option>
          </select>

          <select className="p-2 border rounded" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="">Sort By Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* Sheep list */}
        <div className="grid gap-4">
          {paginated.map(sheep => (
            <SheepCard
              key={sheep.id}
              sheep={sheep}
              isOpen={openDetails === sheep.id}
              onToggle={() => setOpenDetails(openDetails === sheep.id ? null : sheep.id)}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded border ${page === i + 1 ? 'bg-blue-500 text-white font-bold' : 'bg-white text-black'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <ShopPage />
    </div>
  );
}

export default ShopPage;