import Painter from './Painter';

(() => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const form = document.getElementById('options');
  const painter = new Painter(ctx);

  const options = form.getElementsByTagName('input');
  [...options].forEach(item => {
    item.type === 'button'
    ? item.addEventListener('click', e => {
        switch (e.target.name) {
          case 'clear':
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          break;
        }
      })
    : item.addEventListener('change', e => {
        switch (e.target.name) {
         case 'size':
           painter.radius = e.target.value;
           break;
         case 'color':
           painter.color = e.target.value;
           break;
         case 'canvas-width':
           canvas.width = e.target.value;
           break;
         case 'canvas-height':
           canvas.height = e.target.value;
           break;
        }
      })
  })

  canvas.addEventListener('mousedown', e => {
    painter.start();
    draw(e);
  })

  canvas.addEventListener('mouseup', e => {
    painter.stop();
  })

  canvas.addEventListener('mousemove', e => {
    draw(e);
  })

  const draw = e => {
    let x = e.pageX;
    let y = e.pageY;

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    painter.painting && painter.line(x, y)
  }

})();
