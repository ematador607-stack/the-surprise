window.BATCHES = window.BATCHES || [];
window.BATCHES[9] = {
  title: "Batch 10",
  questions: [
    {
      q: "In a cross between two heterozygous individuals (Aa x Aa), what is the probability of producing an offspring with the dominant phenotype?",
      options: ["1/4", "1/2", "3/4", "1"],
      correct: 2,
      topic: "Lec02 - Monohybrid Crosses",
      explanation: "The cross Aa x Aa yields genotypes 1 AA : 2 Aa : 1 aa. The dominant phenotype is expressed by AA and Aa, so the probability is 1/4 + 1/2 = 3/4."
    },
    {
      q: "A woman who is a carrier for an X-linked recessive disorder (X^A X^a) has children with an affected man (X^a Y). What proportion of their daughters will be affected?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 2,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "Daughters inherit X^a from the father. They have a 50% chance of inheriting X^a from the mother (affected) and a 50% chance of inheriting X^A (carrier). Thus, 50% of daughters are affected."
    },
    {
      q: "In a pedigree, a trait is present in every generation and affects both sexes equally. An affected individual always has at least one affected parent. This is most likely:",
      options: ["Autosomal recessive", "Autosomal dominant", "X-linked recessive", "Y-linked"],
      correct: 1,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "Autosomal dominant traits typically appear in every generation and do not skip generations, as an affected individual must inherit the dominant allele from an affected parent."
    },
    {
      q: "Two genes, A and B, are linked. In a testcross of an individual with genotype AB/ab, the following offspring are produced: 40 AB/ab, 40 ab/ab, 10 Ab/ab, 10 aB/ab. What is the recombination frequency between genes A and B?",
      options: ["10%", "20%", "40%", "80%"],
      correct: 1,
      topic: "Lec08 - Linkage Mapping",
      explanation: "Recombinant offspring are Ab/ab and aB/ab (10 + 10 = 20). Total offspring = 100. Recombination frequency = 20/100 = 0.20 = 20%."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the homozygous recessive genotype is 0.25. What is the frequency of the dominant allele?",
      options: ["0.25", "0.50", "0.75", "1.00"],
      correct: 1,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q² = 0.25, so q = 0.5. The dominant allele frequency p = 1 - 0.5 = 0.5."
    },
    {
      q: "Which of the following is an example of a heritable mutation?",
      options: [
        "A mutation in a skin cell caused by UV radiation.",
        "A mutation in a gamete that is passed to offspring.",
        "A mutation in a muscle cell that causes cancer.",
        "A mutation in a red blood cell."
      ],
      correct: 1,
      topic: "Lec16 - DNA Mutations",
      explanation: "Only mutations in germ-line cells (gametes) are heritable and can be passed on to offspring. Somatic mutations are not inherited."
    },
    {
      q: "Which of the following is true about a nonsense mutation?",
      options: [
        "It changes one amino acid to another.",
        "It creates a premature stop codon.",
        "It does not change the amino acid sequence.",
        "It shifts the reading frame."
      ],
      correct: 1,
      topic: "Lec16 - DNA Mutations",
      explanation: "A nonsense mutation is a base substitution that converts an amino acid-coding codon into a stop codon, resulting in a shortened protein."
    },
    {
      q: "What is the function of the operator in the lac operon?",
      options: [
        "It codes for the repressor protein.",
        "It is the binding site for RNA polymerase.",
        "It is the binding site for the repressor protein.",
        "It codes for beta-galactosidase."
      ],
      correct: 2,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "The operator is a DNA sequence where the repressor protein binds to block transcription when lactose is absent."
    },
    {
      q: "In a dihybrid cross, a 9:3:3:1 phenotypic ratio in the F2 generation indicates:",
      options: [
        "Linkage of the two genes.",
        "Epistasis between the two genes.",
        "Independent assortment of the two genes.",
        "Incomplete dominance."
      ],
      correct: 2,
      topic: "Lec05 - Dihybrid Crosses",
      explanation: "A 9:3:3:1 ratio is the classic Mendelian ratio for two independently assorting genes with complete dominance."
    },
    {
      q: "What is the expected phenotypic ratio of the offspring from a cross between a heterozygous black guinea pig (Bb) and a heterozygous black guinea pig (Bb), assuming complete dominance for the black allele?",
      options: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
      correct: 1,
      topic: "Lec02 - Monohybrid Crosses",
      explanation: "The cross Bb x Bb produces 1 BB : 2 Bb : 1 bb. The phenotypes are 3 black (BB and Bb) : 1 white (bb)."
    },
    {
      q: "Which of the following is an example of a dominant lethal allele?",
      options: [
        "The allele for cystic fibrosis.",
        "The allele for Huntington's disease.",
        "The allele for sickle cell anemia.",
        "The allele for Tay-Sachs disease."
      ],
      correct: 1,
      topic: "Lec04 - Lethal Alleles",
      explanation: "Huntington's disease is caused by a dominant allele that is lethal, but its effects typically appear after reproductive age, so it is not strongly selected against."
    },
    {
      q: "A population of 500 individuals has 320 individuals with the AA genotype, 160 with the Aa genotype, and 20 with the aa genotype. What is the frequency of the A allele?",
      options: ["0.64", "0.80", "0.32", "0.16"],
      correct: 1,
      topic: "Lec10 - Allele Frequency Calculations",
      explanation: "The frequency of A = (2 * 320 + 160) / (2 * 500) = 800 / 1000 = 0.8."
    },
    {
      q: "Which of the following describes the bottleneck effect?",
      options: [
        "A random change in allele frequencies due to a small number of individuals starting a new population.",
        "A random change in allele frequencies due to a drastic reduction in population size.",
        "The movement of alleles between populations.",
        "The differential survival and reproduction of individuals."
      ],
      correct: 1,
      topic: "Lec12 - Genetic Drift",
      explanation: "The bottleneck effect occurs when a population's size is drastically reduced by a chance event, leading to a random change in allele frequencies in the surviving population."
    },
    {
      q: "What is the role of the promoter in transcription?",
      options: [
        "It is the sequence where RNA polymerase binds to initiate transcription.",
        "It codes for the repressor protein.",
        "It is the site of translation.",
        "It marks the end of a gene."
      ],
      correct: 0,
      topic: "Lec15 - Transcription",
      explanation: "The promoter is a DNA sequence that binds RNA polymerase and other transcription factors to initiate transcription."
    },
    {
      q: "In a testcross, a heterozygous tall pea plant (Tt) is crossed with a homozygous dwarf pea plant (tt). What is the expected phenotypic ratio of the offspring?",
      options: ["3 tall : 1 dwarf", "1 tall : 1 dwarf", "All tall", "All dwarf"],
      correct: 1,
      topic: "Lec02 - Testcross",
      explanation: "The cross Tt x tt produces offspring that are either Tt (tall) or tt (dwarf) in a 1:1 ratio."
    },
    {
      q: "Which of the following is a characteristic of an X-linked recessive trait in a pedigree?",
      options: [
        "It affects males and females equally.",
        "It is passed from an affected father to all his sons.",
        "It is more common in males than in females.",
        "It appears in every generation."
      ],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "X-linked recessive traits are more common in males because males have only one X chromosome, so a single recessive allele is sufficient to express the trait."
    },
    {
      q: "What is the probability that a couple, both heterozygous for an autosomal recessive disorder, will have an affected child?",
      options: ["0%", "25%", "50%", "75%"],
      correct: 1,
      topic: "Lec05 - Probability",
      explanation: "The cross Aa x Aa produces aa offspring with a probability of 1/4 (25%)."
    },
    {
      q: "In the lac operon, which of the following conditions leads to the highest level of transcription?",
      options: ["High lactose, high glucose.", "High lactose, low glucose.", "Low lactose, high glucose.", "Low lactose, low glucose."],
      correct: 1,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "High lactose inactivates the repressor, and low glucose leads to high cAMP levels, which allows CAP to bind and strongly activate transcription."
    },
    {
      q: "A mutation that occurs in a somatic cell is:",
      options: ["Passed on to offspring.", "Not passed on to offspring.", "Always lethal.", "Always beneficial."],
      correct: 1,
      topic: "Lec16 - DNA Mutations",
      explanation: "Somatic mutations occur in non-reproductive cells and are not passed on to offspring. Only germ-line mutations are heritable."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele is 0.2. What is the frequency of the homozygous dominant genotype?",
      options: ["0.04", "0.32", "0.64", "0.80"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q = 0.2, so p = 0.8. The frequency of the homozygous dominant genotype is p² = (0.8)² = 0.64."
    }
  ]
};