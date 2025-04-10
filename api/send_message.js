export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, subject, message } = req.body;

    if (!name || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !chatId) {
        return res.status(500).json({ error: 'Server configuration error' });
    }

    // Escape special characters for MarkdownV2
    const escapeMarkdownV2 = (text) => {
        return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
    };

    const text = `*New Message from Portfolio*\n*Name:* ${escapeMarkdownV2(name)}\n*Subject:* ${escapeMarkdownV2(subject)}\n*Message:*\n${escapeMarkdownV2(message)}`;
    const encodedText = encodeURIComponent(text);

    try {
        const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodedText}&parse_mode=MarkdownV2`);
        const data = await response.json();

        if (!data.ok) {
            throw new Error(data.description || 'Telegram API request failed');
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).json({ error: 'Failed to send message' });
    }
}