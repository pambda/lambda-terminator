# lambda-terminator

Terminate Lambda.

This lambda logs `event` and stack trace, and terminates the process without calling callback.

## Installation

```
npm i lambda-terminator -S
```

## Usage

``` javascript
import { terminator } from 'lambda-terminator';

exports.handler = terminator;
```

## terminator(event, context, callback)

Lambda handler to exit Lambda.

This handler outputs such following logs to CloudWatch Logs.

```
2017-06-18T06:09:00.406Z  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  ***** TERMINATOR *****
2017-06-18T06:09:00.407Z  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
{
    "event": {
        "key3": "value3",
        "key2": "value2",
        "key1": "value1"
    },
    "stack": [
        "Error: Terminator",
        "    at exports.handler (/var/task/index.js:2:15)"
    ]
}
```

## License

MIT
