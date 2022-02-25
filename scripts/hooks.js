Hooks.on("renderJournalSheet", (app, html, options) => {
    const editableElements = html.find(".window-content .editable");
    // only if the class has not been included
    if (!editableElements.hasClass("coriolis-core")) {
        editableElements.addClass("coriolis-core");
        editableElements.find(".editor-content").wrap("<div class=\"entryBGVTT\"><div class=\"entryContainer\"><div class=\"entryContent\"></div></div></div>");
    }
});
