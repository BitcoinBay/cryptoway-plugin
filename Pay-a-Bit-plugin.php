<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://example.com
 * @since             1.0.0
 * @package           Plugin_Name
 *
 * @wordpress-plugin
 * Plugin Name:       Pay-a-Bit
 * Plugin URI:        http://example.com/plugin-name-uri/
 * Description:       Enables merchants to accept bitcoin payments on their websites.
 * Version:           1.0.0
 * Author:           
 * Author URI:        
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

add_action('admin_menu', 'test_plugin_setup_menu');
 
function test_plugin_setup_menu(){
		add_menu_page( 'Dashboard', 'Pay-a-Bit', 'manage_options', 'test-plugin', 'plugin_setup_page' );
}
 
function plugin_setup_page() { ?>
    <div class="wrap">
        <h2>My Awesome Settings Page</h2>
        <form method="post" action="options.php">
            <?php
                settings_fields( 'smashing_fields' );
                do_settings_sections( 'smashing_fields' );
                submit_button();
            ?>
        </form>
    </div> <?php
}

