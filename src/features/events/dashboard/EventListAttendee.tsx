import { Image, List } from "semantic-ui-react";

export default function EventListAttendee({ attendee }: any) {
  return (
    <List.Item>
      <Image src={attendee.photoURL} size='mini' circular></Image>
    </List.Item>
  );
}
