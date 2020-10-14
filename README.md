
## Documentation 
### Tech Stack
For the frontend of the DieGrammatikMacher product i made the decision to use following tech stack: 
- Next.js (React Framework): 
  - Next.js allows server side rendering, server side generation, preview modes of pages and client side rendering out of the box. You can make a decision per page where and when it should be build. When using SSG (Server Side Generation), the pages are build during build time of the app. When triggering SSR, the pages are build during every request. In this example, the main page could be completely rendered during build time, which could then lead to super fast page loadings on client side
  - Furthermore the framework provides an extensible node based api layer out of the box. Meaning, you can define your api proxy layer within the application itself. Each defined API can be deployed serverless as needed. For this application it can be usefull, if different APIs or backends have to be accessed. Then we could use the API routes as aggregation layer. 
- Material UI as React UI framework due to its easy integration and great look and feel out of the box

### Architecture
- App structure
  - Pages: all pages for the apps can be found within the pages folder. In this case i have just implemented one page as requested. For each further page it could be defined how the page should be rendered. This page could be completely rendered on build time.
  - Container: i have created one container which aggregates all components needed for this application. It defines the structure between the components
  - Components: i have created different components for the email input, the audio recording section and the different types of buttons
  - api folder: here i created one simple api point which receives the recorded data from the user. This data point could be extended to a proper api layer which distributes the data to the different endpoints (e.g. machine learning services which could process the recorded audio files)
  - src: here the theme for the application can be found. the template was just modified in terms of background color and primary + secondary colors
  - with proper time i would also add utils and lib folders for common functions. Also services should be defined in an own folder structure
  - Testing was complete disregarded. Nevertheless, a testing library as e.g. Jest should be included in the proper version
  
- For state mgmt i made use of react hooks. Nevertheless, proper state mgmt. like redux could be implemented in a proper version
- Proper error handling would have to be implemented.

### Functionality
- Features implemented: 
  - User can start & stop the recording of the Audio (after he gave permission to access the mic)
  - The replay of the spoken audio was not finished, dummy function is implemented 
  - Email and the audio file are getting send to the api layer checkGrammar via post request.
  - Dummy response is received




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
