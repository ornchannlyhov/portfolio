export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, subject, message } = req.body;

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !chatId) {
        return res.status(500).json({ error: 'Telegram configuration is missing.' });
    }

    // Escape special characters for MarkdownV2
    const escapeMarkdownV2 = (text) => {
        return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
    };

    const text = `*New Message from Portfolio*\n*Name:* ${escapeMarkdownV2(name)}\n*Subject:* ${escapeMarkdownV2(subject)}\n*Message:*\n${escapeMarkdownV2(message)}`;

    try {
        const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: 'MarkdownV2'
            }),
        });

        const data = await telegramResponse.json();

        if (!data.ok) {
            throw new Error(data.description || 'Telegram API request failed');
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Telegram error:', error);
        return res.status(500).json({ error: error.message });
    }
}
