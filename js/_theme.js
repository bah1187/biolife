/* =========================================================================
global variables
========================================================================== */
//watchers for major breakpoint changes - move from small screen to large screen layout/styles
//these match up to
(function () {
    var mq = {
        end: window.matchMedia("(max-width: 799px)")
    }

    //container ID/class names called by specific functions
    var selectors = {
        searchForm: '.search-form',
        advancedSearchForm: '.advanced-search-form',
        pageWrap: '#page',
        socialShare: '.social-share',
        socialShareMore: '.share-more'
    }

/* =========================================================================
search form panel
========================================================================== */
  //make search form expandable only on small screens
  function searchFormExpandable() {
      if (mq.end.matches) {
          $(selectors.searchForm).expandable('revive');
          $(selectors.advancedSearchForm).expandable('revive');
      }
      else {
          $(selectors.searchForm).expandable('kill');
          $(selectors.searchForm).children('div').removeAttr('style');
          $(selectors.advancedSearchForm).expandable('kill');
          $(selectors.advancedSearchForm).children('div').removeAttr('style');
      }
      return;
  }
  searchFormExpandable();
  mq.end.addListener(searchFormExpandable);


/* =========================================================================
social share open/close toggle
========================================================================== */
  $(selectors.socialShare)
      .on('click', selectors.socialShareMore, function () {
          var parent = $(this).parents(selectors.socialShare);
          parent.toggleClass('share-open');
          var moreText = $(this).attr('data-more-text');
          var lessText = $(this).attr('data-less-text');
          //on large screens, move the second list items into the first list, instead of sliding the list down
          if (parent.hasClass('share-open')) {
              $(this).text(lessText);
          }
          else {
              $(this).text(moreText);
          }
          return;
      });


/* =========================================================================
Search Toggle
========================================================================== */


  $('.search-toggle-button').click(function(){
   $('.search-form').slideToggle("fast");
  });



/* =========================================================================
Smooth Scroll
========================================================================== */

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


/* =========================================================================
Change saved job button text
========================================================================== */
  $("main").on("click", ".js-save-job-btn", function() {

    var saveButtonText = $(this).hasClass("saved") ? $(this).attr("data-unsave-job-text") : $(this).attr("data-save-job-text");

    $(this).text(saveButtonText);

});

/* =========================================================================
Change saved job button text
========================================================================== */



$('.js-saved-jobs-toggle').click(function(){
 $('.saved-jobs-list').slideToggle("fast");
});


})();  // End document ready
