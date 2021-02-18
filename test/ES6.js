/*let name = 'Anna',
    age = 30,
    mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый арес ${mail}`); // прием интерполяции удобно выводить



//когда var i обьявлена мы не можем вывести адекватно в консоль массив смотреть пример, let это исправляет так как создаеться каждый раз
function makeArray () {
    var items =[];

    for(let i = 0; i<10; i++) {
        var item = function(){
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();



//стрелочные функции анонимны, в них нельзя поместить другую функцию
let fun = () =>{
    console.log(this);
};
//fun();

// У стрелочной функции нет своего контекста вызова, и она будет его брать у своего родителя.
let obj = {
    number: 5,
    sayNumber: function(){
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('.btn');
//в этом примере функция show будет ссылатся на родителя тоесть на btn
btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show();
});

function calcOrDouble(number, basis = 2) { //ES6 делает тоже что и строка ниже но короче, если басис не передан он берет 2
  //basis = basis || 2; // ES5 сделали проверку когда басис равно переданной  басис, или равно 2 если не передана
  console.log(number * basis);
}

calcOrDouble(3,5);
calcOrDouble(6);


//!!!!!!!!!!классы ES6!!!!!!!!!!!!!
class Rectangle {
    constructor(height,width = 20) {
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10,10);
console.log(square.calcArea());


//операторы разворота(...) или по другому развертывания массивов!!!!!!!!
let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'fasebook'];

    console.log(internet);


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
let numbers = [2,5,7];

log(numbers);
log(...numbers);*/