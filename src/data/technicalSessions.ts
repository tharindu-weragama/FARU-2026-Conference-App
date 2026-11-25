export interface ResearchPaper {
  code: string;
  title: string;
  authors: string;
  presentationMode: string | null;
}

export interface TechnicalSession {
  id: string;
  number: number;
  theme: string;
  room: string;
  start: string;
  end: string;
  chair: string;
  coChair: string;
  coordinator: string;
  online: boolean;
  papers: ResearchPaper[];
}

type PaperRow = [string, string, string, string | null];
type SessionRow = [
  number, string, string, string, string,
  string, string, string, boolean, PaperRow[]
];

const rows: SessionRow[] = [
  [
    1, 'Heritage conservation, cultural identity and spatial memory',
    'Room A', '11:00', '12:30',
    'Prof. AA Hettiarachchi', 'Mrs. RJ Senanayake', 'Archt. TS Ranathungaarachchi', false,
    [
      ['FARU-C-2026-47', 'Lalkuthi Restoration: heritage structure to a potential living urban asset An insight into the contemporary perspectives', 'N Mahmud & LM Ta-sin', 'In-person'],
      ['FARU-C-2026-52', 'The role of knowledge systems and material logic in forming urban identity: a street-based study of contemporary Jaffna', 'R Sangeerthan & J Dharmasena', 'In-person'],
      ['FARU-C-2026-53', 'Perceived urban image transformation in a formerly stigmatised urban area: The Meethotamulla regeneration, Sri Lanka', 'HMCA Kumarathilaka, SMP Samarathunga & YP Perera', 'In-person'],
      ['FARU-C-2026-93', 'Appraising spatial memory and sense of belonging: insights from the world heritage city of Kandy', 'PGNC Ranasinghe, IGP Rajapaksha', 'In-person'],
      ['FARU-C-2026-112', 'Impact of spatial configuration of pathways on emotional perception: a study of Jethavanaramaya Monastery, Anuradhapura.', 'DSB Prabha & RWMRS Wanigasekara', 'In-person'],
      ['FARU-C-2026-117', 'A street-level study on role of informal spatial practices in shaping urban cultural landscape identity in Slave Island, Colombo.', 'WLAT Wagawala & RWMRS Wanigasekara', 'In-person'],
    ],
  ],
  [
    2, 'Inclusive Design, Human Well-Being and Accessibility',
    'Room B', '11:00', '12:30',
    'Dr. SSMR Samarawickrama', 'Dr. MTOV Peiris', 'Ms. SPSV Fernando', false,
    [
      ['FARU-C-2026-06', 'Towards resilient retail built environments: A critical review of circulation-space benchmarks and secondary performance evidence from Sri Lankan supermarkets', 'GDCC Dikshi & CD Udawatthe', 'In-person'],
      ['FARU-C-2026-49', 'Children as designers: exploring participatory design approaches in play-based learning for early childhood education in Sri Lanka', 'YRG Prasadi & P Pitigala', 'In-person'],
      ['FARU-C-2026-80', 'Understanding the psychology of alleyways: human perception and spatial experience a qualitative field experiment in Galle and Colombo, Sri Lanka', 'IP Abeysirigunawardana & JN Munasinghe', 'In-person'],
      ['FARU-C-2026-82', 'The influence of gender integration on the architectural character of street-front threshold spaces: A case study of Egoda Uyana, Sri Lanka', 'SI Rajapakse & SM Hirudini', 'In-person'],
      ['FARU-C-2026-89', 'Wayfinding-supportive interior spatial organization and navigation memory in dementia elders: a case study of an elder care centre, Padukka, Sri Lanka', 'SRDP Weeragala & SM Hirudini', 'In-person'],
      ['FARU-C-2026-11', 'Sidewalks as spaces for public interaction in a dense commercial city: A case study of Pettah, Sri Lanka', 'H Lansakara & N Jayasinghe', 'In-person'],
      ['FARU-C-2026-97', 'Everyday life on middle income residential lanes: How narrow streets function as shared living spaces – A case study of Dehiwala, Sri Lanka', 'B Januja & SM Hirudini', 'In-person'],
    ],
  ],
  [
    3, 'Smart Cities, Digital Governance and Participatory Urban Systems',
    'Room C', '11:00', '12:30',
    'Dr. PCP De Silva', 'Dr. EJ Warusavithana', 'Mr. MR Mahamood', false,
    [
      ['FARU-C-2026-29', 'Gamified smart mobility applications for behavioural change towards sustainable urban transportation: a case study of Kandy city, Sri Lanka', 'K Randeniya, S Bandara, R Bandara, I Anurodhani, T Dhanuka, D Prabhasara, T Rathnayake, G Perera, R Jalaldeen & R Mahamood', 'In-person'],
      ['FARU-C-2026-34', 'Kandy Go: An AI-powered smart tourism and mobility platform for heritage tourism in Kandy, Sri Lanka', 'S Sanojan, S Shahidya, T Jeiyadancy, S Thilaksan, M Madhavan, T Thuvaraga & MR Mahamood', 'In-person'],
      ['FARU-C-2026-60', 'Redefining public spaces in the digital age: How mobile phones influence human behavior in urban environments', 'DMHW Samarasinghe & TKGP Ranasinghe', 'In-person'],
      ['FARU-C-2026-61', 'A three-tier digital intervention framework for activating urban public space: A landscape architectural approach to youth engagement in Colombo', 'DSN Dissabandara & RS Wanigasekara', 'In-person'],
      ['FARU-C-2026-84', 'Bridging national policy and local implementation a dynamic, interoperable system inspired by a participatory agent-based modelling framework', 'P Maduwage & MCK De Silva', 'In-person'],
      ['FARU-C-2026-113', 'Willing but unresolved: A technology, organization and environment conditions for land information system digitalization in Sri Lanka', 'S Angurukumbura, S Amarawickrama & R Marasinghe', 'In-person'],
      ['FARU-C-2026-09', 'Resilient intelligence in practice: A critical evaluation of citizen disaster reporting in Sri Lanka; The RebuildSL case from cyclone Ditwah, Sri Lanka', 'WSS Silva, NBS Madusanka, MTG Peiris, LKP Waduge & AHG Diwyanjali', 'In-person'],
    ],
  ],
  [
    4, 'Digital Construction, Project Management and Industry Innovation',
    'Room D', '11:00', '12:30',
    'Prof. END De Silva', 'Dr. PKSVS Gunatilake', 'Ms. MNU Maddakandage', false,
    [
      ['FARU-C-2026-64', 'Assessment of plywood formwork utilisation and wastage in reinforced concrete slab and beam: a comparative study of SME and large-scale construction projects in Sri Lanka', 'WMPM Bandara, KGAS Waidyasekara & PHGMA Ranasinghe', 'In-person'],
      ['FARU-C-2026-67', 'Adoption of blockchain-enabled digital labour passports for workforce credential verification in construction', 'HPB Peiris, HHAP Hemantha, K Thiruchelvam, DNLS Uduwage', 'In-person'],
      ['FARU-C-2026-72', 'Catboost-based machine learning in construction; A systematic review of emerging trends', 'MNS Waas, KATO Ranadewa & KD Sepalage', 'In-person'],
      ['FARU-C-2026-107', 'A rule-based BIM framework for automated compliance assessment of residential building designs against UDA regulations', 'J Rajeevan & V Mary Vithiya', 'In-person'],
      ['FARU-C-2026-108', 'A conceptual framework for a remotely accessible digital platform for construction cost prediction in Sri Lanka', 'MRIUK Ratnayake, M Thayaparan, HS Jayasena, S Dassanayake & UDNL Sampath', 'In-person'],
      ['FARU-C-2026-109', 'Disputes in public construction procurement projects in Sri Lanka during the pre-contract stage', 'NIS Tilakarathna, RMDD Rathnayake, AS Kavirathna, BAKS Perera & A Shandrashharan', 'In-person'],
    ],
  ],
  [
    5, 'Urban Resilience, Regeneration and Adaptive Landscapes',
    'Room E', '11:00', '12:30',
    'Dr. HS Jayasena', 'Dr. D Perera', 'EAT Niroshinie', true,
    [
      ['FARU-C-2026-02', 'Agritourism development in Anuradhapura district: Opportunities, challenges and community readiness', 'PML Nilmini & KGPK Weerakoon', 'Pre-recorded online'],
      ['FARU-C-2026-07', 'Understanding microclimate-behaviour relationships in tropical urban public spaces: A comparative case study in Kandy, Sri Lanka', 'MAA Deen', 'Live online'],
      ['FARU-C-2026-13', 'Urban resilience through micro-scale interventions: evaluating the potential of urban acupuncture in South Asian Cities.', 'M Mubassera, SE Jannat & AA Touhid', 'Live online'],
      ['FARU-C-2026-23', 'Reading the city: evaluating the urban lost spaces of Khulna with respect to responsive environments', 'F Kaniz, S Nomrota, I A Mohammad, H SM Nuhash & SM Talha', 'Pre-recorded online'],
    ],
  ],
  [
    6, 'Ecological Resilience and Landscape Transformation',
    'Room A', '13:30', '15:00',
    'Prof. KGAS Waidyasekara', 'Dr. HMM Herath', 'Mr. DPUM Wickramasinghe', false,
    [
      ['FARU-C-2026-55', 'Developing a stakeholder informed criteria framework for land use suitability assessment in human–elephant conflict prone areas', 'KMSN Kangara, GDK Senevirathne, D Dassanayake, MCK De Silva, S Dassanayake & N Jayaweera', 'In-person'],
      ['FARU-C-2026-62', 'Morphological change and carrying capacity in Nuwara Eliya landscape: An application of fractal geometry', 'MTG Peiris, L Meetiyagoda & JN Munasinghe', 'In-person'],
      ['FARU-C-2026-73', 'The effect of reef degradation on sense of place of coastal communities a case study on Beruwala-Moragalla coastal zone, Sri Lanka', 'S Nipunika & D Denipitiya', 'In-person'],
      ['FARU-C-2026-78', "Beyond geotechnical success: commuter landscape perception of post-landslide stabilization in Sri Lanka's central highlands; A stated preference study of highland road corridors", 'MFF Amra & S Balasooriya', 'In-person'],
      ['FARU-C-2026-92', 'Emergence of a contested landscape: land use transformation and human elephant conflict in Sri Lanka’s dry zone', 'DMDC Dasanayaka, GDK Senevirathne, KMSM Kangara, N Jayaweera, MCK De Silva, & DMSM Dassanayake', 'In-person'],
      ['FARU-C-2026-100', 'Reimagining coastal tourism through landscape-led community development: insights from Ahangama village', 'PGNC Ranasinghe & UPGMB Dahanayake', 'In-person'],
      ['FARU-C-2026-115', 'Impact of Riparian landscape on elephant movements along the Mahaweli river corridor in Mahiyanganaya, Sri Lanka', 'MYG Hemachandra & RWMRS Wanigasekara', 'In-person'],
    ],
  ],
  [
    7, 'Adaptive Housing and Resilient Living Environments',
    'Room B', '13:30', '15:00',
    'Dr. RMSR Rathnayake', 'Dr. D Denipitiya', 'Ms. SPSV Fernando', false,
    [
      ['FARU-C-2026-15', 'Cultural and belief-based influences on interior design preferences: A generational comparison in Colombo, Sri Lanka', 'GD Heshan, DM Rajapaksha & KHH Priyanvada', 'In-person'],
      ['FARU-C-2026-32', 'Adaptive capacity in plantation line housing: a comparative study of verandah typologies in Sri Lanka.', 'MSM Senarathna, AA Hettiarachchi & RU Halwatura', 'In-person'],
      ['FARU-C-2026-58', 'Breathing naturally: Biophilic design interventions for indoor air quality enhancements in tropical high-rise compacted urban residences – Literature Review', 'D Fernando & N De Silva', 'In-person'],
      ['FARU-C-2026-86', 'Housing typology, housing quality and residential land suitability in an estate settlement: high forest division no. 2, Sri Lanka', 'SMV Devmini, HRT Sathviru, RMKT Randeniya, ATY Perera, KATS Bandara, EE Wijegunarathna, DW Dharmasena & JPNS Jayakody', 'In-person'],
      ['FARU-C-2026-94', 'Spatial transformation and social cohesion in cottage industry-based communities of Sri Lanka: special reference to the cinnamon industry', 'HM Samarawickrama & D Perera', 'In-person'],
      ['FARU-C-2026-110', 'Exploring the feasibility of Biophilic Design Concept in low-income urban housing in developing countries', 'DACG Daswatta, M Thayaparan & RMHR Bandara', 'In-person'],
      ['FARU-C-2026-131', 'COVID-19 and the spatial dynamics of vertical housing development: evidence from Colombo Metropolitan Region', 'EMK Ruwanima & S Amarawickrama', 'In-person'],
    ],
  ],
  [
    8, 'Design Innovation, Digital Technologies and Experiential Environments',
    'Room C', '13:30', '15:00',
    'Archt. J Dharmasena', 'Dr. KVKD Wasala', 'Ms. EAT Niroshinie', false,
    [
      ['FARU-C-2026-03', 'Evaluating virtual reality as a simulation tool for experiential assessment in landscape architectural design development', 'KKPN Karunathilaka & RWMRS Wanigasekara', 'In-person'],
      ['FARU-C-2026-04', 'Architecture as a mediator between sky and people: a resilient design framework integrating physical and virtual learning in planetariums', 'H Wijesundara & L Jeyasiri', 'In-person'],
      ['FARU-C-2026-24', 'Evaluating environmental factors associated with the landscape for observational astronomy in Sri Lanka', 'JS Mallawaarachchi & SR Dharmasena', 'In-person'],
      ['FARU-C-2026-27', 'Mutual pedagogy of landscape architecture and science fiction cinema: Defining a theoretical framework to understand culture formation', 'BMVS Basnayake & M Pathiraja', 'In-person'],
      ['FARU-C-2026-56', 'Communication as infrastructure: identifying gaps in early recognition of developmental differences through the phm–caregiver interface in Sri Lanka', 'ER Karunaratne & PP Liyanage', 'In-person'],
      ['FARU-C-2026-68', 'Evaluating the impact of AI-assisted tools on interior design practices among design professionals and design undergraduates', 'ABMHA Dissanayake & U Hettithanthri', 'In-person'],
      ['FARU-C-2026-74', 'Exploring the transformative impact of generative AI on interior design practice and education', 'RMLD Jayawardhana & U Hettithanthri', 'In-person'],
    ],
  ],
  [
    9, 'Sustainable Construction, Circular Materials and Resource Efficiency',
    'Room D', '13:30', '15:00',
    'Sen Prof. BAKS Perera', 'Dr. KATO Ranadeva', 'Ms. MNU Maddakandage', false,
    [
      ['FARU-C-2026-17', 'Barriers and mitigation strategies for modular construction adoption: A prioritised, stakeholder-based framework for commercial buildings in Sri Lanka', 'DH Wedage, RND Guruge & WN Kawmudi', 'In-person'],
      ['FARU-C-2026-77', 'Experimental investigation of plaster of paris mould waste and local clay composites for sustainable material development', 'LKDN Lihinikaduwa & WMND Ranasinghe', 'In-person'],
      ['FARU-C-2026-83', 'Supply chain barriers and mitigation strategies for social procurement of disadvantaged populations in construction: A systematic literature review', 'AMADM Alagiyawanna, B Gheethanjali & GA Tennakoon', 'In-person'],
      ['FARU-C-2026-91', 'Assessment of the interrelation between total facilities management and business development: Conceptual framework', 'ASH Fernando & U Rathnayake', 'In-person'],
      ['FARU-C-2026-101', 'Construction material price volatility: A review of influencing factors and industry consequences', 'GSD Perera, B Gheethanjali & GA Thennakoon', 'In-person'],
      ['FARU-C-2026-119', 'The changing landscape of leadership research in construction: A systematic literature review and knowledge mapping approach', 'GHSP De Silva, YG Sandanayake & EMAC Ekanayake', 'In-person'],
      ['FARU-C-2026-132', 'Circular economy applications in the construction phase: A systematic literature review', 'MAA Udayangani & T Ramachandra', 'In-person'],
    ],
  ],
  [
    10, 'Inclusive Urban Spaces, Public Participation and Spatial Experience',
    'Room E', '13:30', '15:00',
    'Prof. U Kulathunga', 'Mrs. WMND Ranasinghe', 'Mr. PHSD Gunawardhana', true,
    [
      ['FARU-C-2026-41', 'Analysis of MEP services costs in hospital buildings in Sri Lanka: Contribution and significant cost elements', 'H Alwis, T Ramachandra & UGD Madushika', 'Live online'],
      ['FARU-C-2026-26', 'Social identity and public participation: The case of the Gurunagar sustainable solid waste management project in Jaffna, Sri Lanka', 'B Abivarna & RMSR Rathnayake', 'Live online'],
      ['FARU-C-2026-71', 'The impact of control intensity on invitation to access at shopping mall entrance thresholds in Colombo', 'PNS Wijayarathne & SM Hirudini', 'Live online'],
      ['FARU-C-2026-30', 'Exploring entangled spatio-temporal dynamics in placemaking and social inclusion: Insights from exploratory fieldwork along the river Thames, London', 'CF Hossain Suhi, SE Jannat & M Koshy', 'In-person'],
      ['FARU-C-2026-37', 'A Systematic review of plant species used in green walls and their selection factors', 'UGD Madushika & T Ramachandra', 'Live online'],
    ],
  ],
  [
    11, 'Blue–Green Infrastructure and Water-Sensitive Landscapes',
    'Room A', '15:15', '16:45',
    'Dr. CC Abenayake', 'L. Archt. S Udalamatta', 'Mr. PHSD Gunawardhana', false,
    [
      ['FARU-C-2026-22', 'Designing blue-green infrastructure solutions through SWMM-based hydrological modelling', 'K Atul, R Ahmad & K Abhinay', 'In-person'],
      ['FARU-C-2026-43', 'Integrating landscape ecology for sustainable village tank cascade systems in Sri Lanka’s dry zone: A case study of the Mamunugama Vtcs in Mee Oya basin', 'RD Liyanage, HMM Herath', 'In-person'],
      ['FARU-C-2026-46', 'Climate variability and a screening-level nature-based solutions framework for Kanwar Lake Wetland, India', 'A Kumar, M Mukherjee, S Sen & A Kumar', 'In-person'],
      ['FARU-C-2026-75', 'Review on carbon sink capacity & long-term carbon storage through nature based solutions in construction projects', 'P Piriththika, KATO Ranadewa, KD Sepalage & SJL Madhushani', 'In-person'],
      ['FARU-C-2026-98', 'Reclaiming the edge: the influence of lake edge typology on public engagement with a polluted urban water body a comparative study of edge conditions at Beira Lake, Colombo, Sri Lanka', 'MSN Mallawaarachchi & SM Hirudini', 'In-person'],
      ['FARU-C-2026-116', 'Between water & wings: Reactivating a degraded wetland for avifaunal habitat restoration and experiential landscape at Anawilundawa wetland sanctuary', 'B Januja', 'In-person'],
      ['FARU-C-2026-128', 'Urban pressure and mangrove spatial fragmentation: A spatial temporal study of the Negombo Lagoon Muthurajawela wetland system, Sri Lanka', 'KMSD Konara & C Gunarathne', 'In-person'],
    ],
  ],
  [
    12, 'Public Space, Everyday Urbanism and Placemaking',
    'Room B', '15:15', '16:45',
    'Prof. JN Munasinghe', 'Dr. ABPP Bandusena', 'Mr. MR Mahamood', false,
    [
      ['FARU-C-2026-130', 'Festivals as temporal-spatial phenomena: rethinking their role in spatial planning in Sri Lanka', 'WAMPGDA Athapattu, NBS Madusanka & MCK Silva', 'Pre-recorded online'],
      ['FARU-C-2026-40', 'Night time food culture nodes as emerging urban spaces in Colombo: implications for planning', 'MS Shahidh & MR Noordeen', 'In-person'],
      ['FARU-C-2026-63', 'Influence of an urban open space on human activities: A case study of Kubichchankulama lake car park, Anuradhapura', 'MAH Sharada & SM Hirudini', 'In-person'],
      ['FARU-C-2026-79', 'The production of everyday city space: vendor-user experiences in Ragama, Sri Lanka', 'N Wanigasinghe & L Meetiyagoda', 'In-person'],
      ['FARU-C-2026-95', 'Adaptive practices in temporary informal markets: A case study of the Karagampitiya weekly fair (sathipola) in Sri Lanka', 'R Azeezdeen & CT Nugawela', 'In-person'],
      ['FARU-C-2026-126', 'Multi-sensory architecture for emotional well-being: influence of tactile elements on mood states of children in therapeutic environments', 'WASW Narangoda, AA Hettiarachchi & WANN Peiries', 'In-person'],
    ],
  ],
  [
    13, 'Urban Regeneration, Spatial Transformation and Planning Policy',
    'Room C', '15:15', '16:45',
    'Prof. AL Susantha', 'Dr. TKGP Ranasinghe', 'Ms. EMK Ruwanima', false,
    [
      ['FARU-C-2026-18', 'The Kandy Smartcad: development of an integrated digital cadastre-based planning approval platform for enhancing transparency, efficiency, and coordination in Kandy, Sri Lanka.', 'KNY Wickramanayaka, MTK Fernando, HM Bogahawaththage, BASMN Abeywardhana & DTMU Dasanayaka', 'In-person'],
      ['FARU-C-2026-59', 'Preservation as fidelity to repetition: stupa care beyond material stasis in Sri Lanka', 'PP Liyanage & MN Liyanage', 'In-person'],
      ['FARU-C-2026-69', 'Urban regeneration projects in Sri Lanka: Engagement of the community groups and actors', 'GO Abeysooriya, BAKS Perera & MH Fernando', 'In-person'],
      ['FARU-C-2026-90', 'Bottom-up decision-making for architectural interventions in developing economies design strategies from contemporary Sri Lankan architectural practice', 'KKS Kaushalya & KKS Perera', 'In-person'],
      ['FARU-C-2026-103', 'Identifying lost space typologies through spatial configuration in Slave Island, Sri Lanka', 'RMT Chathurika & NGR Perera', 'In-person'],
      ['FARU-C-2026-114', 'Beyond the urban–rural binary: a composite index approach to delineating the urban–rural fringe in Kurunegala, Sri Lanka', 'DDT Munasingha & PKS Mahanama', 'In-person'],
    ],
  ],
  [
    14, 'Spatial Experience, Human Behavior and Urban Safety',
    'Room D', '15:15', '16:45',
    'Dr. RMNU Rathnayake', 'Dr. PI Sinhapathirana', 'Archt. TS Ranathungaarachchi', false,
    [
      ['FARU-C-2026-28', 'Psychologically responsive classroom lighting for learning satisfaction: evidence from a primary school in Sri Lanka', 'WAAD Peiris & AA Hettiarachchi', 'In-person'],
      ['FARU-C-2026-45', 'Mapping thermal justice: Integrating urban heat, activity concentration and park accessibility in Colombo', 'DASM Ranasinghe, GHM Thamarasi, JPS Somasekara, BI Lakshani & YMKN Aberathnak', 'In-person'],
      ['FARU-C-2026-76', 'Enhancing spatial autonomy: the impact of perceptual colour and pattern landmarks on wayfinding performance in children with down syndrome', 'MDSM Jayawardhana & AA Hettiarachchi & WANN Peries', 'In-person'],
      ['FARU-C-2026-96', 'Effects of the built environment on the perception of urban safety with reference to public transit points in Sri Lanka', 'PGPI Chandrasekara & D Perera', 'In-person'],
      ['FARU-C-2026-102', 'Illuminance and light quality, perceived restoration and awe among tourists: Evidence from a Sri Lankan Buddhist temple', 'PLVAK Pelapolwatte & AA Hettiarachchi', 'In-person'],
      ['FARU-C-2026-104', 'User experience study of railway track maintenance tools in Sri Lanka', 'JDK Jayathunga & WMND Ranasinghe', 'In-person'],
      ['FARU-C-2026-133', 'Landscape psychological parameters affecting human decision making in public space choice: A day and night comparative study in Ella, Sri Lanka', 'V Shadhurshan & C Dissanayake', 'In-person'],
    ],
  ],
  [
    15, 'Human-Centred Design, Digital Innovation and Built Environment Performance',
    'Room E', '15:15', '16:45',
    'Prof. T Ramachandra', 'Dr. SDA Soorige', 'Ms. SPSV Fernando', true,
    [
      ['FARU-C-2026-01', 'Assessment of current project monitoring practices and the applicability of real-time monitoring digital platforms in Sri Lankan construction industry', 'HSM Samarasinghe & WN Kawmudi', 'Live online'],
      ['FARU-C-2026-14', 'Investigating the impact of lighting design on product visibility and customer behaviour in clothing shops in Sri Lanka', 'S Sadeepa & P Maheshakya', 'Pre-recorded online'],
      ['FARU-C-2026-16', 'Evaluating artificial intelligence and designer roles in custom furniture design: creativity, functionality and perceived user experience', 'AALV Abesekara & DM Rajapaksha', 'Pre-recorded online'],
      ['FARU-C-2026-50', 'Toward a sensory therapeutic design framework for hospital architecture in Bangladesh', 'F Islam, MR Mahmud, SY Hafsa & SSS Shezan', 'Pre-recorded online'],
    ],
  ],
];

export const technicalSessions: TechnicalSession[] = rows.map(
  ([number, theme, room, start, end, chair, coChair, coordinator, online, papers]) => ({
    id: `session-${String(number).padStart(2, '0')}`,
    number,
    theme,
    room,
    start,
    end,
    chair,
    coChair,
    coordinator,
    online,
    papers: papers.map(([code, title, authors, presentationMode]) => ({
      code,
      title,
      authors,
      presentationMode,
    })),
  })
);