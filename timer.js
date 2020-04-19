class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton

        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timerRemaining)
        }
        this.intervalID = setInterval(this.tick, 50)
    }

    pause = () => {
        clearInterval(this.intervalID)
    }

    //normal function will work
    tick = () => {
        if (this.timerRemaining <= 0) {
            this.pause()
            if (this.onComplete) {
                this.onComplete()
            }

        } else {
            const timerRemaining = this.timerRemaining
            this.timerRemaining = timerRemaining - 0.05; //rhs acts a argument
            if (this.onTick) {
                this.onTick(this.timerRemaining)
            }
        }

        // this.timeLeft=this.timeLeft-1;
        // this.durationInput.value=this.timeLeft;
        // console.log('tick')
    }
    //we dont have to use () while invoking. acts like variable
    get timerRemaining() {
        return parseFloat(this.durationInput.value)
    }

    set timerRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

    // getTime(){
    //     return parseFloat(this.durationInput.value)
    // }

    // setTime(time){
    //     this.durationInput.value=time
    // }
}

