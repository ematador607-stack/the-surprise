window.BATCHES = window.BATCHES || [];
window.BATCHES[1] = {
  title: "Batch 2",
  questions: [
    {
      q: "A diploid organism has a genotype AaBb. Assuming the genes assort independently, how many different types of gametes can this organism produce, and what are they?",
      options: ["2 types: AB and ab", "4 types: AB, Ab, aB, ab", "4 types: Aa, Bb, AB, ab", "8 types: AAB, Aab, BbA, etc."],
      correct: 1,
      topic: "Lec03 - Mendelian Principles II (Independent Assortment)",
      explanation: "With two heterozygous gene pairs assorting independently, the number of gamete types is 2^n where n is the number of heterozygous pairs. 2^2 = 4 types (AB, Ab, aB, ab)."
    },
    {
      q: "In humans, the allele for dimples (D) is dominant to the allele for no dimples (d). If a dimpled parent and a non-dimpled parent have a child with no dimples, what are the genotypes of the parents?",
      options: ["DD x dd", "Dd x dd", "Dd x Dd", "DD x Dd"],
      correct: 1,
      topic: "Lec02 - Monohybrid Crosses / Test Cross",
      explanation: "The non-dimpled parent must be dd. To have a non-dimpled child (dd), the dimpled parent must carry a recessive allele, making them Dd."
    },
    {
      q: "Which of the following is an example of a trait controlled by multiple alleles in a population?",
      options: [
        "Flower color in snapdragons (red, pink, white)",
        "Human ABO blood groups (A, B, AB, O)",
        "Coat color in Labrador retrievers (black, brown, yellow)",
        "Height in humans"
      ],
      correct: 1,
      topic: "Lec03 - Multiple Allelism",
      explanation: "The ABO blood group is controlled by three alleles (I^A, I^B, i). Snapdragon color is incomplete dominance; Labrador coat color involves epistasis."
    },
    {
      q: "A man with type AB blood marries a woman with type O blood. What blood types are possible in their children?",
      options: ["A and B only", "A, B, and AB", "A and O only", "AB and O only"],
      correct: 0,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The father is I^A I^B and the mother is ii. The children must inherit an 'i' from the mother and either I^A or I^B from the father, resulting in type A (I^A i) or type B (I^B i)."
    },
    {
      q: "In a cross between a heterozygous black guinea pig (Bb) and a heterozygous black guinea pig (Bb), what is the probability of producing a homozygous recessive (bb) offspring?",
      options: ["1/4", "1/2", "3/4", "0"],
      correct: 0,
      topic: "Lec05 - Probability Method",
      explanation: "The probability of inheriting 'b' from the father is 1/2, and from the mother is 1/2. The probability of bb is 1/2 * 1/2 = 1/4."
    },
    {
      q: "Red-green color blindness is an X-linked recessive trait. A normal-visioned man marries a carrier woman. What is the probability that their son will be color-blind?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 2,
      topic: "Lec07 - Sex-linked Traits",
      explanation: "The son inherits his Y chromosome from his father. He has a 50% chance of inheriting the X chromosome carrying the color-blind allele from his carrier mother."
    },
    {
      q: "Which of the following best describes a testcross?",
      options: [
        "Crossing an individual with an unknown genotype with a homozygous dominant individual.",
        "Crossing an individual with an unknown genotype with a homozygous recessive individual.",
        "Crossing two heterozygotes.",
        "Crossing two individuals with the same phenotype."
      ],
      correct: 1,
      topic: "Lec02 - Test Cross",
      explanation: "A testcross is used to determine the genotype of an individual showing the dominant phenotype by crossing it with a homozygous recessive individual."
    },
    {
      q: "In a pedigree, a trait appears only in males and is passed from an affected father to all of his sons. This trait is most likely:",
      options: ["Autosomal dominant", "X-linked dominant", "X-linked recessive", "Y-linked"],
      correct: 3,
      topic: "Lec09 - Pedigree Analysis (Y-linked)",
      explanation: "Y-linked traits are passed exclusively from father to son, as sons inherit the Y chromosome from their fathers."
    },
    {
      q: "What is the term for the physical location of a gene on a chromosome?",
      options: ["Allele", "Locus", "Genotype", "Genome"],
      correct: 1,
      topic: "Lec01 - Gene vs Allele",
      explanation: "A locus (plural loci) is the specific physical position of a gene or DNA sequence on a chromosome."
    },
    {
      q: "Which statement about incomplete penetrance is correct?",
      options: [
        "The phenotype is always expressed if the genotype is present.",
        "The degree of phenotype expression varies among individuals with the same genotype.",
        "An individual with the disease-causing genotype may not express the phenotype.",
        "It is the same as variable expressivity."
      ],
      correct: 2,
      topic: "Lec04 - Penetrance vs Expressivity",
      explanation: "Incomplete penetrance means that not all individuals with a particular genotype express the expected phenotype. Variable expressivity refers to the degree of expression."
    },
    {
      q: "In a dihybrid cross involving two independently assorting genes (AaBb x AaBb), what proportion of the offspring will be homozygous recessive for both genes (aabb)?",
      options: ["1/16", "1/8", "1/4", "9/16"],
      correct: 0,
      topic: "Lec05 - Dihybrid Crosses",
      explanation: "The probability of aa is 1/4, and the probability of bb is 1/4. Because genes assort independently, the probability of both is 1/4 * 1/4 = 1/16."
    },
    {
      q: "Which of the following types of gene interaction results in a 9:7 phenotypic ratio in the F2 generation?",
      options: ["Recessive epistasis", "Dominant epistasis", "Complementary gene action", "Duplicate gene action"],
      correct: 2,
      topic: "Lec06 - Epistasis (Complementary)",
      explanation: "Complementary gene action requires at least one dominant allele at both loci to produce the phenotype, resulting in a 9:7 ratio."
    },
    {
      q: "In Drosophila, the dominant allele for normal wings (W) is on an autosome, and the recessive allele for white eyes (w) is on the X chromosome. A heterozygous normal-winged, red-eyed female is crossed with a normal-winged, white-eyed male. What proportion of the offspring will be white-eyed males?",
      options: ["1/8", "1/4", "1/2", "3/4"],
      correct: 1,
      topic: "Lec07 - Sex-linked Traits",
      explanation: "The female is X^W X^w; the male is X^w Y. Half of the sons will be X^w Y (white-eyed). The probability of a son is 1/2. So, 1/2 * 1/2 = 1/4 of all offspring."
    },
    {
      q: "A genetic map unit (centiMorgan) is defined as:",
      options: [
        "The physical distance between two genes on a chromosome.",
        "A 1% recombination frequency between two genes.",
        "The distance between the centromere and the telomere.",
        "The number of genes on a chromosome."
      ],
      correct: 1,
      topic: "Lec08 - Linkage Mapping",
      explanation: "A centiMorgan (map unit) is defined as the distance between two genes that recombine 1% of the time."
    },
    {
      q: "The expected double crossover frequency between two genes is calculated to be 0.02. If the observed double crossover frequency is 0.01, what is the interference value?",
      options: ["0.5", "1.0", "0.0", "2.0"],
      correct: 0,
      topic: "Lec08 - Interference",
      explanation: "Interference = 1 - (Observed DCO / Expected DCO) = 1 - (0.01 / 0.02) = 1 - 0.5 = 0.5."
    },
    {
      q: "Which of the following is the ultimate source of new genetic variation in a population?",
      options: ["Gene flow", "Genetic drift", "Mutation", "Natural selection"],
      correct: 2,
      topic: "Lec12 - Microevolutionary Forces (Mutation)",
      explanation: "Mutation is the only process that creates entirely new alleles in a population, providing the raw material for evolution."
    },
    {
      q: "A population of 1000 individuals has 90 individuals with the homozygous recessive genotype (aa). Assuming Hardy-Weinberg equilibrium, what is the frequency of the recessive allele (q)?",
      options: ["0.09", "0.3", "0.9", "0.03"],
      correct: 1,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q^2 = 90/1000 = 0.09. Therefore, q = √0.09 = 0.3."
    },
    {
      q: "Which of the following describes the function of DNA ligase during DNA replication?",
      options: [
        "It unwinds the double helix.",
        "It joins Okazaki fragments on the lagging strand.",
        "It adds RNA primers to the template strand.",
        "It proofreads the newly synthesized DNA."
      ],
      correct: 1,
      topic: "Lec14 - DNA Replication",
      explanation: "DNA ligase catalyzes the formation of phosphodiester bonds, joining the Okazaki fragments on the lagging strand into a continuous DNA strand."
    },
    {
      q: "A mutation involving the insertion or deletion of a single nucleotide in a coding sequence results in:",
      options: ["A silent mutation", "A nonsense mutation", "A frameshift mutation", "A missense mutation"],
      correct: 2,
      topic: "Lec16 - DNA Mutations",
      explanation: "Insertions or deletions of a single base pair alter the reading frame of the entire downstream sequence, causing a frameshift mutation."
    },
    {
      q: "In eukaryotes, gene expression can be regulated at the level of chromatin structure. Which of the following modifications typically leads to gene activation?",
      options: [
        "DNA methylation at CpG islands",
        "Histone deacetylation",
        "Histone acetylation",
        "Addition of methyl groups to histones"
      ],
      correct: 2,
      topic: "Lec19 - Regulation of Gene Expression in Eukaryotes",
      explanation: "Histone acetylation neutralizes the positive charge of histones, loosening the DNA-histone interaction and opening the chromatin structure for transcription."
    }
  ]
};