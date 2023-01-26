import asyncio


def main():
    asyncio.run(async_main())


async def async_main():
    async with asyncio.TaskGroup() as tg:
        task = tg.create_task(do_world())
        print('Hello')
        await task
        print('Done')


async def do_world():
    await asyncio.sleep(1)
    print('World!')


if __name__ == "__main__":
    main()
