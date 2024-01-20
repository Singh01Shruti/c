import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationsSelector } from "./store/atoms"




function App() {

  return (
    <>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
    </>
    
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const messagingCountAtom = useRecoilValue(messagingAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationsSelector)
  return (
    <>
    <button>Home</button>
    <button>My Network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs({jobsNotificationCount})</button>
    <button>Messaging({messagingCountAtom})</button>
    <button>Notifications({notificationCount})</button>

    <button>Me({totalNotificationsCount})</button>
    </>
  )
}

export default App
