import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

let header = document.querySelector('.js-header')
let headerH = document.querySelector('.js-header').clientHeight;

let sectionList = document.querySelectorAll(['.mafia', '.travel', '.airsoft', '.reviews', '.team']);
let navItems = document.querySelectorAll('.header__link')
// const position = sectionList[0].getBoundingClientRect();
// console.log(position.y) 

document.onscroll = function () {
	let scroll = window.scrollY;
	if (scroll > headerH + 100) {
		header.classList.add('fixed')
		document.body.style.paddingTop = headerH;
	} else {
		header.classList.remove('fixed')
	} 
	let currentSection = '';
	sectionList.forEach(section => {
		const sectionTop = section.offsetTop
		if (scroll >= sectionTop) {
			currentSection = section.getAttribute('id')
		}
		
	})
	// console.log(currentSection)
	// let navList = document.querySelectorAll('.header__link')

	// sectionList.forEach(list => {
	// 	// let position = list.getBoundingClientRect().y;
	// 	if (-600 < position < 600) {
	// 		list.classList.add('active')
	// 	} else {
	// 		list.classList.remove('active')
	// 	}
	// })

	navItems.forEach(item => {
		console.log(item.getAttribute('href').substring(1))
		if (item.getAttribute('href').substring(1) === currentSection) {
			 item.classList.add('active');
		} else {
			item.classList.remove('active');
		}
 });

}

// class Huy {
// 	constructor (a, b) {
// 		this.item1 = a;
// 		this.item2 = b;
// 	}

// 	huevertit() {
// 		this.item1++
// 	}
// }

// const huy = new Huy(1, 2)
// huy.huevertit()
// console.log()

const swiper1 = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: ' .swiper-pagination',
    clickable: true
  },

	autoplay: {
		delay: 3000, // Задержка между прокрутками в миллисекундах (3000 = 3 секунды)
		disableOnInteraction: false, // Продолжает прокрутку при взаимодействии
	},

  

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});





