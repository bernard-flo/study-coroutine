import {sleep} from "./lib";

function main() {
    (async () => {
        const ps = [];
        for (let i = 0; i < 100_000; i++) {
            const p = (async () => {
                await sleep(5000);
                process.stdout.write('.');
            })();
            ps.push(p);
        }
        await Promise.all(ps);
    })();
    // cannot block
}

main();
