let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	const li = document.createElement("li");
	const ul = document.querySelector("#myList")
	//li.innerHTML= "Fourth element";
    li.textContent = "Fourth element";
	ul.appendChild(li);
	
});
