
import axios from "axios";

export const summarize = async (req, res, next) => {
  try {
    const { text, comp_rate = 30 } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Missing 'text' in request body." });
    }

    const payload = [
      {
        id: 100,
        src: text,
        comp_rate: comp_rate,
      },
    ];

    const response = await axios.post(
      "https://api.aiforthai.in.th/textsummarize",
      payload,
      {
        headers: {
          Apikey: process.env.AIFORTHAI_API_KEY || "", 
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    next(error);
  }
};
