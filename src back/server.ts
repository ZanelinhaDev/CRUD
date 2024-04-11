import fastify from 'fastify'; // Importando o fastify
import { routes } from './routes'; // Importando as rotas
import fastifyCors from '@fastify/cors'; // Importando o pacote de middleware CORS
import { error } from 'console';
import { request } from 'http';

const app = fastify({ logger: true }); // Chamando o fastify corretamente

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({message: error.message})
});

const start = async () => {
    await app.register(fastifyCors); // Registrando o middleware CORS corretamente
    await app.register(routes); // Registrando as rotas corretamente

    try {
        await app.listen({port: 3333}); // Corrigindo 'listem' para 'listen'
        console.log('Servidor está ouvindo na porta 3333...');
    } catch (err) {
        console.error('Erro ao iniciar o servidor:', err);
        process.exit(1); // Saindo do processo com código de erro em caso de falha
    }
};

start();
