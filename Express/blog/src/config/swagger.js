export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Ecomm App",
    description: "REST API Documentation",
    version: "1.0.0",
  },
  servers: [
    {
      url: "https://blog-userid007.vercel.app/",
      description: "Dev Environment",
    },
    {
      url: "http://localhost:3000/",
      description: "Local Environment",
    },
  ],
  paths: {
    "/api/v1/blogpost": {
      get: {
        summary: "Get all Blogposts",
        tags: ["Blog"],
        produces: ["application/json"],
        responses: {
          200: {
            description: "Returns all blogpost",
          },
          404: {
            description: "Bad request",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
      post: {
        summary: "Create a Blogpost",
        tags: ["Blog"],
        consumes: ["application/json"],
        produces: ["application/json"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                  },
                  body: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Returns created blogpost",
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
    "/api/v1/blogpost/{id}": {
      put: {
        summary: "Update a Blogpost",
        tags: ["Blog"],
        parameters: [
          {
            in: "path",
            name: "id",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        consumes: ["application/json"],
        produces: ["application/json"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                  },
                  body: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Returns a created blogpost",
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "Not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
      delete: {
        summary: "Delete a Blogpost",
        tags: ["Blog"],
        parameters: [
          {
            in: "path",
            name: "id",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          200: {
            description: "Returns deleted response",
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "Not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
  },
};
