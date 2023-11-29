// import prisma from "./prisma";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function getSubCategory() {
    try {
        const subcategories = await prisma.subcategory.findMany();
        return { subcategories }

    } catch (error) {
        return { error }
    }
}


export async function createSubCategory(subcategory_name: string, categoryID:any, slug:string) {
    const subcategory = await prisma.subcategory.create({ data: { subcategory_name, categoryID, slug } })
    return { subcategory }

}