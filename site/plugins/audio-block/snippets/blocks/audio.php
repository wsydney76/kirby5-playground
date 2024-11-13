<?php if ($file = $block->source()->toFile()): ?>
  <div class="audio-wrapper">
      <?php if ($poster = $block->poster()->toFile()): ?>
        <figure class="audio-poster">
            <?= $poster->crop(200, 200) ?>
        </figure>
      <?php endif ?>
    <div class="audio-info">
      <div class="audio-title"><?= $block->title()->html() ?></div>
      <div class="audio-subtitle"><?= $block->subtitle()->html() ?></div>
      <div class="audio-description">
          <?= $block->description() ?>
      </div>
      <audio class="audio-element"
          <?= $block->controls()->isTrue() ? 'controls' : '' ?>
          <?= $block->autoplay()->isTrue() ? 'autoplay' : '' ?>
      >
        <source src="<?= $file->url() ?>" type="<?= $file->mime() ?>">
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  </div>
<?php endif ?>

<style>
    .audio-wrapper {
        margin: 2rem 0;
        display: flex;
        background: #020617;
        color: white;
    }

    .audio-poster {
        width: 12rem;
        margin-right: 1rem;
        background: #333;
        flex-shrink: 0;
    }

    .audio-title,
    .audio-subtitle {
        font-size: 1.5rem;
        margin: 1rem 0;
    }

    .audio-poster img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
    }

    .audio-title {
        font-weight: 600;
    }

    .audio-subtitle {
        margin-bottom: 1rem;
        color: #D5E1FF;
    }

    .audio-description {
        line-height: 1.5;
    }

    .audio-element {
        margin-top: 2rem;
        margin-bottom: 1rem;
        height: 2rem;
    }
</style>
