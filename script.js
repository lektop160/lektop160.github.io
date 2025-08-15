document.addEventListener('DOMContentLoaded', () => {
  // Часы
  const clock = document.getElementById("clock");
  if (clock) {
    setInterval(() => {
      clock.textContent = new Date().toLocaleTimeString();
    }, 1000);
  }

  // Кнопка #lektop (если есть)
  const lektop = document.querySelector('#lektop');
  if (lektop) {
    lektop.addEventListener('click', () => {
      window.open('https://lektop158.github.io', '_blank');
    });
  }

  // Элементы шифратора
  const input = document.getElementById("input-text");
  const encryptButton = document.getElementById("encrypt-button");
  const decryptButton = document.getElementById("decrypt-button");
  const output = document.getElementById("output");

  // Словарь (как у вас)
  const keymap = {
    "й": "1-1", "ц": "2-1", "у": "3-1", "к": "4-1", "е": "5-1", "н": "6-1",
    "г": "7-1", "ш": "8-1", "щ": "9-1", "з": "10-1", "х": "11-1", "ъ": "12-1",
    "ф": "1-2", "ы": "2-2", "в": "3-2", "а": "4-2", "п": "5-2", "р": "6-2",
    "о": "7-2", "л": "8-2", "д": "9-2", "ж": "10-2", "э": "11-2",
    "я": "1-3", "ч": "2-3", "с": "3-3", "м": "4-3", "и": "5-3", "т": "6-3",
    "ь": "7-3", "б": "8-3", "ю": "9-3", "ё": "0-0"
  };

  
// let keymap_en = { 
//   "q": "1-1", "w": "2-1", "e": "3-1", "r": "4-1", "t": "5-1", "y": "6-1",
//   "u": "7-1", "i": "8-1", "o": "9-1",
//   "a": "1-2", "s": "2-2", "d": "3-2", "f": "4-2", "g": "5-2", "h": "6-2",
//   "j": "7-2", "k": "8-2", "l": "9-2",
//   "z": "1-3", "x": "2-3", "c": "3-3", "v": "4-3", "b": "5-3", "n": "6-3",
//   "m": "7-3"
// };

  // Обратный словарь
  const reverse_keymap = {};
  for (const [letter, code] of Object.entries(keymap)) {
    reverse_keymap[code] = letter;
  }

  // Шифрование: буквы -> код, пробел -> пустой токен (даёт ".."), остальное игнорируем как в оригинале
  function encrypt(plaintext, keymap) {
    const tokens = [];
    for (const ch of plaintext.toLowerCase()) {
      if (ch === ' ') tokens.push('');            // пробел -> ".."
      else if (keymap[ch]) tokens.push(keymap[ch]);
      // иначе игнор (как было у вас)
    }
    return tokens.join('.');
  }

  // Дешифрование: парсим по '.', пустой токен -> пробел
  function decrypt(ciphertext, reverse_keymap) {
    return ciphertext
      .split('.')
      .map(tok => tok === '' ? ' ' : (reverse_keymap[tok] || ''))
      .join('');
  }

  // Навешиваем обработчики только если все элементы на месте
  if (input && output && encryptButton) {
    encryptButton.addEventListener("click", () => {
      const plaintext = input.value || "";
      const ciphertext = encrypt(plaintext, keymap);
      output.innerText = "Зашифрованное сообщение: " + ciphertext;
    });
  }

  if (input && output && decryptButton) {
    decryptButton.addEventListener("click", () => {
      const ciphertext = input.value || "";
      const plaintext = decrypt(ciphertext, reverse_keymap);
      output.innerText = "Дешифрованное сообщение: " + plaintext;
    });
  }
});


// Ваш alert-редирект
function AlertMsg() {
  const zombig = confirm("You are getting redirected. Click OK to continue.");
  if (zombig) window.location = "http://lektop159.github.io";
}