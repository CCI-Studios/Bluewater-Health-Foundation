<?php
/**
 * @file
 * bwhf.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function bwhf_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'dream_home_cash_prizes';
  $bean_type->label = 'Dream Home Cash Prizes';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['dream_home_cash_prizes'] = $bean_type;

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'dream_home_date';
  $bean_type->label = 'Dream Home Date';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['dream_home_date'] = $bean_type;

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'dream_home_grand_prize';
  $bean_type->label = 'Dream Home Grand Prize';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['dream_home_grand_prize'] = $bean_type;

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'map';
  $bean_type->label = 'Map';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['map'] = $bean_type;

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'photos';
  $bean_type->label = 'Photos';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['photos'] = $bean_type;

  return $export;
}
