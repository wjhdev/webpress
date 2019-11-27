<!DOCTYPE html>

<?php define('WEBPRESS_STENCIL_NAMESPACE', 'webpress'); ?>

<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
  <title><?php echo wp_title("&middot;",true,"right"); ?></title>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <wp-root />
</body>

<?php wp_footer(); ?>
</html>