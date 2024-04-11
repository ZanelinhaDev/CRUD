import { ifError } from "assert";
import prismaClient from "../prisma";

interface CreatedCustomerProps {
    name: String;
    email: String;
}

class CreateCustomersService {
    async execute({ name, email }: CreatedCustomerProps){

        if(!name || !email) {
            throw new Error("Preencha todos os campos!")
        }

        const customer = await prismaClient.customer.create ({
            data:{
                name,
                email,                
                status: true
            }
        });

        return customer
    }
}

export { CreateCustomersService }