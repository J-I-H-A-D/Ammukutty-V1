let handler = async m => m.reply(`
╭─「 Donation • Recharge 」
│ • Airtel 48Rs [7356703116]
│ • Airtel 48Rs Talk Time [7736703116]
╰────

╭─「 Donation • Money 」
│ • Gpay [Coming Soon]
│ • Paytm [7356706681]
╰────
`.trim()) // Add yourself if you want
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
