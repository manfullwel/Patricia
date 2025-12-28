
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Plan from '../../../models/Plan';

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { message, plans } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const newPlan = new Plan({ message, plans });
    await newPlan.save();

    return NextResponse.json({ success: true, data: newPlan }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
