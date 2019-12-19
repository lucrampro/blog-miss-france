document.querySelector('.menu--burger').addEventListener('click', function(){
  var menu = document.querySelector('.menu');

  if(menu.classList.contains('close')){
    menu.classList.add('open');
    menu.classList.remove('close')
    gsap.to(menu, 1.5, {
      left: 0,
      ease: "expo.inOut"
    })
  }
  else if(menu.classList.contains('open')){
    menu.classList.add('close');
    menu.classList.remove('open')
    gsap.to(menu, 1, {
      left: '100%',
      ease: "expo.inOut"
    })
  }
});

