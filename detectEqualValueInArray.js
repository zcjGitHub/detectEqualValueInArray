    function IDRepeatCheck() {
        var IDObject = ["12","45","53","45","12","12","45","68"];
        var obj = IDObject;
        var len = IDObject.length;
        var m = 0;
        var repeatNumber = [];//记录相等的数值的序号。
        var deleteNumber = [];//记录第二层for循环匹配到的数值的序号，用于第一层循环时跳过此数值匹配。
        for (var i = 0; i < len; i++) {
            var currentValue = obj[i];

            //repeatNumber[m] = i.toString();
            var delNumStr = deleteNumber.toString();
            var check = delNumStr == "" ? true : delNumStr.indexOf(i) == -1
            if (check) {
                for (var j = i + 1; j < len; j++) {
                    var equalValue = obj[j];
                    if (currentValue == equalValue) {
                        repeatNumber[m] ? repeatNumber[m] = repeatNumber[m] : repeatNumber[m] = i.toString();
                        repeatNumber[m] = repeatNumber[m] + "," + j;
                        deleteNumber.push(j);
                    }
                }
                if (repeatNumber[m]) {
                    m++;
                }
            } else {
                continue;
            }

        }
        return repeatNumber;
    }