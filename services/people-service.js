require('seneca')()
	.use('../lib/people')
	.listen(10202);