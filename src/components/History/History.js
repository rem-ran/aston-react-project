import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromHistory, getSearchHistory } from '../../store/historySlice';

import Preloader from '../Preloader/Preloader';

// импорт стилей
import './History.css';

// компонент страницы с историей поисков ////////////////////////////////////
const History = () => {
  const history = useSelector((state) => state.history.history);
  const historyStatus = useSelector((state) => state.history.status);

  const dispatch = useDispatch();

  const handleDeleteLink = (item) => {
    dispatch(deleteFromHistory(item));
  };

  useEffect(() => {
    dispatch(getSearchHistory());
  }, [dispatch]);

  return (
    <section className="history">
      {historyStatus === 'loading' && <Preloader />}
      <main className="history__content">
        <h2 className="history__heading">История поиска фильмов</h2>
        <ul className="history__list">
          {history.map((query, index) => (
            <li className="history__list-item" key={index}>
              <Link
                className="history__link"
                to={`/search?q=${encodeURIComponent(query)}`}
              >
                {query}
              </Link>
              <button
                className="history__delete-btn"
                onClick={() => handleDeleteLink(query)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default History;
