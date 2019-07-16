var tabLinks = document.querySelectorAll(".tabs a");
var tabPanels = document.querySelectorAll(".tabs-panel");

for (let i = 0; i <tabLinks.length;  i++) {
	let el = tabLinks[i];
	el.addEventListener("click", function(e){
		e.preventDefault();

		document.querySelector(".tabs li.active").classList.remove("active");
		document.querySelector(".tabs-panel.active").classList.remove("active");

		var parentListItemIndex = el.parentElement.getAttribute('data-tab'),
		panelContentIndex = '[data-tab-index="' + parentListItemIndex
+ '"]';
		el.parentElement.classList.add("active");

		for (let j = 0; j < tabPanels.length; j++) {
			if (tabPanels[j].matches(panelContentIndex)) {
				tabPanels[j].classList.add("active");
			}

		}	});
}