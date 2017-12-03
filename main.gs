function onOpen() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Formats');
      menu.addItem('szt.', 'formatSzt');
      menu.addSeparator();
      menu.addItem('pcs.', 'formatPcs');
      menu.addSeparator();
      menu.addItem('kg.', 'formatKg');
      menu.addSeparator();
      menu.addItem('L', 'formatLt');
      menu.addToUi();
}

function formatSzt() {
  var format = "#,##0\" szt.\";[Red]\"negative\";_(* \"\"??_);_(@_)";
  formatSelectedArea(format);
}

function formatPcs() {
  var format = "#,##0\" pcs.\";[Red]\"negative\";_(* \"\"??_);_(@_)";
  formatSelectedArea(format);
}

function formatKg() {
  var format = "#,##0\" kg.\";[Red]\"negative\";_(* \"\"??_);_(@_)";
  formatSelectedArea(format);
}

function formatLt() {
  var format = "#,##0\" L\";[Red]\"negative\";_(* \"\"??_);_(@_)";
  formatSelectedArea(format);
}

function formatSelectedArea(format) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var cell = sheet.getActiveRange()
  .setNumberFormat(format);
}
