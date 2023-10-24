const express = require('express');
const { getAsync, setAsync } = require('../redis');

const router = express.Router();

router.get('/', async (_, res) => {
	const numAddedTodos = await getAsync('added_todos');
	const stats = {
		added_todos: Number(numAddedTodos)
	};
	res.send(stats);
});

module.exports = router;