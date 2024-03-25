import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try{
        if (params.category === "cap") {
            const dress = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "accesorie" 
                }
        });
        return NextResponse.json(dress);
        } else if (params.category === "sunglasses") {
            const shirt = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "accesorie" 
                }
            });

            return NextResponse.json(shirt);
        } else if (params.category === "backpacks") {
            const blouse = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "accesorie" 
                }
            });

            return NextResponse.json(blouse);
        } else if (params.category === "watches") {
            const blouse = await prisma.product.findMany({
                where: {
                    category: params.category,
                    public: "accesorie" 
                }
            });

            return NextResponse.json(blouse);
        } else if (params.category === "all") {
            const blouse = await prisma.product.findMany({
                where: {
                    public: "accesorie" 
                }
            });

            return NextResponse.json(blouse);
        }          
    } catch(error){
        return NextResponse.json(error.message);
    }
}
