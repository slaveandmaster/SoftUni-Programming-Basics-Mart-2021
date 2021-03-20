function checkPassword(input) {
    const secretPhrase = "s3cr3t!P@ssw0rd";
    const password = input[0];
    if (secretPhrase === password) {
        console.log(`Welcome`);
    }
    else {
        console.log(`Wrong password!`)
    }
}
checkPassword(["qwerty"]);
checkPassword(["s3cr3t!P@ssw0rd"]);
checkPassword(["s3cr3t!p@ss"]);