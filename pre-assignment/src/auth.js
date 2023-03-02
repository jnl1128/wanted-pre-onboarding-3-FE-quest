const users = [{ name: "narin", password: "123" }];

export function authLogin({ name, password }) {
    const user = users.find(user => user.name === name && user.password === password);
    if (user === undefined) throw new Error();
    return user;
}
