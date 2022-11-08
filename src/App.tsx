import React from "react";
import { Grommet, Page, PageContent, Text, Grid, Box } from "grommet";
import "./index.css";

function App() {
  return (
    <Grommet plain full>
      <Page kind="full" fill height="100%">
        <PageContent fill pad="none" basis="full">
          <Grid columns={{ count: 4, size: "small" }} gap="xxsmall" fill>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
            <Box background="brand">
              <Text>Lorem ipsum stuff</Text>
            </Box>
          </Grid>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
