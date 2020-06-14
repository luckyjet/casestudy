const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  //var hari, bulan;
  rl.question('Enter your date to start using Internet? ', (p1) =>{
    rl.question('Enter your month to start using Internet ', (p2) =>{
        rl.question('Enter your time (hours) to start using Internet(24 hrs system) ', (p3) =>{
            rl.question('Enter your time (minutes) to start using Internet ', (p4) =>{
                //p2+=1;
                var date = new Date(2020, p2-1, p1, p3, p4);
                Detect(date);
                rl.close();
            });
        });
    }
);
});

  function Detect (p1){
        var day, hari, waktu;
        var rate;
        switch (p1.getDay()) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
               day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
          }
          if(p1.getHours()>=10 && p1.getHours()<=22){
                waktu="Peak Hours";
                rate=1.50;
          }
          else {
              waktu="Off Peak";
              rate=0.50;
          }

          if (day=="Saturday" || day=="Sunday"){
              hari="Weekend";
              waktu="Weekend Flat Rate";
              rate=0.50;
          }
          else {
              hari="Weekday";
          }

        console.log(p1.getHours());
        console.log(p1.toDateString());
        console.log(p1.getDay());
        console.log(hari); console.log(waktu); console.log(rate);
        //console.log("Start hours" `${p1.getHours()}`);
  }