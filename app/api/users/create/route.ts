import connectDB from "@/utils/connectDB"
import User from '@/models/User'
export async function POST(req:Request,res:Response) {
  await connectDB()
  const {name , age } = await req.json();
  const person = new User({
      name:name,
      age:age
  })
  await person.save()
  console.log("inside api",name , age)

   
    return Response.json({msg:'done',data:person},{status:201})
  }