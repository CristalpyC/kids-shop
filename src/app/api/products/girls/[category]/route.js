import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try{
        if (params.category === "dress") {
            const dress = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "girl" 
                }
        });
        return NextResponse.json(dress);
        } else if (params.category === "t-shirt") {
            const shirt = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "girl" 
                }
            });

            return NextResponse.json(shirt);
        } else if (params.category === "blouse") {
            const blouse = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "girl" 
                }
            });

            return NextResponse.json(blouse);
        } else if (params.category === "pajama") {
            const pajama = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "girl" 
                }
            });

            return NextResponse.json(pajama);
        } else if (params.category === "swimwear") {
            const swimwear = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "girl" 
                }
            });

            return NextResponse.json(swimwear);
        } else if (params.category === "jean") {
            const jean = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "girl"
                }
            });

            return NextResponse.json(jean);

        } else if (params.category === "skirt") {
            const skirt = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "girl"              
            }
            });

            return NextResponse.json(skirt);
        } else if (params.category === "all") {
            const skirt = await prisma.product.findMany({
                where: {
                    public: "girl"              
            }
            });

            return NextResponse.json(skirt);
        }
            
    } catch(error){
        return NextResponse.json(error.message);
    }
}
