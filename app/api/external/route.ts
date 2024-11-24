import { NextResponse } from "next/server";

const EXTERNAL_API_URL ="https://jsonplaceholder.typicode.com/posts";
export async function GET(){
    try {
        const response = await fetch(EXTERNAL_API_URL)
if(!response.ok){
    return NextResponse.json({success:false , message:"Ferch the data from the api"},{status:200})

}
const data = await response.json()
return NextResponse.json({success:true ,data} ) 


    } catch (error :any) {NextResponse.json({succcess:false , message:"somethinwent wrong",error:error.message})
     }
}