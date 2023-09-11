// импорт компонент
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// импорт стилей
import './History.css';

// компонент страницы с историей поисков ////////////////////////////////////
const History = ({ isLoggedIn }) => {
  return (
    <div className="history">
      <Header isLoggedIn={isLoggedIn}></Header>
      <main className="history__content">History</main>
      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default History;
