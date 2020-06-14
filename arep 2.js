
//var date = new Date(2020, p2-1, p1, p3, p4);

//var record = []
//var record = [["2020-6-8","11:30","12:00",0.5]]  
//var record = new Date("2019-10-11 16:30:33");

/*console.log(record[0][0]) 
console.log(record[0][1])
console.log(record[0][2])
console.log(record[0][3])*/
//console.log(record.getHours());

/*
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
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

*/
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
var record = [["2020-6-8","11:30","12:00",0.5], 
             ["2020-6-9", "13:00","14:00",1.5],[]];
            
             
             rl.question('Enter your date to start using Internet? ', (p1) =>{
                rl.question('Enter your month to start using Internet ', (p2) =>{
                    rl.question('Enter your time (hours) to start using Internet(24 hrs system) ', (p3) =>{
                        rl.question('Enter your time (minutes) to start using Internet ', (p4) =>{
                            //p2+=1;
                            record [2][0]= p1;
                            record [2][1]= p2;
                            record [2][2]= p3;
                            record [2][3]= p4;
                            rl.close();
                            for(let i=0; i<=2; i++){
                                for(let j=0; j<4; j++){
                                    console.log(record[i][j])
                                }
                            }
                            
                        });
                    });
                }
            );
            });
  

            
   

/*let rows = record.length;
for(let i=0; i<rows; i++){
    let items = record[i].length;
    console.log(i,items)
    for(let j=0; j<items; j++){
        console.log(record[i][j]);
    }
}

/*var cubes = [["2020-6-8","11:30","12:00",0.5], ["string", "string"]];

for(var i = 0; i < cubes.length; i++) {
    for(var j = 0; j < cubes[i].length; j++) {


        console.log(cubes[i][j]);
        
    }
}
var a = parseInt(cubes[0][1])
var b = parseInt(cubes[0][2])
console.log(a);
console.log(b);

var date = new Date(cubes[0][0] +' ' +cubes[0][1]);
console.log(date);
console.log(date.getHours()); // 16
console.log(date.getMinutes());*/