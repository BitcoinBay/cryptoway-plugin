<?php


class payabit-deactivator {

	function register_deactivation_hook($file, $function) {
		$file = plugin_basename($file);
		add_action('deactivate_' . $file, $function);
	}

}
