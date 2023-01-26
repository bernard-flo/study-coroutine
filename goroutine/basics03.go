package main

import (
	"sync"
	"time"
)

func main() {
	doWorld03()
}

func doWorld03() {
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		time.Sleep(time.Second)
		println("World!")
	}()
	println("Hello")
	wg.Wait()
}
