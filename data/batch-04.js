window.BATCHES = window.BATCHES || [];
window.BATCHES[3] = {
  title: "Batch 4",
  questions: [
    {
      q: "If a plant heterozygous for four independently assorting genes (AaBbCcDd) is self-fertilized, what fraction of the progeny will be homozygous for all four genes?",
      options: ["1/8", "1/16", "1/32", "1/64"],
      correct: 1,
      topic: "Lec05 - Probability Method",
      explanation: "For each gene, the probability of being homozygous (either AA or aa) from a heterozygous cross is 1/2. With four genes, the probability is (1/2)^4 = 1/16."
    },
    {
      q: "In a dihybrid cross (AaBb x AaBb), what fraction of the offspring will show the recessive phenotype for at least one gene?",
      options: ["1/16", "7/16", "9/16", "3/8"],
      correct: 1,
      topic: "Lec05 - Probability Method",
      explanation: "The probability of showing the dominant phenotype for both genes is (3/4) * (3/4) = 9/16. Therefore, the probability of being recessive for at least one gene is 1 - 9/16 = 7/16."
    },
    {
      q: "A cross between two individuals with the genotypes AaBbCc and AaBbCc is performed. What is the probability of producing an offspring with the genotype AABBCC?",
      options: ["1/64", "1/32", "1/16", "1/8"],
      correct: 0,
      topic: "Lec05 - Probability Method",
      explanation: "The probability of AA from Aa x Aa is 1/4. Similarly, the probability of BB is 1/4, and CC is 1/4. The overall probability is 1/4 * 1/4 * 1/4 = 1/64."
    },
    {
      q: "In a cross between a plant heterozygous for three genes (AaBbCc) and a plant homozygous recessive for all three genes (aabbcc), what is the probability of producing an offspring that is AaBbCc?",
      options: ["1/2", "1/4", "1/8", "1/16"],
      correct: 2,
      topic: "Lec05 - Testcross / Probability",
      explanation: "The probability of getting Aa is 1/2, Bb is 1/2, and Cc is 1/2. The overall probability is (1/2)^3 = 1/8."
    },
    {
      q: "A plant with the genotype AaBBCcDd is self-fertilized. What proportion of the progeny will have the same phenotype as the parent, assuming complete dominance for all genes?",
      options: ["3/4", "9/16", "27/64", "81/256"],
      correct: 2,
      topic: "Lec05 - Probability Method",
      explanation: "For each heterozygous gene (A, C, D), the probability of showing the dominant phenotype is 3/4. For the homozygous gene (B), it is 1. The probability is (3/4) * 1 * (3/4) * (3/4) = 27/64."
    },
    {
      q: "In a certain plant species, the genotype A_B_ produces purple flowers, A_bb produces red flowers, aaB_ produces white flowers, and aabb produces red flowers. If two plants with genotype AaBb are crossed, what phenotypic ratio is expected?",
      options: [
        "9 purple : 3 red : 4 white",
        "9 purple : 4 red : 3 white",
        "12 purple : 3 red : 1 white",
        "9 purple : 6 red : 1 white"
      ],
      correct: 1,
      topic: "Lec06 - Epistasis (Recessive)",
      explanation: "The aabb and A_bb genotypes both give red flowers (4/16). aaB_ gives white flowers (3/16). A_B_ gives purple (9/16). This is a form of recessive epistasis resulting in a 9:4:3 ratio."
    },
    {
      q: "In a species of flower, the presence of at least one dominant allele at the C locus is required for pigment production. At a second locus, R, the dominant allele produces red pigment while the recessive allele produces yellow pigment. What is the phenotypic ratio of the F2 generation from a cross between two plants that are heterozygous for both genes (CcRr x CcRr)?",
      options: [
        "9 red : 3 yellow : 4 white",
        "12 red : 3 yellow : 1 white",
        "9 red : 7 white",
        "9 red : 6 yellow : 1 white"
      ],
      correct: 0,
      topic: "Lec06 - Recessive Epistasis",
      explanation: "C_R_ (9/16) is red. C_rr (3/16) is yellow. cc__ (4/16) is white regardless of the R locus. This results in a 9:3:4 ratio."
    },
    {
      q: "Which type of gene interaction produces a 15:1 phenotypic ratio in the F2 generation of a dihybrid cross?",
      options: ["Complementary genes", "Duplicate genes", "Dominant epistasis", "Recessive epistasis"],
      correct: 1,
      topic: "Lec06 - Duplicate Gene Action",
      explanation: "Duplicate gene action occurs when a dominant allele at either of two loci produces the same phenotype. Only the double homozygous recessive (aabb) shows the alternative phenotype, resulting in a 15:1 ratio."
    },
    {
      q: "In a cross involving two genes, if the observed F2 phenotypic ratio is 9:7, what is the most likely explanation?",
      options: [
        "The genes assort independently with complete dominance.",
        "One gene is lethal in the homozygous recessive state.",
        "Complementary gene action where both dominant alleles are needed for the phenotype.",
        "Dominant epistasis where one dominant allele masks the other."
      ],
      correct: 2,
      topic: "Lec06 - Complementary Gene Action",
      explanation: "In complementary gene action, the dominant alleles of two different genes work together to produce the phenotype. The absence of a dominant allele at either locus results in the same mutant phenotype, giving a 9:7 ratio."
    },
    {
      q: "Which of the following is a characteristic of polygenic inheritance?",
      options: [
        "Discrete, non-overlapping phenotypes.",
        "Traits controlled by a single gene with multiple alleles.",
        "Continuous variation in the phenotype.",
        "Phenotypic ratios that always follow Mendelian ratios."
      ],
      correct: 2,
      topic: "Lec09 - Inheritance of Complex Traits (Polygenic)",
      explanation: "Polygenic traits are controlled by multiple genes, each with a small additive effect, resulting in continuous variation in the phenotype (e.g., human height or skin color)."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the homozygous dominant genotype is 0.49. What is the frequency of the recessive allele?",
      options: ["0.30", "0.51", "0.70", "0.09"],
      correct: 0,
      topic: "Lec11 - Hardy-Weinberg Principle",
      explanation: "p^2 = 0.49, so p = 0.7. Since p + q = 1, q = 1 - 0.7 = 0.3."
    },
    {
      q: "Which of the following is a requirement for a population to remain in Hardy-Weinberg equilibrium?",
      options: ["A high mutation rate.", "Random mating.", "Significant natural selection.", "Small population size."],
      correct: 1,
      topic: "Lec11 - Hardy-Weinberg Principle",
      explanation: "The Hardy-Weinberg equilibrium assumes random mating, no mutation, no selection, no migration, and a large population size."
    },
    {
      q: "In a population, 16% of individuals show a recessive trait. Assuming Hardy-Weinberg equilibrium, what is the frequency of heterozygous carriers?",
      options: ["0.24", "0.40", "0.48", "0.60"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q^2 = 0.16, so q = 0.4 and p = 0.6. The frequency of heterozygotes (2pq) is 2 * 0.6 * 0.4 = 0.48."
    },
    {
      q: "Which of the following is NOT an example of a microevolutionary force?",
      options: ["Genetic drift", "Gene flow", "Mutation", "Independent assortment"],
      correct: 3,
      topic: "Lec12 - Microevolutionary Forces",
      explanation: "Independent assortment occurs during meiosis and shuffles existing alleles but does not by itself change allele frequencies in a population. Microevolutionary forces like mutation, gene flow, genetic drift, and selection do change frequencies."
    },
    {
      q: "The founder effect is a type of:",
      options: ["Natural selection", "Genetic drift", "Gene flow", "Mutation"],
      correct: 1,
      topic: "Lec12 - Genetic Drift",
      explanation: "The founder effect is a specific type of genetic drift that occurs when a small group of individuals breaks off from a larger population to establish a new population."
    },
    {
      q: "Which statement describes the function of restriction endonucleases in bacterial cells?",
      options: [
        "They synthesize DNA from RNA templates.",
        "They protect bacteria by cutting foreign DNA, such as from viruses.",
        "They replicate the bacterial chromosome.",
        "They repair damaged DNA."
      ],
      correct: 1,
      topic: "Lec20 - Recombinant DNA Technology",
      explanation: "Restriction enzymes are part of the bacterial defense system. They recognize specific sequences in foreign DNA (like infecting phages) and cut it, destroying the invader."
    },
    {
      q: "In the context of recombinant DNA technology, what is a plasmid?",
      options: [
        "A type of virus that infects bacteria.",
        "A small, circular piece of DNA that replicates independently of the main chromosome.",
        "A protein that cuts DNA at specific sites.",
        "A large linear chromosome found in eukaryotes."
      ],
      correct: 1,
      topic: "Lec20 - Recombinant DNA Technology",
      explanation: "Plasmids are extrachromosomal circular DNA molecules found in bacteria that can be used as vectors to carry and replicate a foreign gene of interest."
    },
    {
      q: "A mutation that occurs in a somatic cell, such as a skin cell, will:",
      options: [
        "Be passed on to all offspring of the organism.",
        "Be passed on only to the gametes.",
        "Not be passed on to offspring.",
        "Affect the entire organism equally."
      ],
      correct: 2,
      topic: "Lec16 - DNA Mutations (Somatic vs Germ-line)",
      explanation: "Somatic mutations occur in non-reproductive cells and are not passed to offspring. Only germ-line mutations (in gametes) are heritable."
    },
    {
      q: "Which of the following is an example of a missense mutation?",
      options: [
        "A change in a codon that does not change the amino acid sequence.",
        "A change that introduces a premature stop codon.",
        "A change that substitutes one amino acid for another in the protein.",
        "The insertion of one nucleotide, shifting the reading frame."
      ],
      correct: 2,
      topic: "Lec16 - DNA Mutations",
      explanation: "A missense mutation is a base substitution that results in a different amino acid being incorporated into the protein. Sickle cell anemia is a classic example."
    },
    {
      q: "The primary function of the TATA box in eukaryotic gene regulation is to:",
      options: [
        "Code for a repressor protein.",
        "Serve as a binding site for general transcription factors and RNA polymerase.",
        "Terminate transcription.",
        "Act as an enhancer sequence far from the gene."
      ],
      correct: 1,
      topic: "Lec19 - Regulation of Gene Expression in Eukaryotes",
      explanation: "The TATA box is a core promoter element that binds general transcription factors, helping to position RNA polymerase II correctly at the transcription start site."
    }
  ]
};