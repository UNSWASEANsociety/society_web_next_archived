import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';

const localizer = momentLocalizer(moment)

const EventCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default EventCalendar;
