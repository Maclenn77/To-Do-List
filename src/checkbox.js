import { updateLs } from './crud'
export function isChecked(task) {
  if (task === true) {
    return 'checked';
  }
  return '';
}

export function checkBox(task, list) {
  if (task.completed === true) {
    task.completed = false;
  } else {
    task.completed = true;
  }
  updateLs(list);
}