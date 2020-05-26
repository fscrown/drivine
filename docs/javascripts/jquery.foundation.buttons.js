(function($,window,undefined){"use strict";$.fn.foundationButtons=function(options){var $doc=$(document),config=$.extend({dropdownAsToggle:false,activeClass:"active"},options),closeDropdowns=function(dropdown){$(".button.dropdown").find("ul").not(dropdown).removeClass("show-dropdown")},resetToggles=function(button){var buttons=$(".button.dropdown").not(button);buttons.add($("> span."+config.activeClass,buttons)).removeClass(config.activeClass)};$doc.on("click.fndtn",".button.disabled",function(e){e.preventDefault()});$(".button.dropdown > ul",this).addClass("no-hover");$doc.on("click.fndtn",".button.dropdown:not(.split), .button.dropdown.split span",function(e){var $el=$(this),button=$el.closest(".button.dropdown"),dropdown=$("> ul",button);if(e.target.nodeName!=="A"){e.preventDefault()}setTimeout(function(){closeDropdowns(config.dropdownAsToggle?dropdown:"");dropdown.toggleClass("show-dropdown");if(config.dropdownAsToggle){resetToggles(button);$el.toggleClass(config.activeClass)}},0)});$doc.on("click.fndtn","body, html",function(e){if(undefined==e.originalEvent){return}if(!$(e.originalEvent.target).is(".button.dropdown:not(.split), .button.dropdown.split span")){closeDropdowns();if(config.dropdownAsToggle){resetToggles()}}});var normalButtonHeight=$(".button.dropdown:not(.large):not(.small):not(.tiny):visible",this).outerHeight()-1,largeButtonHeight=$(".button.large.dropdown:visible",this).outerHeight()-1,smallButtonHeight=$(".button.small.dropdown:visible",this).outerHeight()-1,tinyButtonHeight=$(".button.tiny.dropdown:visible",this).outerHeight()-1;$(".button.dropdown:not(.large):not(.small):not(.tiny) > ul",this).css("top",normalButtonHeight);$(".button.dropdown.large > ul",this).css("top",largeButtonHeight);$(".button.dropdown.small > ul",this).css("top",smallButtonHeight);$(".button.dropdown.tiny > ul",this).css("top",tinyButtonHeight);$(".button.dropdown.up:not(.large):not(.small):not(.tiny) > ul",this).css("top","auto").css("bottom",normalButtonHeight-2);$(".button.dropdown.up.large > ul",this).css("top","auto").css("bottom",largeButtonHeight-2);$(".button.dropdown.up.small > ul",this).css("top","auto").css("bottom",smallButtonHeight-2);$(".button.dropdown.up.tiny > ul",this).css("top","auto").css("bottom",tinyButtonHeight-2)}})(jQuery,this);