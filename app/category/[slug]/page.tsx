
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import Link from "next/link";

export default async function Category({ params }: { params: { slug: string } }) {
    
    const slug = params?.slug

    const categorySlug = await prisma.category.findFirst({
        where: {
            slug: slug
        }
    })

    const subcategory = await prisma.subcategory.findMany({
        where: {
            categoryID: categorySlug?.id
        }
    })

    return (
        <>
            <div className='mb-5'>
                <Link href={"/"}> Home</Link> &gt;&gt;
                {categorySlug?.name}
            </div>

            {subcategory.length != 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                    {subcategory.map((subcategory, key) => {
                        
                        return (
                            <div key={subcategory.id}>
                                <Link href={`/subcategory/${subcategory?.slug}`}>
                                    {subcategory.subcategory_name}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className='grid grid-cols-5 gap-4'> No data found</div>
            )}
        </>
    )
}

export async function generateStaticParams() {
    const prisma = new PrismaClient()
    const category = await prisma.category.findMany();
    return category.map((post: any) => ({
        slug: post.slug,
    }))
}