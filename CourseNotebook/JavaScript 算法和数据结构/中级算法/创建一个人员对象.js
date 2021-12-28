const Person = function (firstAndLast) {
    // 只修改这一行下面的代码
    let fullName = firstAndLast;
    // 完成下面的方法，其余的执行类似
    this.getFullName = () => fullName;
    this.getFirstName = () => fullName.split(' ')[0];
    this.getLastName = () => fullName.split(' ')[1];
    this.setFirstName = name =>
        (fullName = `${name} ${fullName.split(' ')[1]}`);
    this.setLastName = name => (fullName = `${fullName.split(' ')[0]} ${name}`);
    this.setFullName = name => (fullName = name);
};

const bob = new Person('Bob Ross');
bob.getFullName();
