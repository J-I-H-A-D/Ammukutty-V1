let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Beginner'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Bronze🥉'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Silver🥈'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Gold🥇'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Platinum😎'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Diamond🌝'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Crown😌'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Conqueror🔱'
          : 'Legend'
  user.role = role
  return true
}

module.exports = handler
