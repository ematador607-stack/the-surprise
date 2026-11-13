window.BATCHES = window.BATCHES || [];
window.BATCHES[10] = {
  title: "Batch 11",
  questions: [
    {
      q: "In a species of plant, a dominant allele (A) is required for the production of a red pigment, while the recessive allele (a) produces no pigment (white). A second gene determines whether the pigment is red (R) or yellow (r). What phenotypic ratio is expected in the F2 generation of a cross between two plants heterozygous for both genes (AaRr x AaRr)?",
      options: ["9 red : 3 yellow : 4 white", "12 red : 3 yellow : 1 white", "9 red : 7 white", "9 red : 6 yellow : 1 white"],
      correct: 0,
      topic: "Lec06 - Recessive Epistasis",
      explanation: "This is recessive epistasis. The aa genotype (4/16) results in white regardless of the R locus. A_R_ (9/16) is red, and A_rr (3/16) is yellow. This gives a 9:3:4 ratio."
    },
    {
      q: "In a pedigree, a trait is passed from a father to all of his sons and none of his daughters. What is the most likely mode of inheritance?",
      options: ["Autosomal dominant", "X-linked dominant", "X-linked recessive", "Y-linked"],
      correct: 3,
      topic: "Lec09 - Pedigree Analysis (Y-linked)",
      explanation: "Y-linked traits are located on the Y chromosome, which is passed only from father to son. Therefore, an affected father will pass the trait to all of his sons."
    },
    {
      q: "In a testcross of a dihybrid individual (AaBb), if the genes are completely linked and the individual is in the cis configuration (AB/ab), what phenotypic ratio is expected in the offspring?",
      options: ["1:1:1:1", "9:3:3:1", "1:1", "3:1"],
      correct: 2,
      topic: "Lec08 - Linkage",
      explanation: "If the genes are completely linked in the cis configuration, the individual produces only two types of gametes: AB and ab. The testcross offspring will be 50% AaBb and 50% aabb, giving a 1:1 phenotypic ratio."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.6. What is the frequency of the homozygous dominant genotype?",
      options: ["0.16", "0.36", "0.48", "0.60"],
      correct: 0,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q = 0.6, so p = 0.4. The frequency of the homozygous dominant genotype is p² = (0.4)² = 0.16."
    },
    {
      q: "Which of the following is an example of a frameshift mutation?",
      options: [
        "A substitution of an A for a G.",
        "An insertion of two nucleotides.",
        "A deletion of three nucleotides.",
        "A substitution that creates a stop codon."
      ],
      correct: 1,
      topic: "Lec16 - DNA Mutations",
      explanation: "Frameshift mutations occur when the number of inserted or deleted nucleotides is not a multiple of three, altering the reading frame. An insertion of two nucleotides would cause a frameshift."
    },
    {
      q: "Which of the following is true regarding the regulation of the lac operon?",
      options: [
        "The lac operon is inducible and is turned on when lactose is present.",
        "The lac operon is repressible and is turned off when lactose is present.",
        "The lac operon is constitutive and is always expressed.",
        "The lac operon is regulated by glucose only."
      ],
      correct: 0,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "The lac operon is an inducible operon. It is turned on in the presence of lactose, which inactivates the repressor and allows transcription of the genes needed for lactose metabolism."
    },
    {
      q: "In a pedigree, two unaffected parents have an affected daughter. What is the mode of inheritance?",
      options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "X-linked dominant"],
      correct: 1,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "The parents must be carriers (heterozygous) for an autosomal recessive trait. An X-linked recessive trait would only affect the daughter if the father was affected (since he would pass the affected X to her)."
    },
    {
      q: "A woman with type A blood and a man with type B blood have a child with type O blood. What are the genotypes of the parents?",
      options: ["I^A I^A and I^B I^B", "I^A i and I^B i", "I^A I^B and ii", "I^A i and I^B I^B"],
      correct: 1,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "For a child to have type O blood (ii), both parents must carry the recessive 'i' allele. Therefore, the parents must be I^A i and I^B i."
    },
    {
      q: "What is the probability that a couple, both carriers for cystic fibrosis (an autosomal recessive disorder), will have an affected child?",
      options: ["1/4", "1/2", "3/4", "0"],
      correct: 0,
      topic: "Lec05 - Probability",
      explanation: "Both parents are heterozygous (Cc). The probability of an affected child (cc) from a Cc x Cc cross is 1/4."
    },
    {
      q: "Which of the following is an example of a multiple allele system?",
      options: [
        "Flower color in snapdragons",
        "Human ABO blood groups",
        "Coat color in Labrador retrievers",
        "Height in humans"
      ],
      correct: 1,
      topic: "Lec03 - Multiple Allelism",
      explanation: "The ABO blood group system is controlled by three alleles (I^A, I^B, i), making it a multiple allele system."
    },
    {
      q: "In a population of 200 individuals, 128 have the dominant phenotype and 72 have the recessive phenotype. Assuming Hardy-Weinberg equilibrium, what is the frequency of the recessive allele?",
      options: ["0.36", "0.60", "0.64", "0.80"],
      correct: 1,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "The frequency of the recessive phenotype is q² = 72/200 = 0.36. The frequency of the recessive allele is q = √0.36 = 0.6."
    },
    {
      q: "Which of the following is the correct base pairing for RNA?",
      options: [
        "A pairs with T, G pairs with C",
        "A pairs with U, G pairs with C",
        "A pairs with G, U pairs with C",
        "A pairs with C, G pairs with U"
      ],
      correct: 1,
      topic: "Lec13 - RNA Structure",
      explanation: "In RNA, Adenine (A) pairs with Uracil (U) instead of Thymine (T). Guanine (G) still pairs with Cytosine (C)."
    },
    {
      q: "In Drosophila, eye color is X-linked. A heterozygous red-eyed female (X^R X^r) is crossed with a red-eyed male (X^R Y). What proportion of their sons will be white-eyed?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 2,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "Sons inherit their X chromosome from their mother. The mother is heterozygous (X^R X^r), so there is a 50% chance a son inherits X^r and is white-eyed."
    },
    {
      q: "Which of the following describes the founder effect?",
      options: [
        "A drastic reduction in population size due to a chance event.",
        "A small group of individuals establishing a new population with a different allele frequency than the original population.",
        "The movement of individuals between populations.",
        "Differential reproductive success based on phenotype."
      ],
      correct: 1,
      topic: "Lec12 - Genetic Drift",
      explanation: "The founder effect is a type of genetic drift that occurs when a small group of individuals colonizes a new habitat, resulting in a new population with allele frequencies that may differ from the original population."
    },
    {
      q: "What is the function of DNA ligase in DNA replication?",
      options: [
        "It unwinds the DNA double helix.",
        "It adds nucleotides to the growing DNA strand.",
        "It joins Okazaki fragments on the lagging strand.",
        "It synthesizes RNA primers."
      ],
      correct: 2,
      topic: "Lec14 - DNA Replication",
      explanation: "DNA ligase catalyzes the formation of phosphodiester bonds that join the Okazaki fragments into a continuous DNA strand."
    },
    {
      q: "In a plant with the genotype AaBbCc, assuming independent assortment, how many different types of gametes can be produced?",
      options: ["3", "6", "8", "16"],
      correct: 2,
      topic: "Lec05 - Probability Method",
      explanation: "The number of gamete types is 2^n, where n is the number of heterozygous gene pairs. Here n=3, so 2³ = 8."
    },
    {
      q: "In a cross between a homozygous tall pea plant (TT) and a homozygous dwarf pea plant (tt), what is the genotype of the F1 generation?",
      options: ["TT", "tt", "Tt", "Tt and tt"],
      correct: 2,
      topic: "Lec02 - Monohybrid Crosses",
      explanation: "All F1 offspring inherit one T allele from the tall parent and one t allele from the dwarf parent, making them all heterozygous (Tt)."
    },
    {
      q: "Which of the following is a characteristic of an autosomal dominant trait in a pedigree?",
      options: [
        "It skips generations.",
        "It affects males more than females.",
        "It appears in every generation.",
        "It is more common in consanguineous marriages."
      ],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "Autosomal dominant traits typically appear in every generation because an affected individual has a 50% chance of passing the dominant allele to their offspring."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the heterozygous genotype is 0.48. If p is the frequency of the dominant allele (with p > q), what is the value of p?",
      options: ["0.2", "0.4", "0.6", "0.8"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "2pq = 0.48 and p + q = 1 gives p(1 - p) = 0.24, so p = 0.6 and q = 0.4 (the other root, p = 0.4, corresponds to q being the dominant allele). Since p is defined as the dominant allele frequency with p > q, p = 0.6."
    },
    {
      q: "Which of the following is an example of a silent mutation?",
      options: [
        "A change from GAG to GUG, changing glutamic acid to valine.",
        "A change from GAG to GAA, coding for glutamic acid.",
        "A change from GAG to UAG, creating a stop codon.",
        "An insertion of one nucleotide."
      ],
      correct: 1,
      topic: "Lec16 - DNA Mutations",
      explanation: "Silent mutations are base substitutions that do not change the amino acid sequence. Both GAG and GAA code for glutamic acid."
    }
  ]
};