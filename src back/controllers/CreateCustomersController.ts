import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomersService } from '../services/CreateCustomersService';

class CreateCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email } = request.body as { name: String, email: String };
        console.log(name);
        console.log(email);

        const customerService = new CreateCustomersService();
        const customer = await customerService.execute({ name, email });

        reply.send(customer)
    }
}

export { CreateCustomersController }