import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nom, email, sujet, message } = await req.json();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: "Site GC Territoires",
          email: process.env.CONTACT_EMAIL,
        },

        to: [
          {
            email: process.env.CONTACT_EMAIL,
          },
        ],

        subject: `Nouveau message : ${sujet}`,

        htmlContent: `
          <h2>Nouveau message reçu</h2>

          <p><strong>Nom :</strong> ${nom}</p>

          <p><strong>Email :</strong> ${email}</p>

          <p><strong>Sujet :</strong> ${sujet}</p>

          <p><strong>Message :</strong></p>

          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      console.error(error);

      return NextResponse.json(
        {
          error,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Erreur serveur",
      },
      {
        status: 500,
      }
    );
  }
}