// Update and make a copy of all nested objects
export default function updateStateObjectDeeply(obj, prop, newValue) {
  const config = { updated: false, target: prop, value: newValue };
  const nextObj = loopTroughObject.bind(config, obj)();

  return nextObj;
}

function loopTroughObject(obj) {
  const objCopy = { ...obj };

  for (const [key, value] of Object.entries(objCopy)) {
    if (this.updated && typeof value !== 'object') continue;

    if (key === this.target) {
      objCopy[key] = this.value;
      this.updated = true;
      continue;
    }

    if (Array.isArray(value)) {
      objCopy[key] = [...value];
      continue;
    }

    if (typeof value === 'object') {
      objCopy[key] = loopTroughObject.bind(this, value)();
    }
  }

  return objCopy;
}
