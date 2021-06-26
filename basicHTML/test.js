let car = {
    year_of_manufacture : 2010,
    color : 'red',
    engine : {
        version : 6.2,
        model : 'dual_4.0',
        cylinders : 2
    }


}

function person(name, dob, rank){
    this.name = name;
    this.dob = dob;
    this.rank = rank;
}

let person1 = new person('bharat', '04/03/21', 'sergent')
console.log(person1)
console.log(car.engine.version)


