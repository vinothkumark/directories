// import prisma from "./prisma";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function getCategory() {
    try {
        const categories = await prisma.category.findMany();
        return { categories }

    } catch (error) {
        return { error }
    }
}

export async function createCategory(name: string, slug:string) {

    const category = await prisma.category.create({ data: { name, slug } })
    return { category }

}