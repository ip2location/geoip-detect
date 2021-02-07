<?php 

//namespace YellowTree\GeoipDetect\Shortcodes;

class ShowIfShortcode {

}

/**
 *
 * Geo-Dependent Content Hiding
 *
 * Uses an enclosing shortcode to selectively show or hide content. Use either
 * [geoip_detect2_show_if][/geoip_detect2_show_if] or [geoip_detect2_hide_if][/geoip_detect2_hide_if] at your
 * discretion, as they can both be used to accomplish the same thing.
 *
 * Shortcode attributes can be as follows:
 *
 * Inclusive Attributes (note that `hide_if` makes them exclusive):
 *      "continent", "country", "most_specific_subdivision"/"region"/"state"*, "city"
 *
 * * most_specific_subdivision, region, and state are aliases (use the one that makes the most sense to you)
 *
 * Exclusive Attributes (note that `hide_if` makes them inclusive):
 *      "not_country", "not_most_specific_subdivision"/"not_region"/"not_state"*, "not_city"
 *
 * * most_specific_subdivision, region, and state are aliases (use the one that makes the most sense to you)
 *
 * Each attribute may only appear once in a shortcode!
 * The location attributes can take each take full names, ISO abbreviations (e.g., US), or the GeonamesId.
 * All attributes may take multiple values seperated by comma (,).
 *
 * You can use custom property names with the attribute "property" and "property_value" / "not_property_value".
 *
 * Examples:
 *
 * Display TEXT if the visitor is in the US and in Texas.
 *      `[geoip_detect2_show_if country="US" state="TX"]TEXT[/geoip_detect2_show_if]`
 * 	        - OR -
 *      `[geoip_detect2_show_if country="US" region="TX"]TEXT[/geoip_detect2_show_if]`
 * 	        - OR -
 *      `[geoip_detect2_show_if country="US" region="Texas"]TEXT[/geoip_detect2_show_if]`
 *          - OR -
 *      `[geoip_detect2_show_if country="US" most_specific_subdivision="TX"]TEXT[/geoip_detect2_show_if]`
 *
 * Display TEXT if the visitor is in the US, and in either Texas or Louisiana, but hide this content
 * from visitors with IP addresses from cities named Houston.
 *      `[geoip_detect2_show_if country="US" state="TX, LA" not_city="Houston"]TEXT[/geoip_detect2_show_if]`
 *
 * Display TEXT if the visitor is from North America.
 *      `[geoip_detect2_show_if continent="North America"]TEXT[/geoip_detect2_show_if]`
 *          - OR -
 *      `[geoip_detect2_hide_if not_continent="North America"]TEXT[/geoip_detect2_hide_if]`
 *
 * Hide TEXT if the visitor is from the US.
 *      `[geoip_detect2_hide_if country="US"]TEXT[/geoip_detect2_hide_if]`
 *          - OR -
 *      `[geoip_detect2_show_if not_country="US"]TEXT[/geoip_detect2_show_if]`
 *
 * Show TEXT if the visitor is within the timezone Europe/Berlin
 *      `[geoip_detect2_show_if property="location.timeZone" property_value="Europe/Berlin"]TEXT[/geoip_detect2_show_if]`
 * 
 * Show TEXT if the visitor is in the european union
 * 		`[geoip_detect2_show_if property="country.isInEuropeanUnion" property_value="true"]TEXT[/geoip_detect2_show_if]`
 *
 * LIMITATIONS:
 * - You cannot nest several of these shortcodes within one another. Instead, seperate them into several blocks of shortcodes.
 * - City names can be ambigous. For example, [geoip_detect2_show_if country="US,FR" not_city="Paris"] will exclude both Paris in France and Paris in Texas, US. Instead, you can find out the geoname_id or seperate the shortcode to make it more specific.
 *
 */
function geoip_detect2_shortcode_show_if($attr, $content = null, $shortcodeName = '') {
	$shortcode_options = _geoip_detect2_shortcode_options($attr);
	$options = array('skipCache' => $shortcode_options['skip_cache']);

	$info = geoip_detect2_get_info_from_current_ip($shortcode_options['lang'], $options);
	
	$showContentIfMatch = ($shortcodeName === 'geoip_detect2_show_if');

	$attr = (array) $attr;

	/**
	 * You can override the detected location information here.
	 * E.g. "Show if in Paris, but if the user has given an adress in his profile, use that city instead"
	 * (Does not work in AJAX mode)
	 * 
	 * @param YellowTree\GeoipDetect\DataSources\City $info
	 * @param array $attr Shortcode attributes given to the function.
	 * @param bool $showContentIfMatch Should the content be shown (TRUE) or hidden (FALSE) if the conditions are true?
	 */
	$info = apply_filters('geoip_detect2_shortcode_show_if_ip_info_override', $info, $attr, $showContentIfMatch);

	
	$parsed = geoip_detect2_shortcode_parse_conditions_from_attributes($attr, !$showContentIfMatch);

	$evaluated = geoip_detect2_shortcode_evaluate_conditions($parsed, $info);

    // All Criteria Passed?
    if ($evaluated) {
        return do_shortcode($content);
    }
	return '';
}
add_shortcode('geoip_detect2_show_if', 'geoip_detect2_shortcode_show_if');
add_shortcode('geoip_detect2_hide_if', 'geoip_detect2_shortcode_show_if');

