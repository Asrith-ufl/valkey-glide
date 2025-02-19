// Copyright Valkey GLIDE Project Contributors - SPDX Identifier: Apache-2.0
package glidejson

import (
	"fmt"

	"github.com/valkey-io/valkey-glide/go/api"
	"github.com/valkey-io/valkey-glide/go/api/server-modules/glidejson/options"
)

func Example_jsonSet() {
	var client *api.GlideClient = getExampleGlideClient()
	result, err := Set(client, "my_key", "$", "{\"a\":1.0,\"b\":2}")

	if err != nil {
		fmt.Println("JSON.SET example failed with an error: ", err)
	}
	fmt.Println(result)

	// Output: OK
}

func ExampleGlideClusterClient_jsonSet() {
	var client *api.GlideClusterClient = getExampleGlideClusterClient()
	result, err := Set(client, "my_key", "$", "{\"a\":1.0,\"b\":2}")

	if err != nil {
		fmt.Println("JSON.SET example failed with an error: ", err)
	}
	fmt.Println(result)

	// Output: OK
}

func Example_jsonSetWithOptions() {
	var client *api.GlideClient = getExampleGlideClient()
	jsonSetResult, err := SetWithOptions(
		client,
		"key",
		"$",
		"{\"a\": 1.0, \"b\": 2}",
		options.NewJsonSetOptionsBuilder().SetConditionalSet(api.OnlyIfDoesNotExist),
	)

	if err != nil {
		fmt.Println("JSON.SET example failed with an error: ", err)
	}
	fmt.Println(jsonSetResult)

	// Output: OK
}

func ExampleGlideClusterClient_jsonSetWithOptions() {
	var client *api.GlideClusterClient = getExampleGlideClusterClient()
	jsonSetResult, err := SetWithOptions(
		client,
		"key",
		"$",
		"{\"a\": 1.0, \"b\": 2}",
		options.NewJsonSetOptionsBuilder().SetConditionalSet(api.OnlyIfDoesNotExist),
	)

	if err != nil {
		fmt.Println("JSON.SET example failed with an error: ", err)
	}
	fmt.Println(jsonSetResult)

	// Output: OK
}
