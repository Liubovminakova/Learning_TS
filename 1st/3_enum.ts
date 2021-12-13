enum Membership {
  Simple,
  Standart,
  Preminum
}

const membership = Membership.Standart
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
  TELEGRAM = 'Telegram'
}

const social = SocialMedia.INSTAGRAM
console.log(social)
