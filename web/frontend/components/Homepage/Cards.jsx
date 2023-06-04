import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import {
  Page,
  Layout,
  LegacyCard,
  ResourceList,
  Thumbnail,
  Text,
} from "@shopify/polaris";

export default function Card() {
  return (
    <Page fullWidth>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 8 }}>
          {Array.from(Array(16)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Layout.Section oneThird>
                <LegacyCard title="Florida" actions={[{ content: "Manage" }]}>
                  <LegacyCard.Section>
                    <Text color="subdued" as="span">
                      455 units available
                    </Text>
                  </LegacyCard.Section>
                  <LegacyCard.Section title="Items">
                    <ResourceList
                      resourceName={{ singular: "product", plural: "products" }}
                      items={[
                        {
                          id: "343",
                          url: "#",
                          name: "Black & orange scarf",
                          sku: "9234194023",
                          quantity: "254",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                              alt="Black orange scarf"
                            />
                          ),
                        },
                        {
                          id: "258",
                          url: "#",
                          name: "Tucan scarf",
                          sku: "9234194010",
                          quantity: "201",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                              alt="Tucan scarf"
                            />
                          ),
                        },
                      ]}
                      renderItem={(item) => {
                        const { id, url, name, sku, media, quantity } = item;

                        return (
                          <ResourceList.Item
                            id={id}
                            url={url}
                            media={media}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <Text variant="bodyMd" fontWeight="bold" as="h3">
                              {name}
                            </Text>
                            <div>SKU: {sku}</div>
                            <div>{quantity} available</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                    <Button className="Align-Right" variant="outlined">
                      Create Order
                    </Button>
                  </LegacyCard.Section>
                </LegacyCard>
              </Layout.Section>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Page>
  );
}
