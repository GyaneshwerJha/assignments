import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});

export const notificationAt = atom({
  key: "notificationAt",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 12,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobAtom);
    const notificationAtomCount = get(notificationAt);
    const messagingAtomCount = get(messagingAtom);

    return (
      networkAtomCount +
      jobAtomCount +
      notificationAtomCount +
      messagingAtomCount
    );
  },
});
