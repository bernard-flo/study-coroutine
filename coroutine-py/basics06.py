import asyncio


def main():
    asyncio.run(async_main())


async def async_main():
    async with asyncio.TaskGroup() as tg:
        for _ in range(100_000):
            tg.create_task(do_world())


async def do_world():
    await asyncio.sleep(5)
    print('.', end='')


if __name__ == "__main__":
    main()
