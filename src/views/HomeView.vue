<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-8 fullLogo"
          contain
          height="300"
          :style="{ opacity: logoOpacity, transform: `scale(${logoScale})` }"
        />
        <h1 class="display-2 font-weight-bold mb-10">
          Codificant la sexualitat del futur
        </h1>
        <v-row class="my-10">
          <v-col v-for="button in buttons" :key="button.title" cols="4">
            <div class="circle-container hover-zoom">
              <v-img
                :src="button.background"
                class="my-3"
                contain
                height="600"
              />
              <div class="buttonContent align-center">
                <img :src="button.image" class="button-image" />
                <v-row fill-height justify="center" align="center" fluid>
                  <v-col cols="12" class="text-right title">
                    <h2 class="mb-10">
                      {{ button.title }}
                    </h2>
                    <h5 class="subtitle">
                      {{ button.text }}
                    </h5>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>
        </v-row>
        <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit orci quisque,
          dignissim a eget ad quam porta sagittis parturient sem, luctus felis
          consequat habitant eu urna egestas sed. Justo egestas faucibus netus
          taciti ac augue aenean curae, dis bibendum donec duis rhoncus diam
          non, nullam dictumst scelerisque mi tortor libero class. Mi pulvinar
          rutrum primis mattis pharetra porttitor parturient blandit aliquam,
          eleifend leo iaculis cursus cubilia litora risus diam quam, augue
          senectus feugiat sollicitudin suscipit commodo eget praesent. Odio
          tincidunt in facilisi pretium vulputate integer nec ligula eget,
          inceptos placerat nullam lobortis semper scelerisque augue aliquam,
          feugiat per porttitor pharetra ridiculus laoreet cubilia tempor. Magna
          habitant aliquam orci velit commodo nostra at penatibus taciti,
          suscipit volutpat pulvinar sem dignissim vivamus sed varius bibendum
          pharetra, senectus himenaeos cursus per pretium lectus mollis
          pellentesque. Pretium penatibus massa at pulvinar eros ligula congue
          nisl blandit cubilia, ac maecenas morbi enim iaculis et parturient
          torquent nam, pharetra arcu dictumst etiam elementum nullam orci
          integer molestie. Metus imperdiet posuere torquent rhoncus nostra eros
          etiam accumsan vivamus cursus, consequat risus scelerisque quis at
          nascetur tortor eu elementum magnis auctor, duis in habitant phasellus
          hac ac neque ut ridiculus. Diam sodales quam eget pretium sociis et
          vehicula leo facilisi, quis interdum purus pellentesque sociosqu odio
          lectus ac, auctor euismod nulla volutpat laoreet sollicitudin
          ridiculus ullamcorper. Magna bibendum feugiat tristique risus libero a
          netus mus et, nullam potenti curabitur varius dignissim laoreet
          facilisi. Justo dui curae mollis cursus cras commodo iaculis velit,
          per odio platea dignissim euismod bibendum metus.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit orci quisque,
          dignissim a eget ad quam porta sagittis parturient sem, luctus felis
          consequat habitant eu urna egestas sed. Justo egestas faucibus netus
          taciti ac augue aenean curae, dis bibendum donec duis rhoncus diam
          non, nullam dictumst scelerisque mi tortor libero class. Mi pulvinar
          rutrum primis mattis pharetra porttitor parturient blandit aliquam,
          eleifend leo iaculis cursus cubilia litora risus diam quam, augue
          senectus feugiat sollicitudin suscipit commodo eget praesent. Odio
          tincidunt in facilisi pretium vulputate integer nec ligula eget,
          inceptos placerat nullam lobortis semper scelerisque augue aliquam,
          feugiat per porttitor pharetra ridiculus laoreet cubilia tempor. Magna
          habitant aliquam orci velit commodo nostra at penatibus taciti,
          suscipit volutpat pulvinar sem dignissim vivamus sed varius bibendum
          pharetra, senectus himenaeos cursus per pretium lectus mollis
          pellentesque. Pretium penatibus massa at pulvinar eros ligula congue
          nisl blandit cubilia, ac maecenas morbi enim iaculis et parturient
          torquent nam, pharetra arcu dictumst etiam elementum nullam orci
          integer molestie. Metus imperdiet posuere torquent rhoncus nostra eros
          etiam accumsan vivamus cursus, consequat risus scelerisque quis at
          nascetur tortor eu elementum magnis auctor, duis in habitant phasellus
          hac ac neque ut ridiculus. Diam sodales quam eget pretium sociis et
          vehicula leo facilisi, quis interdum purus pellentesque sociosqu odio
          lectus ac, auctor euismod nulla volutpat laoreet sollicitudin
          ridiculus ullamcorper. Magna bibendum feugiat tristique risus libero a
          netus mus et, nullam potenti curabitur varius dignissim laoreet
          facilisi. Justo dui curae mollis cursus cras commodo iaculis velit,
          per odio platea dignissim euismod bibendum metus.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit orci quisque,
          dignissim a eget ad quam porta sagittis parturient sem, luctus felis
          consequat habitant eu urna egestas sed. Justo egestas faucibus netus
          taciti ac augue aenean curae, dis bibendum donec duis rhoncus diam
          non, nullam dictumst scelerisque mi tortor libero class. Mi pulvinar
          rutrum primis mattis pharetra porttitor parturient blandit aliquam,
          eleifend leo iaculis cursus cubilia litora risus diam quam, augue
          senectus feugiat sollicitudin suscipit commodo eget praesent. Odio
          tincidunt in facilisi pretium vulputate integer nec ligula eget,
          inceptos placerat nullam lobortis semper scelerisque augue aliquam,
          feugiat per porttitor pharetra ridiculus laoreet cubilia tempor. Magna
          habitant aliquam orci velit commodo nostra at penatibus taciti,
          suscipit volutpat pulvinar sem dignissim vivamus sed varius bibendum
          pharetra, senectus himenaeos cursus per pretium lectus mollis
          pellentesque. Pretium penatibus massa at pulvinar eros ligula congue
          nisl blandit cubilia, ac maecenas morbi enim iaculis et parturient
          torquent nam, pharetra arcu dictumst etiam elementum nullam orci
          integer molestie. Metus imperdiet posuere torquent rhoncus nostra eros
          etiam accumsan vivamus cursus, consequat risus scelerisque quis at
          nascetur tortor eu elementum magnis auctor, duis in habitant phasellus
          hac ac neque ut ridiculus. Diam sodales quam eget pretium sociis et
          vehicula leo facilisi, quis interdum purus pellentesque sociosqu odio
          lectus ac, auctor euismod nulla volutpat laoreet sollicitudin
          ridiculus ullamcorper. Magna bibendum feugiat tristique risus libero a
          netus mus et, nullam potenti curabitur varius dignissim laoreet
          facilisi. Justo dui curae mollis cursus cras commodo iaculis velit,
          per odio platea dignissim euismod bibendum metus.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit orci quisque,
          dignissim a eget ad quam porta sagittis parturient sem, luctus felis
          consequat habitant eu urna egestas sed. Justo egestas faucibus netus
          taciti ac augue aenean curae, dis bibendum donec duis rhoncus diam
          non, nullam dictumst scelerisque mi tortor libero class. Mi pulvinar
          rutrum primis mattis pharetra porttitor parturient blandit aliquam,
          eleifend leo iaculis cursus cubilia litora risus diam quam, augue
          senectus feugiat sollicitudin suscipit commodo eget praesent. Odio
          tincidunt in facilisi pretium vulputate integer nec ligula eget,
          inceptos placerat nullam lobortis semper scelerisque augue aliquam,
          feugiat per porttitor pharetra ridiculus laoreet cubilia tempor. Magna
          habitant aliquam orci velit commodo nostra at penatibus taciti,
          suscipit volutpat pulvinar sem dignissim vivamus sed varius bibendum
          pharetra, senectus himenaeos cursus per pretium lectus mollis
          pellentesque. Pretium penatibus massa at pulvinar eros ligula congue
          nisl blandit cubilia, ac maecenas morbi enim iaculis et parturient
          torquent nam, pharetra arcu dictumst etiam elementum nullam orci
          integer molestie. Metus imperdiet posuere torquent rhoncus nostra eros
          etiam accumsan vivamus cursus, consequat risus scelerisque quis at
          nascetur tortor eu elementum magnis auctor, duis in habitant phasellus
          hac ac neque ut ridiculus. Diam sodales quam eget pretium sociis et
          vehicula leo facilisi, quis interdum purus pellentesque sociosqu odio
          lectus ac, auctor euismod nulla volutpat laoreet sollicitudin
          ridiculus ullamcorper. Magna bibendum feugiat tristique risus libero a
          netus mus et, nullam potenti curabitur varius dignissim laoreet
          facilisi. Justo dui curae mollis cursus cras commodo iaculis velit,
          per odio platea dignissim euismod bibendum metus.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit orci quisque,
          dignissim a eget ad quam porta sagittis parturient sem, luctus felis
          consequat habitant eu urna egestas sed. Justo egestas faucibus netus
          taciti ac augue aenean curae, dis bibendum donec duis rhoncus diam
          non, nullam dictumst scelerisque mi tortor libero class. Mi pulvinar
          rutrum primis mattis pharetra porttitor parturient blandit aliquam,
          eleifend leo iaculis cursus cubilia litora risus diam quam, augue
          senectus feugiat sollicitudin suscipit commodo eget praesent. Odio
          tincidunt in facilisi pretium vulputate integer nec ligula eget,
          inceptos placerat nullam lobortis semper scelerisque augue aliquam,
          feugiat per porttitor pharetra ridiculus laoreet cubilia tempor. Magna
          habitant aliquam orci velit commodo nostra at penatibus taciti,
          suscipit volutpat pulvinar sem dignissim vivamus sed varius bibendum
          pharetra, senectus himenaeos cursus per pretium lectus mollis
          pellentesque. Pretium penatibus massa at pulvinar eros ligula congue
          nisl blandit cubilia, ac maecenas morbi enim iaculis et parturient
          torquent nam, pharetra arcu dictumst etiam elementum nullam orci
          integer molestie. Metus imperdiet posuere torquent rhoncus nostra eros
          etiam accumsan vivamus cursus, consequat risus scelerisque quis at
          nascetur tortor eu elementum magnis auctor, duis in habitant phasellus
          hac ac neque ut ridiculus. Diam sodales quam eget pretium sociis et
          vehicula leo facilisi, quis interdum purus pellentesque sociosqu odio
          lectus ac, auctor euismod nulla volutpat laoreet sollicitudin
          ridiculus ullamcorper. Magna bibendum feugiat tristique risus libero a
          netus mus et, nullam potenti curabitur varius dignissim laoreet
          facilisi. Justo dui curae mollis cursus cras commodo iaculis velit,
          per odio platea dignissim euismod bibendum metus.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    logoOpacity: 1,
    logoScale: 1,
    lastScrollTop: 0,
    buttons: [
      {
        title: "Conecta",
        background: require("../assets/buttons/button1.svg"),
        image: require("../assets/clipart/connect.svg"),
        text: "Explore the essentials of sexual health . From anatomy to safe practices and a FAQ section, empower yourself with knowledge for informed decision-making.",
      },
      {
        title: "Aprende",
        background: require("../assets/buttons/button2.svg"),
        image: require("../assets/clipart/learn.svg"),
        text: "Anonymously share, ask, and discuss in the public forum. Join a supportive community to navigate sexual education topics without judgment. Your voice matters here.",
      },
      {
        title: "Decide",
        background: require("../assets/buttons/button3.svg"),
        image: require("../assets/clipart/ask.svg"),
        text: "Input your data for a personalized dashboard. Monitor menstrual cycles, contraception, and more. Receive recommendations to proactively manage your sexual health",
      },
    ],
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > this.lastScrollTop) {
        // Scrolling down
        this.logoOpacity = Math.max(0, 1 - st / 100); // Adjust the 200 as needed
        this.logoScale = Math.max(0.5, 1 - st / 400);
      } else {
        // Scrolling up
        this.logoOpacity = 1;
        this.logoScale = 1;
      }

      this.lastScrollTop = st <= 0 ? 0 : st;
    },
  },
};
</script>

<style lang="scss" scoped>
.fullLogo {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.hover-zoom {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
}


.circle-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35rem;
}

.circle-container:hover .button-image {
  opacity: 0.2;
}

.circle-container:hover .subtitle {
  opacity: 1;
}
.subtitle {
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: left;
}

.button-image {
  position: absolute;
  height: 28rem;
  width: auto;
  bottom: -50%;
  right: 45%;
  opacity: 1;
  transition: opacity 0.3s ease;
}
.buttonContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
