$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Top Tier', 'Middle Tier', 'Bottom Tier'],
    scrollingSpeed: 600,
  });
});