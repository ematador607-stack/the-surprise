window.BATCHES = window.BATCHES || [];
window.BATCHES[4] = {
  title: "Batch 5",
  questions: [
    {
      q: "A testcross is performed on a plant with the dominant phenotype but unknown genotype. The testcross produces offspring in a 1:1 ratio of dominant to recessive phenotypes. What was the genotype of the unknown parent?",
      options: ["Homozygous dominant", "Heterozygous", "Homozygous recessive", "Cannot be determined"],
      correct: 1,
      topic: "Lec02 - Test Cross",
      explanation: "A 1:1 ratio indicates that the unknown parent produced two types of gametes in equal proportions, meaning it must be heterozygous (Aa). A homozygous dominant would produce all dominant offspring."
    },
    {
      q: "In a species of bird, feather color is controlled by a single gene with two alleles: B (black) and b (white). Heterozygotes are grey. If two grey birds are crossed, what is the expected phenotypic ratio of the offspring?",
      options: ["3 black : 1 white", "1 black : 2 grey : 1 white", "1 black : 1 white", "9 black : 3 grey : 4 white"],
      correct: 1,
      topic: "Lec03 - Incomplete Dominance",
      explanation: "The heterozygote (grey) represents an intermediate phenotype, indicating incomplete dominance. A cross of Bb x Bb gives 1 BB (black) : 2 Bb (grey) : 1 bb (white)."
    },
    {
      q: "If a person has type B blood, which of the following genotypes could they have?",
      options: ["I^A I^A only", "I^B I^B only", "I^B i only", "I^B I^B or I^B i"],
      correct: 3,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "Type B blood is expressed when the genotype is either homozygous dominant (I^B I^B) or heterozygous (I^B i). The 'i' allele is recessive to I^B."
    },
    {
      q: "A woman who is a carrier for hemophilia (X^H X^h) marries a man who does not have hemophilia (X^H Y). What is the probability that they will have a son with hemophilia?",
      options: ["0%", "25%", "50%", "75%"],
      correct: 2,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "A son inherits the Y chromosome from his father and one of the X chromosomes from his mother. There is a 50% chance he inherits the X^h allele."
    },
    {
      q: "Which of the following individuals is considered hemizygous?",
      options: [
        "A female carrier of an X-linked trait.",
        "A male with an X-linked gene.",
        "A person homozygous for an autosomal trait.",
        "A person with an extra chromosome."
      ],
      correct: 1,
      topic: "Lec01 - Hemizygous",
      explanation: "Males have only one X chromosome, so they carry only one allele for X-linked genes. This condition is called hemizygous."
    },
    {
      q: "A couple has a child with an autosomal recessive disorder. Neither parent has the disorder. What are the probable genotypes of the parents?",
      options: [
        "Both are homozygous dominant.",
        "Both are heterozygous carriers.",
        "One is homozygous dominant, one is homozygous recessive.",
        "One is heterozygous, one is homozygous dominant."
      ],
      correct: 1,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "For an autosomal recessive disorder to appear in a child, both parents must carry at least one recessive allele. Since they are unaffected, they must be heterozygous carriers."
    },
    {
      q: "In pedigree analysis, which of the following would rule out X-linked dominant inheritance?",
      options: [
        "An affected father passing the trait to all his daughters.",
        "An affected father passing the trait to his son.",
        "An affected mother passing the trait to half her sons.",
        "An affected mother passing the trait to half her daughters."
      ],
      correct: 1,
      topic: "Lec09 - Pedigree Analysis (X-linked dominant)",
      explanation: "In X-linked dominant inheritance, an affected father passes his affected X chromosome to all daughters but passes his Y chromosome to sons. Therefore, an affected father cannot pass the trait to his son."
    },
    {
      q: "Linked genes are located:",
      options: ["On different chromosomes.", "On the same chromosome.", "In different nuclei.", "On the Y chromosome only."],
      correct: 1,
      topic: "Lec08 - Gene Linkage",
      explanation: "Linked genes are genes that are located on the same chromosome and tend to be inherited together."
    },
    {
      q: "In a testcross involving linked genes A and B, if the parental phenotypes appear much more frequently than the recombinant phenotypes, it indicates that:",
      options: [
        "The genes are assorting independently.",
        "The genes are very far apart on the chromosome.",
        "The genes are closely linked.",
        "One gene is epistatic to the other."
      ],
      correct: 2,
      topic: "Lec08 - Linkage Mapping",
      explanation: "A high frequency of parental types and a low frequency of recombinant types indicates that the genes are linked and relatively close together, reducing the probability of crossing over between them."
    },
    {
      q: "Recombination between two linked genes occurs as a result of:",
      options: [
        "Independent assortment of chromosomes.",
        "Crossing over during prophase I of meiosis.",
        "DNA replication errors during mitosis.",
        "Separation of sister chromatids in anaphase II."
      ],
      correct: 1,
      topic: "Lec08 - Recombination",
      explanation: "Recombination between linked genes occurs when homologous chromosomes exchange segments during crossing over in prophase I of meiosis."
    },
    {
      q: "Which of the following statements is true regarding a population in Hardy-Weinberg equilibrium?",
      options: [
        "The allele frequencies change from generation to generation.",
        "The genotype frequencies remain constant across generations.",
        "Natural selection actively favours the dominant allele.",
        "The population is not evolving at this locus."
      ],
      correct: 3,
      topic: "Lec11 - Hardy-Weinberg Principle",
      explanation: "When a population is in Hardy-Weinberg equilibrium, allele and genotype frequencies remain constant, meaning the population is not evolving at that particular gene locus."
    },
    {
      q: "A population has alleles A and a with frequencies p = 0.7 and q = 0.3. What is the frequency of the heterozygous genotype?",
      options: ["0.21", "0.42", "0.49", "0.70"],
      correct: 1,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "The frequency of the heterozygous genotype is 2pq = 2 * (0.7) * (0.3) = 0.42."
    },
    {
      q: "Which of the following describes the bottleneck effect?",
      options: [
        "Movement of individuals into a new population.",
        "Random changes in allele frequencies due to a drastic reduction in population size.",
        "Differential reproductive success based on phenotype.",
        "Non-random mating due to geographic proximity."
      ],
      correct: 1,
      topic: "Lec12 - Genetic Drift",
      explanation: "The bottleneck effect is a type of genetic drift where a population's size is drastically reduced for at least one generation, causing a random change in allele frequencies."
    },
    {
      q: "During DNA replication, which enzyme is responsible for adding new nucleotides to the growing DNA strand?",
      options: ["DNA helicase", "DNA ligase", "DNA polymerase", "RNA primase"],
      correct: 2,
      topic: "Lec14 - DNA Replication",
      explanation: "DNA polymerase catalyzes the addition of complementary nucleotides to the 3' end of the growing DNA strand."
    },
    {
      q: "Which of the following is the correct sequence of the central dogma of molecular biology?",
      options: ["Protein → RNA → DNA", "DNA → RNA → Protein", "RNA → DNA → Protein", "DNA → Protein → RNA"],
      correct: 1,
      topic: "Lec13 - Introduction to Molecular Genetics",
      explanation: "The central dogma describes the flow of genetic information in cells from DNA to mRNA via transcription, and from mRNA to protein via translation."
    },
    {
      q: "In the lac operon, the repressor protein is produced by the:",
      options: ["Operator", "Promoter", "Regulatory gene (lacI)", "Structural genes (lacZ, lacY, lacA)"],
      correct: 2,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "The lacI gene, which is located upstream of the lac operon, codes for the repressor protein that binds to the operator and prevents transcription in the absence of lactose."
    },
    {
      q: "What is the name of the process by which a bacterium takes up naked DNA from its environment?",
      options: ["Conjugation", "Transformation", "Transduction", "Translation"],
      correct: 1,
      topic: "Lec20 - Recombinant DNA Technology",
      explanation: "Transformation is the genetic alteration of a cell resulting from the direct uptake and incorporation of exogenous genetic material (naked DNA) from its surroundings."
    },
    {
      q: "Which of the following is an example of a chromosomal structural abnormality?",
      options: ["Trisomy 21", "Monosomy X", "Inversion of a chromosome segment", "Polyploidy"],
      correct: 2,
      topic: "Lec16 - Chromosomal Mutations",
      explanation: "Inversion involves the structural rearrangement of a chromosome segment. Trisomy, monosomy, and polyploidy are numerical abnormalities."
    },
    {
      q: "A mutation that occurs in the germ cells is referred to as:",
      options: ["A somatic mutation", "A germinal mutation", "A silent mutation", "A neutral mutation"],
      correct: 1,
      topic: "Lec16 - DNA Mutations",
      explanation: "Germinal (or germ-line) mutations occur in the reproductive cells (gametes) and can be passed on to offspring."
    },
    {
      q: "Which of the following is true regarding the relationship between genes and environment?",
      options: [
        "Phenotype is determined solely by genotype.",
        "Phenotype is determined solely by the environment.",
        "Phenotype is the result of the interaction between genotype and environment.",
        "Genes and environment act independently and do not interact."
      ],
      correct: 2,
      topic: "Lec06 - Gene Interactions / Environmental Effects",
      explanation: "The phenotype of an organism is not just a product of its genetic makeup; it results from the interaction of the genotype with the environment (nature and nurture)."
    }
  ]
};