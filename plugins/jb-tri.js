let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} PULSA ${htka}

👋‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Pulsa Telkomsel 
📞 Nomor: +62 812-7367-7810
👤 A/n: PANDA TWO BOT 
📦 Mitra: PANDA TWO BOT
💰 Metode pembayaran: Online ( ~Cod~ )

📣 *Beli*

Apk TokoBot: https://app.bukaolshop.com/toko/tokobot

Apk FangzApp:https://web.jagel.id/store/fangzapp

Toko Website:https://toko.ly/TokoBot   (Non apk)

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
handler.command = /^pulsatri$/i
handler.private = true

export default handler
