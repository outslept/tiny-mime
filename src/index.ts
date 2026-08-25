const TABLE = {
  html: "text/html",
  htm: "text/html",
  css: "text/css",
  js: "text/javascript",
  mjs: "text/javascript",
  txt: "text/plain",
  csv: "text/csv",
  ics: "text/calendar",
  md: "text/markdown",
  vtt: "text/vtt",
  xml: "application/xml",
  yaml: "application/yaml",
  yml: "application/yaml",
  json: "application/json",
  map: "application/json",
  webmanifest: "application/manifest+json",
  pdf: "application/pdf",
  wasm: "application/wasm",
  epub: "application/epub+zip",
  jar: "application/java-archive",
  gz: "application/gzip",
  zip: "application/zip",
  rar: "application/vnd.rar",
  "7z": "application/x-7z-compressed",
  tar: "application/x-tar",
  bz2: "application/x-bzip2",
  xz: "application/x-xz",
  rtf: "application/rtf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  odt: "application/vnd.oasis.opendocument.text",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  odp: "application/vnd.oasis.opendocument.presentation",
  m3u8: "application/vnd.apple.mpegurl",
  bin: "application/octet-stream",
  exe: "application/octet-stream",
  dll: "application/octet-stream",
  dmg: "application/octet-stream",
  iso: "application/octet-stream",
  ai: "application/postscript",
  eps: "application/postscript",
  eot: "application/vnd.ms-fontobject",
  woff: "font/woff",
  woff2: "font/woff2",
  ttf: "font/ttf",
  otf: "font/otf",
  avif: "image/avif",
  bmp: "image/bmp",
  gif: "image/gif",
  ico: "image/x-icon",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  tiff: "image/tiff",
  tif: "image/tiff",
  webp: "image/webp",
  heic: "image/heic",
  heif: "image/heif",
  psd: "image/vnd.adobe.photoshop",
  avi: "video/x-msvideo",
  mp4: "video/mp4",
  m4v: "video/mp4",
  mov: "video/quicktime",
  mpeg: "video/mpeg",
  mpg: "video/mpeg",
  ogv: "video/ogg",
  webm: "video/webm",
  mkv: "video/x-matroska",
  flv: "video/x-flv",
  wmv: "video/x-ms-wmv",
  aac: "audio/aac",
  aiff: "audio/aiff",
  aif: "audio/aiff",
  flac: "audio/flac",
  m4a: "audio/mp4",
  mid: "audio/midi",
  midi: "audio/midi",
  mp3: "audio/mpeg",
  ogg: "audio/ogg",
  oga: "audio/ogg",
  opus: "audio/opus",
  wav: "audio/wav",
  weba: "audio/webm",
} satisfies Readonly<Record<string, string>>;

const MIME_BY_EXT: ReadonlyMap<string, string> = new Map(Object.entries(TABLE));

const EXT_BY_MIME: ReadonlyMap<string, string> = (() => {
  const canonical = new Map<string, string>();
  for (const [ext, mimeType] of MIME_BY_EXT) {
    if (!canonical.has(mimeType)) canonical.set(mimeType, ext);
  }
  return canonical;
})();

const normalizeExt = (input: string): string => {
  const lower = input.trim().toLowerCase();
  return lower.startsWith(".") ? lower.slice(1) : lower;
};

const normalizeMime = (input: string): string => {
  const semicolon = input.indexOf(";");
  const bare = semicolon === -1 ? input : input.slice(0, semicolon);
  return bare.trim().toLowerCase();
};

export function mime(extension: string): string | undefined {
  return MIME_BY_EXT.get(normalizeExt(extension));
}

export function ext(mimeType: string): string | undefined {
  return EXT_BY_MIME.get(normalizeMime(mimeType));
}
