'use client'
import { useRef, useState } from "react";

import { createCategoryAction } from "./_actions"


const AddCategory = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [slugName, setSlug] = useState("");

    const changeSlug = (e: any) => {
        const sl = e.replace(" ", "-", e).toLowerCase();
        console.log(sl);
        setSlug(sl);
    }

    async function action(data: FormData) {
        const name = data.get('name')
        const slug = data.get('slug')

        if (!name || typeof name !== 'string') return
        if (!slug || typeof slug !== 'string') return

        //create a server action if form name not empty
        await createCategoryAction(name, slug);
        formRef?.current?.reset()


    }
    return (
        <form ref={formRef} action={action}>
            <h1>Add Category</h1>
            <input type="text"
                name="name"
                className="border-[2px] rounded-md border-cyan-200"
                onChange={(e) => changeSlug(e.target.value)}
            />
            <input type="text"
                name="slug"
                value={slugName}
                hidden
                readOnly
                className="border-[2px] rounded-md border-cyan-200"
            />
            <button className="bg-cyan-700 py-2 px-5 text-white" type="submit">Submit</button>
        </form>
    )
}

export default AddCategory