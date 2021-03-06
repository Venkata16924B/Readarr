import _ from 'lodash';

export default function getIndexOfFirstCharacter(items, character) {
  return _.findIndex(items, (item) => {
    const firstCharacter = item.sortName.charAt(0);

    if (character === '#') {
      return !isNaN(firstCharacter);
    }

    return firstCharacter === character;
  });
}
