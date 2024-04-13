const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

const removeBorder  = () =>{
  tabItems.forEach(item => {
    item.classList.remove('tab-border');
  });
}

const removedisplay = () => {
    tabContentItems.forEach((tab) => {
      tab.classList.remove('show');
    });
}

function selectItem(e) {
  removeBorder();
  removedisplay();
  this.classList.add('tab-border');
  const selectedTab = document.querySelector(`#${this.id}-content`);
  selectedTab.classList.add('show');
}

tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});