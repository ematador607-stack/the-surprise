window.BATCHES = window.BATCHES || [];
window.BATCHES[0] = {
  title: "Batch 1",
  questions: [
    {
      q: "Which of the following best defines an allele?",
      options: [
        "A specific physical location of a gene on a chromosome.",
        "The complete set of genes possessed by an organism.",
        "One of two or more alternative forms of a gene.",
        "The observable physical or biochemical characteristics of an organism."
      ],
      correct: 2,
      topic: "Lec01 - Gene vs Allele",
      explanation: "An allele is an alternative form of a gene (e.g., T or t). A is the definition of a locus; B is a genome; D is a phenotype."
    },
    {
      q: "An individual that has two identical alleles for a particular trait is said to be:",
      options: ["Heterozygous", "Hemizygous", "Homozygous", "Codominant"],
      correct: 2,
      topic: "Lec01 - Homozygous vs Heterozygous vs Hemizygous",
      explanation: "Homozygous means having two identical alleles (e.g., AA or aa). Heterozygous means having two different alleles (Aa). Hemizygous refers to having only one copy of a gene (e.g., X-linked genes in males)."
    },
    {
      q: "In a cross between a true-breeding tall pea plant (TT) and a dwarf pea plant (tt), what is the expected phenotypic ratio of the F2 generation if the F1 offspring are self-fertilized?",
      options: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
      correct: 1,
      topic: "Lec02 - Mendelian Principles (Segregation)",
      explanation: "The F1 generation will all be heterozygous (Tt). A monohybrid cross of Tt x Tt yields a 3:1 phenotypic ratio (3 tall : 1 dwarf) assuming complete dominance."
    },
    {
      q: "Which statement correctly describes the principle of independent assortment?",
      options: [
        "Alleles for a single gene separate during gamete formation.",
        "Genes located on the same chromosome are always inherited together.",
        "During gamete formation, alleles of different genes assort independently of one another.",
        "The phenotype of an organism is determined entirely by its genotype."
      ],
      correct: 2,
      topic: "Lec03 - Mendelian Principles II (Independent Assortment)",
      explanation: "The law of independent assortment states that members of one gene pair segregate independently of other gene pairs during gamete formation, applying to genes on different chromosomes or far apart on the same chromosome."
    },
    {
      q: "In snapdragons, flower color exhibits incomplete dominance. A cross between a red-flowered plant and a white-flowered plant produces pink F1 offspring. If the F1 generation is self-crossed, what phenotypic ratio is expected in the F2?",
      options: [
        "3 red : 1 white",
        "1 red : 2 pink : 1 white",
        "9 red : 6 pink : 1 white",
        "1 red : 1 pink"
      ],
      correct: 1,
      topic: "Lec03 - Incomplete dominance",
      explanation: "Incomplete dominance results in a blending phenotype in heterozygotes. A cross of two heterozygotes (pink x pink) yields a 1:2:1 phenotypic ratio."
    },
    {
      q: "The ABO blood group system in humans is an example of which genetic phenomenon?",
      options: ["Epistasis", "Multiple allelism and codominance", "Incomplete dominance", "Pleiotropy"],
      correct: 1,
      topic: "Lec03 - Multiple Allelism / ABO Blood Groups",
      explanation: "There are three alleles (I^A, I^B, i) in the population, making it multiple allelism. I^A and I^B are codominant, meaning both antigens are fully expressed in the AB phenotype."
    },
    {
      q: "In mice, the allele for yellow coat color (Y) is dominant, but homozygous individuals (YY) die as embryos. If two yellow mice are crossed, what is the expected phenotypic ratio of the surviving offspring?",
      options: ["3 yellow : 1 agouti (non-yellow)", "2 yellow : 1 agouti", "1 yellow : 1 agouti", "All yellow"],
      correct: 1,
      topic: "Lec04 - Lethal Alleles",
      explanation: "The cross Yy x Yy normally yields 1 YY : 2 Yy : 1 yy. Since YY is lethal, the surviving offspring are 2 Yy (yellow) : 1 yy (agouti), a 2:1 ratio."
    },
    {
      q: "A single gene mutation causes a disease characterized by multiple, seemingly unrelated symptoms affecting the lungs, brain, and skin. This is an example of:",
      options: ["Epistasis", "Incomplete penetrance", "Pleiotropy", "Variable expressivity"],
      correct: 2,
      topic: "Lec04 - Pleiotropy",
      explanation: "Pleiotropy occurs when one gene affects multiple phenotypic traits. Cystic fibrosis is a classic example, affecting the lungs, pancreas, and other organs."
    },
    {
      q: "In a species of plant, a dominant allele at one locus prevents the expression of a gene at another locus. The F2 generation from a dihybrid cross yields a phenotypic ratio of 12:3:1. What type of epistasis is this?",
      options: ["Recessive epistasis", "Complementary gene action", "Dominant epistasis", "Duplicate gene action"],
      correct: 2,
      topic: "Lec06 - Dominant Epistasis",
      explanation: "A 12:3:1 ratio indicates dominant epistasis, where the presence of a dominant allele at one locus masks the expression of alleles at a second locus."
    },
    {
      q: "A woman with blood type A and a man with blood type AB have a child. Which of the following blood types is NOT possible for their child?",
      options: ["Type A", "Type B", "Type AB", "Type O"],
      correct: 3,
      topic: "Lec03 - ABO Blood Groups (Application)",
      explanation: "The mother could be I^A I^A or I^A i, and the father is I^A I^B. To have a Type O child (ii), both parents must contribute an 'i' allele. The father (AB) does not have an 'i' allele, so a Type O child is impossible."
    },
    {
      q: "Which of the following statements correctly differentiates sex-linked traits from sex-limited traits?",
      options: [
        "Sex-linked traits are located on autosomes, while sex-limited traits are on sex chromosomes.",
        "Sex-linked traits are expressed differently between sexes, while sex-limited traits are only expressed in one sex.",
        "Sex-linked traits are determined by genes on sex chromosomes, while sex-limited traits are autosomal but expressed only in one sex.",
        "Sex-linked traits are controlled by multiple genes, while sex-limited traits are controlled by a single gene."
      ],
      correct: 2,
      topic: "Lec07 - Sex-linked vs sex-limited traits",
      explanation: "Sex-linked traits involve genes on sex chromosomes (X or Y). Sex-limited traits are controlled by autosomal genes but the phenotype is expressed only in one sex due to hormonal differences."
    },
    {
      q: "A color-blind man (X^c Y) marries a woman who is a carrier for color blindness (X^C X^c). What proportion of their daughters will be color-blind?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 2,
      topic: "Lec07 - X-linked recessive inheritance",
      explanation: "Daughters receive X^c from the father. They have a 50% chance of receiving X^c from the mother (X^c X^c, color-blind) and 50% chance of receiving X^C (X^C X^c, carrier)."
    },
    {
      q: "In a pedigree analysis, a trait appears in every generation, affects both males and females equally, and an affected individual always has an affected parent. This most likely indicates:",
      options: ["Autosomal recessive inheritance", "Autosomal dominant inheritance", "X-linked recessive inheritance", "Y-linked inheritance"],
      correct: 1,
      topic: "Lec09 - Pedigree Analysis (Autosomal Dominant)",
      explanation: "Autosomal dominant traits typically do not skip generations, and an affected offspring must inherit the allele from at least one affected parent."
    },
    {
      q: "In a three-point testcross, the recombination frequencies between genes A, B, and C are: A-B = 18%, B-C = 12%, and A-C = 6%. What is the correct order of the genes on the chromosome?",
      options: ["A-B-C", "B-A-C", "A-C-B", "C-A-B"],
      correct: 2,
      topic: "Lec08 - Linkage Mapping",
      explanation: "The distance between A and B (18) is approximately the sum of A-C (6) and C-B (12), meaning C is in the middle. Thus, the order is A-C-B (or B-C-A)."
    },
    {
      q: "Recombination frequency is used to calculate the genetic distance between two linked genes. If the recombination frequency is 15%, what is the genetic distance in map units (centiMorgans)?",
      options: ["1.5 cM", "15 cM", "30 cM", "150 cM"],
      correct: 1,
      topic: "Lec08 - Centimorgan / Map Unit",
      explanation: "One map unit (1 centiMorgan, cM) is defined as 1% recombination frequency. Therefore, a 15% recombination frequency equals 15 map units."
    },
    {
      q: "Which of the following is NOT an assumption of the Hardy-Weinberg equilibrium?",
      options: [
        "The population must be large.",
        "Mating must be random.",
        "Natural selection must be acting on the population.",
        "No new mutations can occur."
      ],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Equilibrium assumptions",
      explanation: "The Hardy-Weinberg equilibrium assumes that there is NO natural selection, no mutation, no gene flow (migration), random mating, and a large population size."
    },
    {
      q: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.3. What is the frequency of heterozygous carriers in the population?",
      options: ["0.09", "0.21", "0.42", "0.49"],
      correct: 2,
      topic: "Lec11 - Hardy-Weinberg Calculations",
      explanation: "If q = 0.3, then p = 1 - 0.3 = 0.7. The frequency of heterozygotes is 2pq = 2 * (0.7) * (0.3) = 0.42."
    },
    {
      q: "A volcanic eruption wipes out 90% of a population, leaving a small number of survivors whose allele frequencies differ significantly from the original population. This is an example of:",
      options: ["Natural selection", "Gene flow", "Bottleneck effect", "Founder effect"],
      correct: 2,
      topic: "Lec12 - Microevolutionary Forces (Genetic Drift)",
      explanation: "The bottleneck effect occurs when a population's size is drastically reduced by a chance event, leading to a random shift in allele frequencies in the surviving population."
    },
    {
      q: "Which process describes the transfer of genetic information from DNA to mRNA?",
      options: ["Replication", "Transcription", "Translation", "Transformation"],
      correct: 1,
      topic: "Lec15 - Transcription",
      explanation: "Transcription is the synthesis of an mRNA molecule from a DNA template, occurring in the nucleus of eukaryotes."
    },
    {
      q: "In the lac operon of E. coli, what happens in the presence of lactose and the absence of glucose?",
      options: [
        "The repressor binds to the operator, and transcription is blocked.",
        "The repressor is inactivated, and CAP-cAMP binds to the promoter to stimulate transcription.",
        "The repressor is inactivated, but transcription occurs at a very low basal level.",
        "CAP-cAMP does not bind, and the operon is turned off."
      ],
      correct: 1,
      topic: "Lec18 - Regulation of Gene Expression in Prokaryotes (Lac Operon)",
      explanation: "Lactose (via allolactose) inactivates the repressor, allowing RNA polymerase to bind. The absence of glucose leads to high cAMP levels, which binds CAP to strongly activate transcription."
    }
  ]
};