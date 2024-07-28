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

           

            document.getElementById('hrs').innerHTML = "00";
            document.getElementById('min').innerHTML = "00";
            document.getElementById('sec').innerHTML = "00";
            document.getElementById('count').innerHTML = "00";
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

                let shrs=hrs;
                let smin=min;
                let ssec=sec;

                if(shrs <10){
                    shrs="0"+shrs;
                }

                if(smin <10){
                    smin="0"+smin;
                }
                if(ssec <10){
                    ssec="0"+ssec;
                }
                                
                


                document.getElementById('hrs').innerHTML = shrs;
                document.getElementById('min').innerHTML = smin;
                document.getElementById('sec').innerHTML = ssec;
                document.getElementById('count').innerHTML = count;

                setTimeout('stopwatch()', 10);
            }
        }
