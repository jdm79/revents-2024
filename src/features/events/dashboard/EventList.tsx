import EventListItem from "./EventListItem";

export default function (props: any) {
  return (
    <>
      {props.events.map((event: any) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
}
