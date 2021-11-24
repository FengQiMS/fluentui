import * as React from 'react';

import { AccordionItem, AccordionHeader, AccordionPanel, Accordion, AccordionProps } from '@fluentui/react-accordion';

export const Collapsible = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem value="1">
      <AccordionHeader>Accordion Header 1</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 1</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionHeader>Accordion Header 2</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 2</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionHeader>Accordion Header 3</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 3</div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

Collapsible.args = {
  collapsible: true,
} as AccordionProps;

Collapsible.parameters = {
  docs: {
    description: {
      story: 'An accordion can have multiple panels collapsed at the same time.',
    },
  },
};
