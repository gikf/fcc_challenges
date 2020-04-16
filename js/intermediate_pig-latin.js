function translatePigLatin(str) {
  let vowels = "aeiou";
  let replacereg = / /;
  
    let str2 = ''
    str2 = str.replace(/(^[aeiou]+\w+)/i, '$&way')
            .replace(/(^[^aeiou]+)(\w*)/gi, '$2$1ay');
  
  /*if (str.match(/^[aeiou]/i)) {
     console.log("vow: ", str);
     str = str + "way";
  } else if (!str.match(/[aeiou]/i)) {
    console.log("nvow: ", str);
    str = str + "ay";
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[aeiou]/i)) {
        str = str.slice(i) + str.slice(0, i) + "ay";
        break;
      }
    }
  }*/
  console.log(str2)
  return str2;
}

translatePigLatin("california")
translatePigLatin("paragraphs")
translatePigLatin("glove")
translatePigLatin("schwartz");
translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("rhythm");