import { EmailTemplate } from '@/app/components/email-template/Email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_gCJf88tY_37eSfsGajMTqZivdMMgbKVx7');

export async function POST(request, {params}) {
    try{
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: params.email,
            subject: 'Thanks for subscribing!',
            react: EmailTemplate(),
            text: ""
          });

          console.log(data);
          return NextResponse.json("Email enviado");
    } catch(error){
        return NextResponse.json(error.message);
    }
    
}
