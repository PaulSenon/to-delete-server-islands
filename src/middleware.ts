import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    // Generate a random value
    const randomValue = Math.random().toString(36).substring(2, 15);
    
    // Add the random value to locals so it's accessible in components
    context.locals.toto = Math.random()*1000;
    
    // Get the response from the next handler
    const response = await next();
    
    // Add our custom header
    response.headers.set('X-Random-Value', randomValue);
    
    console.log('locals from custom middleware', context.locals);
    return response;
}) 