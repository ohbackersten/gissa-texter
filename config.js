// Inställningar för "Gissa AI".
// ENDPOINT = adressen till din Google Apps Script-webbapp (se README.md).
// Lämnas den tom sparas svaren bara lokalt i webbläsaren (och går att ladda ner).
window.CONFIG = {
  ENDPOINT: "https://script.google.com/macros/s/AKfycbx-d_kifB9Fub9AS1WBvxry45Px3Bng4I9hpWYevdRaq9Y8Kj57d_w740sMqohaav6B/exec",
  ROUNDS: 10,          // antal par per omgång
  N_CONTROL: 5,        // antal par med AI-text skriven av Claude
  N_FLAGGED: 5,        // antal par med avsnitt som Pangram markerat som AI
  MAX_WORD_DIFF: 12    // högsta skillnad i ordantal inom ett par (försöker hålla paren lika långa)
};
