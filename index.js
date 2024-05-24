const srcImgContainer = [
	"aurora.jpeg",
	"bela.jpeg",
	"branca-de-neve.jpeg",
	"moana.jpeg",
	"mulan.jpeg",
	"pocahontas.jpeg",
	"rapunzel.jpeg",
];

let counter = 0;

window.onload = function () {
	const rightBtn = document.getElementById("right-btn");
	rightBtn.addEventListener("click", () => {
		nextImg(srcImgContainer);
	});

	const leftBtn = document.getElementById("left-btn");
	leftBtn.addEventListener("click", () => {
		previousImg(srcImgContainer);
	});

	uploadImg(srcImgContainer);
};

function uploadImg(srcImgs) {
	const imageContainer = document.getElementById("main-image");
	imageContainer.setAttribute("src", `resources/${srcImgs[0]}`);
}

function nextImg(srcImgs) {
	const imageContainer = document.getElementById("main-image");
	const nextBtn = document.getElementById("right-btn");
	const previousBtn = document.getElementById("left-btn");

	counter++;

	if (counter < srcImgs.length) {
		if (counter === srcImgs.length - 1) {
			nextBtn.setAttribute("disabled", "");
			nextBtn.classList.add("change-color");
			nextBtn.classList.remove("button");
		}

		imageContainer.setAttribute("class", "hidden");
		setTimeout(() => {
			imageContainer.removeAttribute("class");
			imageContainer.setAttribute("src", `resources/${srcImgs[counter]}`);
		}, 200);

		if (previousBtn.hasAttribute("disabled")) {
			previousBtn.removeAttribute("disabled");
			previousBtn.classList.remove("class", "change-color");
			previousBtn.classList.add("button");
			return;
		}
		return;
	}
}

function previousImg(srcImgs) {
	const imageContainer = document.getElementById("main-image");
	const nextBtn = document.getElementById("right-btn");
	const previousBtn = document.getElementById("left-btn");

	counter--;

	if (counter >= 0) {
		if (counter === 0) {
			previousBtn.setAttribute("disabled", "");
			previousBtn.classList.add("change-color");
			previousBtn.classList.remove("button");
		}

		imageContainer.setAttribute("class", "hidden");
		setTimeout(() => {
			imageContainer.removeAttribute("class");
			imageContainer.setAttribute("src", `resources/${srcImgs[counter]}`);
		}, 200);

		if (nextBtn.hasAttribute("disabled")) {
			nextBtn.removeAttribute("disabled");
			nextBtn.classList.remove("class", "change-color");
			nextBtn.classList.add("button");
			return;
		}
		return;
	}
}
