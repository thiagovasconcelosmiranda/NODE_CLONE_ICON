import { PrismaClient } from "@prisma/client";
  const prisma = new PrismaClient();

 const main = async () =>{
      console.log("Conectado sucesso!");
  }

  main().then( async (e)=>{
   await prisma.$disconnect();
  }).catch( async (e) =>{
   console.log(e);
   await prisma.$disconnect();
   process.exit(1);
   
  });
  export { prisma, main};
