export default function keyGeneration() {
  const letters =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()";
  let word = "";

  for (let i = 0; i < 12; i++) {
    word += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return word;
}
