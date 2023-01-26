package main

import (
	"sync"
	"time"
)

func main() {
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		doWorld02()
	}()
	println("Hello")
	wg.Wait()
}

func doWorld02() {
	time.Sleep(time.Second)
	println("World!")
}
