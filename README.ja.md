# lambda-terminator

Lambda を終了させる。

この Lambda は `event` とスタックトレースをログ出力して、callback を呼ぶことなくプロセスを終了させる。

## Installation

```
npm i lambda-terminator
```

## Usage

``` javascript
import { terminator } from 'lambda-terminator';

exports.handler = terminator;
```

## terminator(event, context, callback)

Lambda を終了する Lambda ハンドラー。

このハンドラーは以下のようなログを CloudWatch Logs に出力する。

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
