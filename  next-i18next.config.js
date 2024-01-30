// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'ko'], // 사용할 언어 목록
    defaultLocale: 'ko', // 기본 언어 설정
  },
  localePath: path.resolve('public/locales'), // 다국어 파일 경로
};
