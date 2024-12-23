import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

app.get("/teste", async (request, reply) => {
  return { hello: "teste" };
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running on http://localhost:3333");
});
