<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="views-grouping views-grouping__<?php print strtolower(drupal_clean_css_identifier($title));?>">
  <?php if (!empty($title)): ?>
    <div class="views-grouping--title">
      <h3><?php print $title; ?></h3>
    </div>
  <?php endif; ?>
  <div class="views-grouping--rows">
    <?php foreach ($rows as $id => $row): ?>
      <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
        <?php print $row; ?>
      </div>
    <?php endforeach; ?>
  </div>
</div>
