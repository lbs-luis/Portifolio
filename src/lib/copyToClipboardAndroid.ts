export default function copyToClipboardAndroid(text: string): void {
  const tempInput = document.createElement("input");
  tempInput.setAttribute("type", "text");
  tempInput.setAttribute("value", text);
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  tempInput.style.top = "0";
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* Para dispositivos móveis */

  document.execCommand("copy");

  document.body.removeChild(tempInput);
  console.log('Texto copiado para a área de transferência com sucesso.');

}
