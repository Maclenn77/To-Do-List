import { updateLs } from './crud'
export function isChecked(task) {
  if (task === true) {
    return 'checked';
  }
  return '';
}

export function checkBox(list, taskIndex) {
  const index = list.findIndex((task) => task.index.toString() === taskIndex);
  if (list[index].completed === true) {
    list[index].completed = false;
  } else {
    list[index].completed = true;
  }
  updateLs(list);
}