$(function () {
  let filter = $('[data-filter]')
  filter.on('click', function (event) {
    event.preventDefault()
    let cat = $(this).data('filter')

    if (cat == 'All') {
      $('[data-cat]').removeClass('hide')
    } else {
      $('[data-cat]').each(function () {
        let workcat = $(this).data('cat')
        if (workcat !== cat) {
          $(this).addClass('hide')
        } else {
          $(this).removeClass('hide')
        }
      })
    }
  })

  const modal = $('[data-modal]')
  modal.on('click', function (event) {
    event.preventDefault()
    let mod = $(this).data('modal')

    $(mod).addClass('show')
    $('body').addClass('no-scroll')
  })

  const close = $('[data-close]')
  close.on('click', function (event) {
    event.preventDefault()
    let parent = $(this).parents('.modal')

    parent.removeClass('show')
    $('body').removeClass('no-scroll')
  })

  $('.modal').on('click', function (event) {
    event.preventDefault()

    $(this).removeClass('show')
    $('body').removeClass('no-scroll')
  })

  $('.modal__dialog').on('click', function (event) {
    event.stopPropagation()
  })
})
