export default class User {
    constructor(id: number, userName: string, emailAddress: string, password: string) {
        this.id = id;
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.password = password;
    }
    id: number;
    userName: string;
    emailAddress: string;
    password: string;

}