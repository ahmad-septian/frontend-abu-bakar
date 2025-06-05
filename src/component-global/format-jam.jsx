import dayjs from "dayjs";

export const formatTime = (time) => dayjs(time, "HH:mm:ss").format("HH:mm");

const generateTimeOptions = () => {
  const times = [];
  let start = 6;
  let end = 24;

  for (let i = start; i <= end; i += 2) {
    const time = `${i.toString().padStart(2, "0")}:00`;
    times.push(time);
  }
  return times;
};

export const timeSlots = generateTimeOptions();
