// let person = {};
// console.log(typeof person);
// person.id = 12345678;
// console.log(person);
// person.email = 'somchai@gmail.com';
// console.log(person)
// delete person.email;
// console.log(person);
class Person {
    constructor(id, name) {
        if (id.length != 13) {
            this._id = 'unknown';
        } else { this._id = id; }
        this._name = name;
    }
    get id() {
        return this._id;

    }
    set id(id) {
        this._id = id;
    }
    toString() {
        return `person id ${this._id}, person name ${this._name}`;
    }

}
let per1 = new Person('1234567', 'SomSri');
console.log(per1.toString());

Person.prototype.geteiei = function() {
    return 'eiei';
}
console.log(per1.geteiei())


let player = (firstname, lastname) => {
    return {
        firstname: firstname ? firstname : "unknown",
        lastname: lastname ? lastname : "unknown",
        name: () => {
            return `${firstname} ${lastname}`;
        }
    }
}

function playerconst(fistname, lastname) {
    this._firstname = fistname;
    this._lastname = lastname;
}
let p1 = player("ไอพี", "ส้นจีน");
let p2 = new playerconst("ไอพี", "ส้นจีน");
console.log(p1.name());
console.log(p2);

let personn = new Person("12345", "kuy");
personn.geteiei = () => {
    return "mine";
};
console.log(personn.geteiei());
console.log(per1.geteiei());