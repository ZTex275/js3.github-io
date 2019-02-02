var name = prompt("Укажите ваше имя")
var date = prompt("Укажите год вашего рождения")
var get_current_age = function(date) {
return new Date().getFullYear() - date
}
age=get_current_age (date);

function agetostr(age) {
	var txt;
	count = age % 100;
	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count == 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return txt;
}

alert (name+" "+get_current_age (date)+" "+agetostr(age))
