import Link from 'next/link';


const Header = () => {
    return (
        <>
            <div className='p-6 bg-cyan-400'>
                <Link href={"/"}>Home</Link> | &nbsp;

                <Link href={"/category"}>Add Category</Link> | &nbsp;
                <Link href={"/subcategory"}>Add Subcategory</Link>
            </div>
        </>
    )
}

export default Header;
