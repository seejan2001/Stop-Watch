var t_hour = document.getElementById('hour')
var t_minute = document.getElementById('minute')
var t_second = document.getElementById('second')
var b_btn1 = document.getElementById('Start')
var b_btn2 = document.getElementById('Stop')

var second = 0;
var minute = 0;
var hour = 0;
var count = 0;
var count1 = 0;


b_btn1.addEventListener('click', () => {
    setInterval(secondtime, 1000)
})







function startDate() {

}


function secondtime() {
    if (second < 10) {
        t_second.innerHTML = "0" + second;
        second++;
    }
    if (second > 9) {
        t_second.innerHTML = second;
        second++;
    }
    if (second >= 60) {
        second = 0;
        count++;        //for minute
        t_second.innerHTML = second;

        if (minute < 10) {
            t_minute.innerHTML = "0" + count;
            minute++;
        }
        if (minute > 9) {
            t_minute.innerHTML = count;
            minute++;
        }
        if (minute >= 60) {
            minute = 0;
            t_minute.innerHTML = count;
            count = 0;
            count1++; //for hour;
            if(hour < 10)
            {
                t_hour.innerHTML = "0" + count1;
                hour++;
            }
            if(hour >9)
            {
                t_hour.innerHTML = count1;
                hour++;
            }
            if(hour>24)
            {
                t_hour.innerHTML = count1;
                count1=0;
                hour=0;
            }
        }
    }
}

