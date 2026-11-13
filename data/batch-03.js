window.BATCHES = window.BATCHES || [];
window.BATCHES[2] = {
  title: "Batch 3",
  questions: [
    {
      q: "In a monohybrid cross between two heterozygotes (Aa x Aa), what is the genotypic ratio of the offspring?",
      options: ["3:1", "1:2:1", "1:1", "9:3:3:1"],
      correct: 1,
      topic: "Lec02 - Monohybrid Crosses",
      explanation: "The cross Aa x Aa produces the genotypes AA, Aa, and aa in a 1:2:1 ratio respectively, assuming complete dominance."
    },
    {
      q: "A couple, both with free earlobes (a dominant trait), have a child with attached earlobes. What are the genotypes of the parents?",
      options: [
        "Both are homozygous dominant (EE).",
        "Both are heterozygous (Ee).",
        "One is heterozygous (Ee) and the other is homozygous recessive (ee).",
        "One is homozygous dominant (EE) and the other is heterozygous (Ee)."
      ],
      correct: 1,
      topic: "Lec01 - Genotype vs Phenotype",
      explanation: "For the child to have attached earlobes (recessive, ee), they must inherit an 'e' allele from each parent. Since both parents have free earlobes, they must be heterozygous (Ee)."
    },
    {
      q: "A woman with type A blood (genotype I^A i) has a child with type O blood. Which of the following genotypes could be the father?",
      options: ["I^A I^A", "I^A I^B", "I^B i", "I^B I^B"],
      correct: 2,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The child is ii. The mother contributes an 'i' allele. The father must also contribute an 'i' allele. Only genotype I^B i among the options contains an 'i' allele."
    },
    {
      q: "In a cross between a homozygous black mouse and a homozygous brown mouse, all the F1 offspring are black. When the F1 mice are intercrossed, the F2 generation has 75% black mice and 25% brown mice. Which allele is dominant?",
      options: ["Black", "Brown", "Neither is dominant.", "Both are codominant."],
      correct: 0,
      topic: "Lec02 - Principles of Dominance",
      explanation: "The F1 generation showing only black indicates the black allele is completely dominant over the brown allele."
    },
    {
      q: "Which of the following represents a heterozygous genotype?",
      options: ["AA", "aa", "Aa", "A"],
      correct: 2,
      topic: "Lec01 - Homozygous vs Heterozygous",
      explanation: "A heterozygous genotype consists of two different alleles for a particular gene (e.g., Aa)."
    },
    {
      q: "In humans, the presence of freckles (F) is dominant to the absence of freckles (f). If a person with freckles (FF) marries a person without freckles (ff), what is the probability that their child will have freckles?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 3,
      topic: "Lec02 - Test Cross / Monohybrid Cross",
      explanation: "The cross is FF x ff. All offspring will inherit 'F' from the first parent and 'f' from the second, resulting in the heterozygous genotype Ff, which expresses freckles."
    },
    {
      q: "The ABO blood group is an example of a trait controlled by multiple alleles. How many alleles are possible in a single individual?",
      options: ["One", "Two", "Three", "Four"],
      correct: 1,
      topic: "Lec03 - Multiple Allelism",
      explanation: "While there are three alleles in the population (I^A, I^B, i), a single diploid individual can only possess two of them."
    },
    {
      q: "A cross between two pink-flowered snapdragons produces 1/4 red, 1/2 pink, and 1/4 white offspring. This is an example of:",
      options: ["Complete dominance", "Codominance", "Incomplete dominance", "Epistasis"],
      correct: 2,
      topic: "Lec03 - Incomplete Dominance",
      explanation: "The heterozygote (pink) shows an intermediate phenotype between the two homozygotes (red and white). The 1:2:1 ratio in the offspring is characteristic of incomplete dominance."
    },
    {
      q: "Which of the following statements about lethal alleles is correct?",
      options: [
        "They always cause death before birth.",
        "They are always recessive.",
        "They can alter Mendelian phenotypic ratios, such as producing a 2:1 ratio.",
        "They do not affect the genotype frequencies in a population."
      ],
      correct: 2,
      topic: "Lec04 - Lethal Alleles",
      explanation: "Lethal alleles can be dominant or recessive and can act before or after birth. A classic example is the yellow mouse allele, which gives a 2:1 ratio of yellow to non-yellow survivors because the homozygote dies."
    },
    {
      q: "In the human ABO blood group system, the I^A and I^B alleles are codominant. What does this mean for a person with genotype I^A I^B?",
      options: [
        "They express only the A antigen.",
        "They express only the B antigen.",
        "They express both A and B antigens.",
        "They express neither A nor B antigens."
      ],
      correct: 2,
      topic: "Lec03 - Codominance",
      explanation: "Codominance means both alleles are fully and simultaneously expressed in the phenotype. Therefore, blood type AB expresses both A and B antigens on the red blood cells."
    },
    {
      q: "In a pedigree analysis, a trait is observed in a child but neither parent has the trait. This suggests what mode of inheritance?",
      options: ["Autosomal dominant", "Autosomal recessive", "X-linked dominant", "Y-linked"],
      correct: 1,
      topic: "Lec09 - Pedigree Analysis",
      explanation: "If neither parent expresses the trait, they must be carriers (heterozygous) for a recessive allele. The child inherits the recessive allele from both parents."
    },
    {
      q: "A male with an X-linked recessive disorder mates with a homozygous normal female. What is the expected phenotype of their daughters?",
      options: [
        "All daughters will be affected.",
        "All daughters will be carriers.",
        "Half of the daughters will be affected.",
        "All daughters will be normal and non-carriers."
      ],
      correct: 1,
      topic: "Lec07 - Sex-Linked Traits",
      explanation: "Daughters inherit an X from their father (carrying the disorder allele) and an X from their mother (normal allele). They will all be heterozygous carriers and phenotypically normal (assuming complete dominance of the normal allele)."
    },
    {
      q: "The recombination frequency between two linked genes is 24%. What is the distance between these genes in map units?",
      options: ["12 cM", "24 cM", "48 cM", "76 cM"],
      correct: 1,
      topic: "Lec08 - Linkage Mapping",
      explanation: "One map unit is equivalent to 1% recombination frequency. Therefore, a 24% recombination frequency corresponds to 24 map units (centiMorgans)."
    },
    {
      q: "In a population, the frequency of a dominant allele (A) is 0.6. Assuming Hardy-Weinberg equilibrium, what is the expected frequency of the homozygous recessive genotype (aa)?",
      options: ["0.16", "0.36", "0.48", "0.40"],
      correct: 0,
      topic: "Lec11 - Hardy-Weinberg Principle",
      explanation: "If p (frequency of A) = 0.6, then q (frequency of a) = 0.4. The frequency of homozygous recessive (q^2) is (0.4)^2 = 0.16."
    },
    {
      q: "Which of the following is a key difference between DNA and RNA?",
      options: [
        "DNA contains uracil, RNA contains thymine.",
        "DNA is usually double-stranded, RNA is usually single-stranded.",
        "DNA contains ribose sugar, RNA contains deoxyribose sugar.",
        "DNA is found in the cytoplasm, RNA is found in the nucleus."
      ],
      correct: 1,
      topic: "Lec13 - Introduction to Molecular Genetics",
      explanation: "DNA is typically double-stranded and contains deoxyribose and thymine. RNA is usually single-stranded and contains ribose and uracil."
    },
    {
      q: "During translation, the sequence of codons on the mRNA is read by which molecule?",
      options: ["DNA polymerase", "Ribosomal RNA", "Transfer RNA (tRNA)", "RNA polymerase"],
      correct: 2,
      topic: "Lec15 - Translation",
      explanation: "tRNA molecules have anticodons that base-pair with the codons on the mRNA. Each tRNA carries the corresponding amino acid to the ribosome."
    },
    {
      q: "The process of transcription in eukaryotes occurs in which cellular location?",
      options: ["Cytoplasm", "Ribosome", "Mitochondria", "Nucleus"],
      correct: 3,
      topic: "Lec15 - Transcription",
      explanation: "In eukaryotic cells, transcription (DNA to mRNA) takes place in the nucleus, while translation (mRNA to protein) occurs in the cytoplasm."
    },
    {
      q: "A mutation that changes a codon from UAU (Tyrosine) to UAA (Stop) is classified as a:",
      options: ["Silent mutation", "Missense mutation", "Nonsense mutation", "Frameshift mutation"],
      correct: 2,
      topic: "Lec16 - DNA Mutations",
      explanation: "A nonsense mutation is a base substitution that prematurely changes an amino acid-coding codon into a stop codon, terminating translation."
    },
    {
      q: "Which of the following structural features is typical of a eukaryotic chromosome?",
      options: [
        "A single, circular DNA molecule.",
        "A linear DNA molecule associated with histone proteins.",
        "The absence of a centromere.",
        "Being found in the cytoplasm."
      ],
      correct: 1,
      topic: "Lec07 - Chromosomes",
      explanation: "Eukaryotic chromosomes are typically linear, found in the nucleus, and composed of DNA tightly coiled around histone proteins. Prokaryotes usually have a single, circular chromosome."
    },
    {
      q: "In the context of gene regulation, what is an operon?",
      options: [
        "A single gene that codes for a single protein.",
        "A cluster of genes transcribed together into a single mRNA molecule in prokaryotes.",
        "A sequence of DNA that codes for a repressor protein.",
        "The entire set of genes in an organism."
      ],
      correct: 1,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "An operon is a functional unit of genomic DNA containing a cluster of genes under the control of a single promoter. It is a key regulatory mechanism in prokaryotes."
    }
  ]
};