import {sleep} from "./lib";

function main() {
    (async () => {
        await doWorld();
        console.log('Done');
    })();
    // cannot block
}

async function doWorld() {
    const p1 = (async () => {
        await sleep(2000);
        console.log('World 2');
    })();
    const p2 = (async () => {
        await sleep(1000);
        console.log('World 1');
    })();
    console.log('Hello');
    await Promise.all([p1, p2]);
}

main();
