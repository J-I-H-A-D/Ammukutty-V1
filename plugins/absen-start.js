let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*There are still absences in this chat!*_\n\n*${usedPrefix}removeabsence* - to delete absence`
    }
    conn.absen[id] = [
        m.reply(`Successfully started absent!\n\n*${usedPrefix}absent* - for absent\n*${usedPrefix}checkabsence* - to check attendance\n*${usedPrefix}delete absent* - to delete attendance data`),
        [],
        text
    ]
}
handler.help = ['start absent [text]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
module.exports = handler
