import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// импорт стилей
import './History.css';
import { useEffect } from 'react';
import { getSearchHistory } from '../../store/historySlice';
import Preloader from '../Preloader/Preloader';

// компонент страницы с историей поисков ////////////////////////////////////
const History = () => {
  const history = useSelector((state) => state.history.history);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSearchHistory());
  }, [dispatch]);

  if (!history) {
    return <Preloader />;
  }

  return (
    <div className="history">
      <main className="history__content">
        <h2 className="history__heading">История поиска фильмов</h2>
        <ul className="history__list">
          {history.map((query, index) => (
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
