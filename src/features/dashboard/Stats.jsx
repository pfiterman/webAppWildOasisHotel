/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Stat from "../dashboard/Stat";

import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. Number of bookings
  const numBookings = bookings.length;

  // 2. Total sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3. Check-ins
  const checkins = confirmedStays.length;

  // 4. Occupancy Rate
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  // Number of cheched in nights / all available nights ( Number of days * Number of cabins)

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
