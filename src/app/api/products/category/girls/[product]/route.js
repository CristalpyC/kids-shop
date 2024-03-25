import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try{
        if (params.product === "blouse3") {
            const blouse3 = await prisma.product.findMany({
                where: {
                    category: "blouse",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(blouse3);
        }else if (params.product === "dress3") {
            const dress3 = await prisma.product.findMany({
                where: {
                    category: "dress",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(dress3);
        }else if (params.product === "t-shirt3") {
            const shirt3 = await prisma.product.findMany({
                where: {
                    category: "t-shirt",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(shirt3);
        }else if (params.product === "skirt3") {
            const skirt3 = await prisma.product.findMany({
                where: {
                    category: "skirt",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(skirt3);
        } else if (params.product === "pajama3") {
            const pajama3 = await prisma.product.findMany({
                where: {
                    category: "pajama",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(pajama3);
        } else if (params.product === "swimwear3") {
            const swimwear3 = await prisma.product.findMany({
                where: {
                    category: "swimwear",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(swimwear3);
        }  else if (params.product === "jean3") {
            const jean3 = await prisma.product.findMany({
                where: {
                    category: "jean",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(jean3);
        } else if (params.product === "stock3") {
            const stock3 = await prisma.product.findMany({
                where: {
                    category: "stock",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(stock3); 
        } else if (params.product === "arrivals3") {
            const arrivals3 = await prisma.product.findMany({
                where: {
                    category: "arrivals",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(arrivals3); 
        }
        else {
                if (!isNaN(params.product)){
                    const products = await prisma.product.findUnique({
                        where: {
                            id: Number(params.product)
                        }
                    });
        
                    return NextResponse.json(products);
                } else{
                    const clothes = await prisma.product.findMany({
                        where: {
                            nombre: params.product
                        }
                    });
                    return NextResponse.json(clothes);
                }
            
        }
        
    } catch(error){
        return NextResponse.json(error.message);
    }
}