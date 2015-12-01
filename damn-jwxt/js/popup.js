document.addEventListener('DOMContentLoaded', function () {
	var rate = {}, comment = {}, req = {}, reqStr;
	var comments = [
		'课程内容很充实，教师教学很风趣。',
		'老师很好！教得贼棒了!',
		'不错不错',
		'好老师',
		'真是一门好课啊！很喜欢呢~',
		'希望加油！'
	];
	var eleComment1 = document.getElementsByName('comment-1')[0];
	var eleComment2 = document.getElementsByName('comment-2')[0];
	eleComment1.value = comments[parseInt(Math.random() * comments.length)];
	eleComment2.value = comments[parseInt(Math.random() * comments.length)];
	document.getElementById('go').onclick = function () {
		rate[0] = document.getElementsByName('a')[0].value;
		rate[1] = document.getElementsByName('b')[0].value;
		rate[2] = document.getElementsByName('c')[0].value;
		rate[3] = document.getElementsByName('d')[0].value;
		comment[0] = eleComment1.value;
		comment[1] = eleComment2.value;
		req[0] = rate;
		req[1] = comment;
		reqStr = JSON.stringify(req);
		chrome.tabs.executeScript(null, {
			code: "fastChoose(" + reqStr + ");"
		});
	};
});
