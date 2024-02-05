function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function categorize(e) {
  let ss_id = "1qVCmBJeopD5YH5zFublwtRosbTjZyoJDrul5np2zgto";

  console.log(e.values)
  console.log(e.namedValues)

  let name = e.namedValues["名前"];
  let size = e.namedValues["T シャツのサイズ"];

  if(!name || !size){
    console.log(Error);
  }
  // 振り分けるシートの名前
  var s_sheet = SpreadsheetApp.openById(ss_id).getSheetByName('Sサイズ');
  var m_sheet = SpreadsheetApp.openById(ss_id).getSheetByName('Mサイズ');
  var l_sheet = SpreadsheetApp.openById(ss_id).getSheetByName('Lサイズ');

  //それぞれのシートの最終行を取得
  var s_sheet_last = s_sheet.getLastRow();
  var m_sheet_last = m_sheet.getLastRow();
  var l_sheet_last = l_sheet.getLastRow();

  console.log('サイズ')
  console.log(size)

  if(size == "S"){
    s_sheet.getRange(s_sheet_last + 1, 1).setValue(name);
    s_sheet.getRange(s_sheet_last + 1, 2).setValue(size);
  }else if(size == "M"){
    m_sheet.getRange(m_sheet_last + 1, 1).setValue(name);
    m_sheet.getRange(m_sheet_last + 1, 2).setValue(size);
  }else if(size == "L"){
    l_sheet.getRange(l_sheet_last + 1, 1).setValue(name);
    l_sheet.getRange(l_sheet_last + 1, 2).setValue(size);
  }
}
