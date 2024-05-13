import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/types/event";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
  const [events, setEvents] = useState<AppEvent[]>([]);

  // using an empty dependencies array makes sure this is run only once
  // this useEffect hook is like componentDidMount etc from the old days
  useEffect(() => {
    setEvents(sampleData);
  }, []);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
