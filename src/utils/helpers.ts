export const calculateRemainingTime = (expirationTime: number) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjExpirationTime - currentTime;

  return remainingTime;
};

export const imageFullUrl = (imageUrl: string, size = 1000) => {
  const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  return `${baseUrl}${imageUrl}?size=${size}`;
}

export const readablePastPeriod = (time: number | string, max_units = 2) => {
  function mdiv(dividend: number, divisor: number) {
    return [Math.floor(dividend / divisor), dividend % divisor];
  }
  let ms = new Date(time).getTime();
  if (typeof ms === 'string') {
    ms = new Date(time).getTime();
  }
  ms = Date.now() - ms;

  let [yy, yr] = mdiv(ms, 3.154e10);
  let [mm, mr] = mdiv(yr, 2.628e9);
  let [dd, dr] = mdiv(mr, 8.64e7);
  let [hh, hr] = mdiv(dr, 3.6e6);
  let [tt, ss] = mdiv(hr, 6e4);

  var ymdht = ['year', 'month', 'day', 'hour', 'minute'];
  let res: string[] = [];
  [yy, mm, dd, hh, tt].forEach((tis, ii) => {
    if (res.length === max_units) { return };
    if (tis !== 0) {
      res.push(tis === 1 ? `${tis} ${ymdht[ii]}` : `${tis} ${ymdht[ii]}s`);
    }
  });
  return res.length === 0 ? '' : res.join(' and ') + ' ago';
}