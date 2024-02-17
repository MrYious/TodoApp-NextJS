import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const data = request.body
    console.log(data);

    return NextResponse.json({ message: 'Hello GET' }, { status: 200 })
}

export async function POST(request: Request) {
    const data = await request.json()
    console.log(data);

    return NextResponse.json({ message: 'Hello POST' }, { status: 200 })
}