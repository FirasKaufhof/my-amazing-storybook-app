import Vue from "vue";
import MyButton from './Button/MyButton.vue';
import ListItem from './List/ListItem/ListItem.vue';
import List from './List/List.vue';
import Badge from './Badge/Badge.vue';
import CustomerCard from './CustomerCard/CustomerCard.vue';

const Components = {
    MyButton,
    ListItem,
    List,
    Badge,
    CustomerCard
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
