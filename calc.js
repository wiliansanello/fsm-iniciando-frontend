$(function () {
  $('#calc').click(function () {
    const milhas = parseFloat($('#milhas').val())
    const metros = 1609.34 * milhas
    $('#metros').val(metros)
    console.log(metros)
  })
})

/*$(function () {
  $('#clean').on(function () {
    $('#milhas').val('')
    $('#metros').val('')
  })
})*/