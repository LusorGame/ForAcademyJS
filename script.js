function myFirstApp(name,age) {
	alert("Привет, меня зовут "+ name + " и это моя первая программа!");
	function showSkills() {
		let skills = [
        "Html",
        "CSS",
        "Java Spring MVC"
		]
            alert(skills);
		}


	showSkills();

	function checkAge() {
		if (age > 18) {
			alert ("Derzai!");
		} else {
			alert ("Moloko ne obsohlo");
		}
	}
	checkAge(age);

	function calcPow(num) {
		console.log(num*num);
	}
	calcPow(4);
}

myFirstApp("Ivan", 32)