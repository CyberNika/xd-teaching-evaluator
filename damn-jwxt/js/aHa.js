function fastChoose(data) {
	var rate = data[0];
	var	comments = data[1];

	var mainFrame = window.frames['bottomFrame'].frames['mainFrame'];
	var textArea = mainFrame.document.getElementsByTagName('textarea');
	var radiosTable = mainFrame.document.getElementsByTagName('table')[4].getElementsByTagName('table')[6].getElementsByTagName('table')[0];
	var buttons = mainFrame.document.getElementsByTagName('img');

	for (var i = 0, rateSum = 0; i < 4; i++) {
		rateSum += parseInt(rate[i]);
	}

	radioChoose(radiosTable, rateSum, rate); // 选择优良中差
	textAreaFill(textArea, comments);	// 填写评价
	formSubmit(buttons);	// 提交
}

function radioChoose(radiosTable, rateSum, rate) {
	var trs = radiosTable.getElementsByTagName('tr');
	var radios, random;

	for(var i = 0; i< trs.length; i++) {
		var index;
		if(!trs[i].hasAttribute('align')) {
			radios = trs[i].getElementsByTagName('input');
			if(!radios.length) {
				continue;
			}
			random = Math.ceil(Math.random() * rateSum);
			if (random <= parseInt(rate[0])) {
				index = 0;
			} else if (random <= parseInt(rate[0]) + parseInt(rate[1])) {
				index = 1;
			} else if (random <= parseInt(rate[0]) + parseInt(rate[1]) + parseInt(rate[2])) {
				index = 2;
			} else {
				index = 3;
			}
			radios[index].checked = true;
		}
	}
}

function textAreaFill(textArea, comments) {
	for (var i = 0; i < 2; i++) {
		textArea[i].value = comments[i];
	}
}

function formSubmit(buttons) {
	for (var i in buttons) {
		if (buttons[i].title == "提交") {
			buttons[i].click();
		}
	}
}
