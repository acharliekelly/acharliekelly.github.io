/*
 Behavior:

Each project item is a white ring containing a black circle with project title and logo.
On hover, the outer ring disappears and the inner circle turns white. The project details
appear via animation in display area. Also, a message appears under the project logo that
clicking will show project preview.
On click, project detail section collapses to left side, making room for iframe preview.
Also, project item changes appearance to show it is active. Hovering on other projects
has no effect, but clicking them will change detail & preview to new project. Clicking
active project again will de-activate it, so all projects have normal on-hover effect.

Page header (name & logo) behave as project item, but for About Me section instead of
project (ie hover will display About Me, clicking will temporarily pin the section as active)
*/
$(function() {

  // apply hover handlers for each project article
  $('.project article').each(function(){
    const id = $(this).attr('id')
    const url = $(this).data('url')

    $(this).on('click', () => {
      displayProject(id, url)
    })
      .find('header')
      .after('<div class="text-msg">Click for preview</div>')
      .after(`<div class="visit"><a href="${url}" target="_blank">Visit</a></div>`)


  })

  // hide display window when user double-clicks anywhere
  $('body').on('dblclick', hideDisplayView)


  // set footer behavior: show contact info on hover
  $('footer .contact li')
    .on('mouseover', showFooterContact)
    .on('mouseout', clearFooterContact)
  $('footer .contact img').on('mouseover', showFooterContact)

  // show the about section when you hover over the header
  $('.page-header').on('mouseover', showAbout)

  skillIcons()
})

// display project info/preview
const displayProject = (projectId, projectUrl) => {
  if ($('#mainDisplay').data('id') !== projectId) {
    deactivateTabs()
    activateTab(projectId)
    showDisplayView()
    collapseDescription()
    siteDescription(projectId)
    previewSite(projectUrl)
  }
}

// hide the footer contact display
const clearFooterContact = () => {
  $('footer .contact-display').html('').css('visibility', 'hidden')
}

const activateTab = (projectId) => {
  const projTab = $(`#${projectId}`)
  projTab.addClass('active').parent('.project').addClass('active')
  // const xColor = projTab.data('color')
  // const rgb = HEX2RGB(xColor).join(',')
  // projTab.css('background', `radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,0.8) 100%)`)

}

const deactivateTabs = () => {
  $('.project').removeClass('active')
  $('.project article').removeClass('active')
  $('.info section').hide()
  $('#mainDisplay').data('id', '')
}

// show footer contact info -
// when user hovers over a contact icon, show the info for that icon
// in the center of the footer (ie Email address, Location, etc)
const showFooterContact = (event) => {
  const item = $(event.target).closest('li')
  const text = $(item).find('.contact-info').text()
  const imgSrc = $(item).find('img').attr('src')
  $('footer .contact-display')
    .html(`<img src="${imgSrc}">${text}`)
    .css('visibility', 'visible')
}

// Show the about info
const showAbout = () => {
  // turn off any active tab
  deactivateTabs()
  $('section.project-description').hide()

  // show the #mainDisplay content
  showDisplayView()

  // check if AboutMe is already displayed
  if (getCurrentDisplayId() !== 'aboutMe') {
    // if not, expand info to fill display
    expandDescription()
    // set the display id
    $('#mainDisplay').data('id', 'aboutMe')
    // load the AboutMe section, then run skillIcons()
    // $('#descrip').load(getDesc('aboutMe'), skillIcons)
    $('#mainDisplay #aboutMe').show()
  }
}

// Expand the info section to fill display area
const expandDescription = () => {
  $('#mainDisplay').removeClass('split-view').addClass('text-only')
}

// make mainDisplay show both info and preview panes
const collapseDescription = () => {
  $('#mainDisplay').removeClass('text-only').addClass('split-view')
}

// load a particular site's description
const siteDescription = (siteId) => {
  $('#mainDisplay').data('id', siteId)
  $('.info section').hide()
  $('.info #' + siteId).show()
}

const getCurrentDisplayId = () => {
  return $('#mainDisplay').data('id')
}

const showPreview = () => {
  $('.preview').css('display', 'inline-block')
}

const hidePreview = () => {
  $('.preview').css('display', 'none')
}

const previewSite = (siteUrl) => {
  showPreview()
  $('#sitePreview').attr('src', siteUrl)
}

const closePreview = () => {
  hidePreview()
  $('#sitePreview').attr('src', '')
}

const closeDescription = () => {
  $('#descrip').html('')
  $('#mainDisplay').data('id', '')
}

// insert skill icons
const skillIcons = function () {
  $('.skills li').each(function() {
    const key = $(this).attr('class')
    if (key) {
      try {
        const di = getIconWithText(key)
        $(this).html(di)
      } catch(err) {
        // console.log(err)
      }
    }
  })
}



const getSiteTitle = (siteId) => {
  return $(siteId).find('strong.title').text()
}

const showDisplayView = () => {
  $('#mainDisplay').show()
}
const hideDisplayView = () => {
  $('#mainDisplay').hide()
  deactivateTabs()
}
