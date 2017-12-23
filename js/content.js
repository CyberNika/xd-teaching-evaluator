
// 开始脚本
function start(data) {
  alert = function(){} //add alert function to remove alert after finishing one section
  evaluateAuto(data)
  window.frames['bottomFrame'].document.querySelector('[name=mainFrame]').onload = evaluateAuto.bind(null, data)
}

// 自动评教
function evaluateAuto (data) {
  var mainFrame = window.frames['bottomFrame'].frames['mainFrame']
  var btnEle = mainFrame.document.querySelector('img[title=评估]')

  if(mainFrame.document.querySelectorAll('.fieldsettop .titleTop3')[1]) { // 评教页
    evaluate(data, mainFrame)
  } else if (btnEle) {  // 列表页
    btnEle.click()
  } else if(mainFrame.document.querySelector('img[title=查看]')) {
    window.frames['bottomFrame'].document.querySelector('[name=mainFrame]').onload = null
    alert('已全部评教')
  } else {
    window.frames['bottomFrame'].document.querySelector('[name=mainFrame]').onload = null
    console.log('请在教学评估页使用')
  }
}

// 评教
function evaluate (data, mainFrame) {
  var comment = data.comment
  var optionsRate = data.optionsRate

  // 所有选项 Node
  var optionsEles = mainFrame.document.querySelectorAll('.fieldsettop .titleTop3')[1].querySelectorAll('#tblView table tr:nth-child(even) > td')

  // 主观评价 Node
  var subjectiveEles = [optionsEles[optionsEles.length - 1].querySelector('textarea'), mainFrame.document.querySelectorAll('.fieldsettop .titleTop3')[2].querySelector('textarea')]

  // 提交 Node
  var submitBtn = mainFrame.document.querySelector('[title=提交]')

  // 随机选择
  for(var i = 0, optionIndex = 0; i < optionsEles.length - 1; i++) {
    optionIndex = getRandomOption(optionsRate)
    optionsEles[i].querySelectorAll('input')[optionIndex].checked = true
  }

  // 填充主观评价
  commentsFill(subjectiveEles, comment)

  // 提交评价
  submitBtn.click()
}

// 按照比例获取随机选项
function getRandomOption (optionsRate) {
  optionsRate = optionsRate || [1, 1, 1, 1]
  var rateSum, random, index, sum, i;

  for(i = 0, rateSum = 0; i < optionsRate.length; i++) {
    rateSum += parseInt(optionsRate[i])
  }

  random = Math.ceil(Math.random() * rateSum)

  for(i = 0, sum = 0; i < optionsRate.length; i++) {
    sum += optionsRate[i]
    if(random <= sum) {
      return i
    }
  }

  return 0
}

// 填充评论框
function commentsFill (eles, comment) {
	for(var i = 0; i < eles.length; i++) {
    eles[i].value = comment
  }
  return i
}
