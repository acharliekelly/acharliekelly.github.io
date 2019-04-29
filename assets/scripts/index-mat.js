document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.sidenav')
  const instances = M.Sidenav.init(elems)

  instances[0].open()
})
