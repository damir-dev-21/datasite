$('.services__body').slick({
  dots: false,
  slidesToShow: 4,
  arrows: true,
  prevArrow: '<i class="fas fa-angle-left slick-prev" style="font-size:50px; color:#E5E5E5"></i>',
  nextArrow: '<i class="fas fa-angle-right slick-next" style="font-size:50px; color:#E5E5E5"></i>',
});

$('.partners__body').slick({
  dots: false,
  slidesToShow: 4,
  arrows: true,
  prevArrow: '<i class="fas fa-angle-left slick-prev" style="font-size:50px; color:#E5E5E5"></i>',
  nextArrow: '<i class="fas fa-angle-right slick-next" style="font-size:50px; color:#E5E5E5"></i>',
});

$(document).ready(function () {
  $('#menu').on('click', 'a', function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#up').fadeIn();
    } else {
      $('#up').fadeOut();
    }
  });

  $('#up').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 800);
  });
});

function initMap() {
  // The location of Uluru
  var uluru = { lat: 39.5784765, lng: 66.9194714 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), { zoom: 8, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint - window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});
