document.addEventListener('DOMContentLoaded', function () {
	var rate = {}, comment = {}, req = {}, reqStr;
	document.getElementById('aha').onclick = function () {
		this.className = 'aha';
		setTimeout(function () {
			this.className = '';
		}.bind(this), 5000);
	};
	document.getElementById('go').onclick = function () {
		rate[0] = document.getElementsByName('a')[0].value;
		rate[1] = document.getElementsByName('b')[0].value;
		rate[2] = document.getElementsByName('c')[0].value;
		rate[3] = document.getElementsByName('d')[0].value;
		comment[0] = document.getElementsByName('comment-1')[0].value;
		comment[1] = document.getElementsByName('comment-2')[0].value;
		req[0] = rate;
		req[1] = comment;
		reqStr = JSON.stringify(req);
		console.log(reqStr);
		chrome.tabs.executeScript(null, {
			code: "fastChoose(" + reqStr + ");", allFrames: true
		});
	};
});