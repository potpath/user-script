// ==UserScript==
// @name        CU e-Thesis auto login
// @match       https://ethesis.grad.chula.ac.th/
// @description Automatically login to CU e-Thesis
// @version     0.1
// @grant       none
// @namespace   https://greasyfork.org/users/4947
// ==/UserScript==

submit();
function submit(){
	if (document.getElementsByName('Username')[0].value && document.getElementsByName('Password')[0].value){
		document.getElementsByName('Remember')[0].checked=true;
		document.getElementById('form-login').submit();
	}
	else
		setTimeout(submit);
}
