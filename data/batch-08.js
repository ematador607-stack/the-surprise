window.BATCHES = window.BATCHES || [];
window.BATCHES[7] = {
  title: "Batch 8",
  questions: [
    {
      q: "A couple has a child with an autosomal recessive disorder. Both parents are phenotypically normal. What is the probability that their next child will be a carrier of the disorder?",
      options: ["1/4", "1/2", "2/3", "3/4"],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis / Probability",
      explanation: "Since both parents are normal but have an affected child (aa), they must both be heterozygous (Aa). The possible genotypes for their next phenotypically normal child are 1/3 AA and 2/3 Aa. Therefore, the probability of being a carrier is 2/3."
    },
    {
      q: "In a pedigree, a trait is passed from an affected father to all of his daughters but none of his sons. This pattern is most consistent with:",
      options: ["Autosomal dominant inheritance", "Autosomal recessive inheritance", "X-linked dominant inheritance", "Y-linked inheritance"],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "X-linked dominant traits are passed from an affected father (X^D Y) to all his daughters (who receive X^D) but not to his sons (who receive Y)."
    },
    {
      q: "A boy has hemophilia, an X-linked recessive disorder. His parents are both phenotypically normal. From which parent did he inherit the disease allele?",
      options: ["His mother", "His father", "Both parents", "Neither parent (new mutation)"],
      correct: 0,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "A son inherits his Y chromosome from his father and his X chromosome from his mother. If he has an X-linked recessive disorder, he must have inherited the affected X from his mother, who is an asymptomatic carrier."
    },
    {
      q: "In Drosophila, the gene for eye color is X-linked. A white-eyed female is crossed with a red-eyed male. What will be the phenotype of their female offspring?",
      options: ["All red-eyed", "All white-eyed", "All carrier (red-eyed)", "Half red, half white"],
      correct: 2,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "The female is X^w X^w (white) and the male is X^W Y (red). Daughters inherit X^W from the father and X^w from the mother, making them X^W X^w (carriers with red eyes)."
    },
    {
      q: "Two genes, A and B, are 10 map units apart. In a testcross of an individual heterozygous for both genes (AB/ab), what percentage of the offspring will have the phenotype Ab?",
      options: ["10%", "5%", "45%", "90%"],
      correct: 1,
      topic: "Lec08 - Linkage Mapping",
      explanation: "The total recombinant frequency is 10% (5% for Ab and 5% for aB). Therefore, the proportion of Ab offspring is 5%."
    },
    {
      q: "Which of the following phenotypic ratios in the F2 generation of a dihybrid cross indicates epistasis?",
      options: ["1:2:1", "3:1", "9:3:3:1", "9:7"],
      correct: 3,
      topic: "Lec06 - Epistasis",
      explanation: "A 9:7 ratio is a modified 9:3:3:1 ratio indicating complementary gene action. A 9:3:3:1 ratio indicates independent assortment of two non-interacting genes."
    },
    {
      q: "A population has a gene with two alleles, A and a. If the frequency of the A allele is 0.6, what is the frequency of the a allele?",
      options: ["0.4", "0.6", "0.36", "0.16"],
      correct: 0,
      topic: "Lec11 - Hardy-Weinberg Principle",
      explanation: "For a gene with two alleles, the sum of their frequencies must equal 1. If p (A) = 0.6, then q (a) = 1 - 0.6 = 0.4."
    },
    {
      q: "In a population of 1000 individuals, 10 are born with a recessive disorder (aa). Assuming the population is in Hardy-Weinberg equilibrium, what is the frequency of the recessive allele?",
      options: ["0.01", "0.1", "0.5", "0.9"],
      correct: 1,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "The frequency of the recessive genotype (aa) is q² = 10/1000 = 0.01. The frequency of the recessive allele is q = √0.01 = 0.1."
    },
    {
      q: "The transfer of genetic material from one bacterium to another via a bacteriophage is called:",
      options: ["Transformation", "Conjugation", "Transduction", "Translation"],
      correct: 2,
      topic: "Lec20 - Recombinant DNA Technology",
      explanation: "Transduction is the process by which a virus (bacteriophage) transfers genetic material from one bacterium to another."
    },
    {
      q: "During translation, the anticodon on the tRNA binds to the codon on the mRNA. What is the anticodon for the mRNA codon 5'-AUG-3'?",
      options: ["5'-TAC-3'", "3'-UAC-5'", "5'-CAU-3'", "3'-TAC-5'"],
      correct: 1,
      topic: "Lec15 - Translation",
      explanation: "The anticodon is complementary and antiparallel to the mRNA codon. The codon is 5'-AUG-3', so the anticodon is 3'-UAC-5'."
    },
    {
      q: "Which of the following is the correct base pairing rule for DNA?",
      options: ["A pairs with C, G pairs with T", "A pairs with T, G pairs with C", "A pairs with U, G pairs with C", "A pairs with G, T pairs with C"],
      correct: 1,
      topic: "Lec13 - DNA Structure",
      explanation: "In DNA, Adenine (A) pairs with Thymine (T) via two hydrogen bonds, and Guanine (G) pairs with Cytosine (C) via three hydrogen bonds."
    },
    {
      q: "In a dihybrid cross of a plant with genotype AaBb (assuming independent assortment), what is the probability of producing a gamete with genotype AB?",
      options: ["1/4", "1/2", "1/8", "1/16"],
      correct: 0,
      topic: "Lec05 - Probability Method",
      explanation: "The probability of getting A in a gamete is 1/2, and the probability of getting B is 1/2. The combined probability is 1/2 * 1/2 = 1/4."
    },
    {
      q: "What is the expected phenotypic ratio of the offspring from a cross between two individuals with the genotype AaBbCc, assuming complete dominance and independent assortment?",
      options: ["27:9:9:9:3:3:3:1", "9:3:3:1", "1:2:1", "3:1"],
      correct: 0,
      topic: "Lec05 - Trihybrid Crosses",
      explanation: "For a trihybrid cross (AaBbCc x AaBbCc), the phenotypic ratio is the cube of the monohybrid ratio (3:1), which is 27:9:9:9:3:3:3:1."
    },
    {
      q: "A plant is heterozygous for a gene that shows incomplete dominance. If this plant is self-fertilized, what phenotypic ratio is expected in the offspring?",
      options: ["3:1", "1:2:1", "9:3:3:1", "1:1"],
      correct: 1,
      topic: "Lec03 - Incomplete Dominance",
      explanation: "A cross of two heterozygotes (Aa x Aa) for a gene with incomplete dominance produces a 1:2:1 phenotypic ratio, corresponding to the genotypes AA, Aa, and aa."
    },
    {
      q: "Which of the following conditions is an example of a trait caused by a dominant lethal allele?",
      options: ["Cystic fibrosis", "Huntington's disease", "Sickle cell anemia", "Tay-Sachs disease"],
      correct: 1,
      topic: "Lec04 - Lethal Alleles",
      explanation: "Huntington's disease is caused by a dominant lethal allele. It persists in populations because symptoms typically appear after reproductive age. The others are recessive."
    },
    {
      q: "A person with genotype I^A i has blood type A. This is an example of:",
      options: ["Codominance", "Complete dominance", "Incomplete dominance", "Epistasis"],
      correct: 1,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The I^A allele is completely dominant over the i allele, so the phenotype is type A blood."
    },
    {
      q: "In an X-linked recessive inheritance pattern, which of the following is true?",
      options: [
        "Affected fathers pass the trait to all their daughters.",
        "Affected mothers pass the trait to all their sons.",
        "Only males are affected.",
        "The trait is equally common in males and females."
      ],
      correct: 1,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "An affected mother (X^a X^a) will pass the X^a allele to all her sons, making them affected (X^a Y)."
    },
    {
      q: "A mutation that does not change the amino acid sequence of a protein is called a:",
      options: ["Missense mutation", "Nonsense mutation", "Silent mutation", "Frameshift mutation"],
      correct: 2,
      topic: "Lec16 - DNA Mutations",
      explanation: "Silent mutations are base substitutions that do not alter the amino acid sequence due to the redundancy of the genetic code."
    },
    {
      q: "In a species of plant, flower color is determined by two genes. A dominant allele at the first gene (C) is required for color production. The second gene determines whether the color is red (R) or yellow (r). What is the expected phenotypic ratio in the F2 generation from a dihybrid cross?",
      options: ["9 red : 3 yellow : 4 white", "12 red : 3 yellow : 1 white", "9 red : 7 white", "9 red : 6 yellow : 1 white"],
      correct: 0,
      topic: "Lec06 - Recessive Epistasis",
      explanation: "This is a case of recessive epistasis. The presence of cc (4/16) results in white flowers regardless of the second gene. C_R_ (9/16) is red, and C_rr (3/16) is yellow."
    },
    {
      q: "What is the primary function of DNA helicase during DNA replication?",
      options: [
        "To add new nucleotides to the growing strand.",
        "To join Okazaki fragments.",
        "To unwind the double helix by breaking hydrogen bonds.",
        "To synthesize RNA primers."
      ],
      correct: 2,
      topic: "Lec14 - DNA Replication",
      explanation: "DNA helicase unwinds the DNA double helix by breaking the hydrogen bonds between complementary base pairs, creating the replication fork."
    }
  ]
};