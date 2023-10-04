(function (Scratch) {
    /*
    * Made by Yangrou
    * 
    * Some JavaScript statements in Scratch
    */

    window.ScVar=new Object;
    const touchIco="data:image/png;base64,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";
    const gcd=function (args) {
        if (args.length==2) {
            if (args[0]%args[1]==0) {
                return args[1];
            } else {
                return gcd([args[1], args[0]%args[1]]);
            }
        }else{
            return gcd([args[0], gcd(args.slice(1))]);
        }
    }
    const gcm=function (args) {
        if (args.length==2) {
            return args[0]*args[1]/gcd(args)
        } else {
            return gcm([args[0], gcm(args.slice(1))]);
        }
    }

    class JavaScript {
        getInfo () {
            return {
                id: "JavaScript",
                name: "JavaScript",
                color1: "#5CB3A5",
                color2: "#5CB3A5",
                blockIconURI: touchIco,
                blocks: [
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: "Eval"
                    },
                    {
                        opcode: "eval1",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "eval [str]",
                        arguments: {
                            str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "1+1"
                            }
                        }
                    },
                    {
                        opcode: "eval2",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "eval [str]",
                        arguments: {
                            str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "1+1==2&&(undefined??true)"
                            }
                        }
                    },
                    {
                        opcode: "eval3",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "eval[str]",
                        arguments: {
                            str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "alert(\"hello world!\")"
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: "String"
                    },
                    {
                        opcode: "len",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[s].length",
                        arguments: {
                            s: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            }
                        }
                    },
                    {
                        opcode: "slice1",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[str].slice [start]",
                        arguments: {
                            str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            start: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1"
                            }
                        }
                    },
                    {
                        opcode: "slice2",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[str].slice [start], [end]",
                        arguments: {
                            str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            start: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1"
                            },
                            end: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "-1"
                            }
                        }
                    },
                    {
                        opcode: "strAt",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[str].at [index]",
                        arguments: {
                            str: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            index: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "0"
                            }
                        }
                    },
                    {
                        opcode: "strJoin",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "join [s1], [s2]",
                        arguments: {
                            s1: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            s2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "banana"
                            }
                        }
                    },
                    {
                        opcode: "includes",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "[a].includes [b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "a"
                            }
                        }
                    },
                    {
                        opcode: "indexOf",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].indexOf [b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "p"
                            }
                        }
                    },
                    {
                        opcode: "lastIndexOf",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].lastIndexOf [b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "p"
                            }
                        }
                    },
                    {
                        opcode: "match",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].match [b], index [c], case [d]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "123124125"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "12(.?)"
                            },
                            c: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "2"
                            },
                            d: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1"
                            }
                        }
                    },
                    {
                        opcode: "count",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].count [b], case [c]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "123124125"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "12(.?)"
                            },
                            c: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1"
                            }
                        }
                    },
                    {
                        opcode: "repeat",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].repeat [b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            b: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "3"
                            }
                        }
                    },
                    {
                        opcode: "replace",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].replace [b], [c], all [d], case [e]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "GG Bond"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "G"
                            },
                            c: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "F"
                            },
                            d: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1"
                            },
                            e: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1"
                            }
                        }
                    },
                    {
                        opcode: "toLower",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "toLower [a]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "APPLE"
                            }
                        }
                    },
                    {
                        opcode: "toUpper",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "toUpper [a]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            }
                        }
                    },
                    {
                        opcode: "reverse",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].reverse",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "bananas"
                            }
                        }
                    },
                    {
                        opcode: "split",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].split [b] case [c] index [d]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "bananas"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "a"
                            },
                            c: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1"
                            },
                            d: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1"
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: "Number | Math"
                    },
                    {
                        opcode: "number",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "number [a]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "true"
                            }
                        }
                    },
                    {
                        opcode: "parseInt",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "parseInt [a]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1.2"
                            }
                        }
                    },
                    {
                        opcode: "isInt",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "isInt [a]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "5"
                            }
                        }
                    },
                    {
                        opcode: "isFinite",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "isFinite [a]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "Infinity"
                            }
                        }
                    },
                    {
                        opcode: "toExponential",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].toExponential [b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "123"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ""
                            }
                        }
                    },
                    {
                        opcode: "toFixed",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].toFixed [b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1.23"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "10"
                            }
                        }
                    },
                    {
                        opcode: "toPrecision",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[a].toPrecision [b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1.23"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "10"
                            }
                        }
                    },
                    {
                        opcode: "math",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "math [a]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "PI*pow(4,2)"
                            }
                        }
                    },
                    {
                        opcode: "gcd",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "gcd [s]",
                        arguments: {
                            s: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "10,15,45"
                            }
                        }
                    },
                    {
                        opcode: "gcm",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "gcm [s]",
                        arguments: {
                            s: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "10,15,18"
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: "Boolean"
                    },
                    {
                        opcode: "equal",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "[a]===[b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "05"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "5"
                            }
                        }
                    },
                    {
                        opcode: "toBool",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "Boolean [s]",
                        arguments: {
                            s: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "0"
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: "Interaction"
                    },
                    {
                        opcode: "alert",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "alert [s]",
                        arguments: {
                            s: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "hello world!"
                            }
                        }
                    },
                    {
                        opcode: "prompt",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "prompt [q] default [d]",
                        arguments: {
                            q: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "How old are you?"
                            },
                            d: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "114514"
                            }
                        }
                    },
                    {
                        opcode: "confirm",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "confirm [q]",
                        arguments: {
                            q: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Are you a scratcher?"
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: "Variables"
                    },
                    {
                        opcode: "setVar",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "setVar [a][c] [b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "a"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "new Array(1,2,3)"
                            },
                            c: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ""
                            }
                        }
                    },
                    {
                        opcode: "getVar",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "getVar [a] [b]",
                        arguments: {
                            a: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "a"
                            },
                            b: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "[1]"
                            }
                        }
                    }
                ]
            };
        }
        eval1 (args) {
            try {
                eval(args.str);
            } catch(e) {
                return String(e);
            }
            return eval(args.str);
        }
        eval2 (args) {
            try {
                eval(args.str);
            } catch(e) {
                return String(e);
            }
            return Boolean(eval(args.str));
        }
        eval3 (args) {
            try {
                eval(args.str);
            } catch(e) {
                throw new Error("Eval Error ("+args.str+")");
            }
        }
        len (args) {
            return String(args.s).length??"null";
        }
        slice1 (args) {
            return String(args.str).slice(args.start)??"null";
        }
        slice2 (args) {
            return String(args.str).slice(args.start, args.end)??"null";
        }
        strAt (args) {
            return String(args.str).at(args.index)??"null";
        }
        strJoin (args) {
            return (String(args.s1)+args.s2)??"null";
        }
        includes (args) {
            return String(args.a).includes(args.b)??"null";
        }
        indexOf (args) {
            return String(args.a).indexOf(args.b)??"null";
        }
        lastIndexOf (args) {
            return String(args.a).lastIndexOf(args.b)??"null";
        }
        match (args) {
            return String(args.a).match(new RegExp(args.b,"g"+(!args.d?'i':''))).at(args.c)??"null";
        }
        count (args) {
            return String(args.a).match(new RegExp(args.b,"g"+(!args.c?'i':''))).length??"null";
        }
        repeat (args) {
            return String(args.a).repeat(args.b)??"null";
        }
        replace (args) {
            return (args.d?String(args.a).replace(new RegExp(String(args.b),"g"+(!args.e?'i':'')),args.c):String(args.a).replace(new RegExp(String(args.b)),args.c,(!args.d?'i':'')))??"null";
        }
        toLower (args) {
            return String(args.a).toLowerCase()??"null";
        }
        toUpper (args) {
            return String(args.a).toUpperCase()??"null";
        }
        split (args) {
            return String(args.a).split(new RegExp(args.b,(!args.c?'i':''))).at(args.d)??"null";
        }
        number (args) {
            if(args.a=="true") {
                return 1;
            } else if(args.a=="false") {
                return 0;
            } else {
                return Number(args.a);
            }
        }
        parseInt (args) {
            return parseInt(args.a);
        }
        isInt (args) {
            return Number.isInteger(args.a);
        }
        isFinite (args) {
            return Number.isFinite(args.a);
        }
        math (args) {
            let keys=Reflect.ownKeys(Math).slice(0,-1);
            for(let i in keys){
                args.a=args.a.replaceAll(keys[i], "Math."+keys[i]);
            }
            try {
                eval(args.a);
            } catch(e) {
                return NaN;
            }
            return eval(args.a);
        }
        equal (args) {
            return args.a===args.b;
        }
        alert (args) {
            alert(args.s);
        }
        prompt (args) {
            return prompt(args.q,args.d);
        }
        confirm (args) {
            return confirm(args.q);
        }
        toBool (args) {
            if(args.s=="0"||args.s=="NaN"||args.s=="null"||args.s=="undefined"||args.s=="false")return false;
            return Boolean(args.s);
        }
        toExponential (args) {
            if(args.b=="") {
                return args.a.toExponential();
            } else {
                return args.a.toExponential(args.b);
            }
        }
        toFixed (args) {
            return args.a.toFixed(args.b);
        }
        toPrecision (args) {
            return args.a.toPrecision(args.b);
        }
        setVar (args) {
            eval(`window.ScVar[args.a]${args.c}=eval(args.b)`);
        }
        getVar (args) {
            return eval("window.ScVar[args.a]"+args.b)??"null";
        }
        gcd (args) {
            return gcd(args.s.split(","));
        }
        gcm (args) {
            return gcm(args.s.split(","));
        }
        reverse (args) {
            return String(args.a).split("").reverse().join("");
        }
    }
    Scratch.extensions.register(new JavaScript());
})(Scratch)