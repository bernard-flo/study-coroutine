import asyncio


def main():
    asyncio.run(async_main())


async def async_main():
    await do_world()


async def do_world():
    async with asyncio.TaskGroup() as tg:
        tg.create_task(do_world_do_world())
        print('Hello')


async def do_world_do_world():
    await asyncio.sleep(1)
    print('World!')


if __name__ == "__main__":
    main()
