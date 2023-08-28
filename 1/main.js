class Formula{
    constructor(sym,a,b){
        this.sym=sym;   //符号
        this.a=a;       //左
        this.b=b;       //右
    }
    toString(){
        return '('+this.a.toString()+this.sym+this.b.toString()+')';
    }
}
Array.prototype.del=function(index){
    let temp=[];
    for(let i in this){
        if(i!=index)temp.push(this[i]);
    }
    return temp.slice(0,-1);
}
function stack(str){
    let arr=[],ele=str.split(' ');
    for(let i=0;i<ele.length;i++){
        arr.push(ele[i]);
        while('+-*/'.includes(arr[arr.length-3])&&!isNaN(Number(arr[arr.length-2]))&&!isNaN(Number(arr[arr.length-1]))){
            arr.splice(-3,3,eval('('+arr[arr.length-2]+')'+arr[arr.length-3]+'('+arr[arr.length-1]+')'));
        }
    }
    return arr.length==1?arr[0]:arr;
}
function stack2(str){
    let arr=[],ele=str.split(' ');
    for(let i=0;i<ele.length;i++){
        arr.push(ele[i]);
        while('+-*/'.includes(arr[arr.length-3])&&(!isNaN(Number(arr[arr.length-2]))||arr[arr.length-2].constructor==Formula)&&(!isNaN(Number(arr[arr.length-1]))||arr[arr.length-1].constructor==Formula)){
            arr.splice(-3,3,new Formula(arr[arr.length-3],arr[arr.length-2],arr[arr.length-1]));
        }
    }
    return arr[0];
}
function make24([values,count]){
    let all=new Set();
    (function orders(prevArr,newArr){
        if(newArr.length==1){
            if(newArr[0]=='#')return;
            prevArr+=newArr[0];
            all.add(prevArr);
            return;
        }
        for(let i=0;i<newArr.length;i++){
            if(prevArr!=''||newArr[i]=='#')orders(prevArr+newArr[i]+" ",newArr.del(i));
        }
    })('',values.concat('#'.repeat(values.length-1).split('')));
    let data=Array.from(all.values()),data2=[],data3=[];
    for(let i=0;i<data.length;i++){
        let sym=new Array(...'1'.repeat(values.length-1).split(''));
        for(let j=0;j<Math.pow(4,values.length-1);j++){
            let rep=new String(data[i]);
            for(let k in sym){
                rep=rep.replace('#',' +-*/'[sym[k]]);
            }
            data2.push(rep);
            sym[0]++;
            for(let k in sym){
                if(sym[k]==5){
                    sym[k]=1,sym[Number(k)+1]++;
                }
            }
        }
    }
    for(let i=0;i<data2.length;i++){
        if(stack(data2[i])==count){
            data3.push(stack2(data2[i]).toString().slice(1,-1));
        }
    }
    return data3;
}