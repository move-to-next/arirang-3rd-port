// SWIPER JS
const swiperSlider = new Swiper('.slide-banner', {
  loop: true,
  autoplay: true,
  speed: 500,
  scrollbar:false,
  Infinity: true,
  navigation:{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
  },
  effect:'fade'
});