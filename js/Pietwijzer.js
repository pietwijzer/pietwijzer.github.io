/**
 * PIETWIJZER.js
 * 't Is geen meesterwerk, maar 't werkt
 */
(function($, window, document)
{
	'use strict'; //strictpiet

	window.Pietwijzer = {};

	// ANSWER waarden:
	// FALSE: n.v.t.
	// (int) 1 PRO PIET
	// (int) 2 TEGEN PIET
	// (int) 3 TWIJFEL
	// (int) 4 IDIOOT
	var stepContainers = [
		// Start
		{
			$el: $('#containerStart'),
			init: function()
			{
				this.$el.find('button').on('click.pietwijzer', function()
				{
					Pietwijzer.next();
				});
			},
			reset: function()
			{
				this.$el.find('button').off('click').removeClass('active');
			},
			answer: false
		},
		// Q1
		{
			$el: $('#containerQ1'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans.ansA').on('click.pietwijzer', function(event)
				{
					_this.answer = 1;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansB').on('click.pietwijzer', function(event)
				{
					_this.answer = 2;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansC').on('click.pietwijzer', function(event)
				{
					_this.answer = 4;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansD').on('click.pietwijzer', function(event)
				{
					_this.answer = 3;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				var $next = this.$el.find('button.next');

				this.$el.find('a, button').off('click').removeClass('active');
				$next.hide();
			},
			answer: false
		},
		// Q2
		{
			$el: $('#containerQ2'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans.ansA').on('click.pietwijzer', function(event)
				{
					_this.answer = 3;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansB').on('click.pietwijzer', function(event)
				{
					_this.answer = 4;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansC').on('click.pietwijzer', function(event)
				{
					_this.answer = 1;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansD').on('click.pietwijzer', function(event)
				{
					_this.answer = 2;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				var $next = this.$el.find('button.next');

				this.$el.find('a, button').off('click').removeClass('active');
				$next.hide();
			},
			answer: false
		},
		// Q3
		{
			$el: $('#containerQ3'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans.ansA').on('click.pietwijzer', function(event)
				{
					_this.answer = 1;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansB').on('click.pietwijzer', function(event)
				{
					_this.answer = 3;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansC').on('click.pietwijzer', function(event)
				{
					_this.answer = 4;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansD').on('click.pietwijzer', function(event)
				{
					_this.answer = 2;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				var $next = this.$el.find('button.next');

				this.$el.find('a, button').off('click').removeClass('active');
				$next.hide();
			},
			answer: false
		},
		// Q4
		{
			$el: $('#containerQ4'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				//colorpicker stuff

				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				this.$el.find('a, button').off('click').removeClass('active');
			},
			answer: false
		},
		// Q5
		{
			$el: $('#containerQ5'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans.ansA').on('click.pietwijzer', function(event)
				{
					_this.answer = 2;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansB').on('click.pietwijzer', function(event)
				{
					_this.answer = 3;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansC').on('click.pietwijzer', function(event)
				{
					_this.answer = 4;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansD').on('click.pietwijzer', function(event)
				{
					_this.answer = 1;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				var $next = this.$el.find('button.next');

				this.$el.find('a, button').off('click').removeClass('active');
				$next.hide();
			},
			answer: false
		},
		// Q6
		{
			$el: $('#containerQ6'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans.ansA').on('click.pietwijzer', function(event)
				{
					_this.answer = 4;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansB').on('click.pietwijzer', function(event)
				{
					_this.answer = 1;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansC').on('click.pietwijzer', function(event)
				{
					_this.answer = 2;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansD').on('click.pietwijzer', function(event)
				{
					_this.answer = 3;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				var $next = this.$el.find('button.next');

				this.$el.find('a, button').off('click').removeClass('active');
				$next.hide();
			},
			answer: false
		},
		// Q7
		{
			$el: $('#containerQ7'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans.ansA').on('click.pietwijzer', function(event)
				{
					_this.answer = 4;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansB').on('click.pietwijzer', function(event)
				{
					_this.answer = 3;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansC').on('click.pietwijzer', function(event)
				{
					_this.answer = 2;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansD').on('click.pietwijzer', function(event)
				{
					_this.answer = 1;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				var $next = this.$el.find('button.next');

				this.$el.find('a, button').off('click').removeClass('active');
				$next.hide();
			},
			answer: false
		},
		// Q8
		{
			$el: $('#containerQ8'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans.ansA').on('click.pietwijzer', function(event)
				{
					_this.answer = 1;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansB').on('click.pietwijzer', function(event)
				{
					_this.answer = 2;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansC').on('click.pietwijzer', function(event)
				{
					_this.answer = 3;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansD').one('click.pietwijzer', function(event)
				{
					alert('Ik stel hier de vragen!');
					var $this = $(this);
					$this.find('.list-group-item-heading').text('D. Sorry...');
					$this.on('click.pietwijzer', function(event)
					{
						_this.answer = 4;
						_this.$el.find('a').removeClass('active');
						$(this).addClass('active');
						$next.fadeIn();
						event.preventDefault();
					});
					event.preventDefault();
				});
				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans.ansD .list-group-item-heading').text('D. Feminisme en racisme in één plaatje. Wat is er nou erger?');
				this.$el.find('a, button').off('click').removeClass('active');
				$next.hide();
			},
			answer: false
		},
		// Q9
		{
			$el: $('#containerQ9'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans').on('click.pietwijzer', function(event)
				{
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				var $next = this.$el.find('button.next');

				this.$el.find('a, button').off('click').removeClass('active');
				$next.hide();
			},
			answer: false
		},
		// Q10
		{
			$el: $('#containerQ10'),
			init: function()
			{
				var _this = this;
				var $next = this.$el.find('button.next');

				this.$el.find('a.ans.ansA').on('click.pietwijzer', function(event)
				{
					_this.answer = 1;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansB').on('click.pietwijzer', function(event)
				{
					_this.answer = 2;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansC').on('click.pietwijzer', function(event)
				{
					_this.answer = 4;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				this.$el.find('a.ans.ansD').on('click.pietwijzer', function(event)
				{
					_this.answer = 3;
					_this.$el.find('a').removeClass('active');
					$(this).addClass('active');
					$next.fadeIn();
					event.preventDefault();
				});
				$next.on('click.pietwijzer', function(event)
				{
					Pietwijzer.next();
				});
			},
			reset: function() {
				var $next = this.$el.find('button.next');

				this.$el.find('a, button').off('click').removeClass('active');
				$next.hide();
			},
			answer: false
		},
		// Calculating
		{
			$el: $('#containerCalculating'),
			init: function()
			{
				var $ticker = this.$el.find('.result-ticker');

				$ticker.text('Vuur warm maken...');
				setTimeout(function()
				{
		   	   		$ticker.text('Peper toevoegen...');
				}, 2000);
				setTimeout(function()
				{
		   	    	$ticker.text('Noten toevoegen...');
				}, 2600);
				setTimeout(function()
				{
		   	   		$ticker.text('Goedkeuring van Sinterklaas vragen...');
				}, 3200);
				setTimeout(function()
				{
		   	   		$ticker.text('Adviespiet om advies vragen...');
				}, 4500);
				setTimeout(function()
				{
		   	   		Pietwijzer.next();
				}, 5500);
			},
			reset: function() {},
			answer: false
		},
		// Answer
		{
			$el: $('#containerAnswer'),
			init: function()
			{
				var results = getResults();
				var resultN = 4;

				// var result1 = results[1];
				// var result2 = results[2];
				// var result3 = results[3];
				// var result4 = results[4];

				this.$el.find('.result').hide();
				this.$el.find('.result' + resultN).show();

				this.$el.find('button').on('click.pietwijzer', function()
				{
					Pietwijzer.reset();
				});
			},
			reset: function() {
				this.$el.find('button').off('click')
				stepContainers[0].$el.find('.repeat-notice').show();
			},
			answer: false
		},
	];
	var currentStep = 0;
	var initd = false;

	var executeStep = function(step, prev)
	{
		if ("undefined" !== typeof step)
		{
			var show = function(step, prev)
			{
				if ("object" === typeof prev)
				{
					prev.$el.slideUp(function()
					{
						prev.reset.call(prev);
						step.$el.delay(100).fadeIn(200);
					});
				}
				else
				{
					step.$el.show();
				}
			};
			show(step, prev);
			step.init.call(step);
		}
	}

	var getResults = function()
	{
		var result = {};
		$.each(stepContainers, function(i, container)
		{
			if ("number" === typeof container.answer)
			{
				if ("undefined" === typeof result[container.answer])
				{
					result[container.answer] = 1;
					return;
				}
				result[container.answer] = result[container.answer] + 1;
			}
		});
		return result;
	}

	Pietwijzer.init = function() 
	{
		if (initd)
		{
			return false;
		}

		executeStep(stepContainers[currentStep], false);
		initd = true;
	}

	Pietwijzer.next = function()
	{
		console.log("Tussenstand:", getResults());
		var prev = stepContainers[currentStep];
		currentStep++;
		executeStep(stepContainers[currentStep], prev);
	}

	Pietwijzer.reset = function()
	{
		var prev = stepContainers[currentStep];
		$.each(stepContainers, function(i, container)
		{
			container.reset();
			container.answer = false;
		});
		currentStep = 0;
		executeStep(stepContainers[currentStep], prev);
	}

	Pietwijzer.init();
})(jQuery, window, document);