function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  var menu = ui.createMenu('Formaty');
      menu.addItem('sztuki', 'formatSztuki');
      menu.addSeparator();
      menu.addItem('kilogramy', 'formatKilogramy');
      menu.addToUi();
}

function formatSztuki() {
//  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
  var format = "_(* #,##0\" szt\"_);_(* - #,##0\" szt\";_(* \"\"??_);_(@_)";
  formatSelectedArea(format);
}

function formatKilogramy() {
//  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
  var format = "_(* #,##0\" kg\"_);_(* - #,##0\" kg\";_(* \"\"??_);_(@_)";
  formatSelectedArea(format);
}

function formatSelectedArea(format) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var cell = sheet.getActiveRange()
  .setNumberFormat(format);
}
