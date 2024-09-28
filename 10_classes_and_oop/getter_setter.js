class User{
    constructor(email, password){
        this.email = email
        // this._password = password
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value

    }
    
    get password(){
        // return this._password.toUpperCase()
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const abhishek = new User("a@suraj.com", "abc")
console.log(abhishek.password);
console.log(abhishek.email);