import asyncio


def main():
    asyncio.run(async_main())


async def async_main():
    await do_world()
    print('Done')


async def do_world():
    async with asyncio.TaskGroup() as tg:
        tg.create_task(do_world_do_world_2())
        tg.create_task(do_world_do_world_1())
        print('Hello')


async def do_world_do_world_2():
    await asyncio.sleep(2)
    print('World 2')


async def do_world_do_world_1():
    await asyncio.sleep(1)
    print('World 1')


if __name__ == "__main__":
    main()
