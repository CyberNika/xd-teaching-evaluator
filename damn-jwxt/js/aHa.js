function fastChoose(data) {
	var rate = data[0],
		comment = data[1],
		rateSum = 0,
		fliter,
		radio,
		random,
		button;
	var fliter1 = /^[0-9.]{1,}_1$/,
		fliter2 = /^[0-9.]{1,}_0.8$/,
		fliter3 = /^[0-9.]{1,}_0.6$/,
		fliter4 = /^[0-9.]{1,}_0.4$/;
	var mainFrame = window.frames['bottomFrame'].frames['mainFrame'];
	var textArea = mainFrame.document.getElementsByTagName('textarea');
	var radios = mainFrame.document.getElementsByTagName('table')[4].getElementsByTagName('table')[6].getElementsByTagName('table')[0].getElementsByTagName('input');
	var buttons = mainFrame.document.getElementsByTagName('img');
	for (var i = 0; i < 4; i++) {
		rateSum += parseInt(rate[i]);
	}
	for (var i in radios) {
		radio = radios[i];
		random = Math.ceil(Math.random() * rateSum);
		if (random <= parseInt(rate[0])) {
			fliter = fliter1;
		} else if (random <= parseInt(rate[0]) + parseInt(rate[1])) {
			fliter = fliter2;
		} else if (random <= parseInt(rate[0]) + parseInt(rate[1]) + parseInt(rate[2])) {
			fliter = fliter3;
		} else {
			fliter = fliter4;
		}
		if (fliter.test(radio.value)) {
			if(!radio.checked) {
				radio.checked = true;
			}
		}
	}
	for (var i = 0; i < 2; i++) {
		textArea[i].value = comment[i];
	}
	for (var i in buttons) {
		button = buttons[i];
		if (button.title == "提交") {
			button.click();
		}
	}
}
