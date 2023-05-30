
// 客户端设置cookie
export function setCookie(key,value,day){
  let d = new Date();
  d.setTime(d.getTime()+day*24*60*60*1000);
  document.cookie = `${key}=${value};expires=${(d as any).toGMTString()};path=/`;
}

// 客户端获取存储的cookie
export function getCookie(key){
  let allCookie = document.cookie;
  let allCookieArr = allCookie.split(';');
  for (let i = 0; i < allCookieArr.length; i++) {
    if(allCookieArr[i].includes(key)){
      return allCookieArr[i].split('=')[1];
    }
  }
  return null;
}
