'use strict'

/*
* Drawer
*********************************/
drawer()

function drawer () {

		const drawer = document.querySelector('.sticky-nav')
		const nav = document.querySelector('nav')
		const html = document.querySelector('html')
		const main = document.querySelectorAll('.main')
		// Create link elements, set attributes, classes content
		var menu = document.createElement('a')
		var close = document.createElement('a')
		menu.setAttribute('href', '#')
		close.setAttribute('href', '#')
		menu.classList.add('menu')
		close.classList.add('close')
		menu.innerHTML = '<span>Menu</span>'
		close.innerHTML = '<span>Close</span>'

		// Append links before drawer
		drawer.parentNode.insertBefore(menu, drawer)
		nav.parentNode.insertBefore(close, nav)

		menu = document.querySelector('.menu')
		close = document.querySelector('.close')


		// Hide drawer
		if (window.innerWidth < 1024) {
			drawer.style.width = 0
		} else {
			drawer.style.width = '1024px'
		}

		menu.addEventListener('click', function (e) {
		  e.preventDefault()
		  drawer.style.width = '250px'
			menu.style.zIndex = '0';
			for (var i = 0; i < main.length; i++) {
				main[i].style.cssText = 'transition: 1s; margin-right: 250px; opacity: .1;'
			}
		})
		close.addEventListener('click', function (e) {
		  e.preventDefault()
		  drawer.style.width = 0
			menu.style.zIndex = '100';
			for (var i = 0; i < main.length; i++) {
				main[i].style.cssText = 'transition: 1s;'
			}

		})

		window.addEventListener('resize', function () {
			if (window.innerWidth < 1024) {
				drawer.style.width = 0
			} else {
				drawer.style.width = '1024px'
			}
		})

		html.classList.add('js')

}
