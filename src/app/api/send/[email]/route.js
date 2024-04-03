import { EmailTemplate } from '@/app/components/email-template/Email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_q55q5nPN_3wGJp9ip8CcYpyMBc8jRDEnw');

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
