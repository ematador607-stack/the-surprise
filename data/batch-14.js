window.BATCHES = window.BATCHES || [];
window.BATCHES[13] = {
  title: "Batch 14",
  questions: [
    {
      q: "Pattern baldness in humans is often cited as an example of a sex-influenced trait. Which of the following statements best describes the genetic basis of this phenomenon?",
      options: [
        "The allele for baldness is located on the X chromosome and is dominant in males but recessive in females.",
        "The allele for baldness is autosomal, acting as a dominant allele in males and a recessive allele in females.",
        "The allele for baldness is autosomal and is only expressed in males due to the presence of testosterone.",
        "The allele for baldness is located on the Y chromosome and is passed exclusively from father to son."
      ],
      correct: 1,
      topic: "Lec07 - Sex-influenced Traits",
      explanation: "Sex-influenced traits are autosomal but the dominance relationship changes depending on the sex, often due to hormonal differences. In pattern baldness, the allele behaves as dominant in males and recessive in females."
    },
    {
      q: "In a pedigree, a trait is seen in both sexes but is significantly more common in males. The trait is never passed from an affected father to his sons, but an affected father passes the allele to all his daughters, who are unaffected. What is the most likely mode of inheritance?",
      options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Y-linked"],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis / Sex-Linked",
      explanation: "This describes an X-linked recessive trait. Affected fathers pass the affected X to daughters (making them carriers), but pass Y to sons, so they cannot pass it to their sons. The trait is more common in males because they are hemizygous."
    },
    {
      q: "In a three-point testcross, the following offspring are produced from a heterozygote (ABC/abc) crossed with a homozygous recessive (abc/abc): ABC: 420, abc: 415, Abc: 25, aBC: 23, ABc: 12, abC: 10, AbC: 2, aBc: 3. Which gene is in the middle?",
      options: ["Gene A", "Gene B", "Gene C", "Cannot be determined"],
      correct: 1,
      topic: "Lec08 - Three-Point Testcross / Gene Order",
      explanation: "The double crossover (DCO) offspring are the least frequent (AbC and aBc, 2 and 3). Comparing the DCO genotypes to the parental genotypes (ABC and abc), the gene that differs between each DCO and its parental — i.e., the one that switches — is B. Therefore, gene B is in the middle (order A-B-C)."
    },
    {
      q: "Using the data from the previous question, what is the map distance between gene B and gene C?",
      options: ["3.0 cM", "6.0 cM", "11.0 cM", "16.0 cM"],
      correct: 0,
      topic: "Lec08 - Linkage Mapping",
      explanation: "Recombinants between B and C are the single crossovers in that interval (ABc: 12 and abC: 10) plus the double crossovers (AbC: 2 and aBc: 3), for a total of 27. Total offspring = 910. RF = 27/910 ≈ 2.97 ≈ 3.0 cM."
    },
    {
      q: "A couple, both with normal vision, have a color-blind son. Their daughter is a carrier for color blindness and marries a normal man. What is the probability that their first child will be color-blind?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 1,
      topic: "Lec09 - Pedigree Construction / Probability",
      explanation: "The daughter is a carrier (X^C X^c) and marries a normal man (X^C Y). Each child has a 25% chance of being a color-blind son (1/2 chance of being a son × 1/2 chance of inheriting X^c)."
    },
    {
      q: "Which of the following is the best definition of assortative mating?",
      options: [
        "Mating between individuals that are genetically related.",
        "Mating between individuals that are phenotypically similar.",
        "Random mating within a population.",
        "Mating between individuals with different phenotypes."
      ],
      correct: 1,
      topic: "Lec12 - Non-random Mating (Assortative Mating)",
      explanation: "Assortative mating is a type of non-random mating where individuals with similar phenotypes mate more frequently than expected under random mating."
    },
    {
      q: "Down syndrome is caused by trisomy 21. Which of the following mechanisms most commonly leads to this condition?",
      options: [
        "A point mutation in the chromosome 21 gene.",
        "Nondisjunction during meiosis in one of the parents.",
        "A translocation between chromosome 21 and chromosome 14.",
        "A deletion of a segment of chromosome 21."
      ],
      correct: 1,
      topic: "Lec16 - Chromosomal Abnormalities",
      explanation: "Down syndrome (trisomy 21) is most commonly caused by nondisjunction, the failure of homologous chromosomes or sister chromatids to separate properly during meiosis, resulting in a gamete with an extra copy of chromosome 21."
    },
    {
      q: "Which of the following describes gene therapy that involves altering the genes in a patient's somatic cells?",
      options: ["Germ-line gene therapy", "Somatic cell gene therapy", "Transgenic therapy", "Recombinant therapy"],
      correct: 1,
      topic: "Lec20 - Human Gene Therapy",
      explanation: "Somatic cell gene therapy involves introducing a normal gene into somatic (non-reproductive) cells to treat a disease. It is not heritable, unlike germ-line gene therapy."
    },
    {
      q: "In a pedigree, a trait is observed in a father and his daughter, but not in his son. The daughter marries an unaffected man and has an affected son. What is the most likely mode of inheritance?",
      options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "X-linked dominant"],
      correct: 2,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "The pattern is consistent with X-linked recessive inheritance. The affected father passes the allele to his daughter (carrier). She then passes it to her affected son."
    },
    {
      q: "Which of the following is a key difference between somatic and germ-line gene therapy?",
      options: [
        "Somatic cell gene therapy is heritable, while germ-line gene therapy is not.",
        "Germ-line gene therapy is currently being used to treat human diseases, while somatic cell gene therapy is not.",
        "Somatic cell gene therapy affects only the individual, while germ-line gene therapy affects future generations.",
        "Germ-line gene therapy involves modifying somatic cells, while somatic cell gene therapy involves modifying gametes."
      ],
      correct: 2,
      topic: "Lec20 - Human Gene Therapy",
      explanation: "Somatic gene therapy alters cells of the patient only and is not passed to offspring. Germ-line gene therapy alters gametes or embryos and is heritable, affecting future generations."
    },
    {
      q: "In a cross between a male with an X-linked dominant disorder and a normal female, what is the expected phenotypic ratio of their offspring?",
      options: [
        "All daughters affected, all sons normal",
        "All sons affected, all daughters normal",
        "Half of the daughters affected, half of the sons affected",
        "All offspring affected"
      ],
      correct: 0,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "The affected male (X^D Y) passes the affected X^D to all his daughters, making them affected. He passes the Y to his sons, who inherit a normal X from the mother, making them normal."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the dominant allele is 0.3. What is the frequency of the homozygous recessive genotype?",
      options: ["0.09", "0.21", "0.49", "0.70"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "p = 0.3, so q = 0.7. The frequency of homozygous recessive (q²) is (0.7)² = 0.49."
    },
    {
      q: "Which of the following chromosomal abnormalities is an example of aneuploidy?",
      options: [
        "A tetraploid plant (4n)",
        "A human with 45 chromosomes (monosomy X)",
        "A human with a translocation between chromosomes 9 and 22",
        "A human with a duplicated segment on chromosome 16"
      ],
      correct: 1,
      topic: "Lec16 - Chromosomal Abnormalities",
      explanation: "Aneuploidy is the presence of an abnormal number of chromosomes (e.g., 45 or 47). Monosomy X (Turner syndrome) is an example. Tetraploidy is polyploidy."
    },
    {
      q: "A trait is seen in males and females but is expressed more strongly in males than in females. This is an example of:",
      options: ["Sex-linked trait", "Sex-limited trait", "Sex-influenced trait", "Pleiotropic trait"],
      correct: 2,
      topic: "Lec07 - Sex-influenced Traits",
      explanation: "Sex-influenced traits are autosomal traits whose expression is influenced by the sex of the individual, often due to hormonal differences (e.g., pattern baldness)."
    },
    {
      q: "Which of the following best describes a transgenic organism?",
      options: [
        "An organism that has been produced by cloning.",
        "An organism that contains a gene from another species.",
        "An organism that has a mutation in its own genome.",
        "An organism that has a chromosomal abnormality."
      ],
      correct: 1,
      topic: "Lec20 - Recombinant DNA Technology",
      explanation: "A transgenic organism is one that has had foreign DNA (a transgene) inserted into its genome, often from a different species."
    },
    {
      q: "A woman is a carrier for an X-linked recessive disorder. She has a son and a daughter with a normal man. What is the probability that her daughter is a carrier?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 2,
      topic: "Lec09 - Pedigree Probability",
      explanation: "The mother is X^A X^a; the father is X^A Y. The daughter inherits X^A from the father. She has a 50% chance of inheriting X^a from the mother, making her a carrier."
    },
    {
      q: "In a population, the frequency of a recessive genetic disorder is 1 in 10,000. What is the frequency of carriers in the population?",
      options: ["0.0001", "0.01", "0.0198", "0.198"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q² = 0.0001, so q = 0.01, p = 0.99. Carrier frequency (2pq) = 2 × 0.99 × 0.01 = 0.0198."
    },
    {
      q: "In the context of gene regulation, which of the following is true regarding eukaryotic genes?",
      options: [
        "They are organized into operons.",
        "They are transcribed and translated simultaneously.",
        "Each gene typically has its own promoter.",
        "They are regulated primarily by repressors."
      ],
      correct: 2,
      topic: "Lec18 - Regulation of Gene Expression (Prokaryotes vs Eukaryotes)",
      explanation: "Unlike prokaryotes, eukaryotic genes are not organized into operons and each gene generally has its own promoter. Transcription occurs in the nucleus and translation in the cytoplasm."
    }
  ]
};