/// <reference path="/js/j.js" /> 
/// <reference path="/js/jaydata.js" />
/// <reference path="/js/jaydata-vsdoc.js" /> 
/// <reference path="/js/netflix.js" />
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            
            var titlesListGrouped = new WinJS.Binding.List().createGrouped(
                function (i) { return i.title.charAt(0).toUpperCase(); },
                function (i) { return { firstLetter: i.title.charAt(0).toUpperCase() }; }
            );

            var list = q("#list").winControl;
            list.itemDataSource = titlesListGrouped.dataSource;
            list.itemTemplate = q("#template");
            list.groupDataSource = titlesListGrouped.groups.dataSource;
            list.groupHeaderTemplate = q("#headertemplate");

            Netflix.context.Titles
            .map(function(item) {
                return {
                    title: item.ShortName,
                    BoxArt: item.BoxArt
                };
            })
            .take(200)
            .forEach(function(item) {
                titlesListGrouped.push({
                    title: item.title,
                    imageUrl: item.BoxArt.LargeUrl
                });
            })
        }
    });
})();
