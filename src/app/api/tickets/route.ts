import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if a ticket with this email already exists
    const existingTicket = await prisma.ticket.findUnique({
      where: { email: body.email },
    });

    if (existingTicket) {
      return NextResponse.json(
        { error: "A ticket with this email already exists" },
        { status: 400 }
      );
    }

    const ticket = await prisma.ticket.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        country: body.country,
        telegramId: body.telegramId,
        twitterHandle: body.twitterHandle,
        role: body.role,
      },
    });

    return NextResponse.json(ticket, { status: 201 });
  } catch (error) {
    console.error("Error creating ticket:", error);
    return NextResponse.json(
      { error: "Error creating ticket" },
      { status: 500 }
    );
  }
}
