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

  const validPassword = [...password];

  if (validPassword.length !== 10) return false;
  if(!/[a-zA-Z0-9]/.test(validPassword)) return false;
  if(['@', '/', '#'].some(char => validPassword.includes(char))){
    return false;
  }
  if(password == password.toLowerCase() || password == password.toUpperCase()){
    return false;
  }

  for(let i = 1; i < validPassword.length - 1; i++ ){
    const currNum = Number(validPassword[i])
    const prevNum = Number(validPassword[i-1])
    
    if(isNaN(currNum) || isNaN(prevNum)){
      continue;
    }
    
    const res = Math.abs(currNum - prevNum)
    if(res === 1){
      return false;
    }
  }

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}
