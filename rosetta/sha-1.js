function SHA1(input) {
    // https://rosettacode.org/wiki/SHA-1/FIPS-180-1
    function getK(t) {
        return K[Math.floor(t / 20)];
    }

    function getOperation(t) {
        const operations = [
            (B, C, D) => ((B & C) | ((~B) & D)),
            (B, C, D) => (B ^ C ^ D),
            (B, C, D) => ((B & C) | (B & D) | (C & D)),
            (B, C, D) => (B ^ C ^ D),
        ]
        return operations[Math.floor(t / 20)];
    }

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

    function circularShift(X, n) {
        return (X << n) | (X >>> (32 - n));
    }

    function xy(x, y) {
        return ((x + y) >>> 0);
    }

    function f(t, B, C, D) {
        return getOperation(t)(B, C, D);
    }

    const K = [
        0x5A827999,
        0x6ED9EBA1,
        0x8F1BBCDC,
        0xCA62C1D6,
    ]
    const H = [
        0x67452301,
        0xEFCDAB89,
        0x98BADCFE,
        0x10325476,
        0xC3D2E1F0
    ]

    const hex = getHexFromMessage(input);
    const blocks = splitTo(hex, 128);

    for (let i = 0; i < blocks.length; i++) {
        const W = splitTo(blocks[i], 8).map((val) => parseInt(val, 16));
        for (let t = 16; t < 80; t++) {
            W[t] = circularShift(
                (W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16]),
                1
            );
        }

        let [A, B, C, D, E] = H;
        for (let t = 0; t < 80; t++) {
            const temp = parseInt(xy
                (xy(circularShift(A, 5), f(t, B, C, D)), xy(xy(E, W[t]), getK(t))).toString(16).padStart(8, '0'), 16);
            E = D;
            D = C;
            C = circularShift(B, 30);
            B = A;
            A = temp;
        }
        H[0] = xy(H[0], A)
        H[1] = xy(H[1], B)
        H[2] = xy(H[2], C)
        H[3] = xy(H[3], D)
        H[4] = xy(H[4], E)
    }
    return H.map((val) => val.toString(16)
                             .padStart(8, '0')).join('');
}
