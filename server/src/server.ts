import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

// HTTP Request: GET, POST, PUT, PATCH, DELETE

// Metodo Get para esse endpoint "/hello"
app.get("/users", async () => {

   const users = await prisma.user.findMany();

   return users;
})


// Aqui estamos dizendo para o fastify ouvir a porta 3333 com o metodo listen 
// e passando um callback para quando o servidor estiver rodando
app
   .listen({
      port: 3333,
   })
   .then(() => {
      console.log("👌 HTTP server running on http://localhost:3333");
   })