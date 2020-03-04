/* eslint-disable no-console */
import { action } from '@storybook/addon-actions';
import CustomerCard from '../src/components/CustomerCard/CustomerCard.vue';

import {
    withKnobs,
    text,
    number,
    boolean,
    select,
    color,
    date,
} from '@storybook/addon-knobs';

export default {
    component: CustomerCard,
    title: 'Addon/Knobs',
    decorators: [withKnobs],
};

export const Simple = () => ({
    props: {
        name: {
            type: String,
            default: text('Name', 'John Doe'),
        },
    },

    template: `<div @click="age++">I am {{ name }} and I'm {{ age }} years old.</div>`,

    data() {
        return { age: 40 };
    },
    created() {
        console.log('created');
    }
});






export const AllKnobs = () => {
    const classes = {
        Gold: 'Gold',
        Bronze: 'Bronze',
        Silver: 'Silver',
    };
    return {
        components: {CustomerCard},
        props: {
            name: { default: text('Name', 'Firas Ouertani') },
            points: {
                default: number('Points', 20, {
                    range: true,
                    min: 0,
                    max: 30,
                    step: 5,
                }),
            },
            cardClass: { default: select('Card Class', classes, 'Gold') },
            color: { default: color('Background', '#fff') },
            expirationDate: { default: date('Today', new Date('Jan 20 2017 GMT+0')) },
            verified: { default: boolean('Verified', true) },
        },
        template: `
        <CustomerCard
            :name="name"
            :color="color"
            :points="points"
            :cardClass="cardClass"
            :expirationDate="expirationDate"
            :verified="verified">
        </CustomerCard>`,
    };
};
