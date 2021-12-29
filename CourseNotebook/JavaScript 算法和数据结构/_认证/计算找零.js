function checkCashRegister(price, cash, cid) {
    // 计算应找金额
    let change = cash * 100 - price * 100;
    // 面值数组
    let denoNum = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    // 面值名称数组，遍历的过程中添加
    let denoStr = [];
    // 零钱柜中可用找零总额
    let total = 0;
    // 零钱柜中面值名称与可用额度的 map
    let counterMap = {};
    // 零钱结果结果数组
    let output = [];
    //因为需要返回的是一个对象，所以创建一个对象作为返回值
    let obj = {
        status: 'INSUFFICIENT_FUNDS',
        change: [],
    };

    // 遍历 cid，更新上面定义的数组，对象
    for (let i = 0; i < cid.length; i++) {
        let temp = cid[i][1] * 100;
        denoStr.push(cid[i][0]);
        counterMap[cid[i][0]] = Math.round(temp);
        total += Math.round(temp);
    }

    // 边界条件
    if (change > total) {
        return obj;
    }
    if (change === total) {
        obj.status = 'CLOSED';
        obj.change = cid;
        return obj;
    }

    for (let i = denoNum.length - 1; i >= 0; i--) {
        // 找出需要试的金额，条件为比 change 小
        // 注意这里是从右开始遍历
        if (denoNum[i] <= change) {
            // 计算当前面值需要的总额
            let currentTotal = change - (change % denoNum[i]);

            if (
                counterMap[denoStr[i]] < currentTotal &&
                counterMap[denoStr[i]] > 0
            ) {
                // 处理柜台中当前面值的总额不为 0，但不够的情况
                output.push([denoStr[i], counterMap[denoStr[i]] / 100]);
                change -= counterMap[denoStr[i]];
            } else if (counterMap[denoStr[i]] >= currentTotal) {
                // 处理柜台中当前面值的总额够用的情况
                output.push([denoStr[i], currentTotal / 100]);
                change -= currentTotal;
            }
        }
        // 只要 change 为 0，就可以返回结果数组了
        if (change === 0) {
            obj.status = 'OPEN';
            obj.change = output;
            return obj;
        }
    }
    // 执行到这里表示无法凑出应找金额
    obj.status = 'INSUFFICIENT_FUNDS';
    return obj;
}
checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
]);
