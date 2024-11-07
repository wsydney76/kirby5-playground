<?php

Kirby::plugin('wsydney76/infobox', [
    'blueprints' => [
        'blocks/infobox' => __DIR__ . '/blueprints/blocks/infobox.yml',
        'fields/infoboxtype' => __DIR__ . '/blueprints/fields/infoboxtype.yml',
        'fields/infoboxtext' => __DIR__ . '/blueprints/fields/infoboxtext.yml',
    ],
]);
