exports.install = function() {
	ROUTE('GET /');
  	ROUTE('GET /say_hi', 'say_hi');
};