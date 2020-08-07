const getHostFromUrl = url => url.replace('www.', '').split(/\/+/)[1];
export default getHostFromUrl;