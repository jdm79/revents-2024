import {
  Button,
  Icon,
  Item,
  ItemGroup,
  List,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/event";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../app/config/firebase";
import { useState } from "react";

type Props = {
  event: AppEvent;
};

// destructuring the props object data
export default function EventListItem({ event }: Props) {
  const [loading, setLoading] = useState(false);

  async function removeEvent() {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "events", event.id));
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  }

  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image
              size='tiny'
              circular
              src={event.hostPhotoURL || "/user.png"}
            />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          loading={loading}
          onClick={removeEvent}
          color='red'
          floated='right'
          content='Delete'
        />
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </SegmentGroup>
  );
}
