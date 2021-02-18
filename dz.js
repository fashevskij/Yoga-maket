let agea = document.getElementById('age');
function show(username,name) {
    alert('Пользователь ' + username + " " + name + ", его возраст" + this.value);
}

show.call(agea, 'zubenko', 'anna');