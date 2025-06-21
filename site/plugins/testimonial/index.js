panel.plugin("wsydney76/testimonial", {
  blocks: {
    testimonial: {
      computed: {
        image() {
          return this.content.image[0] || {};
        }
      },
      template: `
        <blockquote class="k-block-type-testimonial-quote" @dblclick="open">
          <k-writer-input
            ref="quote"
            :inline="true"
            :marks="false"
            :value="content.quote"
            :placeholder="field('quote').placeholder"
            @input="update({ quote: $event })"
          />
          <footer>
            <figure class="k-block-type-testimonial-voice">
              <img
                v-if="image.url"
                :src="image.url"
                width="100px"
                height="100px"
                :alt="'Photo of ' + content.name"
              >
              <figcaption>
                <k-writer-input
                  ref="name"
                  :inline="true"
                  :marks="false"
                  :value="content.name"
                  :placeholder="field('name').placeholder"
                  @input="update({ name: $event })"
                />
                <div class="k-block-type-testimonial-bio">
                  <k-writer-input
                    ref="jobposition"
                    :inline="true"
                    :marks="false"
                    :value="content.jobposition"
                    :placeholder="field('jobposition').placeholder"
                    @input="update({ jobposition: $event })"
                  />
                  <k-writer-input
                    ref="company"
                    :inline="true"
                    :marks="false"
                    :value="content.company"
                    :placeholder="field('company').placeholder"
                    @input="update({ company: $event })"
                  />
                 </div>
               </figcaption>
            </figure>
          </footer>
        </blockquote>
      `
    },
  }
});
