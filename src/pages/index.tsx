import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function returnCharityList(element: React.ReactElement) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(
    // Imagine the list being mapped here is the list of charities
    (value) =>
      React.cloneElement(element, {
        key: value,
      })
  );
}

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List>
          {returnCharityList(
            <ListItem>
              <ListItemText
                primary="Single-line item"
                secondary="Secondary text"
              />
            </ListItem>
          )}
        </List>
      </Box>
    </Container>
  );
};

export default Home;
