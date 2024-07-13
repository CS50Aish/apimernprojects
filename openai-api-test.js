const OpenAI = require('openai');
const openai = new OpenAI({
    apiKey: "your_api_key"
});

const openFun = async() => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "What is MERN Stack"}],
        max_tokens: 100
    });

    console.log(chatCompletion.choices[0].message.content);

};