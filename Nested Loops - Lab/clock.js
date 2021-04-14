function clock() {
    for (let i = 0; i <= 23; i++) {
        const hour = i;
        for (let j = 0; j <= 59; j++) {
            const minutes = j;
            console.log(`${hour}:${minutes}`);   
        }
    }
}
clock()