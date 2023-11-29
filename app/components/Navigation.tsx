import Link from "next/link";
import { getCategory } from '@/app/lib/Category'

async function Navigation() {
    const { categories } = await getCategory();
    return (
        <>
            <div className="">
                <ul>
                    {categories?.map((cate:any, key:any) => {
                        
                        return (
                            <li key={cate.id} className="my-1 mx-2 pl-4 py-1 border-l-4 bg-cyan-200 border-l-cyan-700">
                                <Link href={`/category/${cate.slug}`}>{cate.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Navigation;