import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import List from '../src/components/List/List.vue';
import ListItem from '../src/components//List/ListItem/ListItem.vue';

export default {
    title: "Lists",
    decorators: [withKnobs, withA11y],
    component: List,
    parameters: {
        notes: 'We have here a different type of lists that they are ready to use',
    },
};

export const BulletList = () => ({
    components: { List, ListItem },
    render(h) {
        return <List type="bullet">
            <ListItem tag="li" text="I am the first item."/>
            <ListItem tag="li" text="I am the second item."/>
            <ListItem tag="li" text="I am the third item."/>
        </List>;
    },
});

export const DecimalList = () => ({
    components: { List, ListItem },
    render(h) {
        return <List tag="ol" type="decimal">
            <ListItem tag="li" text="I am the first item.">
                <List tag="ol" type="decimal">
                    <ListItem tag="li" text="I am the first subitem."/>
                    <ListItem tag="li" text="I am the second subitem."/>
                    <ListItem tag="li" text="I am the third subitem."/>
                </List>
            </ListItem>
            <ListItem tag="li" text="I am the second item."/>
            <ListItem tag="li" text="I am the third item."/>
        </List>;
    },
});

export const AlphaList = () => ({
    components: { List, ListItem },
    render(h) {
        return <List tag="ol" type="A">
            <ListItem tag="li" text="I am the first item.">
                <List tag="ol" type="a">
                    <ListItem tag="li" text="I am the first subitem."/>
                    <ListItem tag="li" text="I am the second subitem."/>
                </List>
            </ListItem>
            <ListItem tag="li" text="I am the second item."/>
            <ListItem tag="li" text="I am the third item."/>
        </List>;
    },
});
