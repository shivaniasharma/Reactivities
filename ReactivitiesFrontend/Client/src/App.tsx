import { useEffect, useState } from "react";
import "./App.css";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5010/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  // in java script function we can return one thing so that's why we have used div to wrap the h3 and ul tags.
  return (
    <>
      <Typography variant="h3"> Reactivities</Typography>

      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
           <ListItemText>  {activity.title} </ListItemText>
            </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
