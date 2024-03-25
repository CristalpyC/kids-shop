import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try{
        if (params.category === "t-shirt") {
            const shirt = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "boy" 
                }
            });

            return NextResponse.json(shirt);
        } else if (params.category === "suit") {
            const blouse = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "boy" 
                }
            });

            return NextResponse.json(blouse);
        } else if (params.category === "pajama") {
            const pajama = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "boy" 
                }
            });

            return NextResponse.json(pajama);
        } else if (params.category === "swimwear") {
            const swimwear = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "boy" 
                }
            });

            return NextResponse.json(swimwear);
        } else if (params.category === "jean") {
            const jean = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "boy"
                }
            });

            return NextResponse.json(jean);

        } else if (params.category === "all") {
            const skirt = await prisma.product.findMany({
                where: {
                    public: "boy"              
            }
            });

            return NextResponse.json(skirt);
        }
            
    } catch(error){
        return NextResponse.json(error.message);
    }
}
