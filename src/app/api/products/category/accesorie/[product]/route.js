import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try{
        if (params.product === "cap3") {
            const cap3 = await prisma.product.findMany({
                where: {
                    category: "cap",
                    public: "accesorie",
                },
                take: 3
            });

            return NextResponse.json(cap3);
        }else if (params.product === "sunglasses3") {
            const sunglasses3 = await prisma.product.findMany({
                where: {
                    category: "sunglasses",
                    public: "accesorie",
                },
                take: 3
            });

            return NextResponse.json(sunglasses3);
        } else if (params.product === "pajama3") {
            const pajama3 = await prisma.product.findMany({
                where: {
                    category: "pajama",
                    public: "accesorie",
                },
                take: 3
            });

            return NextResponse.json(pajama3);
        } else if (params.product === "backpacks3") {
            const backpacks3 = await prisma.product.findMany({
                where: {
                    category: "backpacks",
                    public: "accesorie",
                },
                take: 3
            });

            return NextResponse.json(backpacks3);
        }  else if (params.product === "watches3") {
            const watches3 = await prisma.product.findMany({
                where: {
                    category: "watches",
                    public: "accesorie",
                },
                take: 3
            });

            return NextResponse.json(watches3);
        } else if (params.product === "stock3") {
            const stock3 = await prisma.product.findMany({
                where: {
                    category: "stock",
                    public: "accesorie",
                },
                take: 3
            });

            return NextResponse.json(stock3); 
        } else if (params.product === "arrivals3") {
            const arrivals3 = await prisma.product.findMany({
                where: {
                    category: "arrivals",
                    public: "accesorie",
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