class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const suraj = new User("suraj")
// console.log(suraj.createId());
// console.log(User.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iphone", "i@phone.com")
console.log(iPhone.createId());

// console.log(iPhone);
// console.log(iPhone.logMe());
// iPhone.logMe();

