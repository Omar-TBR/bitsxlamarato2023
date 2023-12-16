import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


const theme = {
    primary: '#FF7F50',
    primary10: '#ffece5',
    primary20: '#ffc7b3',
    primary30: '#ffc7b3',
    primary40: '#ff7c4d',
    darkPrimary: '#e63e00',
    secondary: '#FFB6C1',
    secondary10: '#ffe5e9',
    secondary20: '#ff8093',
    secondary30: '#ffe5e9',
    darkSecondary: '#ff4d67',
    accent: '#FFD700',
    background: '#FFE4C4',
  }

export default new Vuetify({
    theme: {
        options: {
          customProperties: true,
          variations: false
        },
        isDark: false,
        themes: {
          light: theme
        }
      }
});
