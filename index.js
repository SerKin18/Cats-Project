
const catItem = document.querySelector('#cat_item');
const catArea = document.querySelector('.section-6_items')
const burgerBtnOpen = document.getElementById('header_burger')
const burgerBtnClose = document.querySelector('.burger_close')
const modalWindow = document.querySelector('.modal')
const catButtonAdd = document.querySelector('.add_cats')
const catButtonArea = document.getElementById('add_cats')




burgerBtnOpen.addEventListener('click', () => {
	modalWindow.style.display = 'block';
})
burgerBtnClose.addEventListener('click', () => {
	modalWindow.style.display = 'none';
})



catButtonAdd.addEventListener('click', (e) => {
	const catNew = `
	 <div class="item_section6">
	 <img src="./img/cat2.png" alt="cats" title="cat-img">
	 </div>
	 `
	catArea.insertAdjacentHTML('beforeEnd', catNew)
})



