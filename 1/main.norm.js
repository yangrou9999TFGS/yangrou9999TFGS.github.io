/*\
|*|name: 暴力24点
|*|description: 暴力算出24点的结果
|*|author: yangrou
|*|license: MIT
\*/

function make24 ([values, count])
{
	// 程序入口，values为数值，count为得数
	function stack (str)
	{
		// 将前缀表达式用栈的方法运算为一个数字或一个数组（前缀表达式不正确时）
		let arr = [],
			ele = str.split(' ');
		for (let i = 0; i < ele.length; i++)
		{
			arr.push(ele[i]);
			while ('+-*/'.includes(arr[arr.length - 3]) && !isNaN(Number(arr[arr.length - 2])) && !isNaN(Number(arr[arr.length - 1])))
			{
				arr.splice(-3, 3, eval('(' + arr[arr.length - 2] + ')' + arr[arr.length - 3] + '(' + arr[arr.length - 1] + ')'));
				// 使用eval时数加上括号运算，有可能出现一个数减去一个负数报错（如2--1是错误的）
			}
		}
		return arr.length == 1 ? arr[0] : arr;
		// 如果栈内元素数量为1，返回元素，否则返回数组
	}

	function stack2 (str)
	{
		// 将前缀表达式转换成表达类
		// 和stack差不多，但判断数字时也要判断一下表达式类
		let arr = [],
			ele = str.split(' ');
		for (let i = 0; i < ele.length; i++)
		{
			arr.push(ele[i]);
			while ('+-*/'.includes(arr[arr.length - 3]) && (!isNaN(Number(arr[arr.length - 2])) || arr[arr.length - 2].length > 1) && (!isNaN(Number(arr[arr.length - 1])) || arr[arr.length - 1].length > 1))
			{
				arr.splice(-3, 3, `(${arr[arr.length - 2]}${arr[arr.length - 3]}${arr[arr.length - 1]})`);
			}
		}
		return arr[0].slice(1, -1);
	}
	let all = new Set(); // 去重，使用Set方便
	(function orders (prevArr, newArr)
	{
		// 递归做出全排序，符号用#代替
		if (newArr.length == 1)
		{
			if (newArr[0] == '#') return; // 最后一位不能为#
			prevArr += newArr[0];
			all.add(prevArr);
			return;
		}
		for (let i = 0; i < newArr.length; i++)
		{
			if (prevArr != '' || newArr[i] == '#') orders(prevArr + newArr[i] + " ", (
				function (index)
				{
					// 在不改变数组的情况下删除某一元素
					// splice会改变数组，temp=arr,temp.splice也会改变数组arr
					let temp = [];
					for (let i = 0; i < newArr.length; i++)
					{
						if (i != index) temp.push(newArr[i]);
					}
					return temp;
				})(i));
			// 递归下去，要注意，第一位必须为#
		}
	})('', values.concat('#'.repeat(values.length - 1).split('')));
	// n个数有n-1个符号，诞生出此代码
	let data = Array.from(all.values()),
		data2 = [],
		data3 = [];
	// data为全排序的值；data2为替换符号后的值，data3为满足条件的算式
	for (let i = 0; i < data.length; i++)
	{
		let sym = new Array(...'1'.repeat(values.length - 1).split(''));
		for (let j = 0; j < Math.pow(4, values.length - 1); j++)
		{
			let rep = new String(data[i]);
			for (let k in sym)
			{
				rep = rep.replace('#', ' +-*/' [sym[k]]);
			}
			// replace一次只替换一个，替换values.length-1次，rep为替换后的值
			data2.push(rep);
			sym[0]++;
			for (let k in sym)
			{
				if (sym[k] == 5)
				{
					sym[k] = 1, sym[Number(k) + 1]++;
				}
			}
			// 不想搞递归，搞了个类似进制的玩意，逢五进一，每位最小为一
		}
	}
	for (let i = 0; i < data2.length; i++)
	{
		if (stack(data2[i]) == count)   // 判断得数是否为count
		{
			data3.push(stack2(data2[i]));
			// 因为外面有一个多余的括号，所以需要slice
		}
	}
	return data3;
	// 返回
}