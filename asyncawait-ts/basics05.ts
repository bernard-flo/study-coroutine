import {sleep} from "./lib";

function main() {
    (async () => {
        const p = (async () => {
            await sleep(1000);
            console.log('World!');
        })();
        console.log('Hello');
        await p;
        console.log('Done');
    })();
    // cannot block
}

main();
