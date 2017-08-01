var pre = $('pre')

$.each(pre, function() {
  var code = $(this).html()
  code.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  $(this).html('').text(code)
})
