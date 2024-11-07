panel.plugin('wsydney76/infobox', {
  blocks: {
    infobox: {

      template: `
        <div :data-type="content.infoboxtype">

          <k-icon :type="icon" />

          <k-writer
            ref="input"
            :nodes="false"
            :marks="field('text').marks"
            :inline="field('text').inline"
            :placeholder="field('text').placeholder"
            :value="content.text"
            @input="update({ text: $event })"
          />

          <k-select-input
            :options="field('infoboxtype').options"
            :empty="false"
            :value="content.infoboxtype"
            @input="update({ infoboxtype: $event })"/>

        </div>
      `,

      computed: {
        icon() {
          return this.field('infoboxtype').options
            .find(option => option.value === this.content.infoboxtype)
            .icon;
        }
      },

      methods: {
        focus() {
          this.$refs.input.focus();
        },
      },
    }
  },
});
