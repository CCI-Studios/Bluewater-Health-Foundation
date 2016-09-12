<?php

function bwhf_preprocess_html(&$vars) {
  $path = drupal_get_path_alias($_GET['q']);
  $aliases = explode('/', $path);
  foreach($aliases as $alias) {
    $vars['classes_array'][] = "path-".drupal_clean_css_identifier($alias);
  } 
}

function bwhf_preprocess_page(&$variables, $hook)
{
  $googleMapsAPIKey = 'AIzaSyB1dbdFbbJ9sS9SvFZ85Y0dNcIny_7t9z8';
  drupal_add_js("https://maps.googleapis.com/maps/api/js?key=$googleMapsAPIKey", 'external');
}
