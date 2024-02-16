import { Button, TextInput, FileInput } from "flowbite-react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
    return (
        <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold font-mono '>Create post</h1>
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                
                <TextInput type='text' placeholder='Title' required id='title' className='flex-1'/>
                <select>
                    <option value=''>Select Category</option>
                    <option value='Tech'>Tech</option>
                    <option value='Fashion'>Fashion</option>
                    <option value='Food'>Food</option>
                    <option value='Travel'>Travel</option>
                    <option value='Music'>Music</option>
                    <option value='Lifestyle'>Lifestyle</option>
                </select>
            </div>
            <div className="flex gap-4 items-center justify-center border-4 border-slate-950 border-dotted p-3">
               <FileInput type='file' accept='image/*' />
               <Button type="button" gradientDuoTone='purpleToPink' size='sm' outline>Upload File</Button>
            </div>
            <ReactQuill theme='snow' placeholder='start typing' className='h-72 mb-12'/>
            
        </form>
        </div>
    )
}