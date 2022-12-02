export const sortAsc = (data, col) => {
  return data.sort((a, b) => {
    if (!a[col]) {
      a[col] = [];
    }
    if (!b[col]) {
      b[col] = [];
    }
    let fa = a[col].toLowerCase();
    let fb = b[col].toLowerCase();

    if (fa < fb) {
      return 1;
    }
    if (fa > fb) {
      return -1;
    }
    return 0;
  });
};

export const sortDesc = (data, col) => {
  return data.sort((a, b) => {
    if (!a[col]) {
      a[col] = [];
    }
    if (!b[col]) {
      b[col] = [];
    }
    let fa = a[col].toLowerCase();
    let fb = b[col].toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
};

export const sortAscNum = (data, col) => {
  return data.sort((a, b) => {
    if (!a[col]) {
      a[col] = [];
    }
    if (!b[col]) {
      b[col] = [];
    }
    return a.addr.length - b.addr.length;
  });
};

export const sortDescNum = (data, col) => {
  return data.sort((a, b) => {
    if (!a[col]) {
      a[col] = [];
    }
    if (!b[col]) {
      b[col] = [];
    }
    return b.addr.length - a.addr.length;
  });
};
