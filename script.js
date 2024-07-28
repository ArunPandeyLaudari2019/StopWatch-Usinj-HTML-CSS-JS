  let hrs = 0;
        let min = 0;
        let sec = 0;
        let count = 0;
        let timer = false;

        function start() {
            // timer start and call to stopwatch
            timer = true;
            stopwatch();
        }

        function stop() {
            timer = false;
        }

        function reset() {
            timer = false;

            hrs = 0;
            min = 0;
            sec = 0;
            count = 0;

            document.getElementById('hrs').innerHTML = hrs;
            document.getElementById('min').innerHTML = min;
            document.getElementById('sec').innerHTML = sec;
            document.getElementById('count').innerHTML = count;
        }

        function stopwatch() {
            if (timer == true) {
                count = count + 1;

                if (count == 100) {
                    sec = sec + 1;
                    count = 0;
                }

                if (sec == 60) {
                    min = min + 1;
                    sec = 0;
                   
                }

                if (min == 60) {
                    hrs = hrs + 1;
                    min = 0;
                    sec = 0;
                }

                document.getElementById('hrs').innerHTML = hrs;
                document.getElementById('min').innerHTML = min;
                document.getElementById('sec').innerHTML = sec;
                document.getElementById('count').innerHTML = count;

                setTimeout('stopwatch()', 10);
            }
        }