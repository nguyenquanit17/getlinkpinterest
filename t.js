var request = require('request');
const fs = require('fs');

var headers = {
    'authority': 'www.pinterest.com',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'sec-fetch-site': 'none',
    'referer': 'https://www.pinterest.com/',
    //'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
    'cookie': '_pinterest_referrer="https://www.google.com/"; _routing_id="30ec5b2a-c0d0-4e01-b05e-4db55efdc83a"; sessionFunnelEventLogged=1; _auth=1; csrftoken=GxbgL0l66S61mUcBvGHH2Bq71WvuyPUH; _b="AUMQuQhdBXRPeLVEGFEi3YTbr80u6uKduxVpKKw9m02gFlZ2KrBezLNYaETGM1d933U="; _pinterest_sess="TWc9PSY5SkFvWGMzR1AwS0hBSWV0dFdYTGhUaHVBYmJlYzdWanNhRWhQSjZvVzRlakE3UVRjRmVTN3h3T2tXMUp1L1FpcXRSQWJQTy9oV2xSZlBsUkF3anBwalN5eWV5UE4wTll6eEpFdFd0ckx2R242cVZCUjJsV2w1NFdJczVHY1dMU3Y0aFV6cnJoTytxVzdpY0l3YlBUcHpEOWQ1cWJMdFdNYzFqdTJBOUUyWjZGRkxkcFZvTzBVdlAwZkl0Nmo2bnQ3R3dwWUZwZjNSSE1qOUZLTHpweE1yVlBpL2c0UUhvVTkxYktMcFNEV0J6bWUyM29mSGJkVzErWGFveitlK3AyMENQY2t5MUw3Z2JGdHJnWW81cEhVeFB0TUhpMmlOQVlPQ3I2eGlMb3pQRjBjSUhYc0M4eG00ZFBjcmQwQW5FTVJPdUlsa1M1ZVhHcks5WUROUllOeFVaT1ZSc1I2WUM2UzIrY203ZGxLUTlDdmI4OVZINFpVU1p6cStlL0tyVUk3WTNyN1NveVlxQXRRWDI3ZlNpSkhwYzEvZEhZQ1pONDVlSDFMYzRsNnZTQTBIME9TUDdQWW5kaHdZMVhSbnIrU1lEWmJua0tTQ2JnT3ZsUXhsa00xVmMzREtWNE1yQ1gzZzR5KzZYeWF0Q2s0NFlDZ29LTDFsU2NvL29oRG5BWEdwTzlTdy9GTXRjMElWS3RsbTIxbHk5UGJ2aXA3V2hVNGZTSGQrMkIzSmxza1kxS0I3Qmc2ZGozS1BrTjNYbWE4aXhLaVBRcjE5cHIrWlE1YmZxb09ydkFRZkhYT2Nad2ZwOTloeFZPNlRqWEVaR01wbkRyVndCR0djc21CcCtTencwYlNVZUxaR25rbDhQYnhOd3pvSmxmZU04TFQ1T1NoSkQ0UFlFR0dhcXhmSmk5SFA5UFBRbnZETGVHTzFjTExFeXgvb0gwaTkzb0lGT1BURjVlTUFTd1FCUDVHZVdodVRqNCtlWnE4ZkNJT2d0REgvbU1yZnd6Vi9kZ2dlTGdxZ3lvaWFWdkxkVkhoaG04RmhqTVFsenQxd2dDK0ZzQXZ2eVNoSmlHeitTTS80bnE5b0V3UEM0b0dER0RtR2ttUFExWVpoWnlVR2l1dFpKbURDYnIzWDIzOGVGeDRGNzVaVFBLQUZmaW02UjZnU1VHODFLWlBUSVNvcXpPUi9vVC8rQjJuQkJXT09XTE8xdTd3WEZvZWdoS0tQTmQwT0xWclRqUnhzWWVvTi91L1BaZDRtZkxvaW9qbzllcEZUS3AmUzVEV3VKTTNVYzBKTmlaU3RDVW8yMFZBWFdVPQ=="; G_ENABLED_IDPS=google; bei=false; cm_sub=none'
};

var options = {
    url: 'https://www.pinterest.com/search/pins/?rs=ac&len=2&q=g%C3%A1i%20xinh%20che%20m%E1%BA%B7t&eq=gai%20xinh&etslf=12748&term_meta\[\]=g%C3%A1i%7Cautocomplete%7C1&term_meta\[\]=xinh%7Cautocomplete%7C1&term_meta\[\]=che%7Cautocomplete%7C1&term_meta\[\]=m%E1%BA%B7t%7Cautocomplete%7C1',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(body);
        const arrMatch = body.match(/https:\/\/i\.pinimg\.com\/originals\/[^.]+\.jpg/g);
        console.log('arrMatch', arrMatch);
        for(let img of arrMatch){
            const arrTmp = img.split('/');
            request(img).pipe(fs.createWriteStream(arrTmp[arrTmp.length - 1]))
        }
    }
}

request(options, callback);
