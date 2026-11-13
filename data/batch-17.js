window.BATCHES = window.BATCHES || [];
window.BATCHES[16] = {
  title: "Batch 17",
  questions: [
    {
      q: "A woman with type AB blood and a man with type A blood (homozygous) have children. What blood types are possible in their offspring?",
      options: ["A and B only", "A and AB only", "A, B, and AB", "A, B, AB, and O"],
      correct: 1,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The mother is I^A I^B and the father is I^A I^A. The offspring can be I^A I^A (type A) or I^A I^B (type AB). Type B and O are not possible."
    },
    {
      q: "A male with an X-linked dominant disorder (X^D Y) mates with a homozygous normal female (X^d X^d). What is the probability that their sons will be affected?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 0,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "Sons inherit Y from the father and X^d from the mother. They will all be X^d Y (normal). Therefore, the probability is 0%."
    },
    {
      q: "In a testcross of an individual with genotype AaBb (assuming independent assortment), what is the probability of producing an offspring with the genotype Aabb?",
      options: ["1/2", "1/4", "1/8", "1/16"],
      correct: 1,
      topic: "Lec05 - Testcross / Probability",
      explanation: "The cross is AaBb × aabb. The probability of Aa is 1/2, and the probability of bb is 1/2. The combined probability is 1/2 × 1/2 = 1/4."
    },
    {
      q: "Which of the following describes an organism that has two different alleles for a single gene?",
      options: ["Homozygous", "Heterozygous", "Hemizygous", "Polyploid"],
      correct: 1,
      topic: "Lec01 - Homozygous vs Heterozygous",
      explanation: "A heterozygous organism has two different alleles for a particular gene (e.g., Aa)."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.5. What is the frequency of the homozygous dominant genotype?",
      options: ["0.25", "0.50", "0.75", "0.10"],
      correct: 0,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q = 0.5, so p = 0.5. The frequency of homozygous dominant (p²) is (0.5)² = 0.25."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the homozygous recessive genotype is 0.16. What is the frequency of the dominant allele?",
      options: ["0.16", "0.40", "0.60", "0.84"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q² = 0.16, so q = 0.4. The dominant allele frequency p = 1 − 0.4 = 0.6."
    }
  ]
};