import React from 'react';
import Layout from '@theme/Layout';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Publications() {
  return (
<Layout title="Publications">
  <div class="container">
    <div class="row">        
      <h1>Publications</h1>
      <p>
      Conference papers, peer-reviewed journal articles, and other scholarly works are the result of your hard work of which HYAK was one helping hand. Please consider citing or acknowleding HYAK in your final work and then let us know so it can be considered to appear in our select publication list.
      </p>

      <pre>
        The HYAK Consortium. "Title TBD." arXiv:4444.55555 (2021)
      </pre>
      
      <pre>

      </pre>
    </div>
  </div>
  
  <div class="container">
    <div class="row">
      <h3>Select Publications</h3>
      <p>
      These are select works that were produced using a HYAK cluster in any given year. While hundreds of papers are produced each year using HYAK, we limit the select list below to 10 for the sake of brevity. If you would like your publication to be considered for inclusion onto this list please <a href="mailto:help@uw.edu?subject=HYAK publication">e-mail us</a> with the citation.
      </p>
    </div>
    
    <div class="row">
      <Tabs
        className="unique-tabs"
        defaultValue="2021"
        values={[
          {label: '2021', value: '2021'},
          {label: '2020', value: '2020'},
          {label: '2019', value: '2019'},
        ]}>
        <TabItem value="2021">
          <h4>Aeronautics and Astronautics</h4>
          <ol>
            <li>TE Benedett and CJ Hansen. "Effect of geometric and magnetic boundary conditions on magnetic islands in 3D force-free ideal MHD equilibria." <i>Nuclear Fusion</i> 61 (3) 036022 (2021) DOI: <a href="https://doi.org/10.1088/1741-4326/abd41c">10.1088/1741-4326/abd41c</a></li>
          </ol>
          
          <h4>Chemical Engineering</h4>
          <ol>
            <li>
            A. Joseph, C. Nyambura1,D. Bondurant, K. Corry, D. Beebout, T. Wood, Jim Pfaendtner, E. Nance, “Formulation and Efficacy of Catalase-Loaded Nanoparticles for the Treatment of Neonatal Hypoxic-Ischemic Encephalopathy”, Pharmaceutics, 2021, 13(8), 1131. DOI: 10.3390/pharmaceutics13081131  
110. J. Prelesnik1, R. Alberstein, S. Zhang, H. Pyles, D. Baker, J. Pfaendtner, J. De Yoreo, A. Tezcan, R.. Remsing, C. J. Mundy, “Ion-dependent protein–surface interactions from intrinsic solvent response”, PNAS, 2021, 118(26), e2025121118. DOI: 10.1073/pnas.2025121118
108. C. Jia, S. Xie, W. Zhang, N. Intan2, J. Sampath2, J. Pfaendtner, H. Lin, “Deconstruction of high-density polyethylene into liquid hydrocarbon fuels and lubricants by hydrogenolysis over Ru catalyst”, Chem. Cat., 2021, 1(2), 437-455. DOI: 10.1016/j.checat.2021.04.002
107. J. Ludwig1, J. Smith, J. Pfaendtner, “Analyzing the Long Time-Scale Dynamics of Uremic Toxins Bound to Sudlow Site II in Human Serum Albumin”, J. Phys. Chem. B., 2021, 125(11), 2910-2920. DOI: 10.1021/acs.jpcb.1c00221
106. S. Roeters, T. Golbek, M. Bregnhøj, T. Drace, S. Alamdari1, W. Roseboom, G. Kramer, T Šantl-Temkiv, K. Finster, J. Pfaendtner, S. Woutersen, T. Boesen, T. Weidner, “Ice-nucleating proteins are activated by low temperatures to control the structure of interfacial water” Nat Commun, 2021, 12, 1183 . DOI: 10.1038/s41467-021-21349-3
105. N. Intan2, J. Pfaendtner, “Effect of Fluoroethylene Carbonate Additives on the Initial Formation of the Solid Electrolyte Interphase on an Oxygen-Functionalized Graphitic Anode in Lithium-Ion Batteries”, 2021, 13(7), 8169-8180: DOI: 10.1021/acsami.0c18414
            </li>
          </ol>

          <h4>Chemistry</h4>
          <ol>
            <li>Zhang, L., Kang, C., Zhang, G., Pan, Z., Huang, Z., Xu, S., Rao, H., Liu, H., Wu, S., Wu, X. and Li, X., 2021. All‐Inorganic CsPbI3 Quantum Dot Solar Cells with Efficiency over 16% by Defect Control. <i>Advanced Functional Materials</i>, 31(4), p.2005930. DOI: <a href="https://doi.org/10.1002/adfm.202005930">10.1002/adfm.202005930</a></li>
          </ol>

          <h4>Computer Science</h4>
          <ol>
            <li>Alisa Liu, Maarten Sap, Ximing Lu, Swabha Swayamdipta, Chandra Bhagavatula, Noah A. Smith, Yejin Choi. 2021. DExperts: Decoding-Time Controlled Text Generation with Experts and Anti-Experts. <i>Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing</i>. Virtual Event, USA. DOI: <a href="http://dx.doi.org/10.18653/v1/2021.acl-long.522">10.18653/v1/2021.acl-long.522</a></li>

            <li>Xin Liu, Ziheng Jiang, Josh Fromm, Xuhai Xu, Shwetak Patel, and Daniel McDuff. 2021. MetaPhys: Few-Shot Adaptation for Non-Contact Physiological Measurement. <i>ACM Conference on Health, Inference, and Learning</i> (ACM CHIL ’21) April 8–10, 2021, Virtual Event, USA. ACM, New York, NY, USA, 10 pages. <a href="https://doi.org/10.1145/3450439.3451870">10.1145/3450439.3451870</a></li>
          </ol>

          <h4>Physics</h4>          
          <ol>
            <li>AA Kaptanoglu, KD Morgan, CJ Hansen, and SL Brunton. "Physics-constrained, low-dimensional models for magnetohydrodynamics: First-principles and data-driven approaches." <i>Physical Review E</i> 104(1), 015206 (2021) DOI: <a href="https://doi.org/10.1103/PhysRevE.104.015206">10.1103/PhysRevE.104.015206</a> </li>

            <li>Montague Z, Lv H, Otwinowski J, DeWitt WS, Isacchini G, Yip GK, Ng WW, Tsang OTY, Yuan M, Liu H, and Wilson IA, 2021. Dynamics of B cell repertoires and emergence of cross-reactive responses in patients with different severities of COVID-19. <i>Cell Reports</i>, 35(8), p.109173. DOI: <a href="https://doi.org/10.1016/j.celrep.2021.109173">10.1016/j.celrep.2021.109173</a></li>
          </ol>

        </TabItem>

        <TabItem value="2020">
          <h4>Aeronautics and Astronautics</h4>
          <ol>
            <li>TE Benedett, CJ Hansenb, KD Morganc, TR Jarboed. "Effects of temperature and density evolution in MHD simulations of HIT-SI." <i>Physics of Plasmas</i> 27, 042508 (2020) DOI: <a href="https://doi.org/10.1063/1.5142298">10.1063/1.5142298</a></li>
          </ol>
          
          <h4>Chemical Engineering</h4>
          <ol>
            <li>Komp, Evan, and Stéphanie Valleau. "Machine Learning Quantum Reaction Rate Constants." <i>The Journal of Physical Chemistry A</i> 124.41 (2020): 8607-8613. DOI: <a href="https://doi.org/10.1021/acs.jpca.0c05992">10.1021/acs.jpca.0c05992</a></li>

            <li>
            101. L.D. Gibson1, J. Pfaendtner, “Solvent Oligomerization Pathways Facilitated by Electrolyte Additives During Solid-Electrolyte Interphase Formation”, PhysChemChemPhys, 2020, 22, 21494-21503. DOI: 10.1039/D0CP03286G
100. S. Alamdari1, S. Roeters, T. Golbek, L. Schmüser, T. Weidner, J. Pfaendtner, “Orientation and Conformation of Proteins at the Air-Water Interface Determined from Integrative Molecular Dynamics Simulations and Sum Frequency Generation Spectroscopy”, Langmuir, 2020, 36(40), 11855-11685. DOI: 10.1021/acs.langmuir.0c01881
99. W. Beckner1, C.M. Ashraf2, J. Lee, D.A.C. Beck, J. Pfaendtner, “Continuous Molecular Representations of Ionic Liquids”, J. Phys. Chem. B. 2020, 124(38), 8437-8357. DOI: 10.1021/acs.jpcb.0c05938
97. M. Xue, J. Sampath2, R. Gebhart, H.J. Haugen, S.P. Lyngstadaas, J. Pfaendtner, G.P. Drobny,” Studies of dynamic binding of amino acids to TiO2 nanoparticle surfaces by Solution NMR and Molecular Dynamics Simulations”, Langmuir, 2020, in press. DOI: 10.1021/acs.langmuir.0c01256
96. J. Sampath32, S. Alamdari1, J. Pfaendtner, “Closing the Gap Between Modeling and Experiments in the Self-assembly of Biomolecules at Interfaces and in Solution”, Chem. Matl., 2020, 32(19), 8043-8059. DOI: 10.1021/acs.chemmater.0c01891
95. S. Summers, C. Kraft, S. Alamdari1, J. Pfaendtner, J. Kaar, “Enhanced Activity and Stability of Acidothermus cellulolyticus Endoglucanase 1 in Ionic Liquids via Engineering Active Site Residues and Non-native Disulfide Bridges”, ACS Sus. Chem & Eng, 2020, 8(30), 11299-11307. DOI: 10.1021/acssuschemeng.0c03242
94. E.L. Buckle, J. Sampath2, N. Michael, S.D. Whedon, C.J.A. Leonen, J. Pfaendtner, G. Drobny, C. Chatterjee, “Trimethylation of the R5 silica‐precipitating peptide increases silica particle size by redirecting orthosilicate binding,” ChemBioChem, 2020, 22, 3208-3211.
93. J. Smith1, J. Pfaendtner, “Elucidating the molecular interactions between uremic toxins and the Sudlow II binding site of human serum albumin,” J. Phys. Chem. B, 2020, 124(19), 3922-3930. DOI: 10.1021/acs.jpcb.0c02015
92. J. Sampath2, A. Kullman1, R. Gebhart, G. Drobny, J. Pfaendtner, “Molecular recognition and specificity of biomolecules to titanium dioxide from molecular dynamics simulations,” npj Comput. Mater. 2020, 6(34), DOI: 10.1038/s41524-020-0288-7
91. B. Hellner, S. Alamdari1, H. Pyles, S. Zhang, A. Prakash1, K. G. Sprenger1, J. DeYoreo, D. Baker, J. Pfaendtner, F. Baneyx, “Sequence–Structure–Binding Relationships Reveal Adhesion Behavior of the Car9 Solid-Binding Peptide: An Integrated Experimental and Simulation Study,” J. Am. Chem. Soc. 2020, 142(5), 2355-2363. DOI: 10.1021/jacs.9b11617
90. S. Alamdari1, J. Pfaendtner, “Impact of glutamate carboxylation in the adsorption of the α-1 domain of osteocalcin to hydroxyapatite and titania,” Mol. Syst. Des. Eng. 2020, 5, 620-631. DOI: 10.1039/C9ME00158A
89. J. Smith1, P. McMullen, Z. Yuan, J. Pfaendtner, S. Jiang, “Elucidating Molecular Design Principles for Charge-Alternating Peptides,” Biomacromolecules 2020, 21(2), 435-443. DOI: 10.1021/acs.biomac.9b01191
            </li>
          </ol>

          <h4>Chemistry</h4>
          <ol>
            <li>Kasper, J.M. and Li, X., 2020. Natural transition orbitals for complex two‐component excited state calculations. <i>Journal of computational chemistry</i>, 41(16), pp.1557-1563. DOI: <a href="https://doi.org/10.1002/jcc.26196">10.1002/jcc.26196</a></li>
          </ol>

          <h4>Computer Science</h4>
          <ol>
            <li>William Agnew, Christopher Xie, Aaron Walsman, Octavian Murad, Caelen Wang, Pedro Domingos, and Siddhartha Srinivasa. "Amodal 3D Reconstruction for Robotic Manipulation via Stability and Connectivity" <i>4th Conference on Robot Learning (CORL) for a Plenary Talk</i> (20/485). Spotlight at Object-Oriented Learning Workshop @ ICML2020. DOI: <a href="https://arxiv.org/abs/2009.13146">arXiv:2009.13146</a></li>

            <li>Xin Liu, Josh Fromm, Shwetak Patel, Daniel McDuff. 2020. Multi-Task Temporal Shift Attention Networks for On-Device Contactless Vitals Measurement. <i>34th Conference on Neural Information Processing Systems</i> (NeurIPS 2020), Vancouver, Canada. <a href="https://arxiv.org/abs/2006.03790">arXiv:2006.03790</a></li>
          </ol>

          <h4>Physics</h4>
          <ol>
            <li>AA Kaptanoglu, KD Morgan, CJ Hansen, SL Brunton. "Characterizing magnetized plasmas with dynamic mode decomposition." <i>Physics of Plasmas</i> 27, 032108 (2020) DOI: <a href="https://doi.org/10.1063/1.5138932">10.1063/1.5138932</a></li>
          </ol>

          <h4>Public Health</h4>
          <ol>
            <li>PE Rummo, N Pho, MA Bragg, CA Roberto, B Elbel. "Trends in Store-Level Sales of Sugary Beverages and Water in the US, 2006–2015." <i>American Journal of Preventive Medicine</i> 59 (4), 522-529 (2020) DOI: <a href="https://doi.org/10.1016/j.amepre.2020.04.022">10.1016/j.amepre.2020.04.022</a></li>
          </ol>
        </TabItem>

        <TabItem value="2019">
          <h4>Chemical Engineering</h4>
          <ol>
            <li>
            88. J. Sampath2, J. Pfaendtner, “Amphiphilic peptide binding on crystalline vs. amorphous silica from molecular dynamics simulations,” Mol. Phys. 2019, 117(23-24), 3642-3650. DOI: 10.1080/00268976.2019.1657192
87. P. Emani, Y. Yimer2, S. Davidowski, R. Gebhart, H. Ferreira, I. Kuprov, J. Pfaendtner, G. Drobny, “Combining Molecular and Spin Dynamics Simulations with Solid-State NMR to Study Amphiphilic Lysine-Leucine Repeat Peptide Aggregates,” J. Phys. Chem. B 2019, 123(51), 10915-10929. DOI: 10.1021/acs.jpcb.9b09245
85. B. Li, P. Jain, J. Ma, J. Smith1, Z. Yuan, H.C. Hung, Y. He, X. Lin, K. Wu, J. Pfaendtner, S. Jiang, “Trimethylamine N-oxide–derived zwitterionic polymers: A new class of ultralow fouling bioinspired materials,” Sci. Adv. 2019, 5(6), eaaw9562. DOI: 10.1126/sciadv.aaw9562.
83. W. Beckner1, J. Pfaendtner, “Fantastic Liquids and Where to Find Them: Optimizations of Discrete Chemical Space,” J. Chem. Inf. Model. 2019, 59(6), 2617-2625. DOI: 10.1021/acs.jcim.9b00087
82. M. Mao1, J. Sampath2, K.G. Sprenger1, G. Drobny, J. Pfaendtner, “Molecular Driving Forces in Peptide Adsorption to Metal Oxide Surfaces,” Langmuir 2019, 35(17), 5911-5920. DOI: 10.1021/acs.langmuir.8b01392
81. C.D. Fu1, Y. He, J. Pfaendtner, “Diagnosing the Impact of External Electric Fields Chemical Kinetics: Application to Toluene Oxidation and Pyrolysis,” J. Phys. Chem A 2019, 123(14), 3080-3089. DOI: 10.1021/acs.jpca.8b11780
80. E.L. Buckle*, A. Prakash1*, M. Bonomi, J. Sampath2, J. Pfaendtner, G.P. Drobny, “A Solid-State NMR and MD Study of the Structure of the Statherin Mutant SNa15 on Mineral Surfaces,” J. Am. Chem. Soc. 2019, 141(5), 1998-2011. DOI: 10.1021/jacs.8b10990              
            </li>
          </ol>

          <h4>Chemistry</h4>
          <ol>
            <li>Bai, F., Zhang, J., Yuan, Y., Liu, H., Li, X., Chueh, C.C., Yan, H., Zhu, Z. and Jen, A.K.Y., 2019. A 0D/3D Heterostructured All‐Inorganic Halide Perovskite Solar Cell with High Performance and Enhanced Phase Stability. <i>Advanced Materials</i>, 31(48), p.1904735. DOI: <a href="https://doi.org/10.1002/adma.201904735">10.1002/adma.201904735</a></li>

            <li>Fu, W., Liu, H., Shi, X., Zuo, L., Li, X. and Jen, A.K.Y., 2019. Tailoring the Functionality of Organic Spacer Cations for Efficient and Stable Quasi‐2D Perovskite Solar Cells. <i>Advanced Functional Materials</i>, 29(25), p.1900221. DOI: <a href="https://doi.org/10.1002/adfm.201900221">10.1002/adfm.201900221</a></li>

            <li>Stetina, T.F., Clark, A.E. and Li, X., 2019. X‐ray absorption signatures of hydrogen‐bond structure in water–alcohol solutions. <i>International Journal of Quantum Chemistry</i>, 119(1), p.e25802. DOI: <a href="https://doi.org/10.1002/qua.25802">10.1002/qua.25802</a></li>
          </ol>          
        </TabItem>        
      </Tabs>
    </div>

  </div>
</Layout>
  );
}