import liveServer from 'live-server';
import { resolve } from 'node:path';
import { argv } from 'node:process';
import parseArgv from './parseArgv.js';

/* directories -------------------------------------------------------------- */

const frontendDir = resolve('frontend');

const DIR = {
  public: resolve(frontendDir, 'public'),
  src: resolve(frontendDir, 'src'),
};

/* parameters --------------------------------------------------------------- */

let params = {
  host: 'localhost',
  port: 3000,
  root: DIR.public,
  file: 'index.html',  // entry point (file)
  mount: [['/scripts', DIR.src]],  // route
  open: false,
  wait: 200,
};

const customParams = parseArgv(argv);

// 이 구문의 정체는? 
// 전개 구문 (spread syntax)
// 객체 합성
// 이전에 객체 합성 할 때 자주 사용되었던 이전의 기술은? 
// Object.assign 클래스의 메서드(static method)
// Object.prototype.toString() 인스턴스 메서드
params = { ...params, ...customParams };

/* start server ------------------------------------------------------------- */

liveServer.start({ ...params, ...customParams });
