const express = require("express");
// const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;

// app.use(cors({
//   origin: '*',
//   methods: 'GET, POST, PUT, DELETE',
//   allowedHeaders: 'Content-Type',
// }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());

app.post("/translate", async (req, res) => {
  const { text, source, target } = req.body;
  const clientId = process.env.PAPAGO_CLIENT_ID;
  const clientSecret = process.env.PAPAGO_CLIENT_KEY;
  const apiUrl = "https://openapi.naver.com/v1/papago/n2mt";

  try {
    const response = await axios.post(
      apiUrl,
      {
        source: source || "en",
        target: target || "ko",
        text: text || "nothing",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Naver-Client-Id": clientId,
          "X-Naver-Client-Secret": clientSecret,
        },
      }
    );

    const translatedText = response.data.message.result.translatedText;
    res.json({ translatedText });
  } catch (error) {
    console.error("번역 오류:", error);
    console.error("에러 응답:", error.response.data);
    res.status(500).json({ error: "번역 오류" });
  }
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
