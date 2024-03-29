import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const cart = await prisma.Cart.findMany();
        return NextResponse.json(cart);
    } catch(error){
        return NextResponse.json(error.message);
    }
}

/*export async function POST(request){
    try{
        const data = await request.json()
        const addCart = await prisma.product.create({
        data:{
            nombre: data.nombre,
            price: data.price,
            description: data.description,
            img1: data.img1,
            img2: data.img2,
            public: data.public,
            category: data.category,
        },
    });
        return NextResponse.json(addProduct);
    } catch(error){
        return NextResponse.json(error.message);
    }
}*/