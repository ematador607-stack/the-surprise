window.BATCHES = window.BATCHES || [];
window.BATCHES[6] = {
  title: "Batch 7",
  questions: [
    {
      q: "In a monohybrid cross between two heterozygous tall pea plants (Tt x Tt), what proportion of the offspring are expected to be true-breeding tall?",
      options: ["1/4", "1/2", "3/4", "All"],
      correct: 0,
      topic: "Lec02 - Monohybrid Crosses",
      explanation: "True-breeding tall plants are homozygous dominant (TT). The probability of TT from Tt x Tt is 1/4."
    },
    {
      q: "Which of the following is an example of a phenotype?",
      options: ["The genotype Aa", "The allele for blue eyes", "Blue eyes", "The locus for eye color"],
      correct: 2,
      topic: "Lec01 - Genotype vs Phenotype",
      explanation: "Phenotype refers to the observable physical or biochemical characteristics of an organism, such as eye color. Genotype refers to the genetic makeup."
    },
    {
      q: "In a dihybrid cross of two heterozygous individuals (AaBb x AaBb), what is the probability of producing an offspring that is homozygous recessive for both traits (aabb)?",
      options: ["1/2", "1/4", "1/8", "1/16"],
      correct: 3,
      topic: "Lec05 - Dihybrid Crosses",
      explanation: "The probability of aa is 1/4, and the probability of bb is 1/4. Since the genes assort independently, the combined probability is 1/4 * 1/4 = 1/16."
    },
    {
      q: "A woman with type O blood and a man with type AB blood have children. What blood types are possible?",
      options: ["A, B, and AB", "A and B only", "O and AB only", "A, B, AB, and O"],
      correct: 1,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The woman is ii and the man is I^A I^B. The offspring will be either I^A i (type A) or I^B i (type B). Type O and type AB are not possible."
    },
    {
      q: "In a pedigree, a condition appears in every generation and affects both males and females equally. An affected father passes the condition to all his daughters but none of his sons. What is the most likely mode of inheritance?",
      options: ["Autosomal dominant", "Autosomal recessive", "X-linked dominant", "X-linked recessive"],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis (X-linked Dominant)",
      explanation: "X-linked dominant traits are passed from an affected father to all his daughters (who receive his X chromosome) but not to his sons (who receive his Y chromosome)."
    },
    {
      q: "Which of the following is a characteristic of an autosomal recessive trait in a pedigree?",
      options: [
        "It appears in every generation.",
        "It affects males more frequently than females.",
        "It can skip generations and often appears in consanguineous marriages.",
        "An affected individual always has an affected parent."
      ],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis (Autosomal Recessive)",
      explanation: "Autosomal recessive traits can skip generations because carriers (heterozygotes) are phenotypically normal. They are more common in consanguineous (inbreeding) marriages."
    },
    {
      q: "In a testcross, a dominant phenotype individual is crossed with a homozygous recessive individual. If the offspring show a 1:1 ratio of dominant to recessive phenotypes, the dominant parent was:",
      options: ["Homozygous dominant", "Heterozygous", "Homozygous recessive", "Codominant"],
      correct: 1,
      topic: "Lec02 - Test Cross",
      explanation: "A 1:1 ratio indicates that the dominant parent produced two types of gametes in equal proportions, meaning it was heterozygous (Aa)."
    },
    {
      q: "What is the probability that a couple, both heterozygous for an autosomal recessive disorder (Aa x Aa), will have a child who is a carrier (Aa)?",
      options: ["1/4", "1/2", "3/4", "1"],
      correct: 1,
      topic: "Lec05 - Probability",
      explanation: "The cross Aa x Aa produces genotypes in a 1 AA : 2 Aa : 1 aa ratio. The probability of a carrier (Aa) is 2/4 = 1/2."
    },
    {
      q: "If a woman is a carrier for an X-linked recessive disorder (X^A X^a) and her husband is unaffected (X^A Y), what is the probability that their daughter will be affected?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 0,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "A daughter inherits an X from her father, which is X^A (normal). Therefore, she will be either X^A X^A or X^A X^a, both of which are phenotypically normal. The probability of an affected daughter is 0%."
    },
    {
      q: "In the cross from the previous question, what is the probability that their son will be affected?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 2,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "A son inherits the Y from his father and one X from his mother. There is a 50% chance he inherits the X^a allele and is affected."
    },
    {
      q: "Two genes, A and B, are linked and are 12 map units apart. In a cross between an individual heterozygous for both genes (in cis configuration: AB/ab) and a homozygous recessive individual (ab/ab), what proportion of the offspring will be recombinant?",
      options: ["6%", "12%", "24%", "44%"],
      correct: 1,
      topic: "Lec08 - Linkage Mapping",
      explanation: "The recombination frequency is equal to the map distance. A distance of 12 map units means 12% of the offspring will be recombinant."
    },
    {
      q: "What is the physical basis for genetic recombination between linked genes?",
      options: [
        "Independent assortment of chromosomes.",
        "Crossing over during prophase I of meiosis.",
        "Separation of sister chromatids during anaphase II.",
        "Random fertilization of gametes."
      ],
      correct: 1,
      topic: "Lec08 - Recombination",
      explanation: "Recombination between linked genes occurs via crossing over, where homologous chromosomes exchange segments during prophase I of meiosis."
    },
    {
      q: "Which of the following is an assumption of the Hardy-Weinberg equilibrium?",
      options: [
        "Small population size.",
        "Natural selection is acting on the population.",
        "Mating is random.",
        "High mutation rate."
      ],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Principle",
      explanation: "The Hardy-Weinberg equilibrium assumes a large population, no natural selection, no mutation, no migration, and random mating."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive phenotype is 0.09. What is the frequency of the dominant allele?",
      options: ["0.09", "0.30", "0.70", "0.91"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "The recessive phenotype frequency is q² = 0.09, so q = 0.3. The dominant allele frequency p = 1 - q = 0.7."
    },
    {
      q: "Which of the following is a type of genetic drift?",
      options: ["Natural selection", "Gene flow", "Bottleneck effect", "Mutation"],
      correct: 2,
      topic: "Lec12 - Genetic Drift",
      explanation: "The bottleneck effect is a form of genetic drift where a population's size is drastically reduced by a chance event, leading to a random change in allele frequencies."
    },
    {
      q: "A mutation that changes a codon for an amino acid into a stop codon is called a:",
      options: ["Silent mutation", "Missense mutation", "Nonsense mutation", "Frameshift mutation"],
      correct: 2,
      topic: "Lec16 - DNA Mutations",
      explanation: "A nonsense mutation is a base substitution that creates a premature stop codon, resulting in a truncated protein."
    },
    {
      q: "Which of the following is an example of a frameshift mutation?",
      options: [
        "A change from GAG to GAA, coding for the same amino acid.",
        "A change from GAG to GTG, coding for a different amino acid.",
        "The insertion of a single nucleotide, shifting the reading frame.",
        "A change from GAG to UAG, creating a stop codon."
      ],
      correct: 2,
      topic: "Lec16 - DNA Mutations",
      explanation: "Frameshift mutations occur when the addition or deletion of a number of nucleotides not divisible by three alters the reading frame of the gene."
    },
    {
      q: "What is the function of the promoter in a gene?",
      options: [
        "It codes for a protein.",
        "It is a sequence where RNA polymerase binds to initiate transcription.",
        "It is the site of translation.",
        "It marks the end of a gene for transcription termination."
      ],
      correct: 1,
      topic: "Lec15 - Transcription",
      explanation: "The promoter is a DNA sequence that binds RNA polymerase and other transcription factors to initiate transcription."
    },
    {
      q: "In eukaryotes, what is the role of enhancers in gene regulation?",
      options: [
        "They silence gene expression.",
        "They increase the rate of transcription by binding specific transcription factors.",
        "They are the site of RNA splicing.",
        "They code for the poly-A tail."
      ],
      correct: 1,
      topic: "Lec19 - Regulation of Gene Expression in Eukaryotes",
      explanation: "Enhancers are regulatory DNA sequences that can be located far from the gene and bind activator proteins to increase the rate of transcription."
    },
    {
      q: "In the lac operon, the repressor protein binds to the:",
      options: ["Promoter", "Operator", "Structural genes", "CAP site"],
      correct: 1,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "The lac repressor binds to the operator region, blocking RNA polymerase from transcribing the structural genes when lactose is absent."
    }
  ]
};