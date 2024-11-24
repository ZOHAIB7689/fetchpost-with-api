'use client'

import React ,{useState,useEffect} from "react"

export default function Fetch(){
    const [post , setPost] = useState ([]);
    const [error ,setError] = useState ("")
    const [loading , setLoading] = useState(true);


    useEffect(()=>{
        fetch("api/external")
        .then((res)=>res.json())
        .then((data)=>{
            if(data.success){
                setPost(data.data)
            }else{setError(data.message)}

        }).catch((err)=>{
            setError('An unexpected error occured')
        })
        .finally(()=>setLoading(false))
    },[])

if(loading){
    return (<div className="flex justify-center flex-col gap-6 text-6xl items-center h-screen text-lime-400 bg-rose-200">Loading <div className="w-16 h-16 border-8 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
</div>)

}
if(error){
return <div className="flex justify-center text-2xl items-center h-screen text-red-500 bg-stone-950"></div>
}
return(   <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-purple-800 tracking-tight">
          Latest Posts
        </h1>
        
        <ul className="space-y-4">
          {post.map((post:{id:number;title:string}) => (
            <li 
              key={post.id}
              className="bg-green-100  rounded-lg border-2 shadow-black/50 hover:shadow-black/30  border-gray-300 shadow-inner hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <a 
                href="#" 
                className="block p-6  transition-colors duration-200 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800 hover:text-purple-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <svg 
                    className="w-6 h-6 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
                <p className="mt-2 text-gray-600">
                  Click to read more about {post.title.toLowerCase()}...
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
)

}