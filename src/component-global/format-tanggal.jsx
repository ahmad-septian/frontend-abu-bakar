import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");
export function FormatTanggal(date, format = "D MMMM YYYY") {
  return dayjs(date).format(format);
}
