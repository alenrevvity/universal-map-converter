function stringifyWithUnquotedKeys(obj) {
  const entries = Object.entries(obj).map(([key, value]) => {
    if (typeof value === "object" && !Array.isArray(value)) {
      return `${key}:${stringifyWithUnquotedKeys(value)}`;
    } else if (Array.isArray(value)) {
      const arrayContent = value
        .map((item) => stringifyWithUnquotedKeys(item))
        .join(",");
      return `${key}:[${arrayContent}]`;
    } else {
      return `${key}:${typeof value === "string" ? `'${value}'` : value}`;
    }
  });
  return `{${entries.join(",")}}`;
}

function generateMapping(areas) {
  let modifiedCoordinate;
  let modifiedStringMap = "";
  for (const ar of areas) {
    const v = ar.getCoordinate();
    if (v.format) {
      modifiedCoordinate = {
        key: v.key,
        boxes: [
          {
            x: +v.boxes[0].x,
            y: +v.boxes[0].y,
            w: +v.boxes[0].w,
            h: +v.boxes[0].h,
          },
        ],
        type: v.type,
        format: v.format,
      };
    } else {
      modifiedCoordinate = {
        key: v.key,
        boxes: [
          {
            x: +v.boxes[0].x,
            y: +v.boxes[0].y,
            w: +v.boxes[0].w,
            h: +v.boxes[0].h,
          },
        ],
        type: v.type,
      };
    }
    modifiedStringMap += stringifyWithUnquotedKeys(modifiedCoordinate)
      .concat(",")
      .concat("\n");
  }
  return top_part + modifiedStringMap + bottom_part;
}
