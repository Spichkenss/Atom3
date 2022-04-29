import { makeAutoObservable } from "mobx"

export default class Store {

    user = {}
    isAuth = false

    constructor() {
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

}