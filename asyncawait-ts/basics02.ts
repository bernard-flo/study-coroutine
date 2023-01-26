import {sleep} from "./lib";

function main() {
    (async () => {
        const p = doWorld();
        console.log('Hello');
        await p;
    })();
    // cannot block
}

async function doWorld() {
    await sleep(1000);
    console.log('World!');
}

main();
