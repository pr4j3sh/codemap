async function ignore(url) {
  const res = await fetch(url);
  const data = await res.body();
  console.log(data);
}

module.exports = ignore;
