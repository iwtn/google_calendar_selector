export default function bar() {
  const sideBar = document.querySelector('[jsname="TZVvfc"]');
  sideBar.scrollBy(0, 100);
  const checkBoxes = document.querySelectorAll('[role="checkbox"][aria-checked="false"]');
  console.log(checkBoxes);
}
