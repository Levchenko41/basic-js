
module.exports = function createDreamTeam(members) {
  let nameDream = '';
  if (!Array.isArray(members)) return false;
  members.forEach(element => {
    if (typeof (element) == "string") {
      let el = element.trim()
      nameDream = nameDream + el[0];
    }
  });
  return nameDream.toUpperCase().split('').sort().join('');
};
