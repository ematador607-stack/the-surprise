window.BATCHES = window.BATCHES || [];
window.BATCHES[8] = {
  title: "Batch 9",
  questions: [
    {
      q: "In a monohybrid cross, a heterozygous individual (Aa) is crossed with a homozygous recessive individual (aa). What is the expected genotypic ratio of the offspring?",
      options: ["1 AA : 2 Aa : 1 aa", "1 Aa : 1 aa", "3 Aa : 1 aa", "All Aa"],
      correct: 1,
      topic: "Lec02 - Testcross / Monohybrid Cross",
      explanation: "The cross Aa x aa produces offspring that are either Aa or aa in a 1:1 ratio."
    },
    {
      q: "Which of the following is a true statement about a recessive allele?",
      options: [
        "It is always expressed in the phenotype.",
        "It is only expressed when two copies are present.",
        "It masks the expression of the dominant allele.",
        "It is always lethal."
      ],
      correct: 1,
      topic: "Lec01 - Dominant vs Recessive",
      explanation: "A recessive allele is only expressed phenotypically when an individual is homozygous for that allele (i.e., has two copies)."
    },
    {
      q: "A cross between a red-flowered plant and a white-flowered plant produces all pink-flowered offspring. When the pink-flowered offspring are self-crossed, they produce 1/4 red, 1/2 pink, and 1/4 white offspring. This is an example of:",
      options: ["Complete dominance", "Codominance", "Incomplete dominance", "Epistasis"],
      correct: 2,
      topic: "Lec03 - Incomplete Dominance",
      explanation: "The heterozygote has an intermediate phenotype (pink), and the F2 generation shows a 1:2:1 phenotypic ratio, which is characteristic of incomplete dominance."
    },
    {
      q: "A woman with blood type AB marries a man with blood type O. What are the possible blood types of their children?",
      options: ["A and B only", "A, B, and AB", "AB and O only", "A, B, AB, and O"],
      correct: 0,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The woman is I^A I^B and the man is ii. The children will inherit either I^A or I^B from the mother and i from the father, resulting in type A (I^A i) or type B (I^B i)."
    },
    {
      q: "In a pedigree, a trait appears in both males and females, can skip generations, and is often seen in consanguineous marriages. What is the most likely mode of inheritance?",
      options: ["Autosomal dominant", "Autosomal recessive", "X-linked dominant", "Y-linked"],
      correct: 1,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "Autosomal recessive traits can skip generations because carriers (heterozygotes) are phenotypically normal. They are also more common in consanguineous (inbreeding) marriages."
    },
    {
      q: "A couple, both with normal vision, have a color-blind son. What is the probability that their next son will also be color-blind?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 2,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "The mother must be a carrier (X^C X^c) since she has a color-blind son (X^c Y). Each son has a 50% chance of inheriting the X^c allele."
    },
    {
      q: "Two genes, A and B, are linked and are 20 map units apart. A testcross is performed on an individual with the genotype AB/ab. What proportion of the offspring will be recombinant?",
      options: ["10%", "20%", "40%", "80%"],
      correct: 1,
      topic: "Lec08 - Linkage Mapping",
      explanation: "The recombination frequency is equal to the map distance. A distance of 20 map units means 20% of the offspring will be recombinant."
    },
    {
      q: "Which of the following is an example of a homozygous genotype?",
      options: ["Aa", "Bb", "CC", "Dd"],
      correct: 2,
      topic: "Lec01 - Homozygous vs Heterozygous",
      explanation: "A homozygous genotype has two identical alleles for a given gene, such as CC."
    },
    {
      q: "In a dihybrid cross between two individuals that are heterozygous for both traits (AaBb x AaBb), what proportion of the offspring will be homozygous recessive for both traits?",
      options: ["1/4", "1/8", "1/16", "9/16"],
      correct: 2,
      topic: "Lec05 - Dihybrid Crosses",
      explanation: "The probability of aa is 1/4, and the probability of bb is 1/4. Since the genes assort independently, the combined probability is 1/4 * 1/4 = 1/16."
    },
    {
      q: "The ABO blood group system is an example of which of the following?",
      options: [
        "Single gene with two alleles",
        "Multiple alleles and codominance",
        "Polygenic inheritance",
        "Incomplete dominance"
      ],
      correct: 1,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The ABO system is controlled by three alleles (I^A, I^B, i) and the I^A and I^B alleles show codominance."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the dominant allele is 0.8. What is the frequency of the homozygous recessive genotype?",
      options: ["0.04", "0.16", "0.32", "0.64"],
      correct: 0,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "If p = 0.8, then q = 0.2. The frequency of the homozygous recessive genotype is q² = (0.2)² = 0.04."
    },
    {
      q: "Which of the following is a mechanism of microevolution that involves the movement of individuals between populations?",
      options: ["Mutation", "Genetic drift", "Gene flow", "Natural selection"],
      correct: 2,
      topic: "Lec12 - Microevolutionary Forces",
      explanation: "Gene flow (migration) is the transfer of alleles between populations due to the movement of individuals or gametes."
    },
    {
      q: "A mutation that results in the substitution of one amino acid for another in a protein is called a:",
      options: ["Silent mutation", "Missense mutation", "Nonsense mutation", "Frameshift mutation"],
      correct: 1,
      topic: "Lec16 - DNA Mutations",
      explanation: "A missense mutation is a base substitution that changes a codon to code for a different amino acid."
    },
    {
      q: "What is the role of RNA polymerase in transcription?",
      options: [
        "It adds nucleotides to the growing RNA strand.",
        "It unwinds the DNA double helix.",
        "It joins Okazaki fragments.",
        "It synthesizes RNA primers."
      ],
      correct: 0,
      topic: "Lec15 - Transcription",
      explanation: "RNA polymerase is the enzyme that catalyzes the synthesis of RNA from a DNA template."
    },
    {
      q: "In the lac operon, what is the effect of the presence of lactose?",
      options: [
        "It binds to the repressor, causing it to detach from the operator.",
        "It binds to the promoter, blocking RNA polymerase.",
        "It enhances the binding of the repressor to the operator.",
        "It has no effect on the operon."
      ],
      correct: 0,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "Lactose (converted to allolactose) binds to the repressor protein, causing a conformational change that prevents it from binding to the operator. This allows transcription to proceed."
    },
    {
      q: "Which of the following is a characteristic of a chromosomal abnormality?",
      options: [
        "It always involves a single nucleotide change.",
        "It can involve the deletion or duplication of a chromosome segment.",
        "It is always inherited from a parent.",
        "It never affects the phenotype."
      ],
      correct: 1,
      topic: "Lec16 - Chromosomal Mutations",
      explanation: "Chromosomal abnormalities involve structural changes (deletions, duplications, inversions, translocations) or numerical changes (aneuploidy, polyploidy) in chromosomes."
    },
    {
      q: "In a testcross, a black guinea pig (Bb) is crossed with a white guinea pig (bb). What is the expected phenotypic ratio of the offspring?",
      options: ["3 black : 1 white", "1 black : 1 white", "1 black : 3 white", "All black"],
      correct: 1,
      topic: "Lec02 - Testcross",
      explanation: "The cross Bb x bb produces offspring that are either Bb (black) or bb (white) in a 1:1 ratio."
    },
    {
      q: "Which of the following is an example of a sex-limited trait?",
      options: ["Color blindness in humans", "Hemophilia in humans", "Milk production in mammals", "Pattern baldness in humans"],
      correct: 2,
      topic: "Lec07 - Sex-Limited Traits",
      explanation: "Sex-limited traits are autosomal traits that are expressed only in one sex due to physiological differences. Milk production is only expressed in female mammals."
    },
    {
      q: "A population has two alleles for a gene, A and a, with frequencies p = 0.4 and q = 0.6. If the population is in Hardy-Weinberg equilibrium, what is the frequency of the heterozygous genotype?",
      options: ["0.24", "0.36", "0.48", "0.60"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "The frequency of the heterozygous genotype is 2pq = 2 * 0.4 * 0.6 = 0.48."
    },
    {
      q: "What is the process by which DNA is copied to produce two identical DNA molecules?",
      options: ["Transcription", "Translation", "Replication", "Transformation"],
      correct: 2,
      topic: "Lec14 - DNA Replication",
      explanation: "DNA replication is the process by which a double-stranded DNA molecule is copied to produce two identical DNA molecules."
    }
  ]
};