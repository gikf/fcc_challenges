function telephoneCheck(str) {
  // Good luck!
  let regex  = /^(1\s?)?[(][\d]{3}[)]\s*[\d]{3}[-][\d]{4}$/; //(555)555-5555 (555) 555-5555
  let regex2 = /^(1\s?)?[\d]{3}[-][\d]{3}[-][\d]{4}$/; //555-555-5555
  let regex3 = /^(1\s?)?[\d]{3}\s*[\d]{3}\s*[\d]{4}$/; //555 555 5555
  if (!regex.test(str) && !regex2.test(str) && !regex3.test(str)) {
    return false;
  }
  return true;
}

telephoneCheck("555-555-5555");