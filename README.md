# tiny-mime

Curated mapping between file extensions and MIME types.

## About

`tiny-mime` answers two questions with a static table of roughly ninety common web types and zero dependencies: `mime("png")` returns `"image/png"`, `ext("image/png")` returns `"png"`. No database, no runtime generation, no full-IANA pretense.

## Usage

```ts
import { mime, ext } from "tiny-mime";

mime("png"); // "image/png"
mime(".JPG"); // "image/jpeg"
ext("image/png"); // "png"
ext("text/plain; charset=utf-8"); // "txt"
ext("application/octet-stream"); // "bin"
mime("br"); // undefined
```

## License

MIT
