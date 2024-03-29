import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try{
        if (params.id === "stock"){
            const productsCategory = await prisma.product.findMany({
                where: {
                    category: params.id
                }
            });

            return NextResponse.json(productsCategory);

        } else if (params.id === "arrivals") {
            const productsArrivals = await prisma.product.findMany({
                where: {
                    category: params.id
                }
            });

            return NextResponse.json(productsArrivals);

        } else if (params.id === "girl") {
            const girlsProduct = await prisma.product.findMany({
                where: {
                    public: params.id
                }
            });

            return NextResponse.json(girlsProduct);

        } else if (params.id === "boy") {
            const boysProduct = await prisma.product.findMany({
                where: {
                    public: params.id
                }
            });

            return NextResponse.json(boysProduct);

        } 
        else if (params.id === "3blouse") {
            const blouse3 = await prisma.product.findMany({
                where: {
                    category: "blouse"
                },
                take: 3
            });

            return NextResponse.json(blouse3);
        }else if (params.id === "3dress") {
            const dress3 = await prisma.product.findMany({
                where: {
                    category: "dress",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(dress3);
        }else if (params.id === "3t-shirt") {
            const shirt3 = await prisma.product.findMany({
                where: {
                    category: "t-shirt",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(shirt3);
        }else if (params.id === "3skirt") {
            const skirt3 = await prisma.product.findMany({
                where: {
                    category: "skirt",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(skirt3);
        } else if (params.id === "3pajama") {
            const pajama3 = await prisma.product.findMany({
                where: {
                    category: "pajama",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(pajama3);
        } else if (params.id === "3swimwear") {
            const swimwear3 = await prisma.product.findMany({
                where: {
                    category: "swimwear",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(swimwear3);
        }  else if (params.id === "3jean") {
            const jean3 = await prisma.product.findMany({
                where: {
                    category: "jean",
                    public: "girl",
                },
                take: 3
            });

            return NextResponse.json(jean3);
        } else {
                if (!isNaN(params.id)){
                    const products = await prisma.product.findUnique({
                        where: {
                            id: Number(params.id)
                        }
                    });
        
                    return NextResponse.json(products);
                } else{
                    const clothes = await prisma.product.findMany({
                        where: {
                            nombre: params.id
                        }
                    });
                    return NextResponse.json(clothes);
                }
            
        }
        
    } catch(error){
        return NextResponse.json(error.message);
    }
}

export async function PUT(request, {params}){
    try{
        const data = await request.json();
        const updateProduct = await prisma.product.update({
            where: {
                id: Number(params.id)
            },
            data: data,
        });
        return NextResponse.json(updateProduct);
    } catch(error){
        return NextResponse.json(error.message);
    }
}

export async function DELETE(request, {params}){
    try{
        const productRemoved = await prisma.product.delete({
            where: {
                id: Number(params.id)
            },
        });
        return NextResponse.json(productRemoved);
    } catch(error){
        return NextResponse.json(error.message);
    }
}

