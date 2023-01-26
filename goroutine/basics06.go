package main

import (
	"sync"
	"time"
)

func main() {
	n := 100_000
	var wg sync.WaitGroup
	wg.Add(n)
	for i := 0; i < n; i++ {
		go func() {
			defer wg.Done()
			time.Sleep(5 * time.Second)
			print(".")
		}()
	}
	wg.Wait()
}
