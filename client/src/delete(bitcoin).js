// 4,294,967,296 (2^32)
//   536,870,912 (2^29)
//   134,217,728 (2^27)
//    33,554,432 (2^25)
//       262,144 (2^18)
//        65,536 (2^16)
//        32,768 (2^15)
//        16,384 (2^14)
//         8,192 (2^13)
//         4,096 (2^12)
//           512 (2^9)
// --------------------
//

(function () {
  const rewardValue = (oneBitsArray, halving) => {
    const afterHalving = oneBitsArray.map((bit) => bit - halving);
    const satoshiReward = afterHalving.reduce(
      (a, b) => (b >= 0 ? a + Math.pow(2, b) : a),
      0
    );
    const bitcoinReward = satoshiReward / 100000000;
    console.log({ halving, block: halving * 210000, bitcoinReward });

    return reward;
  };

  const oneBits = [32, 29, 27, 25, 18, 16, 15, 14, 13, 12, 9];

  for (let i = 0; i <= 34; i++) {
    rewardValue(oneBits, i);
  }
})();

// 0001 0010 1010 0000 0101 1111 0010 0000 0000
// 000100101010000001011111001000000000
// 000010010101000000101111100100000000
// 000x 00x0 x0x0 0000 0x0x xxxx 00x0 0000 0000
