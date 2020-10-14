function SHA256(input) {
    // https://en.wikipedia.org/wiki/SHA-2
    // https://web.archive.org/web/20161126003357/http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf

    function getHexFromMessage(message) {
        let binary = '';
        for (let i = 0; i < message.length; i++) {
            const charCode = message[i].charCodeAt(0);
            binary += charCode.toString(2).padStart(8, '0');
        }
        
        const messageLength = binary.length;
        binary += '1';
        const blocks = Math.floor((binary.length + 64) / 512) + 1
        const binaryPadded = binary.padEnd((blocks * 512) - 64, '0')
        const binaryLengthPadded = messageLength.toString(2).padStart(64, '0')
        binary = binaryPadded + binaryLengthPadded;
        
        const hexes = [];
        for (let i = 0; i * 8 < binary.length; i++) {
            const curHex = parseInt(binary.slice(i * 8, i * 8 + 8), 2).toString(16).padStart(2, '0');
            hexes.push(curHex);
        }
        return hexes.join('');
    }

    function splitTo(message, n){
        const split = [];
        for (let i = 0; i * n < message.length; i++) {
            split.push(message.slice(i * n, i * n + n));
        }
        return split;
    }

    function rotateRight(x, n) {
        return (x >>> n | x << (32 - n));
    }

    function shiftRight(x, n) {
        return x >>> n;
    }

    function xy(x, y) {
        return ((x + y) >>> 0);
    }

    const H = [
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
        0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
        ];
    const k = [
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
        0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
        0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
        0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
        0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
        0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
        0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
        0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ];

    const hex = getHexFromMessage(input);
    const blocks = splitTo(hex, 128);
    for (let i = 0; i < blocks.length; i++) {
        const w = splitTo(blocks[i], 8).map((val) => parseInt(val, 16));
        for (let t = 16; t < 64; t++) {
            const s0 = rotateRight(w[t - 15], 7) ^ rotateRight(w[t - 15], 18) ^ shiftRight(w[t - 15], 3);
            const s1 = rotateRight(w[t - 2], 17) ^ rotateRight(w[t - 2], 19) ^ shiftRight(w[t - 2], 10);
            w[t] = xy(xy(w[t - 16], s0), xy(w[t - 7], s1));
        }
        
        let [a, b, c, d, e, f, g, h] = H;
        for (let t = 0; t < 64; t++) {
            const S1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
            const ch = (e & f) ^ ((~e) & g);
            const temp1 = xy(
                 xy(xy(h, S1), ch), xy(k[t], w[t])
            );
            const S0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
            const maj = (a & b) ^ (a & c) ^ (b & c);
            const temp2 = xy(S0, maj);
            
            h = g;
            g = f;
            f = e;
            e = xy(d, temp1);
            d = c
            c = b;
            b = a
            a = xy(temp1, temp2);
        }
        H[0] = xy(H[0], a)
        H[1] = xy(H[1], b)
        H[2] = xy(H[2], c)
        H[3] = xy(H[3], d)
        H[4] = xy(H[4], e)
        H[5] = xy(H[5], f)
        H[6] = xy(H[6], g)
        H[7] = xy(H[7], h)
    }

    return H.map((val) => val.toString(16)
                             .padStart(8, '0')).join('');
}
