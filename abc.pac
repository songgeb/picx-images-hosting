function FindProxyForURL(url, host)
{
	url = url.toLowerCase();
	host = host.toLowerCase();

	return "PROXY 10.192.88.132:8888; DIRECT";
}
