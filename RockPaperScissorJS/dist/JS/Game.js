export default class GameObj {
    constructor() {
        this.active = false;
        this.p1AllTime = 0;
        this.cpAllTime = 0;
        this.cpSession = 0;
        this.p1Session = 0;
    }

    getActiveStatus() {
        return this.active;
    }
    startGame() {
        this.active = true;
    }
    endGame() {
        this.active = false;
    }
    getP1AllTime() {
        return this.p1AllTime;
    }
    setP1AllTime(score) {
        this.p1AllTime = score;
    }
    getCpAllTime() {
        return this.cpAllTime;
    }
    setCpAllTime(score) {
        this.cpAllTime = score;
    }
    getP1Sesssion() {
        return this.p1Session;
    }
    setP1Session(score) {
        this.p1Session = score;
    }
    getCpSession() {
        return this.cpSession;
    }
    setCpSession(score) {
        this.cpSession = score;
    }
    p1Wins() {
        this.p1AllTime+=1;
        this.p1Session+=1;
    }
    cpWins() {
        this.cpAllTime+=1;
        this.cpSession+=1;
    }

}
