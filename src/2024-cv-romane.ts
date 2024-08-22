export type Cv = {
  title?: string
  name: string
  avatarUrl: string
  subTitle: string
  location: string
  phone: string
  email: string
  skills: {
    title: string
    content: Content[]
  }[]
  sections: {
    title: string
    items: {
      title: string
      location: string
      org: string
      date: [Date, Date | undefined] | string
      content: Content[]
    }[],
  }[]
  langs: Content[]
}

export type Content = {
  title?: string
  desc?: string
  date?: string
  location?: string
}

export const cvRomane: Cv = {
  avatarUrl: '/avatar-romane.jpeg',
  title: '',
  name: 'Romane Breton',
  subTitle: '34 years old',
  location: 'French',
  phone: '+33 616 887 502',
  email: 'romane.m.breton@gmail.com',
  langs: [
    {title: 'French', desc: 'Mother tongue'},
    {title: 'English', desc: 'Fluent'},
    {title: 'Spanish', desc: 'Fluent'},
    {title: 'Italian', desc: 'Intermediate'},
    {title: 'Arabic', desc: 'Beginner'},
  ],
  skills: [
    // {
    //   title: 'Trainings & Certifications',
    //   content: [
    //     {title: 'Military training with the French Air Force', desc: 'Airbase 701, Salon de Provence, France', date: 'February 2014',},
    //     {title: 'Certificate of International Humanitarian Law dissemination', desc: 'French Red Cross', date: 'April 2014',},
    //     {title: 'Psychological trauma among refugees', desc: 'France terre d’asile', date: 'January 2016',},
    //     {title: 'Preventing psychosocial risks among team members', desc: 'Compétences Prévention ', date: 'October 2016',},
    //     {title: 'Identifying and protecting victims of trafficking', desc: 'France terre d’asile ', date: 'November 2016',},
    //     {title: 'Hazardous Environment Awareness Training (HEAT)', desc: 'DRC, Tunisia ', date: 'October 2020',},
    //     {title: 'DRC Protection training, DRC Global Protection Unit Team', date: 'November 2021',},
    //     {title: 'Hazardous Environment Awareness Training (HEAT)', desc: 'Safer Access, Ukraine', date: 'April 2023',}
    //   ]
    // },
    // {
    //   title: 'Dissertations',
    //   content: [
    //     {desc: 'Transitional Justice in Burundi: amnesty at the heart of peace-building and national reconciliation issues.'},
    //     {desc: 'The governance structure of the State of Palestine'},
    //     {desc: 'The Palestinian refugee camps in Lebanon: symbolic spaces of the construction of Palestinian identity in exile, its challenges and limitations (1948-1993).'},
    //   ]
    // }
  ],
  sections: [
    {
      title: 'Work experiences',
      items: [
        {
          title: 'Country Protection Coordinator',
          location: 'Kyiv, Ukraine',
          org: 'Danish Refugee Council',
          date: [new Date(2024, 1, 1), undefined],
          content: [
            {title: 'Technical quality oversight and leadership in expanding the program nationwide: protection monitoring and RPAs, protection case management, individual and group PSS, IPA and referrals, community-based protection, GBV, legal aid, institutional support, implementing partners (ECHO/BHA/UHF/Danida/private foundations/etc. – approx. $14 million/year)'},
            {title: 'Technical supervision of and support to the CO technical team (GBV specialist, PSS specialist, Legal aid specialist) and 6 field protection managers/teams'},
            {title: 'Recruitment of protection managers and specialists; crucial support in nationalizing managerial positions'},
            {title: 'Strategic planning (annual protection workshop, periodic reviews, contribution to the country strategy)'},
            {title: 'Production of comprehensive protection analysis reports and monthly visual snapshots'},
            {title: 'Development and roll-out of multiple technical tools and guidelines (inc. contextualized protection case management tools, cash for protection guidelines, referral guidelines, MEAL/IM guidance, etc.)'},
            {title: 'Harmonization of approaches and tools across teams (inc. creation of unified tools for data collection, monitoring and reporting, facilitation of cross-team exchanges and learning, etc.)'},
            {title: 'External coordination with protection partners and coordination forums (inc. member of the Protection Cluster SAG); external representation with donors'},
            {title: 'Internal coordination within the protection department (monthly and ad-hoc protection technical meetings) and other departments (inc. operations, partnerships, advocacy, MEAL/IM, other technical coordinators)'},
            {title: 'Development of multiple proposals and corresponding budgets'},
            {title: 'Country-level AGDM focal point'},
          ]
        },
        {
          title: 'Protection Manager',
          location: 'Przemyśl, Poland (Ukraine Emergency)',
          org: 'Première Urgence Internationale',
          date: [new Date(2022, 3, 1), new Date(2024, 4, 1)],
          content: [
            {title: 'Kick off of a protection program in “Blue Dots” (Children and Family Support Hubs): information and counselling, identification and referrals of PSNs, provision of PFA'},
            {title: 'Recruitment, management and capacity-building of 18 field staff and 1 MEAL officer'},
            {title: 'Creation and roll-out of technical tools and systems'},
            {title: 'External coordination (working groups and donors)'},
          ]
        },
        {
          title: 'Protection Manager',
          location: 'Gedaref, Sudan (Tigray crisis)',
          org: 'Danish Refugee Council',
          date: [new Date(2021, 3, 1), new Date(2022, 3, 1)],
          content: [
            {title: 'Kick off and implementation of a protection program in 5 refugee camps and transit centres: protection monitoring, case management (general protection and GBV), individual protection assistance and referrals, community-based protection (mobilization, awareness-raising and information-sharing, community-based protection networks), psychosocial support (both through static – community safe spaces – and mobile modalities), protection desks (ECHO/IcSP/UNHCR/SDC)',},
            {title: 'Recruitment, management and capacity-building of 14 protection staffs, 1 IMO and 30 refugee mobilizers',},
            {title: 'Administrative, financial, logistic and security follow-up',},
            {title: 'Data management, monitoring and reporting',},
            {title: 'Development and roll-out of technical tools and systems',},
            {title: 'External coordination and advocacy with Protection WorkingGroup, GBV SWG, MHPSS SWG, Counter-trafficking WG, PSEA taskforce, PSN taskforce, camp coordination; external representation with donors (including through organizing visits)',},
            {title: 'Conduction of rapid protection assessments in East Sudan; participation in interagency assessments; key role in developing and implementing the East Sudan’s GBV action plan',},
            {title: 'Development of project proposals/CNs based on identified gaps and needs as well as strategic priorities',},
            {title: 'PSEA focal person for DRC East Sudan',},
          ]
        },
        {
          title: 'Protection Specialist',
          org: 'Danish Refugee Council',
          location: 'Tripolitania, Libya',
          date: [new Date(2020, 4, 1), new Date(2020, 11, 1)],
          content: [
            {title: 'Technical quality oversight (ECHO/UNHCR/DFID funding)'},
            {title: 'Technical supervision and capacity-building of the protection team'},
            {title: 'Tools and systems development (protection monitoring, case management, IPA, legal aid, information dissemination)'},
          ]
        },
        {
          title: 'Protection Coordinator',
          org: 'Première Urgence Internationale',
          location: 'Maiduguri, Nigeria',
          date: [new Date(2019, 8, 1), new Date(2020, 5, 1)],
          content: [
            {title: 'Technical quality oversight (ECHO/USAID funding)'},
            {title: 'Development of PUI’s protection strategy in Nigeria'},
            {title: 'Technical supervision and capacity-building of protection teams'},
            {title: 'External representation and coordination (inc. key protection stakeholders and coordination forums)'},
            {title: 'Acting deputy head of mission for programs'},
          ]
        },
        {
          title: 'Protection and Community Outreach Manager',
          org: 'Première Urgence Internationale',
          location: 'Maiduguri, Nigeria',
          date: [new Date(2018, 5, 1), new Date(2019, 5, 1)],
          content: [
            {title: 'Kick off and implementation of a protection program: protection monitoring, referrals, service mapping, community awareness and mobilization, advocacy (ECHO/OFDA funding)'},
            {title: 'Recruitment, management and capacity-building of 21 staffs and 190 community volunteers'},
            {title: 'External representation and coordination (donors, working groups, (I)NGOs)'},
          ]
        },
        {
          title: 'Field Coordinator',
          org: 'Avocats sans Frontières France (Lawyers without Borders)',
          location: 'Battambang, Cambodia',
          date: [new Date(2017, 3, 1), new Date(2018, 1, 1)],
          content: [
            {title: 'Legal aid project implementation (legal counselling, legal assistance, legal awareness-raising)'},
            {title: 'Country representation (donors, authorities, justice professionals, international and local organizations)'},
          ]
        },
        {
          title: 'Legal Aid Officer & Project Manager',
          org: 'France terre d’asile - Emergency desk',
          location: 'Calais, France',
          date: [new Date(2015, 2, 1), new Date(2017, 2, 1)],
          content: [
            {title: 'Provision of legal counselling and assistance to detained migrants'},
            {title: 'Implementation of a project targeting asylum-seekers and refugees in informal settlements: information dissemination, case management, referrals, camps monitoring (UNHCR funding)'},
            {title: 'Recruitment, management, and training of social workers and legal officers'},
            {title: 'External representation and coordination (working groups, authorities and justice professionals)'},
          ]
        },
      ]
    },
    {
      title: 'Education',
      items: [
        {
          title: 'Master’s degree Humanitarian Action and Humanitarian Law',
          date: '2013 - 2014',
          org: 'Institute of International Humanitarian Studies',
          location: 'Aix-Marseille University, France',
          content: [
            // {title: 'With high distinction'},
            {
              title: 'With high distinction - Dissertation',
              desc: '“Transitional Justice in Burundi: amnesty at the heart of peace-building and national reconciliation issues.”'
            }
          ]
        },
        {
          date: '2013 - 2014',
          org: 'Institute of International Humanitarian Studies',
          location: 'Aix-Marseille University, France',
          title: 'Advanced Diploma "Field legal officer for Human Rights"',
          content: [
            {title: 'Dissertation', desc: '“The governance structure of the State of Palestine”.'}
          ]
        },
        {
          date: '2010 - 2014',
          org: 'Institute of Political Studies (Sciences Po Rennes)',
          location: 'Rennes, France',
          title: 'Master’s degree "International and European Affairs"',
          content: [
            // {title: 'With distinction'},
            {
              title: 'With distinction - Dissertation',
              desc: '“The Palestinian refugee camps in Lebanon: symbolic spaces of the construction of Palestinian identity in exile, its challenges and limitations (1948-1993).”'
            },
          ]
        },
      ],
    },
    {
      title: 'Trainings & Certifications',
      items: [
        {title: 'Certificate of International Humanitarian Law dissemination', org: 'French Red Cross', location: 'France', date: 'April 2014',},
        {title: 'Psychological trauma among refugees', org: 'France terre d’asile', location: 'France', date: 'January 2016',},
        {title: 'Preventing psychosocial risks among team members', org: 'Compétences Prévention ', location: 'France', date: 'October 2016',},
        {title: 'Identifying and protecting victims of trafficking', org: 'France terre d’asile ', location: 'France', date: 'November 2016',},
        {title: 'DRC Global Protection training', org: 'DRC HQ', location: 'Copenhagen', date: 'November 2021',},
        {title: 'Hazardous Environment Awareness Training (HEAT)', org: 'DRC Libya & Ukraine', location: '', date: 'October 2020',},
        // {title: 'Hazardous Environment Awareness Training (HEAT)', org: 'Safer Access', location: 'Ukraine', date: 'April 2023',}
      ]
    }
    // {
    //   title: 'EDUCATION',
    //   sub: [
    //     {
    //       date: [new Date(2013), new Date(2014)],
    //       org: 'Institute of International Humanitarian Studies',
    //       location: 'Aix-Marseille University, France',
    //       title: 'Master’s degree in Humanitarian Action and Humanitarian Law (Master 2) – with high distinction',
    //       content: [{label: '<b>Master dissertation:</b> "Transitional Justice in Burundi: amnesty at the heart of peace-building and national reconciliation issues."'}],
    //     },
    //     {
    //       date: [new Date(2013), new Date(2014)],
    //       org: 'Institute of International Humanitarian Studies',
    //       location: 'Aix-Marseille University, France',
    //       title: 'Advanced Diploma in "Field legal officer for Human Rights"',
    //       content: [{label: '<b>Final dissertation:</b> "The governance structure of the State of Palestine"'}],
    //     },
    //     {
    //       date: [new Date(2010), new Date(2014)],
    //       org: 'Institute of International Humanitarian Studies',
    //       location: 'Rennes, France',
    //       title: 'Master’s degree in “International and European Affairs” – with distinction',
    //       content: [{
    //         label: '<b>Master dissertation:</b> "The Palestinian refugee camps in Lebanon: symbolic spaces of the construction of Palestinian identity in exile, its challenges and limitations (1948-1993)."'
    //       }],
    //     },
    //   ]
    // }
  ]
}