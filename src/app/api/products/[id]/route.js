import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try{
        const product = await prisma.product.findUnique({
            where: {
                id: Number(params.id)
            }
        });
        return NextResponse.json(product);
    } catch(error){
        return NextResponse.json(error.message);
    }
}

export async function PUT(request, {params}){
    try{
        const data = await request.json()
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

