import { ParsedUrlQuery } from 'querystring';


const MARKS = [
  'utm_medium',
  'utm_source',
  'utm_campaign',
  'utm_term',
  'utm_content',
];
const MAX_AGE = 3600 * 24 * 30; // 30 days


export default class Cookies {
  static checkAndSave(query: ParsedUrlQuery) {
    const marksMap = new Map();
    MARKS.filter((mark) => query[mark])
      .forEach((mark) => marksMap.set(mark, query[mark]));

    if (marksMap.size) {
      Cookies.clear(MARKS);
      Cookies.set(marksMap);
    } else {
      Cookies.update();
    }
  }

  private static clear(marks: string[]) {
    marks.forEach((mark) => {
      document.cookie = `${mark}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    });
  }

  private static get(name: string) {
    const matches = document.cookie.match(new RegExp(
      `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`,
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  private static set(marksMap: Map<string, string>) {
    marksMap.forEach((value, key) => {
      document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; max-age=${MAX_AGE};`;
    });
  }

  private static update() {
    const marksMap = new Map();
    MARKS.forEach((mark) => {
      const value = Cookies.get(mark);
      if (value) { marksMap.set(mark, value); }
    });
    Cookies.set(marksMap);
  }
}
