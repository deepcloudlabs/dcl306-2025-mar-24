export default class Move {
    constructor(guess, perfectMatch, partialMatch) {
        this.guess = guess;
        this.perfectMatch = perfectMatch;
        this.partialMatch = partialMatch;
        this.message = "";
        if (perfectMatch === 0 && partialMatch === 0) {
            this.message =  "No Match"
        } else {
            if (partialMatch > 0) {
                this.message = `-${this.partialMatch}`;
            }
            if (perfectMatch > 0) {
                this.message = `${this.message}+${this.perfectMatch}`;
            }
        }
    }
}