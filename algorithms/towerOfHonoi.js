function towerOfHonoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return
  }
  towerOfHonoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
  towerOfHonoi(n - 1, usingRod, toRod, fromRod)
}

towerOfHonoi(3, "A", "C", "B");

//Big-O = O(2^n)