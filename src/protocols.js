const protocols = [
    {
        number: 1,
        title: "Physical Greetings",
        description: "Physical interactions in various cultures are governed by norms and laws that may vary widely but serve critical roles in social cohesion and respect. These protocols, whether a handshake, bow, or another form, dictate the appropriateness of gestures in different social and professional contexts.",
        detailedDescription: "In Japan, a bow ranges from a slight nod of the head to a deep waist bend, reflecting the level of respect or formality of the situation. Contrast this with the Brazilian custom of cheek-kissing in social settings, which demonstrates warmth and welcome. Meanwhile, the firm handshake remains a staple in business settings across many Western cultures, symbolizing professionalism and agreement.",
        qa: [
            { id: 'q1', answer: "To initiate social interactions and establish a positive rapport between individuals." },
            { id: 'q2', answer: "It provides a structured way to acknowledge another person's presence and show respect or friendliness." },
            { id: 'q3', answer: "Physical gestures like handshakes, bows, or hugs; verbal greetings; and appropriate physical proximity." },
            { id: 'q4', answer: "Primarily through social norms and cultural expectations. Violations may result in social awkwardness or disapproval." },
            { id: 'q5', answer: "It addresses the need for a standardized way to begin social interactions, reducing uncertainty and potential conflict." },
            { id: 'q6', answer: "Pros: Facilitates smooth social interactions. Cons: Can spread germs through physical contact; may create discomfort for those with different cultural norms." },
            { id: 'q7', answer: "It can lead to social awkwardness, misunderstandings, or even offense in some cultures." },
            { id: 'q8', answer: "It often interacts with broader social etiquette systems and can vary significantly based on cultural contexts." }
        ],
        spectrums: [
            { id: "HardSoft", value: 8 },
            { id: "RegulatedUnregulated", value: 9 },
            { id: "ExplicitImplicit", value: 7 },
            { id: "StaticDynamic", value: 6 },
            { id: "OpenProprietary", value: 9 },
            { id: "HierarchicalFlat", value: 5 },
            { id: "TransparentOpaque", value: 3 }
        ]
    },
    {
        number: 2,
        title: "Road Traffic",
        description: "Vehicular traffic comprises millions of objects, each weighing up to several tons, moving at high speeds in close proximity. Yet traffic is able to flow reasonably safely thanks to a relatively small set of rules, starting with a consensus about which side of the road to drive on.",
        detailedDescription: "In cities like New York or Tokyo, this orchestration is evident during rush hour when traffic lights regulate the movement of vehicles to prevent congestion and accidents. Highway travel, especially on routes like the German Autobahn or the U.S. Interstate system, showcases another layer of coordination, where speed limits, lane markings, and signage guide vehicles traveling at high speeds. These systems help maintain order and safety despite the high density and speed of the vehicles involved.",
        qa: [
            { id: 'q1', answer: "To manage the flow of traffic and prevent collisions at points where roads intersect." },
            { id: 'q2', answer: "It dictates when vehicles and pedestrians should stop, proceed, or yield through signage, traffic lights, and road markings." },
            { id: 'q3', answer: "The movement of vehicles and pedestrians from different directions, including turning and crossing actions." },
            { id: 'q4', answer: "Legally through traffic laws enforced by police, and technologically through traffic lights and sensors." },
            { id: 'q5', answer: "It addresses the potential chaos and danger of multiple vehicles approaching an intersection from different directions simultaneously." },
            { id: 'q6', answer: "Pros: Increases safety and traffic efficiency. Cons: Can cause delays, especially at busy intersections or during non-peak hours." },
            { id: 'q7', answer: "It can result in traffic accidents, injuries, or fatalities. Less severe consequences include traffic jams or near-misses." },
            { id: 'q8', answer: "It's part of the broader road traffic system and interacts with other traffic laws, urban planning protocols, and emergency vehicle protocols." }
        ],
        spectrums: [
            { id: "HardSoft", value: 2 },
            { id: "RegulatedUnregulated", value: 1 },
            { id: "ExplicitImplicit", value: 1 },
            { id: "StaticDynamic", value: 4 },
            { id: "OpenProprietary", value: 2 },
            { id: "HierarchicalFlat", value: 3 },
            { id: "TransparentOpaque", value: 2 }
        ]
    },
    {
        number: 3,
        title: "Library Classifications",
        description: "Effective management of vast information resources in libraries hinges on robust classification systems. These systems, whether Dewey Decimal or Library of Congress, facilitate quick retrieval by organizing materials in a logical, universally understood order.",
        detailedDescription: "The Dewey Decimal System, utilized widely in public libraries, organizes books into ten major categories, making it easier for patrons to find literature based on subject matter. In academic contexts, the Library of Congress Classification system, with its broader range of categories, is preferred for its detailed breakdown which facilitates scholarly research by enabling precise location of material on increasingly specific topics.",
        qa: [
            { id: 'q1', answer: "To organize and categorize books and other library materials in a systematic way that facilitates easy retrieval and browsing." },
            { id: 'q2', answer: "It provides a structured system for librarians to catalog materials and for users to locate items within the library." },
            { id: 'q3', answer: "The physical arrangement of books on shelves, the creation of catalog entries, and the process of searching for and locating materials." },
            { id: 'q4', answer: "Through professional standards in librarianship, library policies, and the physical organization of materials." },
            { id: 'q5', answer: "It addresses the challenge of organizing vast amounts of information in a way that's logical, consistent, and accessible to users." },
            { id: 'q6', answer: "Pros: Enables efficient organization and retrieval of materials. Cons: Can be complex to learn and maintain; may sometimes separate related materials due to rigid categorization." },
            { id: 'q7', answer: "Materials may be misplaced or difficult to find, reducing the library's effectiveness and user satisfaction." },
            { id: 'q8', answer: "It interacts with cataloging standards, digital library systems, and broader information science protocols. It also often integrates with inter-library loan systems." }
        ],
        spectrums: [
            { id: "HardSoft", value: 3 },
            { id: "RegulatedUnregulated", value: 3 },
            { id: "ExplicitImplicit", value: 2 },
            { id: "StaticDynamic", value: 2 },
            { id: "OpenProprietary", value: 4 },
            { id: "HierarchicalFlat", value: 1 },
            { id: "TransparentOpaque", value: 3 },
        ]
    },
    {
        number: 4,
        title: "Double-Entry Bookkeeping",
        description: "This fundamental accounting method ensures every financial transaction is recorded in two different accounts, providing a self-balancing mechanism that enhances the accuracy and reliability of financial records. It's pivotal for businesses to maintain transparent and traceable financial data.",
        detailedDescription: "This accounting method requires that for every debit entry, there must be an equivalent credit entry. This practice ensures the accounting equation (Assets = Liabilities + Equity) always balances. Such a system is vital in scenarios ranging from small businesses maintaining their financial integrity to multinational corporations that must report their financials accurately to stakeholders and regulatory bodies.",
        qa: [
            { id: 'q1', answer: "To accurately record, track, and verify financial transactions in an organization or business." },
            { id: 'q2', answer: "It requires every financial transaction to be recorded in at least two different accounts, ensuring a balanced and self-checking system." },
            { id: 'q3', answer: "The recording of debits and credits, the preparation of financial statements, and the reconciliation of accounts." },
            { id: 'q4', answer: "Through accounting standards, auditing practices, and legal requirements for financial reporting." },
            { id: 'q5', answer: "It addresses the need for accuracy, transparency, and error detection in financial record-keeping." },
            { id: 'q6', answer: "Pros: Increases accuracy and helps detect errors or fraud. Cons: Can be more time-consuming and complex than single-entry systems." },
            { id: 'q7', answer: "It can lead to inaccurate financial statements, undetected errors or fraud, and potential legal or regulatory issues." },
            { id: 'q8', answer: "It interacts with broader accounting principles, tax regulations, and financial reporting standards. It also forms the basis for most modern accounting software systems." }
        ],
        spectrums: [
            { id: "HardSoft", value: 2 },
            { id: "RegulatedUnregulated", value: 2 },
            { id: "ExplicitImplicit", value: 1 },
            { id: "StaticDynamic", value: 3 },
            { id: "OpenProprietary", value: 3 },
            { id: "HierarchicalFlat", value: 2 },
            { id: "TransparentOpaque", value: 2 }
        ]
    },
    {
        number: 5,
        title: "Intermodal Shipping Containers",
        description: "Standardized dimensions and regulations for intermodal shipping containers revolutionize global trade by ensuring cargo can be transported seamlessly across various modes of transportation, from ship to rail to truck, without unloading and reloading the contents.",
        detailedDescription: "The ISO standardization of shipping containers at lengths commonly of 20 or 40 feet allows for efficient stacking on cargo ships, and their steel structure enables secure transport over long distances. This system is instrumental in the global supply chain, evident at major shipping hubs like the Port of Shanghai or the Port of Rotterdam, where containers are transferred from ships to trucks or trains in minimal time.",
        qa: [
            { id: 'q1', answer: "To standardize the size and shape of shipping containers, enabling efficient and seamless transport of goods across different modes of transportation." },
            { id: 'q2', answer: "It dictates the design and dimensions of shipping containers, as well as how they are handled, stacked, and transferred between different vehicles." },
            { id: 'q3', answer: "The loading, unloading, stacking, and transfer of cargo between ships, trains, trucks, and storage facilities." },
            { id: 'q4', answer: "Through international standards (like ISO standards), port regulations, and the physical constraints of handling equipment designed for these containers." },
            { id: 'q5', answer: "It addresses the inefficiencies and complexities of transferring goods between different modes of transport, reducing handling time and costs." },
            { id: 'q6', answer: "Pros: Greatly increases efficiency and reduces costs in global trade. Cons: Requires significant infrastructure investment; may not be optimal for all types of cargo." },
            { id: 'q7', answer: "It can result in inefficiencies, increased costs, potential damage to goods, and difficulties in transferring cargo between different modes of transport." },
            { id: 'q8', answer: "It interacts with customs protocols, international trade agreements, logistics systems, and various transportation infrastructure designs." }
        ],
        spectrums: [
            { id: "HardSoft", value: 1 },
            { id: "RegulatedUnregulated", value: 2 },
            { id: "ExplicitImplicit", value: 1 },
            { id: "StaticDynamic", value: 2 },
            { id: "OpenProprietary", value: 2 },
            { id: "HierarchicalFlat", value: 4 },
            { id: "TransparentOpaque", value: 3 }
        ]
    },
    {
        number: 6,
        title: "TCP/IP",
        description: "This suite of protocols forms the backbone of the internet, enabling diverse computer networks to communicate through standard rules for data exchange. It ensures that data sent from one point reaches another efficiently and accurately, regardless of the underlying network infrastructure.",
        detailedDescription: "The protocol suite includes TCP (Transmission Control Protocol) and IP (Internet Protocol). TCP manages the data packets' assembly while IP ensures they are sent to the correct address. This structure is akin to sending a letter where TCP writes the contents and seals it in an envelope, while IP addresses and posts it, ensuring it reaches the intended recipient.",
        qa: [
            { id: 'q1', answer: "To enable reliable, ordered, and error-checked delivery of data between applications running on hosts communicating over an IP network." },
            { id: 'q2', answer: "It defines how data should be packetized, addressed, transmitted, routed, and received across networks." },
            { id: 'q3', answer: "The breaking down of data into packets, routing of packets across networks, reassembly of packets at the destination, and error checking." },
            { id: 'q4', answer: "Through the implementation in network hardware and software, and adherence to standards set by organizations like the Internet Engineering Task Force (IETF)." },
            { id: 'q5', answer: "It addresses the need for reliable data transmission across diverse and potentially unreliable network infrastructures." },
            { id: 'q6', answer: "Pros: Provides reliable, universal communication across diverse networks. Cons: Can have overhead that impacts performance in some scenarios." },
            { id: 'q7', answer: "It can result in data loss, connection failures, or security vulnerabilities if implemented incorrectly." },
            { id: 'q8', answer: "It forms the foundation of internet communication and interacts with higher-level protocols like HTTP, FTP, and SMTP, as well as lower-level network protocols." }
        ],
        spectrums: [
            { id: "HardSoft", value: 2 },
            { id: "RegulatedUnregulated", value: 3 },
            { id: "ExplicitImplicit", value: 1 },
            { id: "StaticDynamic", value: 4 },
            { id: "OpenProprietary", value: 1 },
            { id: "HierarchicalFlat", value: 3 },
            { id: "TransparentOpaque", value: 4 }
        ]
    },
    {
        number: 7,
        title: "Zoning Laws",
        description: "These regulations play a critical role in urban planning by dictating land use in cities and towns. They help ensure that residential, commercial, and industrial areas are developed in a manner that balances economic growth with quality of life for residents.",
        detailedDescription: "Examples include residential zones which often restrict business operations to maintain a quiet, safe environment, while commercial zones are designed to accommodate traffic and larger buildings for businesses. In cities like San Francisco or Amsterdam, these laws control building heights, density, and use type, impacting everything from skyline to traffic flow.",
        qa: [
            { id: 'q1', answer: "To regulate land use and development within a municipality, controlling the type, density, and location of different structures and activities." },
            { id: 'q2', answer: "It dictates what types of buildings can be constructed and what activities can occur in specific areas of a city or town." },
            { id: 'q3', answer: "The planning, approval, and construction of buildings; the establishment of businesses; and the designation of areas for residential, commercial, industrial, or mixed use." },
            { id: 'q4', answer: "Through local government regulations, building permits, inspections, and legal penalties for violations." },
            { id: 'q5', answer: "It addresses issues of urban planning, such as separating incompatible land uses, managing population density, and preserving community character." },
            { id: 'q6', answer: "Pros: Promotes orderly development and protects property values. Cons: Can limit housing availability, increase costs, and potentially reinforce socioeconomic segregation." },
            { id: 'q7', answer: "It can result in legal penalties, forced removal of non-compliant structures, or broader urban planning issues like overcrowding or conflicting land uses." },
            { id: 'q8', answer: "It interacts with broader urban planning policies, environmental regulations, property laws, and economic development strategies." }
        ],
        spectrums: [
            { id: "HardSoft", value: 3 },
            { id: "RegulatedUnregulated", value: 1 },
            { id: "ExplicitImplicit", value: 2 },
            { id: "StaticDynamic", value: 5 },
            { id: "OpenProprietary", value: 2 },
            { id: "HierarchicalFlat", value: 2 },
            { id: "TransparentOpaque", value: 4 }
        ]
    },
    {
        number: 8,
        title: "OAuth",
        description: "A widely adopted authorization framework that allows users to grant websites or applications access to their information on other websites without exposing their passwords. It's a cornerstone of security and privacy on the modern web, enabling interoperability between software services.",
        detailedDescription: "This protocol operates by allowing a user to authenticate via a trusted service (like Google or Facebook) and then granting a token to a third party that permits specific access levels to the user's information. For instance, a fitness app might use OAuth to access a user's activity data from their cloud storage service without needing the password for that service.",
        qa: [
            { id: 'q1', answer: "To allow secure authorization in a standard method from web, mobile, and desktop applications." },
            { id: 'q2', answer: "It provides a framework for applications to obtain limited access to user accounts on an HTTP service, without sharing the user's credentials." },
            { id: 'q3', answer: "The process of a user granting permission to an application to access their data on another service, without revealing their password." },
            { id: 'q4', answer: "Through implementation in software systems and adherence to standards set by the OAuth Working Group." },
            { id: 'q5', answer: "It addresses the need for secure third-party access to user data without compromising user credentials." },
            { id: 'q6', answer: "Pros: Enhances security and user control over data access. Cons: Can be complex to implement correctly and may introduce additional steps in the user experience." },
            { id: 'q7', answer: "It can result in unauthorized access to user data, security vulnerabilities, or a breakdown in the functionality of applications relying on the protocol." },
            { id: 'q8', answer: "It interacts with HTTP/HTTPS protocols, various authentication systems, and is often used in conjunction with OpenID Connect for authentication." }
        ],
        spectrums: [
            { id: "HardSoft", value: 3 },
            { id: "RegulatedUnregulated", value: 4 },
            { id: "ExplicitImplicit", value: 2 },
            { id: "StaticDynamic", value: 5 },
            { id: "OpenProprietary", value: 2 },
            { id: "HierarchicalFlat", value: 4 },
            { id: "TransparentOpaque", value: 5 }
        ]
    },
    {
        number: 9,
        title: "HTTPS",
        description: "By encrypting data exchanged between a user's browser and a website, HTTPS provides a secure foundation for internet communication. This protocol protects against eavesdroppers and man-in-the-middle attacks, ensuring user data remains confidential and integral during transmission.",
        detailedDescription: "When you visit a secure website to make a purchase, HTTPS encrypts your credit card information, ensuring it travels securely from your browser to the website's server, thwarting attempts by hackers to intercept this sensitive data. This protocol uses SSL/TLS encryption, a cornerstone for secure communication on the internet.",
        qa: [
            { id: 'q1', answer: "To provide secure communication over a computer network, typically the internet, by encrypting the data exchanged between a user's browser and a website." },
            { id: 'q2', answer: "It ensures that data transmitted between the client and server is encrypted, and verifies the identity of the website the user is connecting to." },
            { id: 'q3', answer: "The encryption of data packets, the verification of website certificates, and the secure exchange of information between browsers and web servers." },
            { id: 'q4', answer: "Through implementation in web browsers and servers, adherence to standards set by the Internet Engineering Task Force (IETF), and the use of SSL/TLS certificates." },
            { id: 'q5', answer: "It addresses the need for secure online communication, protecting against eavesdropping, tampering, and impersonation in data exchanges." },
            { id: 'q6', answer: "Pros: Significantly enhances online security and privacy. Cons: Can slightly slow down connections and requires the purchase and maintenance of SSL/TLS certificates." },
            { id: 'q7', answer: "It can result in unsecured data transmission, potentially exposing sensitive information to interception or manipulation. Users may see security warnings in their browsers." },
            { id: 'q8', answer: "It builds upon the HTTP protocol, interacts with SSL/TLS protocols for encryption, and depends on the public key infrastructure (PKI) for certificate verification." }
        ],
        spectrums: [
            { id: "HardSoft", value: 2 },
            { id: "RegulatedUnregulated", value: 3 },
            { id: "ExplicitImplicit", value: 1 },
            { id: "StaticDynamic", value: 3 },
            { id: "OpenProprietary", value: 1 },
            { id: "HierarchicalFlat", value: 3 },
            { id: "TransparentOpaque", value: 6 }
        ]
    },
    {
        number: 10,
        title: "Ethereum",
        description: "A decentralized platform that enables the creation and execution of smart contracts and decentralized applications (DApps) without downtime, fraud, control, or interference from a third party. Ethereum's innovative use of blockchain technology extends beyond simple transactions to complex contractual agreements.",
        detailedDescription: "Ethereum's blockchain technology allows developers to create and run DApps that operate on a P2P network, rather than a single computer. This ensures they are always up and running, and no single entity can control the entire network. Smart contracts automatically execute transactions and other specific actions when conditions are met, without human intervention.",
        qa: [
            { id: 'q1', answer: "To provide a decentralized, open-source blockchain platform that enables smart contract functionality and cryptocurrency transactions." },
            { id: 'q2', answer: "It defines rules for creating and executing smart contracts, conducting transactions, and maintaining a distributed ledger across a network of nodes." },
            { id: 'q3', answer: "The creation and execution of smart contracts, the transfer of Ether (the native cryptocurrency), and the maintenance of a consistent blockchain state across the network." },
            { id: 'q4', answer: "Through consensus mechanisms (initially Proof of Work, transitioning to Proof of Stake), cryptographic verification, and the distributed nature of the blockchain." },
            { id: 'q5', answer: "It addresses the need for a programmable blockchain platform that can support decentralized applications (dApps) and automate complex transactions through smart contracts." },
            { id: 'q6', answer: "Pros: Enables decentralized, trustless transactions and complex smart contracts. Cons: Can face scalability issues, high transaction fees during network congestion, and potential security vulnerabilities in smart contracts." },
            { id: 'q7', answer: "It can result in failed transactions, loss of funds, smart contract vulnerabilities, or in extreme cases, network forks if there's disagreement about protocol changes." },
            { id: 'q8', answer: "It interacts with various layer-2 scaling solutions, interoperability protocols for communicating with other blockchains, and depends on underlying internet protocols for network communication." }
        ],
        spectrums: [
            { id: "HardSoft", value: 3 },
            { id: "RegulatedUnregulated", value: 6 },
            { id: "ExplicitImplicit", value: 2 },
            { id: "StaticDynamic", value: 7 },
            { id: "OpenProprietary", value: 1 },
            { id: "HierarchicalFlat", value: 7 },
            { id: "TransparentOpaque", value: 3 }
        ]
    },
    {
        number: 11,
        title: "Kyoto Protocol",
        description: "An international agreement that commits state parties to reduce greenhouse gas emissions, based on the premise that global warming is a real and pressing problem, and that industrialized countries are chiefly responsible for current high levels of emissions. This protocol is a critical step in global environmental policy, aiming to combat climate change.",
        detailedDescription: "The protocol sets binding emission reduction targets for industrialized countries, which are required to implement national measures to reduce greenhouse gas emissions. This might involve promoting renewable energy sources, enhancing energy efficiency, or developing green technologies. The commitment periods under the protocol ensure continuous assessment and adjustment of targets.",
        qa: [
            { id: 'q1', answer: "To reduce greenhouse gas emissions globally, with a focus on industrialized nations, in an effort to combat climate change." },
            { id: 'q2', answer: "It sets binding emission reduction targets for developed countries and establishes mechanisms for achieving these reductions." },
            { id: 'q3', answer: "The measurement and reporting of greenhouse gas emissions, the implementation of national policies to reduce emissions, and the use of flexible mechanisms like emissions trading." },
            { id: 'q4', answer: "Through international law, with countries reporting their emissions and facing potential sanctions for non-compliance. However, enforcement has been challenging in practice." },
            { id: 'q5', answer: "It addresses the global challenge of climate change by attempting to reduce human-induced greenhouse gas emissions on an international scale." },
            { id: 'q6', answer: "Pros: Provides a framework for global action on climate change. Cons: Can potentially impact economic growth in the short term, and has been criticized for not including developing nations in binding targets." },
            { id: 'q7', answer: "It can result in countries not meeting their emission reduction targets, potentially accelerating climate change. However, direct consequences for non-compliance have been limited." },
            { id: 'q8', answer: "It interacts with national environmental policies, international climate agreements (like the Paris Agreement), and global economic systems. It also depends on scientific protocols for measuring and reporting emissions." }
        ],
        spectrums: [
            { id: "HardSoft", value: 5 },
            { id: "RegulatedUnregulated", value: 3 },
            { id: "ExplicitImplicit", value: 2 },
            { id: "StaticDynamic", value: 6 },
            { id: "OpenProprietary", value: 1 },
            { id: "HierarchicalFlat", value: 2 },
            { id: "TransparentOpaque", value: 4 }
        ]
    }
];

export default protocols;
