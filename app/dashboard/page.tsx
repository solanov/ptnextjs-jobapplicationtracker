import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { redirect } from "next/navigation";

export default async function Dashboard(){
    const session = await getSession();
    

    if(!session?.user){
        redirect("/sign-in");
    }

    await connectDB();

    return <div>Dashboard Page</div>;
}