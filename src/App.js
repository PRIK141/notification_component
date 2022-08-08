import Button from "./components/button/Button";
import Notification from "./components/notification/Notification";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addNotification } from "./actions";

function App() {
  let notificationList = useSelector((state) => state.notification);
  console.log(notificationList);
  const dispatch = useDispatch();

  const showNotification = (type) => {
    switch (type) {
      case "success":
        dispatch(
          addNotification({
            id: notificationList.length + 1,
            title: "Success",
            description: "Your data has been saved",
            backgroundColor: "yellowgreen",
            color: "white",
          })
        );
        break;
      case "error":
        dispatch(
          addNotification({
            id: notificationList.length + 1,
            title: "Error",
            description: "Oops! Something went wrong...",
            backgroundColor: "red",
            color: "white",
          })
        );
        break;
      case "info":
        dispatch(
          addNotification({
            id: notificationList.length + 1,
            title: "Info",
            description: "You have 1 new message!",
            backgroundColor: "#03a9f4",
            color: "white",
          })
        );
        break;
      case "warning":
        dispatch(
          addNotification({
            id: notificationList.length + 1,
            title: "Warning",
            description: "Your password will expire in two days!",
            backgroundColor: "#ffb200",
            color: "black",
          })
        );
        break;
      case "unstyled":
        dispatch(
          addNotification({
            id: notificationList.length + 1,
            title: "Unstyled",
            description: "Hanna Moos likes your status.",
            backgroundColor: "white",
            color: "black",
          })
        );
        break;
      default:
        return;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <Button handleClick={() => showNotification("success")}>
          HIDE SUCCESS
        </Button>
        <Button handleClick={() => showNotification("error")}>
          HIDE ERROR
        </Button>
        <Button handleClick={() => showNotification("warning")}>
          HIDE WARNING
        </Button>
        <Button handleClick={() => showNotification("info")}>HIDE INFO</Button>
        <Button handleClick={() => showNotification("unstyled")}>
          HIDE UNSTYLED
        </Button>
      </div>
      <Notification
        notificationlist={notificationList}
        position="buttom-right"
      />
    </div>
  );
}

export default App;
