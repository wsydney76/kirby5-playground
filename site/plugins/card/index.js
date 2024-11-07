panel.plugin("wsydney76/card", {
  blocks: {
    card: {
      data() {
        return {
          pageheading: this.field('heading').placeholder,
          pagesubheading: this.field('subheading').placeholder,
          pageimage: {},
        };
      },

      computed: {
        cardType() {
          return this.content.cardtype;
        },
        image() {
          if(this.cardType === 'manual') {
            return this.content.image[0] || {};
          } else {
            return this.pageimage|| {}
          }
        },
        pageId() {
          return this.page ? this.page.id : '';
        },
        page() {
          return this.content.page[0] || {};
        },
      },

      watch: {
        "cardType": {
          handler (value) {
            this.setPage(value);
          },
          immediate: true
        },
        "page": {
          handler (value) {
            this.setPage(this.cardType);
          },
          immediate: true
        },
      },

      methods: {
        setPage(value) {
          if(value === 'page' && this.pageId) {
            this.$api.get('pages/' + this.pageId.replaceAll('/', '+')).then(page => {
              this.pageheading = page.title;
              this.pagesubheading = page.content.subheading;
              this.pageimage = page.content.featuredimage[0] || {};
            });
          }
        },
      },

      template: `
        <div @dblclick="open">
          <k-aspect-ratio
              class="k-block-type-card-image"
              cover="true"
              ratio="16/9"
          >
              <img
                  v-if="image.url"
                  :src="image.url"
                  :alt="image.alt"
              >
          </k-aspect-ratio>


          <div v-if="cardType == 'manual'">
              <h2 class="k-block-type-card-heading">
                  <k-writer
                      ref="heading"
                      :inline="true"
                      :marks="false"
                      :value="content.heading"
                      :placeholder="field('heading').placeholder"
                      @input="update({ heading: $event })"
                  />
              </h2>

              <div class="k-block-type-card-text">
                  <k-writer
                      ref="subheading"
                      :inline="true"
                      :marks="false"
                      :value="content.subheading"
                      :placeholder="field('subheading').placeholder"
                      @input="update({ subheading: $event })"
                  />
              </div>
          </div>

          <div v-if="cardType == 'page'">
              <h2 class="k-block-type-card-heading">{{ pageheading }}</h2>
              <div class="k-block-type-card-text" v-html="pagesubheading"></div>
          </div>

      </div>
      `
    },
  }
});
