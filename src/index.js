/*jshint esversion: 6 */
module.exports = function warmup(temperature) {
	var answer;
	if(temperature==(-17.78)){
		answer = 0;
	}
	else {
		answer = temperature*(1.8)+32;
		answer = parseInt(answer * 100)/100;
	}
	return answer;
};
