

/** 
 * @class
 * Class representing a number. 
*/
class Num {
    value: number;
    /** Create a number with a certain value. 
     * @constructor
    */
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
export default Num;