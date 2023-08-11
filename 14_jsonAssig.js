let jsonEmployeeInfo = `{
    "name" : "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
     "age":23,
    "doj": "11-12-2019",
     "married": false,
    "addrerss":{
        "street":"32, Laham st.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
    }`;
    
    const objectEmployeeInfo = JSON.parse(jsonEmployeeInfo);
    console.log(`1.log role 'Dev'`);
    console.log(objectEmployeeInfo.role[0]);
    console.log(`2.log last name 'Melon'`);
    let nameArray = objectEmployeeInfo.name.split(" ");
    console.log(nameArray[1]);
    console.log(`3.log only joining year of employee`);
    let joinYear = new Date(objectEmployeeInfo.doj);
    console.log(joinYear.getFullYear());


