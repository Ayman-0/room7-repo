function movePlayer(direction) {
    return new Promise((resolve) => {
        console.log(`Moving player ${direction}...`);
        setTimeout(() => {
            console.log(`Player moved ${direction}`);
            resolve();
        }, 1000);
    });
}
