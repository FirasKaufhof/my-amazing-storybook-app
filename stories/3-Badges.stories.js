import { withKnobs, text} from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Badge from '../src/components/Badge/Badge.vue';

export default {
  title: "Badges",
  decorators: [withKnobs, withA11y],
  component: Badge,
  parameters: {
    notes: 'Badge Component',
  },
};

export const AllBadges = () => ({
  components: { Badge },
render(h) {
  return <div style="display: flex; justify-content: space-between;"><Badge/>
  <Badge status="positive"/>
  <Badge status="negative"/>
  <Badge status="warning"/>
  <Badge status="error"/>
  </div>;
},
});

export const PositiveBadges = () => ({
  components: { Badge },
  template: `<Badge status="positive"></Badge>`
});

export const NegativeBadges = () => ({
  components: { Badge },
  template: `<Badge status="negative"></Badge>`
});

export const WarningBadges = () => ({
  components: { Badge },
  template: `<Badge status="warning"></Badge>`
});

export const ErrorBadges = () => ({
  components: { Badge },
  template: `<Badge status="error"></Badge>`
});

export const NeutralBadges = () => ({
  components: { Badge },
  template: `<Badge></Badge>`
});
