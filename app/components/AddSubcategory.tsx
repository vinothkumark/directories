'use client'
import { useRef, useState } from "react";
import { createSubCategoryAction } from "./_actions";

const AddSubcategory = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [slugName, setSlug] = useState("");


    const changeSlug = (e: any) => {
        const subSl = e.replace(" ", "-", e).toLowerCase();
        setSlug(subSl);
    }

    async function create(formData: FormData) {
        const subcategory_name = formData.get('subcategory_name')
        const categoryID = formData.get('categoryID')
        const slug = formData.get('slug');

        if (!subcategory_name || typeof subcategory_name !== 'string') return
        if (!categoryID || typeof categoryID !== 'string') return
        if (!slug || typeof slug !== 'string') return

        // //create a server action if form name not empty
        await createSubCategoryAction(subcategory_name, parseInt(categoryID), slug);
        formRef?.current?.reset()
    }

    return (

        <form ref={formRef} action={create}>
            <h1>Add Subcategory</h1>
            <input 
            type="text" 
            name="subcategory_name"
             className="border-[2px] rounded-md border-cyan-200" 
             onChange={(e) => changeSlug(e.target.value)}
             />
            <input type="text"
                name="slug"
                value={slugName}
                readOnly
                className="border-[2px] rounded-md border-cyan-200"

            />
            <select id="countries" name='categoryID' className="bg-gray-50 border border-gray-300">
                <option defaultValue="">Choose a country</option>
                <option value="1">Advertising</option>
                <option value="2">Arts</option>
                <option value="3">Automative</option>
                <option value="4">Business</option>
                <option value="5">Computers</option>
                <option value="6">Construction</option>
                <option value="7">Directories</option>
                <option value="8">Education</option>
                <option value="9">Entertainment</option>
                <option value="10">Games</option>
                <option value="11">Health</option>
                <option value="12">Home Needs</option>
                <option value="13">Internet</option>
                <option value="14">Kids and Teens</option>
                <option value="15">Manufacturing</option>
                <option value="16">Miscellaneous</option>
                <option value="17">Music</option>
                <option value="18">News and Media</option>
                <option value="19">Real Estate</option>
                <option value="20">Recreation</option>
                <option value="21">Reference</option>
                <option value="22">Regional</option>
                <option value="23">Science</option>
                <option value="24">Shopping</option>
            </select>
            <button className="bg-cyan-700 py-2 px-5 text-white" type="submit">Submit</button>
        </form>

    )
}

export default AddSubcategory