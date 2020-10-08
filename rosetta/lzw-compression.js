function LZW (compressData, input) {
  function compress(input) {
    const dictionary = {};
    let dictionary_size = 256
    for (let i = 0; i < dictionary_size; i++) {
      const char = String.fromCharCode(i);
      dictionary[char] = i;
    }

    const compressed = [];
    let p = input[0];
    for (let i = 1; i <= input.length; i++) {
      let c = input[i];
      let pc = p + c
      if (dictionary.hasOwnProperty(pc)){
        p = pc;
      } else {
        compressed.push(dictionary[p]);
        dictionary[pc] = dictionary_size++;
        p = c
      }
    }
    return compressed;
  }

  function uncompress(input) {
    const dictionary = {};
    let dictionary_size = 256;
    for (let i = 0; i < dictionary_size; i++) {
      dictionary[i] = String.fromCharCode(i);
    }

    let p = String.fromCharCode(input[0])
    const uncompressed = [p];
    for (let i = 1; i < input.length; i++) {
      let c = input[i];
      let element;
      if (dictionary[c]) {
        element = dictionary[c];
      } else {
        if (c == dictionary_size) {
          element = p + p.charAt(0);
        } else {
          return;
        }
      }

      uncompressed.push(element)
      dictionary[dictionary_size++] = p + element.charAt(0);
      p = element;
    }

    return uncompressed.join('');
  }
  
  return compressData ? compress(input) : uncompress(input);
}
