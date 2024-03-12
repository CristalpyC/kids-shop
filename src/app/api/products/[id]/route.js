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

        } else if (params.id === "dress") {
            const dress = await prisma.product.findMany({
                where: {
                    category: params.id,
                }
            });

            return NextResponse.json(dress);
        } else if (params.id === "t-shirt") {
            const shirt = await prisma.product.findMany({
                where: {
                    category: params.id,
                }
            });

            return NextResponse.json(shirt);
        } else if (params.id === "blouse") {
            const blouse = await prisma.product.findMany({
                where: {
                    category: params.id,
                }
            });

            return NextResponse.json(blouse);
        } else if (params.id === "pajama") {
            const pajama = await prisma.product.findMany({
                where: {
                    category: params.id
                }
            });

            return NextResponse.json(pajama);
        }else if (params.id === "swimwear") {
            const swimwear = await prisma.product.findMany({
                where: {
                    category: params.id,
                }
            });

            return NextResponse.json(swimwear);
        } else if (params.id === "jean") {
            const jean = await prisma.product.findMany({
                where: {
                    category: params.id,
                    public: "girl"
                }
            });

            return NextResponse.json(jean);

        } else if (params.id === "skirt") {
            const skirt = await prisma.product.findMany({
                where: {
                    category: params.id                }
            });

            return NextResponse.json(skirt);

        } else if (params.id === "bt-shirt") {
            const btShirt = await prisma.product.findMany({
                where: {
                    category: params.id                }
            });

            return NextResponse.json(btShirt);
        } else if (params.id === "bpajama") {
            const bPajama = await prisma.product.findMany({
                where: {
                    category: params.id                }
            });

            return NextResponse.json(bPajama);
        } else if (params.id === "bsuit") {
            const bSuit = await prisma.product.findMany({
                where: {
                    category: params.id
                }
            });

            return NextResponse.json(bSuit);
        } else if (params.id === "bswimwear") {
            const bSwimwear = await prisma.product.findMany({
                where: {
                    category: params.id
                }
            });

            return NextResponse.json(bSwimwear);
        } else if (params.id === "all") {
            const all = await prisma.product.findMany({
                where: {
                    public: "girl"
                }
            });

            return NextResponse.json(all);
        } else if (params.id === "bjeans") {
            const bJeans = await prisma.product.findMany({
                where: {
                    category: "jean",
                    public: "boy"
                }
            });

            return NextResponse.json(bJeans);
        } else if (params.id === "allb") {
            const all = await prisma.product.findMany({
                where: {
                    public: "boy"
                }
            });

            return NextResponse.json(all);
        }else if (params.id === "allc") {
            const accesorie = await prisma.product.findMany({
                where: {
                    public: "accesorie"
                }
            });

            return NextResponse.json(accesorie);
        }else if (params.id === "cap") {
            const cap = await prisma.product.findMany({
                where: {
                    category: params.id
                }
            });

            return NextResponse.json(cap);
        }else if (params.id === "sunglasses") {
            const sunglasses = await prisma.product.findMany({
                where: {
                    category: params.id
                }
            });

            return NextResponse.json(sunglasses);
        }else if (params.id === "backpacks") {
            const backpacks = await prisma.product.findMany({
                where: {
                    category: params.id
                }
            });

            return NextResponse.json(backpacks);
        }else if (params.id === "watches") {
            const watches = await prisma.product.findMany({
                where: {
                    category: params.id
                }
            });

            return NextResponse.json(watches);
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

