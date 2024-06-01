const data = { one: "uno", two: "DOS" };

const updates = { two: "dos", three: "tres" };

for (const key in updates) {
  data[key] = updates[key];
}

console.log(data);
// { one: 'uno', two: 'dos', three: 'tres' }