"use strict";

function loaded() {
	let day = document.querySelectorAll(".day");

	fetch("data.json")
		.then((response) => response.json())
		.then((data) => {
			let amounts = data;
			amounts.forEach(function (item) {
				let day = item.day;
				let amount = item.amount;
				let clampAmount = Math.min(amount, 100);
				let div = document.querySelector("." + day);
				div.style.height = clampAmount * 2 + "px";
				if (amount > 100) {
					div.style.backgroundColor = "rgba(100, 0, 0)";
				}
				let innerDiv = div.querySelector(".valueDaily");
				innerDiv.textContent = amount;
			});
		});

	day.forEach((dayDiv) => {
		const innerDiv = dayDiv.querySelector(".valueDaily");

		dayDiv.addEventListener("mouseover", () => {
			innerDiv.style.visibility = "visible";
			innerDiv.style.opacity = "1";
		});

		dayDiv.addEventListener("mouseout", () => {
			innerDiv.style.visibility = "hidden";
		});
	});
}

document.addEventListener("DOMContentLoaded", loaded);
