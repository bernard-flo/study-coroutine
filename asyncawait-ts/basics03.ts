import {sleep} from "./lib";

function main() {
    (async () => {
        await doWorld();
    })();
    // cannot block
}

async function doWorld() {
    const p = (async () => {
        await sleep(1000);
        console.log('World!');
    })();
    console.log('Hello');
    await p;
}

main();
