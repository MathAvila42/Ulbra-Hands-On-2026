const SHEET_ID = "1AGPGSyqfsWgk6nDcHiuc2eRwlQ1dGv-ypq24T9PSWM8";
const SHEET_NAME = "Inscrições";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["Data/Hora", "Nome", "E-mail", "WhatsApp", "Modalidade", "Curso", "Polo"]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date().toLocaleString("pt-BR"),
      data.nome,
      data.email,
      data.whatsapp,
      data.modalidade,
      data.curso,
      data.polo,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
