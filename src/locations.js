import { getDb } from "./_lib/mongodb.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const db = await getDb();
    const docs = await db
      .collection("locations")
      .find({ isActive: true })
      .sort({ country: 1, city: 1 })
      .toArray();

    const locations = docs.map(({ _id, country, city, address, latitude, longitude }) => ({
      id: String(_id),
      country,
      city,
      address,
      latitude,
      longitude,
    }));

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({ locations });
  } catch (err) {
    console.error("GET /api/locations failed:", err);
    return res.status(500).json({ error: "Unable to load office locations" });
  }
}
