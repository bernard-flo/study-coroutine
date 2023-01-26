package main

import (
	"sync"
	"time"
)

func main() {
	doWorld04()
	println("Done")
}

func doWorld04() {
	var wg sync.WaitGroup
	wg.Add(2)
	go func() {
		defer wg.Done()
		time.Sleep(2 * time.Second)
		println("World 2")
	}()
	go func() {
		defer wg.Done()
		time.Sleep(1 * time.Second)
		println("World 1")
	}()
	println("Hello")
	wg.Wait()
}
