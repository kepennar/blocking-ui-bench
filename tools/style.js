import path from 'path';
import fs from 'fs';
import sass from 'node-sass';
import CleanCSS from 'clean-css';

import task from './lib/task';
import watch from './lib/watch';

const styleDir = path.join(__dirname, '../src');
const outDir = path.join(__dirname, '../build');

const includePaths = [path.join(__dirname, '../node_modules/bulma')];

export default task('style', async () => {

  const stylePath = path.join(styleDir, 'main.scss');

  if (global.WATCH) {
    const watcher = await watch(stylePath);
    watcher.on('changed', async (file) => {
      renderSass(stylePath);
    });
  }

  return renderSass(stylePath);
});

function renderSass(stylePath) {
  return new Promise((resolve, reject) => {
    sass.render({
      file: path.join(styleDir, 'main.scss'),
      includePaths: includePaths,
       // Options
    }, (err, result) => {
      if (err) {
        return reject(err);
      }
      let css;
      if (process.argv.includes('release')) {
        css = new CleanCSS().minify(result.css).styles;
      } else {
        css = result.css;
      }
      fs.writeFile(path.join(outDir, 'main.css'), css, function(err) {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  });
}

