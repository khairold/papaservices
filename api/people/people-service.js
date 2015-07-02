require('seneca')()
	.use('./people-lib.js')
	.listen(10202);