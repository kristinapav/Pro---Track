$(document).ready(function () {
        // Pomodoro Timer functions
        //Show default value when page is loaded
        session = 25;    
        function display() {
            $('#display-time').empty().html(session + ':00');
        }
    
        function countdown() {
            timer = setInterval(function () {
                now = $.now();
    
                remaining = end - now;
    
                minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.round((remaining % (1000 * 60)) / 1000);
                
    
                if (seconds == 60) {
                    document.getElementById("display-time").innerHTML = minutes + ":00";
                    
                }
    
                else if (seconds < 10) {
                    document.getElementById("display-time").innerHTML = minutes + ":0" + seconds;
                    
                }
    
                else document.getElementById("display-time").innerHTML = minutes + ":" + seconds;
               
    
                if (remaining < 0) {
                    clearInterval();
                    document.getElementById("display-time").innerHTML = "Session done";
                }
                
            }, 1000);
    
        }
    
        $('#start').on('click', function () {
            if (isNaN(pauseTime)) {
                start = $.now();
                length = session * 60 * 1000;
                end = start + length;
                countdown();
            }
            else {
                start = $.now();
                end = start + pauseLength;
                countdown();
            }
        });
    
        $('#pause').on('click', function () {
            pauseTime = $.now();
            pauseLength = end - pauseTime;
            clearInterval(timer);
    
        });
    
        $('#stop').on('click', function () {
            clearInterval(timer);
            session = 25;
            display();
            pauseTime = NaN;
        });

        function shortBreak(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                display.textContent = minutes + ":" + seconds;
        
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }
        
        $('#break').on('click', function () {
            var fiveMinutes = 60 * 5,
            display = document.querySelector('#display-time');
            shortBreak(fiveMinutes, display);

        });
        session = 25;
        display();
        pauseTime = NaN;   
         
        // Pomodoro end
    });