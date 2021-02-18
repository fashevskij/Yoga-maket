//переменная дедлайна
let deadLine = '2020-08-21';
//функция сколько осталось врени
function getTimeRemaining(endtime) {
    //переменная для определения даты в милисек
    let i = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((i/1000) % 60),
        minutes = Math.floor((i/1000/60) %60),
        hours = Math.floor((i/1000/60/60));
    //возвращаем вычесления в виде обьекта
    return {
        'total': i,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds 
    };

}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock(){
     
        let t = getTimeRemaining(endtime);
         function addZero (num) {
            if (num < 10) {
                return '0' + num;
            }else{return num;} 
        }
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes); 
            seconds.textContent = addZero(t.seconds); 

        if( t.total <= 0 ){
            clearInterval(timeInterval);
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
        }
    }
}
setClock('timer', deadLine);
