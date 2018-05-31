import 'flexboxgrid';
import './styles/styles.scss';

const list = document.querySelectorAll('.navigation__item');
var check = document.querySelector('#navi-toggle');

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function() {
    check.checked = false;
  });
}
