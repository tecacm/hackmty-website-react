
function withBase(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '');
}

export {withBase};