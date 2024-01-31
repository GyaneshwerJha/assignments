import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { jobAtom, messagingAtom, networkAtom, totalNotificationSelector } from "./atom";

const App = () => {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
};

const MainApp = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalValue =
    networkNotificationCount >= 100 ? "99+" : networkNotificationCount;

  const jobNotificationCount = useRecoilValue(jobAtom);
  // const messageNotificationCount = useRecoilValue(messagingAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button>Network ({finalValue})</button>
      <button>Job ({jobNotificationCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification</button>
      {/* <ButtonUpdater /> */}
      <button
        onClick={() => {
          setMessagingAtomCount((messagingAtomCount) => messagingAtomCount + 1);
        }}
      >
        Me({totalNotificationCount})
      </button>
    </div>
  );
};






// const ButtonUpdater = () => {
//   const  setMessagingAtomCount = useSetRecoilState(messagingAtom);
//   return (
//     <button
//       onClick={() => {
//         setMessagingAtomCount(messagingAtomCount => messagingAtomCount + 1);
//       }}
//     >
//       Me
//     </button>
//   );
// };

export default App;
