let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} PULSA ${htka}

👋‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Pulsa Xl
📞 Nomor: +6281959293465
👤 A/n: ANGGA ( saya / Faiz (adek saya ) )
📦 Mitra: PANDA TWO BOT
💰 Metode pembayaran: Online ( ~Cod~ )

📣 *Beli*

Apk TokoBot: https://app.bukaolshop.com/toko/tokobot

Apk FangzApp: https://telegra.ph/file/45f4f6d79b997c5e94bb6.jpg

Toko Website:   (Non apk)

✏️ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'TOPUP', url: 'Konter Terdekat'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^pulsasmartfren$/i
handler.private = true

export default handler
