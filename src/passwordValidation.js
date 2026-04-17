export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  // The password is exactly 10 digits or characters;
  if (password.length !== 10) return false;
  // Must only contain Alphanumeric Characters
  if(/[^a-zA-Z0-9]/.test(password)) return false;
  // The password contain a mix of uppercase and lowercase characters;
  if(password == password.toLowerCase() || password == password.toUpperCase()){
    return false;
  }
  // No descending or ascending sequences of length >= 3
  let seq = [];
  for(let i = 0; i <= password.length; i++){
    const curr = password[i];
    if(curr === undefined || isNaN(Number(curr))){
      if(seq.length >= 3){
        const isAsc = seq.every((n, i)=> i === 0 || n >  seq[i - 1]);
        const isDesc = seq.every((n, i) => i === 0 || n < seq[i - 1]);
        if(isDesc || isAsc ) return false;
      }
      seq = [];
    }
    else{
      seq.push(Number(curr));
    }
  }
  // Must consist of at least 4 different digits/characters
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  
  return true;
}
