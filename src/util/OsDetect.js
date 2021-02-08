
export class OsDetect {
    
    /** 
     * Detects if we're running on iOS.
     * @returns { boolean } `true` if running on iOS.
     */
    static isIos() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }
}