/**
 * @depends nothing
 * @name core.console
 * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
 */

/**
 * Console Emulator
 * We have to convert arguments into arrays, and do this explicitly as webkit (chrome) hates function references, and arguments cannot be passed as is
 * @version 1.0.1
 * @date July 09, 2010
 * @since 0.1.0-dev, December 01, 2009
 * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
 */
if ( typeof window.console !== 'object' || typeof window.console.emulated === 'undefined' ) {
	// Check to see if console exists
	if ( typeof window.console !== 'object' || typeof window.console.log !== 'function' ) {
		// Console does not exist
		window.console = {};
		window.console.log = window.console.debug = window.console.warn = window.console.trace = function(){};
		window.console.error = function(){
			alert("An error has occured. Please use another browser to obtain more detailed information.");
		};
	}
	else {
		// Console is object, and log does exist
		// Check Debug
		if ( typeof window.console.debug === 'undefined' ) {
			window.console.debug = function(){
				var arr = ['console.debug:']; for(var i = 0; i < arguments.length; i++) { arr.push(arguments[i]); };
			    window.console.log.apply(window.console, arr);
			};
		}
		// Check Warn
		if ( typeof window.console.warn === 'undefined' ) {
			window.console.warn = function(){
				var arr = ['console.warn:']; for(var i = 0; i < arguments.length; i++) { arr.push(arguments[i]); };
			    window.console.log.apply(window.console, arr);
			};
		} 
		// Check Error
		if ( typeof window.console.error === 'undefined' ) {
			window.console.error = function(){
				var arr = ['console.error']; for(var i = 0; i < arguments.length; i++) { arr.push(arguments[i]); };
			    window.console.log.apply(window.console, arr);
			};
		}
		// Check Trace
		if ( typeof window.console.trace === 'undefined' ) {
			window.console.trace = function(){
			    window.console.error.apply(window.console, ['console.trace does not exist']);
			};
		}
	}
	// We have been emulated
	window.console.emulated = true;
}/**
 * @depends jquery
 * @name jquery.appendscriptstyle
 * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
 */

/**
 * jQuery Aliaser
 */
(function($){
	
	/**
	 * Append a Stylesheet to the DOM
	 * @version 1.1.0
	 * @date July 23, 2010
	 * @since 1.0.0, June 30, 2010
     * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
	 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
	 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
	 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
	 */
	$.appendStylesheet = $.appendStylesheet || function(url, overwrite){
		// Check
		if ( !(document.body||false) ) {
			setTimeout(function(){
				$.appendStylesheet.apply($,[url,overwrite]);
			},500);
			// Chain
			return $;
		}
		
		// Prepare
		var id = 'stylesheet-'+url.replace(/[^a-zA-Z0-9]/g, '');;
		var $old = $('#'+id);
		if ( typeof overwrite === 'undefined' ) {
			overwrite = false;
		}
		
		// Check
		if ( $old.length === 1 ) {
			if ( overwrite ) {
				$old.remove();
			}
			else {
				// Chain
				return $;
			}
		}
		
		// Create
		var bodyEl = document.getElementsByTagName($.browser.safari ? 'head' : 'body')[0];
		var linkEl = document.createElement('link');
		linkEl.type = 'text/css';
		linkEl.rel = 'stylesheet';
		linkEl.media = 'screen';
		linkEl.href = url;
		linkEl.id = id;
		bodyEl.appendChild(linkEl);
		
		// Chain
		return $;
	};
	
	/**
	 * Append a Script to the DOM
	 * @version 1.1.0
	 * @date July 23, 2010
	 * @since 1.0.0, June 30, 2010
     * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
	 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
	 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
	 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
	 */
	$.appendScript = $.appendScript || function(url, overwrite){
		// Check
		if ( !(document.body||false) ) {
			setTimeout(function(){
				$.appendScript.apply($,[url,overwrite]);
			},500);
			// Chain
			return $;
		}
		
		// Prepare
		var id = 'script-'+url.replace(/[^a-zA-Z0-9]/g, '');;
		var $old = $('#'+id);
		if ( typeof overwrite === 'undefined' ) {
			overwrite = false;
		}
		
		// Check
		if ( $old.length === 1 ) {
			if ( overwrite ) {
				$old.remove();
			}
			else {
				// Chain
				return $;
			}
		}
		
		// Create
		var bodyEl = document.getElementsByTagName($.browser.safari ? 'head' : 'body')[0];
		var scriptEl = document.createElement('script');
		scriptEl.type = 'text/javascript';
		scriptEl.src = url;
		scriptEl.id = id;
		bodyEl.appendChild(scriptEl);
		
		// Chain
		return $;
	};
	

})(jQuery);/**
 * @depends core.console, jquery, jquery.appendscriptstyle
 * @name jquery.syntaxhighlighter
 * @package jquery-syntaxhighlighter {@link http://www.balupton/projects/jquery-syntaxhighlighter}
 */

