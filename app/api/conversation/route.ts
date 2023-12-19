import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {Configuration,OpenAIApi} from 'openai-edge';


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

const openai = new OpenAIApi(configuration);


export async function POST(req: Request){
    try{
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse("Unauthorized",{status:401});
        }
        console.log(userId);
        if(!configuration.apiKey){
            return new NextResponse("Open API key not configured",{status:500})
        }
        console.log(configuration.apiKey);
        console.log(messages);
        if(!messages){
            return new NextResponse("Messages are required",{status:400});
        }
        
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages,
        });
        // console.log(response.data.choices[0].message);

        return new NextResponse ("work",{status:200});
    }catch(error){
        console.log("[CONVERSATION_ERROR]",error);
        return new NextResponse("Internal error",{status: 500});
    }
}