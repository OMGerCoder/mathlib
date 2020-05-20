interface INum {
    add(x: Number): Num;
    sub(x: Number): Num;
}

/** Class representing a number. */
export class Num implements INum {
    value: number;
    /** Create a number with a certain value. */
    constructor(value: number = 0) {
        this.value = value;
    }

    /**
     * Subtracts a number from the current value, and returns the new object.
     * @param {number} x The number to subtract
     * @returns {Num} The new object.
     */
    sub(x: number): Num {
        this.value -= x;
        return this;
    }
    
    /**
     * Adds a number to the current value, and returns the new object.
     * @param {number} x The number to add.
     * @returns {Num} The new object.
     */
    add(x: number): Num {
        this.value += x;
        return this;
    }

}