/**
 * jQuery Aliaser
 */
(function($){

	/**
	 * Get all elements within ourself which match the selector, and include ourself in the search
	 * @version 1.0.0
	 * @date June 30, 2010
     * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
	 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
	 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
	 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
	 */
	$.fn.findAndSelf = $.fn.findAndSelf || function(selector){
		var $this = $(this);
		return $this.find(selector).andSelf().filter(selector);
	};
		
	/**
	 * jQuery SyntaxHighlighter
 	 * @version 1.0.1-beta
 	 * @date August 16, 2010
 	 * @since 0.1.0-dev, July 23, 2010
     * @package jquery-syntaxhighlighter {@link http://www.balupton/projects/jquery-syntaxhighlighter}
	 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
	 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
	 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
	 */
	if ( !($.SyntaxHighlighter||false) ) {
		$.SyntaxHighlighter = {
			// Configuration
			'config': {
				/**
				 * Whether or not we should load in Google Prettify automatically if it was not detected.
				 */
				'load': true,
				
				/**
				 * Whether or not we should highlight all appropriate code blocks automatically once the page has finished loading.
				 */
				'highlight': true,
				
				/**
				 * Whether or not we should output debug information in case something is not working correctly.
				 */
				'debug': false,
				
				/**
				 * Whether or not we should wrap the code blocks lines, or have them scrollable.
				 */
				'wrapLines': true,
				
				/**
				 * Whether or not we should display line numbers next to the code blocks.
				 */
				'lineNumbers': true,
				
				/**
				 * Whether or not we should strip empty start and finish lines from the code blocks.
				 */
				'stripEmptyStartFinishLines': true,
				
				/**
				 * Whether or not we should remove whitespaces/indentations which are only there for HTML formatting of our code block.
				 */
				'stripInitialWhitespace': true,
				
				/**
				 * Whether or not we should alternate the lines background colours on odd and even rows.
				 */
				'alternateLines': false,
				
				/**
				 * The default class to look for in case we have not explicitly specified a language.
				 */
				'defaultCssClass': 'highlight',
				
				/**
				 * The theme that should be used by our highlighted code blocks.
				 */
				'theme': 'balupton',
				
				/**
				 * The themes to load in for use with our highlighted code blocks.
				 */
				'themes': ['balupton'],
				
				/**
				 * Whether or not we should add a Syntax Highlighter Sparkle extension if jQuery Sparkle is detected.
				 */
				'addSparkleExtension': true,
				
				/**
				 * The baseUrl to load Google's Prettify from.
				 * This is used to load in Google's Prettify if the load option is true and it was not found.
				 */
				'prettifyBaseUrl': false ? 'http://192.168.1.2/repos/jquery-syntaxhighlighter/prettify' : 'http://github.com/balupton/jquery-syntaxhighlighter/raw/master/prettify',
				
				/**
				 * The baseUrl to load our Syntax Highlighter from.
				 * This is used to load in the stylesheet and additional themes.
				 */
				'baseUrl': false ? 'http://192.168.1.2/repos/jquery-syntaxhighlighter' : 'http://github.com/balupton/jquery-syntaxhighlighter/raw/master'
			},
			
			// Init
			init: function(options){
				// Prepare
				var	SyntaxHighlighter = this,
					config = SyntaxHighlighter.config;
				
				// Fix baseUrl
				var	baseUrl = config.baseUrl;
				if ( baseUrl[baseUrl.length-1] === '/' ) {
					config.baseUrl = baseUrl.substr(0,baseUrl.length-2);
				}
				delete baseUrl;
				
				// Configure
				$.extend(true, SyntaxHighlighter.config, options||{});
				
				// Sparkle
				if ( $.Sparkle||false && config.addSparkleExtension ) {
					// Add Syntax Highlighter to Sparkle
					$.Sparkle.addExtension('syntaxhighlighter', function(){
						$(this).syntaxHighlight();
					});
				}
				
				// Attach
				$.fn.syntaxHighlight = $.fn.SyntaxHighlight = SyntaxHighlighter.fn;
				 
				// Load
				if ( config.load ) SyntaxHighlighter.load();
				
				// Highlight
				if ( config.highlight ) SyntaxHighlighter.highlight();
				
				// Chain
				return this;
			},
			
			// Load
			load: function(){
				// Prepare
				var	SyntaxHighlighter = this,
					config = SyntaxHighlighter.config,
					prettifyBaseUrl = config.prettifyBaseUrl,
					baseUrl = config.baseUrl,
					themes = config.themes;
				
				// Append
				if ( !SyntaxHighlighter.loaded() ) {
					$.appendScript(prettifyBaseUrl+'/prettify.min.js');
					$.appendStylesheet(prettifyBaseUrl+'/prettify.min.css');
					$.appendStylesheet(baseUrl+'/styles/style.min.css');
					$.each(themes,function(i,theme){
						$.appendStylesheet(baseUrl+'/styles/theme-'+theme+'.min.css');
					});
					if ( $.browser.msie ) {
						$.appendStylesheet(baseUrl+'/styles/ie.min.css');
					}
					SyntaxHighlighter.loadedExtras = true;
				}
				
				// Chain
				return this;
			},
			
			// Loaded Extras
			loadedExtras: false,
			
			// Loaded
			loaded: function(){
				return typeof prettyPrint !== 'undefined' && this.loadedExtras;
			},
			
			// Determine Language
			determineLanguage: function(css){
				// Prepare
				var	language = null,
					regex = /lang(uage)?-([a-z0-9]+)/g,
					match = regex.exec(css);
					
				// Handle
				while ( match !== null ) {
					language = match[2];
					match = regex.exec(css);
				}
				
				// Return langauge
				return language;
			},
			
			// jQuery Function
			fn: function(){
				// Prepare
				var	SyntaxHighlighter = $.SyntaxHighlighter,
					config = SyntaxHighlighter.config,
					$el = $(this);
				
				// Highlight
				$.SyntaxHighlighter.highlight({
					'el': $el
				});
				
				// Chain
				return this;
			},
			
			// Highlight
			highlight: function(params){
				// Prepare
				if ( typeof params !== 'object' ) {
					params = {};
				}
				var	SyntaxHighlighter = this,
					config = SyntaxHighlighter.config,
					$el = params.el||false;
				
				// Adjust
				if ( !($el instanceof jQuery) ) {
					$el = $('body');
				}
				
				// Check
				if ( !SyntaxHighlighter.loaded() ) {
					if ( config.debug ) window.console.debug('SyntaxHighlighter.highlight: Chosen SyntaxHighlighter is not yet defined. Waiting 500ms then trying again.');
					setTimeout(function(){
						SyntaxHighlighter.highlight.apply(SyntaxHighlighter, [params]);
					},500);
					return;
				}
				
				// Fetch
				var	$codes = $el.findAndSelf('code,pre').filter('[class*=lang],.'+config.defaultCssClass).filter(':not(.prettyprint)');
				
				// Highlight
				$codes.addClass('prettyprint '+config.defaultCssClass).each(function(){
					// Prepare
					var	$code = $(this),
						css = $code.attr('class'),
						language = SyntaxHighlighter.determineLanguage(css);
					
					// Language
					$code.addClass('lang-'+language);
				});
				
				// WrapLines
				if ( config.lineNumbers ) {
					$codes.addClass('linenums');
				}
				
				// Theme
				if ( config.theme ) {
					$codes.addClass('theme-'+config.theme);
				}
				
				// AlternateLines
				if ( config.alternateLines ) {
					$codes.addClass('alternate');
				}
				
				// Fire
				prettyPrint();
				
				// Adjust HTML: stripEmptyStartFinishLines
				// we have to do this here, as before prettyPrint IE has issues with newlines
				if ( config.stripEmptyStartFinishLines ) {
					$codes.find('li:first-child > :first-child, li:last-child > :first-child').each(function(){
						// Prepare
						var	$initialText = $(this),
							html = $initialText.html(),
							empty = /^([\r\n\s\t]|\&nbsp;)*$/.test(html),
							$parent = $initialText.parent(),
							$siblings = $initialText.siblings();
						
						// Check
						if ( empty && ($siblings.length === 0 || ($siblings.length === 1 && $siblings.filter(':last').is('br'))) ) {
							// Remove Line
							var	$parent = $initialText.parent(),
								value = $parent.val();
							$parent.next().val(value);
							$parent.remove();
						}
					});
				}
				
				// Adjust HTML: stripInitialWhitespace
				// we have to do this here, as before prettyPrint IE has issues with newlines
				if ( config.stripInitialWhitespace ) {
					$codes.find('li:first-child > :first-child').each(function(){
						// Prepare
						var	$initialText = $(this),
							html = $initialText.html(),
							match = html.match(/^(([\r\n\s\t]|\&nbsp;)+)/)||[],
							whitespace = (match[1]||'');
						
						// Check
						if ( whitespace.length ) {
							// Replace
							$initialText.parent().siblings().children(':first-child').add($initialText).each(function(){
								// Prepare
								var	$nextText = $(this),
									html = $nextText.html();
								// Replace
								html = html.replace(new RegExp('^'+whitespace,'gm'), '');
								// Apply
								$nextText.html(html);
							});
						}
					});
				}
					
				// Adjust Lines
				if ( config.wrapLines ) {
					$codes.css({
						'overflow-x':'hidden',
						'overflow-y':'hidden',
						'white-space':'pre-wrap',
						'max-height':'none'
					});
				} else {
					$codes.css({
						'overflow-x':'auto',
						'overflow-y':'auto',
						'white-space':'normal',
						'max-height':'500px'
					});
				}
				
				// Chain
				return this;
			}
			
		};
	}
	else {
		window.console.warn("SyntaxHighlighter has already been defined...");
	}

})(jQuery);