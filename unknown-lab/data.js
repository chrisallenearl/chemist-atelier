export const groups = [
  {
    "id": "C1",
    "title": "Group I · chloride fraction",
    "prep": "Hot-water extraction first; retain extract and residue. Then treat washed residue with ammonia and retain BOTH fractions.",
    "tests": [
      {
        "id": "C1-0",
        "question": "Hot-water extract + chromate: yellow PbCrO₄ precipitate?",
        "target": "Pb²⁺",
        "photo": {
          "src": "assets/p6_2.png",
          "caption": "Yellow lead chromate precipitate.",
          "source": "https://pages.uoregon.edu/smrandy/topics/preciptopicmain.html",
          "credit": "University of Oregon"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://pages.uoregon.edu/smrandy/topics/preciptopicmain.html"
      },
      {
        "id": "C1-1",
        "question": "Ammonia-treated residue: gray or black material?",
        "target": "Hg₂²⁺",
        "photo": {
          "src": "assets/p6_3.png",
          "caption": "Gray/black material after ammonia treatment of mercury(I) chloride.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Mercury_Ions_(Hg_and_Hg)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Mercury_Ions_(Hg_and_Hg)"
      },
      {
        "id": "C1-2",
        "question": "Separated ammoniacal extract + acid: white AgCl returns?",
        "target": "Ag⁺",
        "photo": {
          "src": "assets/p6_1.png",
          "caption": "White silver chloride: representative product, not a before/after sequence.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Silver_Ions_(Ag)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "AgCl(s) + 2 NH₃ ⇌ [Ag(NH₃)₂]⁺ + Cl⁻. Acid consumes NH₃ and permits AgCl to return.",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Silver_Ions_(Ag)"
      }
    ],
    "route": "Dilute HCl group separation: retain chloride precipitate for Group I; liquid continues to Group II."
  },
  {
    "id": "C2A",
    "title": "Group IIA · sulfide fraction",
    "prep": "Use the prescribed subgroup separation and individual fractions; do not add all these reagents to one tube.",
    "tests": [
      {
        "id": "C2A-0",
        "question": "Mercury fraction + SnCl₂: white, gray or black reduction precipitate under the prescribed conditions?",
        "target": "Mercury",
        "photo": {
          "src": "assets/p7_1.png",
          "caption": "White stage of mercury reduction. This still photograph does not show the gray/black later stages.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Mercury_Ions_(Hg_and_Hg)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Mercury_Ions_(Hg_and_Hg)"
      },
      {
        "id": "C2A-1",
        "question": "Lead fraction + chromate: yellow PbCrO₄ precipitate?",
        "target": "Pb²⁺",
        "photo": {
          "src": "assets/p6_2.png",
          "caption": "Yellow lead chromate precipitate.",
          "source": "https://pages.uoregon.edu/smrandy/topics/preciptopicmain.html",
          "credit": "University of Oregon"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://pages.uoregon.edu/smrandy/topics/preciptopicmain.html"
      },
      {
        "id": "C2A-2",
        "question": "Bismuth fraction + alkaline stannite: black metal?",
        "target": "Bismuth",
        "photo": {
          "src": "assets/p7_3.png",
          "caption": "Black bismuth reduction product.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Bismuth__(Bi)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Bismuth__(Bi)"
      },
      {
        "id": "C2A-3",
        "question": "Copper fraction + excess ammonia: deep-blue liquid?",
        "target": "Cu²⁺",
        "photo": {
          "src": "assets/p7_4.png",
          "caption": "Deep-blue copper–ammine solution.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Copper_Ions_(Cu)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "Cu²⁺ + 4 NH₃ ⇌ [Cu(NH₃)₄]²⁺ (simplified coordination equation).",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Copper_Ions_(Cu)"
      },
      {
        "id": "C2A-4",
        "question": "Cadmium fraction after copper interference removal: yellow CdS?",
        "target": "Cd²⁺",
        "photo": {
          "src": "assets/p8_1.png",
          "caption": "Yellow cadmium sulfide precipitate.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Cadmium_Ions_(Cd)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Cadmium_Ions_(Cd)"
      }
    ],
    "route": "Acidic sulfide group separation, then prescribed subgroup separation: retain IIA sulfides; investigate IIB separately and retain group filtrate for III."
  },
  {
    "id": "C2B",
    "title": "Group IIB · As / Sb / Sn",
    "prep": "Separate the elements and perform the specified oxidation or reduction before confirmation.",
    "tests": [
      {
        "id": "C2B-0",
        "question": "Arsenic fraction, oxidized for silver test: reddish-brown silver arsenate?",
        "target": "Arsenic",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "C2B-1",
        "question": "Separated antimony, tin–silver contact test: black deposit on silver persisting in prescribed hypochlorite treatment?",
        "target": "Antimony",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests",
        "note": "Tin–silver contact is part of this specific historical test. The prescribed hypochlorite treatment discriminates the deposit from arsenic; a black deposit alone is insufficient."
      },
      {
        "id": "C2B-2",
        "question": "Tin fraction reduced to Sn(II), then HgCl₂: white or gray precipitate?",
        "target": "Tin",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests",
        "note": "White Hg₂Cl₂ or gray mercury can support the prescribed test. Do not require the transient white stage to have been seen before accepting gray."
      }
    ],
    "route": "From Group II sulfides: prescribed alkaline sulfide separation places As/Sb/Sn into their subgroup; separate before confirmation."
  },
  {
    "id": "C3A",
    "title": "Group IIIA · soluble subgroup",
    "prep": "Apply prescribed oxidative alkaline separation. Then separate Al, Cr and Zn before their individual tests.",
    "tests": [
      {
        "id": "C3A-0",
        "question": "Aluminum fraction + aluminon: red lake associated with hydroxide solid?",
        "target": "Aluminum",
        "photo": {
          "src": "assets/p10_1.png",
          "caption": "Red aluminon lake associated with aluminum hydroxide.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Aluminum_Ions_(Al)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Aluminum_Ions_(Al)"
      },
      {
        "id": "C3A-1",
        "question": "Chromium fraction after oxidation: acidified peroxide gives transient blue?",
        "target": "Chromium",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "C3A-2",
        "question": "Separated zinc fraction + sulfide: white ZnS precipitate?",
        "target": "Zinc",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      }
    ],
    "route": "Group III preparation followed by oxidative alkaline separation: soluble Al/Cr/Zn subgroup; retain insoluble IIIB material."
  },
  {
    "id": "C3B",
    "title": "Group IIIB · insoluble subgroup",
    "prep": "Prepare the subgroup as prescribed. Use separate test portions, with the required interference treatment.",
    "tests": [
      {
        "id": "C3B-0",
        "question": "Iron test + thiocyanate: deep-red dissolved complex?",
        "target": "Iron",
        "photo": {
          "src": "assets/p11_1.png",
          "caption": "Iron–thiocyanate solution; concentrated/dark photographs can appear brown.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Iron__(Fe)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "Fe³⁺ + SCN⁻ ⇌ [FeSCN]²⁺ (simplified; several complexes may coexist).",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Iron__(Fe)",
        "note": "Thiocyanate responds to Fe(III) in this portion. An oxidizing preparation can convert Fe(II), so this endpoint alone cannot establish original oxidation state."
      },
      {
        "id": "C3B-1",
        "question": "Manganese test + acidic bismuthate: purple permanganate in the liquid?",
        "target": "Manganese",
        "photo": {
          "src": "assets/p11_2.png",
          "caption": "Purple permanganate in the liquid after oxidation.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Manganese_Ions_(Mn)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Manganese_Ions_(Mn)"
      },
      {
        "id": "C3B-2",
        "question": "Cobalt test, iron interference suppressed: blue-green liquid junction?",
        "target": "Cobalt",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests",
        "note": "This question uses the Gilreath alcoholic thiocyanate junction test. A bulk-blue acetone procedure is a different variant, so its photograph is not shown as a junction. Suppress iron interference."
      },
      {
        "id": "C3B-3",
        "question": "Nickel test + dimethylglyoxime in ammonia: rose-red precipitate?",
        "target": "Nickel",
        "photo": {
          "src": "assets/p11_4.png",
          "caption": "Rose-red nickel dimethylglyoxime precipitate.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Nickel_Ions_(Ni)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Nickel_Ions_(Ni)",
        "note": "Remove or mask iron by the prescribed procedure before dimethylglyoxime confirmation. The red product must be a precipitate, not simply a red solution."
      }
    ],
    "route": "Insoluble subgroup from prescribed Group III treatment: Mn/Fe/Co/Ni. Continue original Group III filtrate to IV."
  },
  {
    "id": "C4",
    "title": "Group IV · phosphate fraction",
    "prep": "Separate Ba, Sr, Ca and Mg. Prepare suitable material for flame tests; use standards for comparison.",
    "tests": [
      {
        "id": "C4-0",
        "question": "Barium fraction: yellow chromate AND compatible yellow-green flame?",
        "target": "Ba²⁺",
        "photo": {
          "src": "assets/p12_1.png",
          "caption": "Barium chromate precipitate only; this photograph does not show the flame test.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Barium_(Ba)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Barium_(Ba)"
      },
      {
        "id": "C4-1",
        "question": "Strontium fraction: sulfate precipitate AND compatible crimson flame?",
        "target": "Sr²⁺",
        "photo": {
          "src": "assets/p12_2.png",
          "caption": "Strontium sulfate precipitate only; flame evidence is separate.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Strontium_Ions_(Sr)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Strontium_Ions_(Sr)"
      },
      {
        "id": "C4-2",
        "question": "Calcium fraction: oxalate precipitate AND compatible brick-red flame?",
        "target": "Ca²⁺",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "C4-3",
        "question": "Magnesium fraction + magneson: blue lake on hydroxide?",
        "target": "Mg²⁺",
        "photo": {
          "src": "assets/p12_4.png",
          "caption": "Blue magneson lake on magnesium hydroxide.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Magnesium_Ions_(Mg)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Magnesium_Ions_(Mg)"
      }
    ],
    "route": "Prescribed phosphate group precipitation: Ba/Sr/Ca/Mg fraction; liquid continues to V."
  },
  {
    "id": "C5",
    "title": "Group V · soluble cations",
    "prep": "Na / K: prepared remaining fraction. NH₄⁺: ORIGINAL aliquot reserved before ammonium reagents.",
    "tests": [
      {
        "id": "C5-0",
        "question": "Sodium test: intense yellow flame clearly above the reagent blank?",
        "target": "Na⁺",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "C5-1",
        "question": "Potassium test: characteristic violet emission, accounting for sodium masking?",
        "target": "K⁺",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "C5-2",
        "question": "Original aliquot + alkali and warming: gas turns damp red litmus blue without splashing?",
        "target": "NH₄⁺",
        "photo": {
          "src": "assets/p13_1.png",
          "caption": "Ammonia turns damp red litmus blue.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Ammonium_Ion_(NH)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "NH₄⁺ + OH⁻ → NH₃ + H₂O. Test an untouched original aliquot.",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Ammonium_Ion_(NH)"
      }
    ],
    "route": "Remaining soluble cations for Na/K. NH₄⁺ must use a reserved original aliquot."
  },
  {
    "id": "A1",
    "title": "Group I · calcium-salt fraction",
    "prep": "Use the prescribed separated portions. Carbonate requires original sample before carbonate-containing preparation.",
    "tests": [
      {
        "id": "A1-0",
        "question": "Original portion + acid: gas with independent CO₂ confirmation after interference exclusion?",
        "target": "Carbonate",
        "photo": null,
        "equation": "CO₃²⁻ + 2 H⁺ → CO₂ + H₂O. Effervescence alone is not specific.",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "A1-1",
        "question": "Sulfite fraction, existing sulfate removed: NEW BaSO₄ after oxidation?",
        "target": "Sulfite",
        "photo": {
          "src": "assets/p14_1.png",
          "caption": "Representative white sulfate precipitate. The source reuses a sulfate photograph; it does not independently establish BaSO₄ composition, origin or timing.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Barium_(Ba)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "SO₃²⁻ + H₂O₂ → SO₄²⁻ + H₂O. Remove pre-existing sulfate before interpreting newly formed BaSO₄.",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Barium_(Ba)"
      },
      {
        "id": "A1-2",
        "question": "Arsenite fraction in the prescribed acidic sulfide test: immediate yellow As₂S₃?",
        "target": "Arsenite",
        "photo": {
          "src": "assets/p9_1.png",
          "caption": "Yellow arsenic(III) sulfide product; timing and preparation must also match.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Arsenic_Ions_(As)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Arsenic_Ions_(As)",
        "note": "Timing matters: arsenate may also produce a sulfide after slower reduction. Apply the prescribed separation and time criterion. Yellow appearance alone cannot distinguish arsenite from arsenate."
      },
      {
        "id": "A1-3",
        "question": "Arsenate fraction in prescribed acidic iodide test: iodine liberated?",
        "target": "Arsenate",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "A1-4",
        "question": "Phosphate fraction + acidic molybdate: yellow precipitate?",
        "target": "Phosphate",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests",
        "note": "Use the prescribed arsenate-interference treatment. The positive endpoint is yellow, not a nonspecific white precipitate."
      },
      {
        "id": "A1-5",
        "question": "Separated oxalate fraction: warm acidic permanganate decolorized?",
        "target": "Oxalate",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "A1-6",
        "question": "Historical fluoride glass-etching test: permanent etched area after washing? REFERENCE ONLY.",
        "target": "Fluoride",
        "photo": null,
        "equation": "",
        "referenceOnly": true,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      }
    ],
    "route": "Calcium acetate group separation; retain precipitate and continue liquid to II. Reserve original material for carbonate."
  },
  {
    "id": "A2",
    "title": "Group II · barium-salt fraction",
    "prep": "Separate sulfate and chromate and examine their prescribed acid / pH behavior.",
    "tests": [
      {
        "id": "A2-0",
        "question": "Sulfate fraction: white barium precipitate persists in the specified acid treatment?",
        "target": "Sulfate",
        "photo": {
          "src": "assets/p16_1.png",
          "caption": "Representative white sulfate precipitate. The source reuses a sulfate photograph; it does not independently establish BaSO₄ composition, origin or timing.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Barium_(Ba)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "Ba²⁺ + SO₄²⁻ → BaSO₄(s).",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Barium_(Ba)"
      },
      {
        "id": "A2-1",
        "question": "Chromate fraction: yellow BaCrO₄ returns after dissolution and buffered pH adjustment?",
        "target": "Chromate",
        "photo": {
          "src": "assets/p16_2.png",
          "caption": "Yellow barium chromate precipitate.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Barium_(Ba)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Barium_(Ba)"
      }
    ],
    "route": "Barium acetate separation on the prepared liquid; retain sulfate/chromate group and continue liquid to III."
  },
  {
    "id": "A3",
    "title": "Group III · cadmium-salt fraction",
    "prep": "Apply group preparation and use separate portions. The two blue products are not distinguished by color alone.",
    "tests": [
      {
        "id": "A3-0",
        "question": "Sulfide test: liberated gas causes brown/black lead acetate paper stain?",
        "target": "Sulfide",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "A3-1",
        "question": "Ferrocyanide test portion + Fe³⁺: dark-blue precipitate?",
        "target": "Ferrocyanide",
        "photo": {
          "src": "assets/p17_1.png",
          "caption": "Prussian-blue product of ferrocyanide with iron(III).",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Iron__(Fe)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Iron__(Fe)"
      },
      {
        "id": "A3-2",
        "question": "Ferricyanide test portion + Fe²⁺: dark-blue precipitate?",
        "target": "Ferricyanide",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      }
    ],
    "route": "Cadmium acetate group separation; retain group precipitate and continue liquid to IV."
  },
  {
    "id": "A4",
    "title": "Group IV · silver-salt fraction",
    "prep": "Separate the members first. In extraction tests, use the specified solvent and distinguish the organic phase.",
    "tests": [
      {
        "id": "A4-0",
        "question": "Thiosulfate test: initially light silver precipitate progressively becomes black?",
        "target": "Thiosulfate",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "A4-1",
        "question": "Chloride fraction: white AgCl returns after ammoniacal separation and acidification?",
        "target": "Chloride",
        "photo": {
          "src": "assets/p6_1.png",
          "caption": "Representative white silver chloride product.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Silver_Ions_(Ag)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "AgCl(s) + 2 NH₃ ⇌ [Ag(NH₃)₂]⁺ + Cl⁻. Use an independent anion sample, not material exposed to HCl.",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Silver_Ions_(Ag)"
      },
      {
        "id": "A4-2",
        "question": "Thiocyanate fraction + Fe³⁺: red dissolved complex?",
        "target": "Thiocyanate",
        "photo": {
          "src": "assets/p18_2.png",
          "caption": "Iron–thiocyanate solution; dark red can look brown in the photograph.",
          "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Iron__(Fe)",
          "credit": "James P. Birk / Chemistry LibreTexts · CC BY-NC-SA 4.0"
        },
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Characteristic_Reactions_of_Select_Metal_Ions/Characteristic_Reactions_of_Iron__(Fe)"
      },
      {
        "id": "A4-3",
        "question": "Iodide test after oxidation: violet iodine-containing organic phase?",
        "target": "Iodide",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests",
        "note": "Identify the organic phase from the actual solvent used. Do not assume it is the lower layer. The color is molecular iodine after oxidation, not the color of iodide."
      },
      {
        "id": "A4-4",
        "question": "After iodine interference removal: bromide test gives yellow/orange organic phase?",
        "target": "Bromide",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests",
        "note": "Remove iodine interference first and identify the organic phase from the actual solvent; its vertical position varies with solvent density."
      }
    ],
    "route": "Silver acetate group separation; retain group precipitate and continue liquid to V."
  },
  {
    "id": "A5",
    "title": "Group V · separate test portions",
    "prep": "Use separate aliquots. Complete prescribed chloride removal, borate interference treatment, and nitrite removal for nitrate.",
    "tests": [
      {
        "id": "A5-0",
        "question": "Chlorate portion: after initial chloride removal, reduction produces NEW AgCl?",
        "target": "Chlorate",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "A5-1",
        "question": "Prepared borate portion: carminic-acid reagent becomes blue-violet?",
        "target": "Borate",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "A5-2",
        "question": "Nitrite portion: prescribed acidic urea reaction evolves gas?",
        "target": "Nitrite",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests"
      },
      {
        "id": "A5-3",
        "question": "Nitrate portion after nitrite removal: prescribed brown-ring endpoint?",
        "target": "Nitrate",
        "photo": null,
        "equation": "",
        "referenceOnly": false,
        "source": "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Qualitative_Analysis/Confirmatory_Tests",
        "note": "Nitrite can also interfere with brown-ring interpretation. Remove it and apply other required interference controls on an independent portion."
      }
    ],
    "route": "Remaining liquid, prepared as separate test portions. Nitrite removal precedes nitrate confirmation."
  }
];
export const practiceTargets = ["C1-2","C2A-3","C3B-0","C3B-3","C4-0"];
