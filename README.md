# gpt-chatbot-next13

This app is for chatGPT chatbot service with next13. The model unsed in this repo is gpt-3.5-turbo. There are much more different option provided by openai. Please check out official docs. 

This app need openai-api-key. You can get this key in https://platform.openai.com/account/api-keys. For that you have to login first. After you have a api-key. Then create a `.env.local` in root level and add following code 


```tsx
OPENAI_API_KEY=add your api key here
REDIS_URL=add your redis url key here
REDIS_SECRET=add your redis token key here
```

upstash link: https://console.upstash.com/redis/2ea1b1a7-43fd-4fe3-b497-b9b78808f4ed

That's it
