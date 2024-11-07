<?php

namespace site\_faux;

use Kirby\Cms\File;
use Kirby\Cms\Page;
use Kirby\Panel\Field;

class CustomBlock extends Page
{
    public string $headline;
    public string $subheadline;
    public string $layout;
    public string $address;
    public string $phone;
    public string $email;
    public string $level;
    public string $social;
    public string $text;
    public string $caption;
    public $date;
    public File $cover;
    public Field $image;
    public Field $style;
    public string $cite;
    public Field $contact;


    public Field $infoboxtype;
    public Field $infoboxtext;

    public Field $location;
    public Field $wide;
    public Field $alt;
    public Field $ratio;
    public Field $src;
    public Field $crop;
    public Field $target;
    public Field $body;
    public Field $heading;

    public Field $title;
    public Field $subtitle;
    public Field $description;
    public Field $source;
    public Field $poster;
    public Field $controls;
    public Field $autoplay;
}