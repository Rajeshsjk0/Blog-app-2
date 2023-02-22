import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SopTab from "./GuidelineTab";

const tabs = [{ name: "Articles" }, { name: "Favorites" }, { name: "Saved" }];

export default function GuidelineList() {
  return (
    <Tabs variant="unstyled" padding={{sm : 10, md : 20}}>
      <TabList  margin={4}>
        {tabs.map((tab: any, idx: number) => {
          return (
            <Tab
            
              _selected={{
                fontWeight: "semibold",
                bg: "gray.200",
                borderRadius: 5,
              }}
              key={idx}
            >
              {tab.name}
            </Tab>
          );
        })}
      </TabList>
      <TabPanels>
        <TabPanel>
          <SopTab />
        </TabPanel>
        <TabPanel>
          <SopTab />
        </TabPanel>
        <TabPanel>
          <SopTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
4;
