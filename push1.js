
//array untuk simpan new user data
var newuserarray = [
    []
];

//array untuk simpan semua data alluserarray
var alluserarray = [ 
                       ["jeto", 22] ,
                       ["rihab", 22]
                                            
];

//push untuk semua masuk kat satu array
newuserarray[0].push("date");
newuserarray[0].push("starttime");
newuserarray[0].push("endtime");
newuserarray[0].push("peekhourrate");
newuserarray[0].push("weekend");
newuserarray[0].push("weekdays");
newuserarray[0].push("totalrate");

   
//gabung array so data kat satu array je
var result = alluserarray.concat (newuserarray) ;

//pop untuk buang array so new user akan masuk dari 0     
newuserarray.pop();

//just nak tunjuk kat terminal
console.log(result);


