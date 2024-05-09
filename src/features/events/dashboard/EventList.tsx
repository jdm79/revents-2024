import { AppEvent } from "../../../app/types/event";
import EventListItem from "./EventListItem";

type Props = {
  events: AppEvent[];
  selectEvent: (event: AppEvent) => void;
};

export default function EventList({ events, selectEvent }: Props) {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} selectEvent={selectEvent} />
      ))}
    </>
  );
}
