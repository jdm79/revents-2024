import { AppEvent } from "../../../app/types/event";
import EventListItem from "./EventListItem";

type Props = {
  events: AppEvent[];
};

export default function ({ events }: Props) {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
}
