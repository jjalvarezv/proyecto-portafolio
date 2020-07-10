
export class User{


    constructor(
        private name: string,
        private userName: string,
        private pass: string
    ) {
        
    }

    public getName ():string {
        return this.name;
    }
    public setName(name:string) {
        this.name = name;
    }

    public getUserName (): string {
        return this.userName;
    }
    public setUserName(userName: string) {
        this.userName = userName;
    }

    public getPass (): string {
        return this.pass;
    }
    public set(pass: string) {
        this.pass = pass;
    }

}
