const express = require('express');
const router = express.Router();
const sheepData = require('../data/sheep.json');

router.get('/', (req, res) => {
  const { search = '', breed = '', sort = '', page = 1, limit = 8 } = req.query;

  let results = sheepData.filter(sheep => 
    sheep.name.toLowerCase().includes(search.toLowerCase()) &&
    (breed ? sheep.breed === breed : true)
  );

  if (sort === 'asc') {
    results.sort((a, b) => a.price - b.price);
  } else if (sort === 'desc') {
    results.sort((a, b) => b.price - a.price);
  }

  const paginated = results.slice((page - 1) * limit, page * limit);

  res.json({
    data: paginated,
    total: results.length,
    page: Number(page),
    totalPages: Math.ceil(results.length / limit)
  });
});

module.exports = router;
