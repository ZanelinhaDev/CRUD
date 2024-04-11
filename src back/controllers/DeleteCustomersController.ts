import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCostumersService } from '../services/DeleteCostumersService';


class DeleteCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }
        const customerService = new DeleteCostumersService();

        const customer = await customerService.execute({ id })

        reply.send(customer);

    }
}

export { DeleteCustomersController }