'use server'

import { revalidatePath, revalidateTag} from "next/cache"
import { createCategory } from "../lib/Category"
import { createSubCategory } from '../lib/Subcategory'

// export const revalidate = 3600
 // revalidate the data at most every hour
export async function createCategoryAction(name: string, slug: string) {
    await createCategory(name, slug)
    revalidatePath("/")
    revalidateTag('collection')

}

export async function createSubCategoryAction(subcategory_name: string, categoryID: number, slug:string) {
    console.log(slug);
    await createSubCategory(subcategory_name, categoryID, slug)
    revalidatePath("/")
    revalidateTag('collection')

}