function password(input) {
    const username = input[0];
    const password = input[1];
    let index = 2;
    let equalPass = input[index]
    while (password !== equalPass ) {
        index++;
        equalPass = input[index];
    }
    console.log(`Welcome ${username}!`);
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
password(["Gosho",
"secret",
"secret"])