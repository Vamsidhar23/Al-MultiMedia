import { NextResponse } from "next/server";
import Replicate from "replicate";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!
  });
  

export async function POST(req: Request) {
    const { imageUrl, theme, room } = await req.json();
    
    const freeTrial = await checkApiLimit();
    // // const isPro = await checkSubscription();

    if (!freeTrial) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }


    const output = await replicate.run(
      "alaradirik/t2i-adapter-sdxl-depth-midas:3263801326d7bf368327b89980371f634086e6bbbf734d9a2943cb516dd8209d",
      {
        input: {
          image: imageUrl,
          prompt: `A photo of a ${theme} ${room}, 4k photo, highly detailed`,
        },
      }
    );

    await incrementApiLimit();


    return NextResponse.json(output);

}