import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// импорт стилей
import './History.css';

// компонент страницы с историей поисков ////////////////////////////////////
const History = () => {
  const searchHistory = useSelector((state) => state.history);
  const navigate = useNavigate();

  return (
    <div className="history">
      <main className="history__content">
        <h2 className="history__heading">История поиска фильмов</h2>
        <ul className="history__list">
          {searchHistory.map((query, index) => (
            <li
              className="history__list-item"
              key={index}
              onClick={() => navigate(`/search?q=${encodeURIComponent(query)}`)}
            >
              <Link
                className="history__link"
                to={`/search?q=${encodeURIComponent(query)}`}
              >
                {query}
              </Link>
              <button className="history__delete-btn">Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default History;
