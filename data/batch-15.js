window.BATCHES = window.BATCHES || [];
window.BATCHES[14] = {
  title: "Batch 15",
  questions: [
    {
      q: "A plant heterozygous for a single gene (Aa) is self-fertilized. What is the probability that the first three offspring will all show the recessive phenotype?",
      options: ["1/4", "1/8", "1/16", "1/64"],
      correct: 3,
      topic: "Lec05 - Probability Rules (Product Rule)",
      explanation: "The probability of a single offspring being recessive (aa) is 1/4. The probability of three independent offspring all being recessive is (1/4) × (1/4) × (1/4) = 1/64."
    },
    {
      q: "In a plant species, a dominant allele at locus C is required for flower color. If the plant is cc, it is white regardless of the alleles at locus R. If a plant with genotype CcRr is testcrossed (with ccrr), what proportion of the offspring will be white?",
      options: ["1/4", "1/2", "3/4", "All"],
      correct: 1,
      topic: "Lec06 - Recessive Epistasis",
      explanation: "The testcross is CcRr × ccrr. The offspring that receive 'c' from the first parent will be cc (white). The probability of receiving 'c' from Cc is 1/2. So half the offspring will be white."
    },
    {
      q: "In Drosophila, the gene for vestigial wings (vg) is autosomal recessive, and the gene for white eyes (w) is X-linked recessive. A female heterozygous for both genes (Vgvg X^W X^w) is crossed with a male with vestigial wings and white eyes (vgvg X^w Y). What proportion of the offspring will be female with vestigial wings and white eyes?",
      options: ["1/4", "1/8", "1/16", "0"],
      correct: 1,
      topic: "Lec07 - Sex-linked and Autosomal Crosses",
      explanation: "Probability of female = 1/2. Probability of vestigial wings (vgvg) = 1/2 (from Vgvg × vgvg). Probability of white eyes in females = 1/2 (X^w from mother and X^w from father). Total = 1/2 × 1/2 × 1/2 = 1/8."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.1. What is the frequency of homozygous dominant individuals?",
      options: ["0.01", "0.18", "0.81", "0.90"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q = 0.1, p = 0.9. The frequency of homozygous dominant (p²) is (0.9)² = 0.81."
    },
    {
      q: "What is the function of the 5' cap in eukaryotic mRNA?",
      options: [
        "It is the site of translation initiation.",
        "It protects the mRNA from degradation and helps in ribosome binding.",
        "It is the poly-A tail.",
        "It codes for the start codon."
      ],
      correct: 1,
      topic: "Lec19 - Regulation of Gene Expression in Eukaryotes",
      explanation: "The 5' cap (a modified guanosine nucleotide) protects the mRNA from exonucleases and is recognized by the ribosome for translation initiation."
    },
    {
      q: "A couple, both heterozygous for a recessive disorder, have a child. What is the probability that the child is either homozygous dominant or homozygous recessive?",
      options: ["1/4", "1/2", "3/4", "1"],
      correct: 1,
      topic: "Lec05 - Probability",
      explanation: "The cross Aa × Aa produces 1/4 AA and 1/4 aa. The probability of being either AA or aa is 1/4 + 1/4 = 1/2."
    },
    {
      q: "In a dihybrid cross, the F2 generation produces a 9:6:1 ratio. This indicates which type of gene interaction?",
      options: ["Recessive epistasis", "Additive gene action", "Dominant epistasis", "Duplicate genes"],
      correct: 1,
      topic: "Lec06 - Additive Gene Action",
      explanation: "A 9:6:1 ratio occurs when each genotype produces a unique phenotype (additive effect), such as in fruit shape in summer squash."
    },
    {
      q: "A woman with type AB blood has a child with type A blood. Which of the following could be the father's genotype?",
      options: ["I^A I^A", "I^B i", "ii", "I^B I^B"],
      correct: 1,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The child is type A (I^A I^A or I^A i). The mother is I^A I^B. The child must inherit I^A from the mother, so the father must contribute either I^A or i. Among the options, only I^B i contains an 'i' allele, which could produce a type A child (I^A i)."
    },
    {
      q: "Which of the following is a type of non-random mating?",
      options: ["Random mating", "Inbreeding", "Mutation", "Gene flow"],
      correct: 1,
      topic: "Lec12 - Non-random Mating",
      explanation: "Inbreeding is a form of non-random mating where individuals mate with close relatives, leading to increased homozygosity."
    },
    {
      q: "In eukaryotes, what is the role of transcription factors?",
      options: [
        "They bind to DNA and regulate transcription.",
        "They synthesize RNA.",
        "They are the building blocks of ribosomes.",
        "They transport mRNA out of the nucleus."
      ],
      correct: 0,
      topic: "Lec19 - Regulation of Gene Expression in Eukaryotes",
      explanation: "Transcription factors are proteins that bind to specific DNA sequences (promoters, enhancers) to activate or repress transcription."
    },
    {
      q: "In a testcross of a dihybrid with complete linkage in the trans configuration (Ab/aB), what is the expected phenotypic ratio?",
      options: ["1:1:1:1", "9:3:3:1", "1:1", "3:1"],
      correct: 2,
      topic: "Lec08 - Linkage",
      explanation: "Complete linkage in trans means the individual produces only Ab and aB gametes. The testcross offspring will be 50% Aabb and 50% aaBb, giving a 1:1 phenotypic ratio."
    }
  ]
};