import { useEffect } from 'react/cjs/react.development';
import styles from './Notification.module.css'
import { useDispatch } from 'react-redux';
import { deleteNotification } from '../../actions';
const Notification = ({notificationlist, position }) => {
const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if(notificationlist.length) {
        dispatch(deleteNotification(notificationlist[notificationlist.length-1].id));
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [notificationlist, dispatch]);

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {
       notificationlist.map((notification, i) => (
          <div
            key={i}
            className={`${styles.notification} ${styles.notification} ${styles[position]}`}
            style={{ backgroundColor: notification.backgroundColor ,color:notification.color}}
          >
            <button onClick={() => dispatch(deleteNotification(notification.id))} style={{ color:notification.color}}>X</button>
            <div>
              <p className={styles.description}>{notification.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Notification
