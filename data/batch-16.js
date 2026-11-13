window.BATCHES = window.BATCHES || [];
window.BATCHES[15] = {
  title: "Batch 16",
  questions: [
    {
      q: "A cross is made between two heterozygous black guinea pigs (Bb × Bb). What is the probability that a randomly selected black offspring is heterozygous?",
      options: ["1/4", "1/2", "2/3", "3/4"],
      correct: 2,
      topic: "Lec05 - Conditional Probability / Monohybrid Crosses",
      explanation: "The Bb × Bb cross yields 1 BB : 2 Bb : 1 bb. Since we know the offspring is black, we eliminate the bb offspring. Out of the 3 black offspring, 2 are heterozygous (Bb). Thus, the probability is 2/3."
    },
    {
      q: "A woman with blood type O has a child with blood type AB. Which of the following statements is true?",
      options: [
        "The father must have blood type AB.",
        "The father could have blood type A or B.",
        "The child must have inherited the A and B alleles from the mother.",
        "This is impossible if the mother is type O."
      ],
      correct: 3,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "A person with type O blood (ii) can only pass on an 'i' allele. To have a type AB child (I^A I^B), the child must inherit I^A and I^B. Since the mother can only give 'i', she cannot have a type AB child. Thus, the scenario is genetically impossible."
    },
    {
      q: "In a pedigree, an unaffected couple has two sons with an X-linked recessive disorder. What is the genotype of the mother?",
      options: [
        "Homozygous dominant (X^A X^A)",
        "Heterozygous carrier (X^A X^a)",
        "Homozygous recessive (X^a X^a)",
        "Cannot be determined"
      ],
      correct: 1,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "The mother must be a carrier (X^A X^a) to pass the recessive allele (X^a) to her affected sons while remaining unaffected herself."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive phenotype is 0.04. What is the frequency of the dominant allele?",
      options: ["0.04", "0.20", "0.80", "0.96"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q² = 0.04, so q = 0.2. The dominant allele frequency p = 1 − 0.2 = 0.8."
    },
    {
      q: "In the lac operon, what is the role of CAP (catabolite activator protein)?",
      options: [
        "It binds to the operator and represses transcription.",
        "It binds to the promoter and enhances transcription when glucose is low.",
        "It degrades lactose.",
        "It is the repressor protein."
      ],
      correct: 1,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "CAP binds to the promoter region of the lac operon in the presence of cAMP (which is high when glucose is low), enhancing RNA polymerase binding and stimulating transcription."
    },
    {
      q: "Which of the following is an example of a chromosomal numerical abnormality?",
      options: ["Inversion", "Translocation", "Trisomy 21", "Duplication"],
      correct: 2,
      topic: "Lec16 - Chromosomal Abnormalities",
      explanation: "Trisomy 21 (Down syndrome) is a numerical abnormality (aneuploidy) caused by an extra copy of chromosome 21. The others are structural abnormalities."
    },
    {
      q: "A woman is a carrier for an X-linked recessive trait (X^A X^a). Her husband is affected (X^a Y). What is the probability that their son will be affected?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 2,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "The son inherits the Y from the father and either X^A or X^a from the mother. There is a 50% chance he inherits X^a and is affected."
    },
    {
      q: "A population has two alleles, A and a, with frequencies p = 0.5 and q = 0.5. Assuming Hardy-Weinberg equilibrium, what is the frequency of the heterozygous genotype?",
      options: ["0.25", "0.50", "0.75", "1.00"],
      correct: 1,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "The frequency of heterozygotes is 2pq = 2 × 0.5 × 0.5 = 0.50."
    },
    {
      q: "Which of the following is an example of a sex-linked trait in humans?",
      options: ["Pattern baldness", "Hemophilia", "Milk production", "Height"],
      correct: 1,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "Hemophilia is an X-linked recessive trait. Pattern baldness is sex-influenced, milk production is sex-limited, and height is polygenic."
    },
    {
      q: "In a dihybrid cross of two heterozygous individuals (AaBb × AaBb), what proportion of the offspring will be homozygous for both genes?",
      options: ["1/4", "1/8", "1/16", "1/64"],
      correct: 0,
      topic: "Lec05 - Dihybrid Crosses",
      explanation: "The probability of being homozygous for gene A (AA or aa) is 1/4 + 1/4 = 1/2. The probability of being homozygous for gene B is also 1/2. The combined probability is 1/2 × 1/2 = 1/4."
    }
  ]
};