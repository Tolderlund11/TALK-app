export default async function handler(req, res) {

  try {

    const response = await fetch(

      "https://iuuvepbgrrtjjeiktipe.supabase.co/storage/v1/object/public/talk-public/index.html"

    );

    if (!response.ok) {

      throw new Error("Kunne ikke hente TALK fra Supabase");

    }

    const html = await response.text();

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    res.setHeader("Cache-Control", "no-store");

    res.status(200).send(html);

  } catch (error) {

    res.status(500).send("TALK kunne ikke starte");

  }

}
