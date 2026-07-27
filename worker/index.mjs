export default {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);
    const isSafeMethod = request.method === 'GET' || request.method === 'HEAD';

    if (isSafeMethod && requestUrl.pathname.endsWith('/index.html')) {
      requestUrl.pathname = requestUrl.pathname.slice(0, -'index.html'.length);
      return env.ASSETS.fetch(new Request(requestUrl, request));
    }

    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get('accept')?.includes('text/html');
    const canUseFallback = acceptsHtml && isSafeMethod;

    if (response.status !== 404 || !canUseFallback) {
      return response;
    }

    const indexUrl = new URL(request.url);
    indexUrl.pathname = '/index.html';
    indexUrl.search = '';
    return env.ASSETS.fetch(new Request(indexUrl, request));
  },
};
