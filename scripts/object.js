    Object.prototype.merge = function(){
        var obj = {}, i = 0, il = arguments.length, key;
        if (il === 0) {
            return this;
        }
        for (; i < il; i++) {
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    obj[key] = arguments[i][key];
                }
            }
        }
        return obj;
    };