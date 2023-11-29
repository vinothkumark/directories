import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import React from 'react'

const page = () => {
  return (
    <>
        Dynamic Subcategory
    </>
  )
}

export default page
export async function generateStaticParams() {
  const prisma = new PrismaClient()
  const subcategory = await prisma.subcategory.findMany();
  return subcategory.map((post: any) => ({
      slug: post.slug,
  }))
}