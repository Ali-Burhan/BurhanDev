import { connectToMongoDB } from "@/lib/db";
import {NextResponse} from 'next/server'
export async function GET(request) {
    const db =await connectToMongoDB()
    return NextResponse.json({error:'Internal Server Error'},{status:500})
} 
export async function POST(req,res) {
    // try {
    //   const db = await connectToMongoDB();
    //   const collection = db.collection('exampleCollection'); // Replace with your desired collection name
  
    //   return NextResponse.json({ message: 'Data inserted successfully' });
    // } catch (error) {
    //   console.error("Error inserting data into MongoDB:", error);
    //   return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    // }
    // const {title} = request.json()
    console.log(title);
    return 
  }