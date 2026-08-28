/**
 * Proxy configuration for routing requests through residential proxy
 * Used to bypass datacenter IP blocks from sites like 4KHDHub
 */

const { HttpProxyAgent } = require('http-proxy-agent');
const { HttpsProxyAgent } = require('https-proxy-agent');

// Get proxy URL from environment (e.g., http://phd-presented-consisting-macintosh.trycloudflare.com)
const PROXY_URL = process.env.PROXY_URL;

let httpAgent = null;
let httpsAgent = null;

if (PROXY_URL) {
    console.log(`[Proxy] Configuring proxy: ${PROXY_URL}`);
    try {
        httpAgent = new HttpProxyAgent(PROXY_URL);
        httpsAgent = new HttpsProxyAgent(PROXY_URL);
        console.log('[Proxy] Proxy agents created successfully');
    } catch (error) {
        console.error(`[Proxy] Failed to create proxy agents: ${error.message}`);
    }
} else {
    console.log('[Proxy] No PROXY_URL configured, using direct connection');
}

module.exports = {
    httpAgent,
    httpsAgent,
    isProxyEnabled: () => !!PROXY_URL
};
