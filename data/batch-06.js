window.BATCHES = window.BATCHES || [];
window.BATCHES[5] = {
  title: "Batch 6",
  questions: [
    {
      q: "How does the principle of segregation arise from events during meiosis?",
      options: [
        "Homologous chromosomes pair up and exchange segments during prophase I.",
        "Sister chromatids separate during anaphase II, ensuring each gamete gets one copy.",
        "Homologous chromosomes separate from each other during anaphase I, distributing alleles into different gametes.",
        "The random alignment of chromosome pairs at the metaphase plate during metaphase I."
      ],
      correct: 2,
      topic: "Lec02 - Mendelian Principles & Meiosis",
      explanation: "The principle of segregation is explained by the separation of homologous chromosomes during anaphase I of meiosis. Each homologous chromosome carries one allele, so they end up in different gametes."
    },
    {
      q: "In voles, coat colour is an autosomal multiallelic trait where black (C^B) is dominant to grey (C^G), and both are dominant to albino (c). An albino vole (cc) mates with a black vole and produces black and grey progeny in equal proportions. What is the genotype of the black parent?",
      options: ["C^B C^B", "C^B C^G", "C^B c", "C^G c"],
      correct: 1,
      topic: "Lec03 - Multiple Allelism / Testcross",
      explanation: "The albino parent can only give 'c' alleles. To produce grey progeny (which must be C^G c), the black parent must carry the C^G allele. To be black, it must also carry C^B. Thus, its genotype is C^B C^G."
    },
    {
      q: "Using the scenario in the previous question (albino vole x black vole producing black and grey offspring), what genotypes and phenotypes are possible if their black progeny (C^B c) is crossed with their grey progeny (C^G c)?",
      options: [
        "1/2 black (C^B C^G) : 1/2 grey (C^G c)",
        "1/4 black (C^B C^G) : 1/4 black (C^B c) : 1/4 grey (C^G c) : 1/4 albino (cc)",
        "1/2 black (C^B c) : 1/2 albino (cc)",
        "1/4 black (C^B C^G) : 1/2 grey (C^B c) : 1/4 albino (cc)"
      ],
      correct: 1,
      topic: "Lec03 - Multiple Allelism",
      explanation: "Cross C^B c x C^G c yields: C^B C^G (black), C^B c (black), C^G c (grey), and cc (albino) in a 1:1:1:1 ratio (1/4 each)."
    },
    {
      q: "In Drosophila, the recessive allele (c) encodes curly wings, and the recessive allele (w) encodes wingless. In a dihybrid cross, pure-breeding curly-winged flies (cc WW) are crossed with pure-breeding wingless flies (CC ww). The F1 progeny are all wild-type. What genotype are the F1 progeny?",
      options: ["cc ww", "Cc Ww", "CC WW", "Cc ww"],
      correct: 1,
      topic: "Lec03 - Dihybrid Crosses",
      explanation: "Pure-breeding curly-winged (cc WW) crossed with pure-breeding wingless (CC ww) produces F1 progeny that are heterozygous for both genes (Cc Ww), which exhibit the wild-type phenotype."
    },
    {
      q: "In the cross from the previous question (Cc Ww x Cc Ww), what genetic phenomenon does the F2 phenotypic ratio of 9 wild-type : 3 curly : 3 wingless : 1 curly-wingless illustrate?",
      options: ["Epistasis", "Incomplete dominance", "Independent assortment", "Linkage"],
      correct: 2,
      topic: "Lec03 - Independent Assortment",
      explanation: "A 9:3:3:1 ratio in the F2 generation of a dihybrid cross is the classic hallmark of independent assortment, indicating the genes are on different chromosomes or far apart."
    },
    {
      q: "A plant has the genotype Aa B¹B² Cc D¹D². Genes A and C show complete dominance, while B and D show codominance. If this plant is self-fertilized, how many different phenotypes could be produced?",
      options: ["12", "24", "36", "72"],
      correct: 2,
      topic: "Lec03 - Multiple Gene Crosses",
      explanation: "For complete dominance (A, C), a heterozygous self-cross yields 2 phenotypes each. For codominance (B, D), a heterozygous self-cross yields 3 phenotypes each. Total = 2 × 3 × 2 × 3 = 36."
    },
    {
      q: "From the plant in the previous question (Aa B¹B² Cc D¹D²), what proportion of the progeny would have the same genotype as the parent?",
      options: ["1/8", "1/16", "1/32", "1/64"],
      correct: 1,
      topic: "Lec05 - Probability Method",
      explanation: "Probability of Aa = 1/2; B¹B² = 1/2; Cc = 1/2; D¹D² = 1/2. The combined probability is (1/2)^4 = 1/16."
    },
    {
      q: "A woman with blood group A has a daughter with blood group O. Two men claim to be the father. One has blood group O, the other has blood group AB. Who is the father?",
      options: [
        "The man with blood group O.",
        "The man with blood group AB.",
        "Either man could be the father.",
        "Neither man can be the father."
      ],
      correct: 0,
      topic: "Lec03 - ABO Blood Groups",
      explanation: "The mother must be I^A i to have an O (ii) child. The child gets 'i' from the mother. The father must also provide an 'i' allele. The man with blood group O (ii) can provide an 'i' allele. The man with blood group AB (I^A I^B) cannot."
    },
    {
      q: "Two plants with white flowers, each from true-breeding strains, were crossed. All the F1 plants had purple flowers. When these F1 were crossed, they produced an F2 generation consisting of 90 plants with purple flowers and 70 with white flowers. Can this result be understood in terms of epistasis?",
      options: [
        "Yes, it is a 9:7 ratio, indicating complementary gene action.",
        "Yes, it is a 12:3:1 ratio, indicating dominant epistasis.",
        "No, the ratio is 3:1, indicating a single gene.",
        "No, the ratio is 1:1, indicating a testcross."
      ],
      correct: 0,
      topic: "Lec06 - Epistasis (Complementary)",
      explanation: "The 90:70 ratio is approximately 9:7. This ratio is characteristic of complementary gene action where at least one dominant allele at both loci is needed for the purple phenotype."
    },
    {
      q: "In the experiment from the previous question (90 purple : 70 white), what biochemical pathway can be proposed for flower pigmentation?",
      options: [
        "Gene 1 (White precursor) → Gene 2 (Purple pigment), where both genes are needed for the final step.",
        "Gene 1 (White precursor) → Intermediate (White), Gene 2 (Intermediate) → Purple pigment. Both genes are needed for the final step.",
        "Gene 1 converts White to Purple, and Gene 2 converts Purple to White.",
        "Gene 1 is epistatic to Gene 2, blocking the pathway."
      ],
      correct: 1,
      topic: "Lec06 - Epistasis (Complementary)",
      explanation: "In complementary gene action, both genes are required for a functional pathway. If either gene is homozygous recessive, the pathway is blocked, resulting in the white phenotype. Thus, the 9:7 ratio."
    },
    {
      q: "In Drosophila, the dominant allele for grey body (G) and the dominant allele for normal wings (N) are linked. The recessive alleles result in black body (g) and vestigial wings (n). Flies homozygous for grey body and normal wings are crossed with flies having black bodies and vestigial wings. The F1 progeny are testcrossed, producing: 236 grey normal, 253 black vestigial, 50 grey vestigial, 61 black normal. Are these alleles linked?",
      options: [
        "No, the ratio is approximately 1:1:1:1.",
        "Yes, because the parental phenotypes are much more frequent than recombinants.",
        "No, because there are recombinant phenotypes.",
        "Yes, because the ratio is 9:3:3:1."
      ],
      correct: 1,
      topic: "Lec08 - Linkage",
      explanation: "The parental phenotypes (grey normal and black vestigial) are far more frequent (489 total) than the recombinants (grey vestigial and black normal, 111 total), indicating the genes are linked."
    },
    {
      q: "Using the data from the previous question, what is the map distance between the grey body and normal wing genes?",
      options: ["10 cM", "15 cM", "18.5 cM", "25 cM"],
      correct: 2,
      topic: "Lec08 - Linkage Mapping",
      explanation: "Total offspring = 600. Recombinants = 50 + 61 = 111. Recombination frequency = 111/600 = 0.185 = 18.5%. So the distance is 18.5 map units (cM)."
    },
    {
      q: "Give two examples of mutations that lead to an altered phenotype or disease. Describe how these mutations arise.",
      options: [
        "Sickle cell anemia and Cystic fibrosis; both arise from chromosomal nondisjunction.",
        "Sickle cell anemia arises from a point mutation (substitution) in the beta-globin gene; Cystic fibrosis arises from a deletion of three nucleotides (ΔF508) in the CFTR gene.",
        "Down syndrome and Turner syndrome; both arise from gene mutations.",
        "Huntington's disease and PKU; both arise from frameshift mutations."
      ],
      correct: 1,
      topic: "Lec16 - DNA Mutations",
      explanation: "Sickle cell anemia is caused by a single base substitution (missense mutation). Cystic fibrosis is often caused by a deletion of three nucleotides, leading to the loss of a phenylalanine residue (ΔF508)."
    },
    {
      q: "Assume you are investigating an HIV-infected population that behaves like an ideal population. The wild-type allele (I) occurs in 80% of the population, and the mutated allele (Δ32) occurs in 20%. What are the genotype frequencies in this population?",
      options: [
        "II = 0.80, IΔ32 = 0.16, Δ32Δ32 = 0.04",
        "II = 0.64, IΔ32 = 0.32, Δ32Δ32 = 0.04",
        "II = 0.64, IΔ32 = 0.16, Δ32Δ32 = 0.20",
        "II = 0.80, IΔ32 = 0.20, Δ32Δ32 = 0.00"
      ],
      correct: 1,
      topic: "Lec11 - Hardy-Weinberg Principle",
      explanation: "p = 0.8, q = 0.2. The genotype frequencies are p² = 0.64 (II), 2pq = 0.32 (IΔ32), and q² = 0.04 (Δ32Δ32)."
    },
    {
      q: "Is there a gene for violent behaviour? Discuss.",
      options: [
        "Yes, a single gene on the Y chromosome directly causes violence.",
        "No, violent behaviour is not determined by a single gene; it is a complex trait influenced by multiple genes and environmental factors.",
        "Yes, the MAOA gene is the sole determinant of violent behaviour.",
        "No, behaviour is entirely determined by environmental factors and has no genetic basis."
      ],
      correct: 1,
      topic: "Lec09 - Complex Traits / Behavioral Genetics",
      explanation: "Behavioural traits like aggression are polygenic and highly influenced by the environment. There is no single 'violence gene'; rather, multiple genes and environmental interactions contribute to the phenotype."
    },
    {
      q: "What are the four possible fates of DNA once it is transferred to a recipient cell?",
      options: [
        "Replication, transcription, translation, mutation.",
        "Integration into the host chromosome, degradation by nucleases, replication as a plasmid, and expression of its genes.",
        "Transformation, transduction, conjugation, and transposition.",
        "Denaturation, annealing, extension, and termination."
      ],
      correct: 1,
      topic: "Lec20 - Recombinant DNA Technology",
      explanation: "In bacterial transformation, transferred DNA can be degraded, replicate independently if it's a plasmid, integrate into the host genome, or be expressed to produce proteins."
    },
    {
      q: "A village population of 1000 is hit by a volcanic eruption, leaving 100 survivors. 40 of the survivors are homozygous recessive. Assuming the survivors mate randomly and the population is in Hardy-Weinberg equilibrium, calculate the predicted frequency of the heterozygous genotype.",
      options: ["0.24", "0.40", "0.48", "0.60"],
      correct: 3,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "q² = 40/100 = 0.4, so q ≈ 0.632 and p ≈ 0.368. The heterozygote frequency is 2pq ≈ 0.465, which is closest to 0.48 among the options. (See note: this question works out exactly if you use 36 survivors instead of 40.)"
    },
    {
      q: "Given that the allele frequencies in the previous question did change after the volcanic eruption, we can say that microevolution has occurred. What is the phenomenon that caused this evolution?",
      options: ["Natural selection", "Gene flow", "Genetic drift (specifically the bottleneck effect)", "Mutation"],
      correct: 2,
      topic: "Lec12 - Genetic Drift",
      explanation: "The drastic reduction in population size due to a chance event (volcanic eruption) is a bottleneck effect, a type of genetic drift."
    },
    {
      q: "What is the role of the TATA box in eukaryotic transcription?",
      options: [
        "It is a sequence that terminates transcription.",
        "It binds transcription factors and helps position RNA polymerase II to initiate transcription.",
        "It codes for the poly-A tail.",
        "It is the site of RNA splicing."
      ],
      correct: 1,
      topic: "Lec19 - Regulation of Gene Expression in Eukaryotes",
      explanation: "The TATA box is a core promoter element that is recognized by general transcription factors, which recruit RNA polymerase II to the transcription start site."
    },
    {
      q: "In the context of the lac operon, what is the effect of glucose on the regulation of the operon?",
      options: [
        "Glucose directly binds to the repressor, preventing it from binding to the operator.",
        "Glucose reduces cAMP levels, which prevents CAP from binding to the promoter, thereby reducing transcription.",
        "Glucose increases cAMP levels, which enhances CAP binding and increases transcription.",
        "Glucose has no effect on the lac operon; it only responds to lactose."
      ],
      correct: 1,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes",
      explanation: "When glucose is present, cAMP levels are low. Without cAMP, CAP cannot bind to the promoter, and transcription of the lac operon is not strongly activated, even if lactose is present."
    }
  ]
};