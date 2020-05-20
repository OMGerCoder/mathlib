/** Class representing a number. */
export class Num {
    value: any
    /** Create a number with a certain value. */
    constructor(value?: Number) {
        this.value = value;
    }
    
    /**
     * Adds a number to the current value, and returns the new value.
     * @param {number} x The number to add.
     */
    add(x: Number): Number {
        this.value += x;
        return this.value;
    }

}