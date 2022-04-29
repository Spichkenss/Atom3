import { makeAutoObservable } from "mobx"

export default class Store {

    constructor() {
        this.user = {}
        this.isAuth = false
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

}