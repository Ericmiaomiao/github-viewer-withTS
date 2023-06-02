
// 客户端设置cookie
export function setCookie(key:string,value:string,day:number){
  let d = new Date();
  d.setTime(d.getTime()+day*24*60*60*1000);
  document.cookie = `${key}=${value};expires=${(d as any).toGMTString()};path=/`;
}

// 客户端获取存储的cookie
export function getCookie(key:string){
  let allCookie = document.cookie;
  let allCookieArr = allCookie.split(';');
  for (let i = 0; i < allCookieArr.length; i++) {
    if(allCookieArr[i].includes(key)){
      return allCookieArr[i].split('=')[1];
    }else{
      return null;
    }
  }
  return null;
}
