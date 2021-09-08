---
title: A Curl Helper Function for Easy API Testing
date: '2021-09-06T18:23:42.735Z'
---

I tend to prefer command line tools for development, in this case choosing `curl` over Postman. Depending on the API that requests are being made to, curl commands can get out of hand, requiring numerous headers and other options to be manually attached on each request. The solution? Create a Bash helper function for curl, making our commands short and efficient.

The helper function:

```bash
function curls() {
  local response_code_and_method
  response_code_and_method=$(curl \
    --no-progress-meter \
    --write-out "%{response_code} %{method}" \
    --output /tmp/curls_body \
    --header "Content-Type: application/json" \
    ${CURL_OPTIONS[@]} \
    $CURL_BASE_URL/$@
  )

  if [ $? -eq 0 ]; then
    local pretty_json
    pretty_json=$(jq --color-output '.' /tmp/curls_body 2> /dev/null)
    if [ $? -eq 0 ]; then
      echo $pretty_json
    else
      cat /tmp/curls_body
      echo ""
    fi
    echo "\n$response_code_and_method"
  fi
}
```

In addition to providing a handful of "default" options to `curl`, we get some other benefits including:
* Pretty printing JSON responses with `jq` (conditionally, when a response is parse-able as JSON)
* Using `${CURL_OPTIONS[@]}`, we can provide additional options through an environment variable. This may be preferred for temporarily adding additional options, rather than hard-coding them in our reusable Bash function.  
Further details on this option are shown below: [Additional Notes](#additional-notes)
* On the line `$CURL_BASE_URL/$@`, a variable representing the API's base URL is automatically inserted for us. This would be set to a value such as `http://localhost:5000`. A trailing slash `/` is appended, and our arguments provided to `curls` are inserted here with `$@`.

## Example Usage

Calling the endpoint `POST http://localhost:5000/test` with a request body can concisely be expressed as:

`curls test -d '{"key": "value"}'`

Full example with a minimal Flask app:

![Full example with a minimal Flask app](/assets/curls-flask.png)

## Additional Notes

* Pretty printing JSON requires installing [jq](https://stedolan.github.io/jq/) (available from `brew`)
* The `%{method}` formatter for the `--write-out` option requires curl 7.72.0+. <https://curl.se/changes.html#7_72_0>  
The easiest way to install the latest version is `brew install curl` (OSX & Linuxbrew). For me on Ubuntu, the version available via `apt` was an older version.

* To get a better understanding of the Bash function and to modify it to your liking, I recommend this Bash cheatsheet: <https://devhints.io/bash>

* Further explaining `${CURL_OPTIONS[@]}`, `CURL_OPTIONS` should be an array, whose elements are then expanded and space separated with `[@]`. For example, you may want to add another header containing your access token or API key.  
Example: `CURL_OPTIONS=("--header" "Authorization: Bearer <your-access-token>")`

