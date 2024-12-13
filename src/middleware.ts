import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async ({ locals, request }, next) => {
//   // Generate a random value
//   const randomValue = Math.random().toString(36).substring(2, 15);
  
//   // Add the random value to locals so it's accessible in components
//   locals.requestId = Math.random()*1000;
  
  // Get the response from the next handler
    const response = await next();
    return response;
  
  // Clone the response to make it mutable
//   const newResponse = new Response(response.body, response);
  
//   // Add our custom header
//   newResponse.headers.set('X-Random-Value', randomValue);
  
//   return newResponse;
}) 