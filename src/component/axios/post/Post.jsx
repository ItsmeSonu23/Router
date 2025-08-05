import React, { useEffect, useState } from 'react'
import { getPost, postData, deletePost, updatePost } from '../api/Api'

const Post = () => {
    const [data, setData] = useState([])
    const [updateData,setUpdateData] = useState({})
    const [input, setInput] = useState({
        title: "",
        body: ""
    })

    const getPostData = async () => {
        let res = await getPost()
        console.log(res.data);
        setData(res.data)
    }

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await postData(input)
        console.log(res);
        setData([...data, res.data])
        setInput({
            title: "",
            body: ""
        })
    }

    const handleDelete = async(id)=>{
        await deletePost(id)
        let newData = data.filter((item)=>item.id !== id)
        setData(newData)
    }   

    const handleUpdate = (item)=> setUpdateData(item)

    const updatePostData = async()=>{
        let res = await updatePost(updateData.id,input)
        console.log(res);
    
        if(res.status === 200){
            setData((prev)=> prev.map((item)=> item.id === res.data.id ? res.data : item))
            setUpdateData({})
            setInput({
                title:"",
                body:""
            })
        }
    }

    useEffect(() => {
        getPostData()
    }, [])

    useEffect(()=>{
        updateData &&
        setInput({
            title:updateData.title || "",
            body:updateData.body || ""
        })
    },[updateData]) 
    
    return (
        <div className=" flex flex-col gap-5 justify-center items-center">
            <h1 className='text-6xl'>JSON Placeholder Data</h1>

            {/* Form for posting the data in the url */}
            <form onSubmit={handleSubmit} className='flex gap-5'>

                <input className='px-5 py-2 border border-gray-300 rounded-md' value={input.title} onChange={handleInputChange} name="title" type="text" placeholder='Title' />

                <input className='px-5 py-2 border border-gray-300 rounded-md' value={input.body} onChange={handleInputChange} name="body" type="text" placeholder='Body' />

                <button className='px-5 py-2 bg-blue-500 rounded-md' type="submit">Submit</button>
                <button className='px-5 py-2 bg-blue-500 rounded-md' onClick={updatePostData}>Edit</button>
            </form>

            {/* Ul is used to store the dynamic data */}
            <ul className='flex flex-wrap gap-5 items-center justify-center'>
                {
                    data.map((item) => {
                        return <div className='bg-slate-200 p-5 rounded-md mb-5 h-80 w-84 flex flex-col gap-2' key={item.id}>
                            <span>{item.id}</span>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                            <div className="flex gap-5">
                                <button className='px-5 py-2 bg-blue-500 rounded-md'onClick={()=>handleUpdate(item)}>Update</button>
                                <button className='px-5 py-2 bg-blue-500 rounded-md'onClick={()=>handleDelete(item.id)}>Delete</button>    
                            </div>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default Post