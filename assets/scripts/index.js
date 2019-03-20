$(function() {
  $('.item article').each(function(){
    const id = $(this).attr('id')
    const url = $(this).find('.links a.deployed').attr('href')
    // console.log('id: ' + id + ', url: ' + url)
    $(this).find('header').wrap(`<a href="${url}" target="_blank"></a>`)

    $(this).on('mouseover', () => {
      if ($('#sitePreview').attr('src') !== url) {
        previewSite(url)
      }
    })
  })

  $('body').on('click', closePreview)

  $('footer .contact li')
    .on('mouseover', showFooterContact)
    .on('mouseout', clearFooterContact)
  $('footer .contact img').on('mouseover', showFooterContact)
})

const clearFooterContact = () => {
  $('footer .contact-display').html('').css('visibility', 'hidden')
}

const showFooterContact = (event) => {
  const item = $(event.target).closest('li')
  const text = $(item).find('.contact-info').text()
  const imgSrc = $(item).find('img').attr('src')
  $('footer .contact-display')
    .html(`<img src="${imgSrc}">${text}`)
    .css('visibility', 'visible')
}

const previewSite = (siteUrl) => {
  $('.preview').show()
  $('#sitePreview').attr('src', siteUrl)
}

const closePreview = () => {
  $('.preview').hide()
  $('#sitePreview').attr('src', '')
}

const getSiteTitle = (siteId) => {
  return $(siteId).find('strong.title').text()
}
