import React, { useEffect, useState } from 'react'
import { getPost, postData } from '../api/Api'

const Post = () => {
    const [data, setData] = useState([])
    const [input,setInput] = useState({
        title:"",
        body:""
    })

    const getPostData = async () => {
        let res = await getPost()
        console.log(res.data);
        setData(res.data)
    }

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput({...input,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await postData(input)
        console.log(res);
        setData([...data,res.data])
        setInput({
            title:"",
            body:""
        })
    }

    useEffect(() => {
        getPostData()
    }, [])
    return (
        <div className=" flex flex-col gap-5 justify-center items-center">
            <h1 className='text-6xl'>JSON Placeholder Data</h1>

            {/* Form for posting the data in the url */}
            <form onSubmit={handleSubmit} className='flex gap-5'>

                <input className='px-5 py-2 border border-gray-300 rounded-md' value={input.title} onChange={handleInputChange} name="title" type="text" placeholder='Title' />

                <input className='px-5 py-2 border border-gray-300 rounded-md' value={input.body} onChange={handleInputChange} name="body" type="text" placeholder='Body' />

                <button className='px-5 py-2 bg-blue-500 rounded-md' type="submit">Submit</button>
            </form>

            {/* Ul is used to store the dynamic data */}
            <ul className='flex flex-wrap gap-5 items-center justify-center'>
                {
                    data.map((item) => {
                        return <div className='bg-slate-200 p-5 rounded-md mb-5 h-60 w-84' key={item.id}>
                            <span>{item.id}</span>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default Post