function geoip_detect2_shortcode_parse_conditions_from_attributes(array $attr, bool $hide_if) {
	/* Attribute Conditions. Order is not important, as they are combined with a transitive AND condition */
	$attributeNames = array(
        'continent' => 'continent',
		'not_continent' => 'continent',
		
        'country' => 'country',
		'not_country' => 'country',
		
		'most_specific_subdivision' => 'mostSpecificSubdivision',
        'region' => 'mostSpecificSubdivision',
        'state' => 'mostSpecificSubdivision',
        'not_most_specific_subdivision' => 'mostSpecificSubdivision',
        'not_region' => 'mostSpecificSubdivision',
        'not_state' => 'mostSpecificSubdivision',
		
		'city' => 'city',
        'not_city' => 'city',
	);

	$parsed = [
		'op' => 'AND', // Operator OR is not supported yet
	];
	if ($hide_if) {
		$parsed['not'] = 1;
	}

	$conditions = [];


	foreach ($attributeNames as $shortcodeParamName => $maxmindName) {
		if (!empty($attr[$shortcodeParamName])) {
			$condition = [
				'property' => $maxmindName,
				'value' => $attr[$shortcodeParamName],
			];
			if (substr($shortcodeParamName, 0, 4) == 'not_') {
				$condition['not'] = 1;
			}
			$conditions[] = $condition;
		}
	}

	// Custom property
	if (!empty($attr['property'])) {
		if (!empty($attr['property_value'])) {
			$condition = [
				'property' => $attr['property'],
				'value' => $attr['property_value'],
			];
			$conditions[] = $condition;			
		} else if (!empty($attr['not_property_value'])) {
			$condition = [
				'property' => $attr['property'],
				'value' => $attr['not_property_value'],
				'not' => 1
			];
			$conditions[] = $condition;
		}
	}

	$parsed['conditions'] = $conditions;

	return apply_filters('geoip_detect2_shortcode_show_if_parsed_result', $parsed, $attr, !$hide_if);
}

/**
 * This function has its JS equivalent. If the code is changed here, it also needs to be changed in the JS file.
 * 
 * @see ./js/shortcode_show_if.js
 */
function geoip_detect2_shortcode_evaluate_conditions(array $parsed, \GeoIp2\Model\AbstractModel $info) {
	$alternativePropertyNames = array(
			'name',
			'isoCode',
			'code',
			'geonameId',
	);

	$isConditionMatching = ($parsed['op'] === 'OR') ? false : true;

	foreach ($parsed['conditions'] as $condition) {
		// Actual value(s)
		try {
			$value = geoip_detect2_shortcode_get_property($info, $condition['property']);

			if (is_object($value)) {
				$values = [];
				foreach($alternativePropertyNames as $p) {
					if (isset($value->{$p})) {
						$values[] = $value->{$p};
					}
				}
				$value = $values;
			}
	
			$subConditionMatching = geoip_detect2_shortcode_check_subcondition($condition['value'], $value);
	
		} catch (\Exception $e) {
			// Invalid Property or so... ignore this condition.
			$subConditionMatching = false;
		}

		if (!empty($condition['not'])) {
			$subConditionMatching = ! $subConditionMatching;
		}


		if ($parsed['op'] === 'OR') {
			$isConditionMatching = $isConditionMatching || $subConditionMatching;
		} else {
			$isConditionMatching = $isConditionMatching && $subConditionMatching;
		}
	}

	if (!empty($parsed['not'])) {
		$isConditionMatching = ! $isConditionMatching;
	}

	return $isConditionMatching;
}

/**
 * This function has its JS equivalent. If the code is changed here, it also needs to be changed in the JS file.
 * 
 * @see ./js/shortcode_show_if.js
 */
function geoip_detect2_shortcode_check_subcondition($expectedValuesRaw, $actualValues) {
	// Parse User Input Values of Attribute
	$attributeValuesArray = explode(',', $expectedValuesRaw);
	$attributeValuesArray = array_map('trim', $attributeValuesArray);

	if ($actualValues === true) {
		$actualValues = array("true", "yes", "y", "1");
	}
	if ($actualValues === false) {
		$actualValues = array("false", "no", "n", "0", "");
	}

	if (!is_array($actualValues)) {
		$actualValues = array($actualValues);
	}

	// Compare case-insensitively
	$attributeValuesArray = array_map('mb_strtolower', $attributeValuesArray);
	$actualValues = array_map('mb_strtolower', $actualValues);

	$intersection = array_intersect($actualValues, $attributeValuesArray);

	return count($intersection) > 0;
}