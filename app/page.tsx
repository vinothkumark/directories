import Image from 'next/image'
import Nav from './components/Header';
import { getCategory } from '@/app/lib/Category'

export default async function Home() {
  const { categories } = await getCategory();
  return (

    <>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
        {categories?.map((category: any, key: any) => (
          <div className='py-5' key={category.id}>
            {category.name}
          </div>
        ))
        }
      </div>

    </>
  )
}
