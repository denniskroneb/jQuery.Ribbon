$(document).ready(function() {
	$('#OfficeControls > .ribbon > .ribbon_contents > .tabs > .tab:not(.application)').each(function (index) {
		$(this).on('click', function () {
			jQueryRibbon.Actions.SelectTab($(this), index);
		});
	});
});

var jQueryRibbon = {
	Actions : {
		SelectTab: function(selectedTab, selectedTabIndex) {
			$('.tabs > .tab').each(function (index) {
                var currentItem = $(this);

                // If the current tab is active, remove the class.
                if (currentItem.hasClass('active')) {
                    currentItem.removeClass('active');
                }

                // If the current item does not have the inactive class, add the class.
                if (!currentItem.hasClass('inactive')) {
                    if (selectedTab != currentItem) {
                        currentItem.addClass('inactive');
                    }
                }
            });

            $(selectedTab).removeClass('inactive');
            $(selectedTab).addClass('active');

            $('.controls > .groupHolder').each(function (index) {
                var currentGroup = $(this);

                if (currentGroup.hasClass('active')) {
                    currentGroup.removeClass('active');
                }

                if (!currentGroup.hasClass('inactive')) {
                    if ('group_' + selectedTab.attr('id') != currentGroup.attr('id')) {
                        currentGroup.addClass('inactive');
                    }
                }

                $('#group_' + selectedTab.attr('id')).removeClass('inactive');
                $('#group_' + selectedTab.attr('id')).addClass('active');
            });
		}
	}
}
