import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// импорт стилей
import './History.css';

// компонент страницы с историей поисков ////////////////////////////////////
const History = () => {
  const searchHistory = useSelector((state) => state.history);

  return (
    <div className="history">
      <main className="history__content">
        <h2>История поиска фильмов</h2>
        <ul>
          {searchHistory.map((query, index) => (
            <li className="history__list-item" key={index}>
              <Link
                className="history__link"
                to={`/search?q=${encodeURIComponent(query)}`}
              >
                {query}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default History;
