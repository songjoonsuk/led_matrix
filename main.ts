namespace led_matrix {

    /**
     * each LED lights on one by one 
     * 
     */
    //% blockId=LED_MATRIX
    //% block="LED at $index"
    //% index.min=0 index.max=25

    export function plotN(index: number): void {
        index |= 0;
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x,y);
    }
}
