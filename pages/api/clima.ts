
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const API_KEY = process.env.WEATHER_API_KEY;
  const CITY = 'Brasilia';
  const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ 
        location: data.location.name,
        temp_c: data.current.temp_c,
        condition: data.current.condition.text,
        last_updated: data.current.last_updated
      });
    } else {
      res.status(response.status).json({ message: data.error.message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
