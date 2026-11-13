window.BATCHES = window.BATCHES || [];
window.BATCHES[11] = {
  title: "Batch 12",
  questions: [
    {
      q: "In a species of flowering plant, a dominant allele (A) is required for the production of a red pigment, while the recessive allele (a) produces no pigment (white). A second gene determines whether the pigment is red (R) or yellow (r). What phenotypic ratio is expected in the F2 generation of a cross between two plants heterozygous for both genes (AaRr x AaRr)?",
      options: ["9 red : 3 yellow : 4 white", "12 red : 3 yellow : 1 white", "9 red : 7 white", "9 red : 6 yellow : 1 white"],
      correct: 0,
      topic: "Lec06 - Recessive Epistasis",
      explanation: "This is recessive epistasis. The aa genotype (4/16) results in white regardless of the R locus. A_R_ (9/16) is red, and A_rr (3/16) is yellow. This gives a 9:3:4 ratio."
    },
    {
      q: "A pedigree shows a trait appearing in every generation, affecting both males and females equally. An affected father passes the trait to all his daughters but none of his sons. What is the most likely mode of inheritance?",
      options: ["Autosomal dominant", "Autosomal recessive", "X-linked dominant", "Y-linked"],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis (X-linked Dominant)",
      explanation: "X-linked dominant traits are passed from an affected father (X^D Y) to all his daughters (who receive X^D) but not to his sons (who receive Y)."
    },
    {
      q: "A testcross is performed on a dihybrid individual (AaBb). If the genes are completely linked in the cis configuration (AB/ab), what phenotypic ratio is expected in the offspring?",
      options: ["1:1:1:1", "9:3:3:1", "1:1", "3:1"],
      correct: 2,
      topic: "Lec08 - Linkage",
      explanation: "Complete linkage in the cis configuration means the individual produces only two types of gametes: AB and ab. The testcross offspring will be 50% AaBb and 50% aabb, giving a 1:1 phenotypic ratio."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.3. What is the frequency of the homozygous dominant genotype?",
      options: ["0.09", "0.21", "0.49", "0.70"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q = 0.3, so p = 0.7. The frequency of the homozygous dominant genotype is p² = (0.7)² = 0.49."
    },
    {
      q: "Which of the following is an example of a nonsense mutation?",
      options: [
        "A change from GAG to GAA, coding for glutamic acid.",
        "A change from GAG to GUG, changing glutamic acid to valine.",
        "A change from GAG to UAG, creating a stop codon.",
        "An insertion of one nucleotide."
      ],
      correct: 2,
      topic: "Lec16 - DNA Mutations",
      explanation: "A nonsense mutation is a base substitution that converts an amino acid-coding codon into a stop codon (UAG, UAA, or UGA), resulting in premature termination of translation."
    },
    {
      q: "Which of the following is true regarding the lac operon when both lactose and glucose are present?",
      options: [
        "The operon is transcribed at a high level.",
        "The operon is transcribed at a low level.",
        "The operon is not transcribed at all.",
        "The operon is transcribed only if the repressor is active."
      ],
      correct: 1,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "Lactose inactivates the repressor, so transcription can occur. However, the presence of glucose reduces cAMP levels, preventing CAP from binding and stimulating high-level transcription. Thus, transcription occurs at a low basal level."
    },
    {
      q: "In a pedigree, two unaffected parents have an affected son. The son marries an unaffected woman and they have an affected daughter. What is the most likely mode of inheritance?",
      options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "X-linked dominant"],
      correct: 1,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "The first generation parents are unaffected but have an affected son, indicating a recessive trait. The son (affected, aa) marries an unaffected woman and has an affected daughter (aa). This is consistent with autosomal recessive inheritance if the woman is a carrier."
    },
    {
      q: "A woman with type AB blood marries a man with type O blood. What are the possible genotypes of their children?",
      options: ["I^A I^A and I^B I^B", "I^A i and I^B i", "I^A I^B and ii", "I^A I^B and I^A i"],
      correct: 1,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The woman is I^A I^B and the man is ii. The children will inherit either I^A or I^B from the mother and i from the father, resulting in genotypes I^A i (type A) or I^B i (type B)."
    },
    {
      q: "What is the probability that a couple, both heterozygous for an autosomal recessive disorder (Aa x Aa), will have a child who is a carrier (Aa)?",
      options: ["1/4", "1/2", "3/4", "1"],
      correct: 1,
      topic: "Lec05 - Probability",
      explanation: "The cross Aa x Aa produces genotypes in a 1 AA : 2 Aa : 1 aa ratio. The probability of a carrier (Aa) is 2/4 = 1/2."
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
      q: "In a population of 1000 individuals, 90 have the recessive phenotype. Assuming Hardy-Weinberg equilibrium, what is the frequency of the recessive allele?",
      options: ["0.09", "0.30", "0.70", "0.90"],
      correct: 1,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "The frequency of the recessive phenotype is q² = 90/1000 = 0.09. The frequency of the recessive allele is q = √0.09 = 0.3."
    },
    {
      q: "Which of the following is the correct base pairing for DNA?",
      options: [
        "A pairs with U, G pairs with C",
        "A pairs with T, G pairs with C",
        "A pairs with G, T pairs with C",
        "A pairs with C, G pairs with T"
      ],
      correct: 1,
      topic: "Lec13 - DNA Structure",
      explanation: "In DNA, Adenine (A) pairs with Thymine (T) and Guanine (G) pairs with Cytosine (C)."
    },
    {
      q: "In Drosophila, eye color is X-linked. A heterozygous red-eyed female (X^R X^r) is crossed with a red-eyed male (X^R Y). What proportion of their daughters will be white-eyed?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 0,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "Daughters inherit X^R from their father, so they will all have at least one dominant allele and will be red-eyed (either X^R X^R or X^R X^r). None will be white-eyed."
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
      q: "What is the function of DNA polymerase in DNA replication?",
      options: [
        "It unwinds the DNA double helix.",
        "It adds nucleotides to the growing DNA strand.",
        "It joins Okazaki fragments.",
        "It synthesizes RNA primers."
      ],
      correct: 1,
      topic: "Lec14 - DNA Replication",
      explanation: "DNA polymerase catalyzes the addition of complementary nucleotides to the 3' end of the growing DNA strand."
    },
    {
      q: "In a plant with the genotype AaBb, assuming independent assortment, how many different types of gametes can be produced?",
      options: ["2", "4", "8", "16"],
      correct: 1,
      topic: "Lec05 - Probability Method",
      explanation: "The number of gamete types is 2^n, where n is the number of heterozygous gene pairs. Here n=2, so 2² = 4."
    },
    {
      q: "In a cross between a heterozygous tall pea plant (Tt) and a homozygous dwarf pea plant (tt), what is the phenotypic ratio of the offspring?",
      options: ["3 tall : 1 dwarf", "1 tall : 1 dwarf", "All tall", "All dwarf"],
      correct: 1,
      topic: "Lec02 - Monohybrid Crosses",
      explanation: "The cross Tt x tt produces offspring that are either Tt (tall) or tt (dwarf) in a 1:1 ratio."
    },
    {
      q: "Which of the following is a characteristic of an autosomal recessive trait in a pedigree?",
      options: [
        "It appears in every generation.",
        "It affects males more than females.",
        "It can skip generations and often appears in consanguineous marriages.",
        "An affected individual always has an affected parent."
      ],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "Autosomal recessive traits can skip generations because carriers (heterozygotes) are phenotypically normal. They are more common in consanguineous (inbreeding) marriages."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the dominant allele is 0.6. What is the frequency of the homozygous recessive genotype?",
      options: ["0.16", "0.36", "0.40", "0.48"],
      correct: 0,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "If p = 0.6, then q = 0.4. The frequency of the homozygous recessive genotype is q² = (0.4)² = 0.16."
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