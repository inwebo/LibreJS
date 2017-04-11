//<![CDATA[
;(function(window, document, String, ud){

    if (!Math.prototype.radiansToDegrees) {
        /**
         * Converts from radians to degrees.
         * @param {int} radians
         * @returns {number}
         */
        String.prototype.radiansToDegrees = function(radians) { return radians * 180 / Math.PI; };
    }

    /**
     * Converts from degrees to radians.
     * @param {int} degrees
     * @returns {number}
     */
    if (!Math.prototype.degreesToRadians) {
        String.prototype.degreesToRadians = function(degrees) { return degrees * Math.PI / 180; };
    }

})(window, document, String);
