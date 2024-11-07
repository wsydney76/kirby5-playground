panel.plugin('wsydney76/cta', {
  blocks: {
    cta: {

      template: `
        <div>

          <k-writer
            ref="heading"
            :nodes="false"
            :marks="field('heading').marks"
            :inline="field('heading').inline"
            :placeholder="field('heading').placeholder"
            :value="content.heading"
            class="heading"
            @input="update({ heading: $event })"
          />


          <k-block-figure
            :empty-text="field('image').empty"
            :is-empty="!image.url"
            empty-icon="image"
            @open="open"
            @update="update"
          >
            <template v-if="image.url">
              <k-image-frame
                :ratio="21/9"
                cover="true"
                :src="image.url"
               >
              </k-image-frame>
            </template>

          </k-block-figure>


          <div class="body">
            <k-writer
              :nodes="false"
              :marks="field('body').marks"
              :inline="field('body').inline"
              :placeholder="field('body').placeholder"
              :value="content.body"
              @input="update({ body: $event })"
            />
          </div>



          <div v-if="target.url">
            <div class="button">
              <k-writer
                :nodes="false"
                :marks="field('caption').marks"
                :inline="field('caption').inline"
                :placeholder="field('caption').placeholder"
                :value="content.caption"
                @input="update({ caption: $event })"
              />
            </div>
            <div class="info" @click="open">
              Target: {{ target.text }}
            </div>
          </div>
          // TODO: check for existing component (k-empty has different layout)
          <div v-else
              class="box"
              @click="open"
              @keyup.enter="open"
              @keydown.space="open"
              tabindex="0" >
              <k-icon type="page" />
              {{ field('target').empty }}
          </div>

        </div>
      `,

      computed: {
        image() {
          return this.content.image[0] || {};
        },
        target() {
          return target = this.content.target[0] || {};
        },
      },
      methods: {
        focus() {
          this.$refs.heading.focus();
        },
      },
    }
  },
});
