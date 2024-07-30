import { Resend } from 'resend';
import * as React from 'react';
import EmailComponent from '../../Emailcomponent';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend('re_52bFC4Ay_Ldrz8viNjjTGVo5shMmgStNW');

export async function POST(req: NextRequest, res: any) {
  const body = await req.json();
  console.log(body);

  await resend.emails.send({
    from: 'Sebastianalvarez.cl <sebastian@maxvision.cl>',
    to: ['todossomospucon@gmail.com'],
    subject: 'Formulario Web Sebastianalvarez.cl',
    react: EmailComponent(body),
  });

  return NextResponse.json('bingo');
}
