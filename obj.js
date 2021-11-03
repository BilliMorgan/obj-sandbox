const getPadding = (type) => {
  return {
    ["none"]: 0,
    ["small"]: 16,
    ["medium"]: 32,
    ["large"]: 64,
  }[type]
}

console.log(getPadding('large'))