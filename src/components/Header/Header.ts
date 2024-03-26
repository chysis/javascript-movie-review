import Logo from '../../assets/logo.png';
import SearchBox from '../SearchBox/SearchBox';
import './Header.css';

interface HeaderProp {
  searchEvent: () => Promise<void>;
  logoClickEvent: () => Promise<void>;
}
class Header {
  headerBox = document.createElement('header');
  header = document.createElement('h1');
  headerImage = document.createElement('img');

  searchEvent: () => Promise<void>;
  logoClickEvent: () => Promise<void>;

  constructor({ searchEvent, logoClickEvent }: HeaderProp) {
    this.render();
    this.searchEvent = searchEvent;
    this.logoClickEvent = logoClickEvent;
    this.setEvent();
  }

  render() {
    this.headerImage.setAttribute('src', Logo);
    this.headerImage.setAttribute('alt', '로고 이미지');

    this.header.append(this.headerImage);
    this.headerBox.append(this.header);

    const searchBox = new SearchBox({ searchEvent: () => this.searchEvent() }).init();
    this.headerBox.append(searchBox);

    const parent = document.querySelector('#app');
    if (!parent) return;
    parent.prepend(this.headerBox);
  }

  setEvent() {
    this.header.addEventListener('click', () => {
      this.logoClickEvent();
    });
  }
}

export default Header;
