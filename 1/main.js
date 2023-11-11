/**
 * Use operators to make some number be the count.
 * The default count is 24.
 * Throw an error if no values, the type of values is not array or invalid items in values
 * @param {number[] | string[]} values
 * @param {number | string | undefined} count
 * @return {string[]}
 */

let make24 = (values, count = 24) => {
    // 判断
    if (!(values instanceof Array)){
         throw new TypeError('Values must be an array');
    }
    if (count == null || +count != +count || !Number.isFinite(+count)) {
        throw new TypeError('Count cannot be an invalid value');
    }
    values.map(e => {
        if (e == null || +e != +e || !Number.isFinite(+e)) {
            throw new TypeError('Values cannot have invalid values');
        }
    });
    if (values.length == 0) return [];
    if (values.length == 1) {
        if (values[0] == count) return values;
        else return [];
    }
    
    /**
     * 将前缀表达式用栈的方法运算为一个数字或一个数组（前缀表达式不正确时）
     * @param {string} str 
     * @returns {string}
     */
    let stack = str => {
        let arr = [],
            ele = str.split(' ');
        for (let i in ele) {
            arr.push(ele[i]);
            while ( '+-*/'.includes(arr.at(-3)) &&
                    !isNaN(+arr.at(-2)) &&
                    !isNaN(+arr.at(-1)))
            {
                arr.splice(-3, 3,
                    eval('(' + arr.at(-2) + ')' + arr.at(-3) + '(' + arr.at(-1) + ')')
                );
                // 使用eval时数加上括号运算，有可能出现一个数减去一个负数报错（如2--1是错误的）
            }
        }
        return arr.length == 1 ? arr[0] : arr;
        // 如果栈内元素数量为1，返回元素，否则返回数组
    };

    /**
     * 将前缀表达式转换成字符串
     * @param {string} str 
     * @returns {string}
     */
    let stack2 = str => {
        let arr = [], 
            ele = str.split(' ').map(
                    e => e >= 0 || +e != +e ? e :`(${e})`
                );
        for (let i in ele) {
            arr.push(ele[i]);
            while ( '+-*/'.includes(arr.at(-3)) &&
                    (!isNaN(+arr.at(-2)) || arr.at(-2).length > 1) &&
                    (!isNaN(+arr.at(-1)) || arr.at(-1).length > 1))
            {
                arr.splice(-3, 3,
                    `(${arr.at(-2)}${arr.at(-3)}${arr.at(-1)})`
                );
            }
        }
        return arr[0].slice(1, -1);
    };

    let all = new Set();  // 去重

    /**
     * 递归做出全排序，符号用#代替
     * @param {(string | number)[]} prevArr 
     * @param {(string | number)[]} newArr 
     */
    let orders = (prevArr, newArr) => {
        if (newArr.length == 1) {
            if (newArr[0] == '#') return;   // 最后一位不能为#
            prevArr += newArr[0];
            all.add(prevArr);
            return;
        }
        for (let i in newArr) {
            if (prevArr != '' || newArr[i] == '#') {
                orders(prevArr + newArr[i] + ' ', newArr.toSpliced(i, 1));
            }
            // 递归下去，要注意，第一位必须为#
        }
    }
    orders('', values.concat('#'.repeat(values.length - 1).split('')));
    // n个数有n-1个符号，诞生出此代码

    let data = [...all.values()], data2 = [], data3 = [];
    // data为全排序的值；data2为替换符号后的值，data3为满足条件的算式

    for (let i in data) {
        let sym = [...'1'.repeat(values.length - 1).split('')];
        for (let j = 0; j < 4 ** (values.length - 1); j++) {
            let rep = '' + data[i];
            for (let k in sym) {
                rep = rep.replace('#',' +-*/'[sym[k]]);
            }
            // replace一次只替换一个，替换values.length-1次，rep为替换后的值
            data2.push(rep);
            sym[0]++;
            for (let k in sym) {
                if (sym[k] == 5) {
                    sym[k] = 1;
                    sym[+k + 1]++;
                }
            }
            // 不想搞dfs，搞了个类似进制的玩意，逢五进一，每位最小为一
        }
    }

    for (let i in data2) {
        if (stack(data2[i]) == count) { // 判断得数是否为count
            data3.push(stack2(data2[i]));
            // 因为外面有一个多余的括号，所以需要slice
        }
    }

    return data3;
}

try {
    module.exports = make24;
} catch (e) {
    window.make24 = make24;
}
