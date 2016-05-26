
// 预置评价内容
var comments = [
  '课程内容很充实，教师教学很风趣。',
  '不够有趣',
  '老师很好！教得贼棒了!',
  '不错不错',
  '好老师',
  '真是一门好课啊！很喜欢呢~',
  '希望加油！'
]

// 随机填充评价
var commentEle = document.querySelector('textarea')
var comment = comments[parseInt(Math.random() * comments.length)]
document.querySelector('textarea').value = comment

// 开始评教
document.querySelector('#evaluate').onclick = function () {
	var parasString = getData()

  chrome.tabs.executeScript(null, {code: 'start(' + parasString + ')'})
}

function getData () {
	var optionsRate = []

	// 获取选项比例
	var rateEles = document.querySelectorAll('.input-group > input')
	for(var i = 0; i < rateEles.length; i++) {
	  optionsRate[i] = +rateEles[i].value
	}

	return JSON.stringify({
		optionsRate: optionsRate,
		comment: document.querySelector('textarea').value = comment
	})
}
