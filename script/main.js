$(()=>{
    //first click
    let form=$('form').on('submit' ,e => e.preventDefault())
    let first=$('.first-btn').on('click', ()=>{
        $('.first').hide()
        $('.second').show()
    })
    //for the second next button 

    $('.sec-btn').on('click',()=>{
        $('.second').hide()
        $('.third').show()
    })

    $('.third-btn').on('click',()=>{
        $('.third').hide()
        $('.forth').show()
    })

    //5th btn
    $('.forth').on('click',()=>{
        $('.forth').hide()
        $('.fifth').show()
    })

    $('.five').on('click',()=>{
        $('.fifth').hide()
        $('.sixth').show()
    })
    $('.fit-btn').on('click',()=>{
        $('.sixth').hide()
        $('.challange').show()
    })

    $('.issue').on('click',()=>{
        $('.challange').hide()
        $('.support').show()

    })
    //documents
    $('.doc').on('click',()=>{
        $('.support').hide()
        $('.personal').show()
    })
 //second to last
  $('.pe-btn').on('click',()=>{
    $('.personal').hide()
    $('.parentD').show()
  })

  $('.father-btn').on('click', e=>{
    $('.parentD').hide()
    $('.guard').show()
  })

  $('.detail').on('click',()=>{
    $('.guard').hide()  
    $('.kin').show()
  })
  $('.detail1').on('click',()=>{
    $('.kin').hide()
    $('.adr').show()
  })

});