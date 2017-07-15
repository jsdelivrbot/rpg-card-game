import GameEngine from './GameEngine';

class MonoBehaviourObserver extends GameEngine {
    constructor() {
        this.observers = [];
    }

    Attach (Observer){
        this.observers.push(Observer);
    }

    Detach (Observer){
        for(let i in this.observers)
            if(this.observers[i] === Observer)
                this.observers.splice(i, 1);
    }

    preloadAll (){
        for(let i in this.observers){
            this.observers[i].preload(this);
        }
    }

    createAll (){
        for(let i in this.observers){
            this.observers[i].create(this);
        }
    }

    updateAll (){
        for(let i in this.observers){
            this.observers[i].update(this);
        }
    }
}

//singleton
export default new MonoBehaviourObserver();
console.log("created MonoBehaviourObserver");