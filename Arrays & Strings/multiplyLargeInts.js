/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

const multiplyLargeInts = (num1, num2) => {
  let len1 = num1.length;
  let len2 = num2.length;
  let productArray = [];

  for (let i =)







  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 2; j >= 0; j--) {
      let mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
      let p1 = i + j;
      let p2 = i + j + 1;
      let sum = mul + productArray[p2];

      productArray[p1] += sum /10;
      productArray[p2] = sum % 10;
    }
  }
}

public String multiply(String num1, String num2) {
    int m = num1.length(), n = num2.length();
    int[] pos = new int[m + n];

    for(int i = m - 1; i >= 0; i--) {
        for(int j = n - 1; j >= 0; j--) {
            int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
            int p1 = i + j, p2 = i + j + 1;
            int sum = mul + pos[p2];

            pos[p1] += sum / 10;
            pos[p2] = (sum) % 10;
        }
    }

    StringBuilder sb = new StringBuilder();
    for(int p : pos) if(!(sb.length() == 0 && p == 0)) sb.append(p);
    return sb.length() == 0 ? "0" : sb.toString();
}
