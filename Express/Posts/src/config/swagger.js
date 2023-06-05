export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Posts App",
    description: "REST API Documentation",
    version: "1.0.0",
  },
  servers: [
    {
      url: "https://posts-userid007.vercel.app/",
      description: "Dev Environment",
    },
    {
      url: "http://localhost:3000/",
      description: "Local Environment",
    },
  ],
  paths: {
    "/post": {
      get: {
        summary: "Post",
        tags: ["Post"],
        responses: {
          200: {
            description: "Returns 20 posts",
          },
          404: {
            description: "Bad request",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
  },
};
