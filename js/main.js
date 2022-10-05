'use strict';

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  const words = [
    'main',
    'section',
    'function',
    'document',
    'Math',
    'length',
    'textContent',
  ];
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');
  const comment = document.getElementById('comment');

  target.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        if (elapsedTime < 10) {
          comment.textContent = 'すごい！あなたはタイピング名人です！';
        } else if (10 <= elapsedTime && elapsedTime < 15) {
          comment.textContent = 'もう少し頑張ろう！';
        } else {
          comment.textContent = '残念！まだまだ練習が必要なようです...。';
        }
        return;
      }

      setWord();
    }
  });
}
