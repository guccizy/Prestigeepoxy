import React, { useState } from 'react';
import { ArrowLeft, Home, Building2, Factory, Shield, ChevronRight, Plus, Minus, Car, ChefHat, Briefcase, Warehouse, FlaskConical, Wrench, Bath, Sofa, UtensilsCrossed, Store, DollarSign, Droplets, AlertTriangle, Hammer } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const [currentStep, setCurrentStep] = useState('start');
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetPath = () => {
    setCurrentStep('start');
    setSelectedPath([]);
    setOpenFAQ(null);
  };

  const goBack = () => {
    if (selectedPath.length > 0) {
      const newPath = [...selectedPath];
      newPath.pop();
      setSelectedPath(newPath);
      
      if (newPath.length === 0) {
        setCurrentStep('start');
      } else {
        setCurrentStep(newPath[newPath.length - 1]);
      }
    }
    setOpenFAQ(null);
  };

  const selectOption = (option: string) => {
    const newPath = [...selectedPath, option];
    setSelectedPath(newPath);
    setCurrentStep(option);
    setOpenFAQ(null);
  };

  // Arbre de décision enrichi
  const decisionTree = {
    start: {
      title: t('faq_section.decision_tree.start.title'),
      subtitle: t('faq_section.decision_tree.start.subtitle'),
      options: [
        {
          id: 'residentiel',
          title: t('faq_section.decision_tree.start.options.residential.title'),
          subtitle: t('faq_section.decision_tree.start.options.residential.subtitle'),
          description: t('faq_section.decision_tree.start.options.residential.description'),
          icon: Home,
          color: 'bg-elegant-gold/10 text-elegant-gold border-elegant-gold/30 hover:bg-elegant-gold/20'
        },
        {
          id: 'commercial',
          title: t('faq_section.decision_tree.start.options.commercial.title'),
          subtitle: t('faq_section.decision_tree.start.options.commercial.subtitle'),
          description: t('faq_section.decision_tree.start.options.commercial.description'),
          icon: Building2,
          color: 'bg-white/10 text-white border-white/30 hover:bg-white/20'
        },
        {
          id: 'industriel',
          title: t('faq_section.decision_tree.start.options.industrial.title'),
          subtitle: t('faq_section.decision_tree.start.options.industrial.subtitle'),
          description: t('faq_section.decision_tree.start.options.industrial.description'),
          icon: Factory,
          color: 'bg-anthracite/60 text-off-white border-anthracite/50 hover:bg-anthracite/80'
        },
        {
          id: 'questions_generales',
          title: t('faq_section.decision_tree.start.options.general_questions.title'),
          subtitle: t('faq_section.decision_tree.start.options.general_questions.subtitle'),
          description: t('faq_section.decision_tree.start.options.general_questions.description'),
          icon: AlertTriangle,
          color: 'bg-elegant-gold/20 text-elegant-gold border-elegant-gold/40 hover:bg-elegant-gold/30'
        }
      ]
    },

    // RÉSIDENTIEL
    residentiel: {
      title: t('faq_section.decision_tree.residential.title'),
      subtitle: t('faq_section.decision_tree.residential.subtitle'),
      options: [
        {
          id: 'garage_residentiel',
          title: t('faq_section.decision_tree.residential.options.garage.title'),
          subtitle: t('faq_section.decision_tree.residential.options.garage.subtitle'),
          description: t('faq_section.decision_tree.residential.options.garage.description'),
          icon: Car,
          color: 'bg-elegant-gold/10 text-elegant-gold border-elegant-gold/30 hover:bg-elegant-gold/20'
        },
        {
          id: 'cuisine_residentiel',
          title: t('faq_section.decision_tree.residential.options.kitchen.title'),
          subtitle: t('faq_section.decision_tree.residential.options.kitchen.subtitle'),
          description: t('faq_section.decision_tree.residential.options.kitchen.description'),
          icon: ChefHat,
          color: 'bg-white/10 text-white border-white/30 hover:bg-white/20'
        },
        {
          id: 'salon_residentiel',
          title: t('faq_section.decision_tree.residential.options.living_room.title'),
          subtitle: t('faq_section.decision_tree.residential.options.living_room.subtitle'),
          description: t('faq_section.decision_tree.residential.options.living_room.description'),
          icon: Sofa,
          color: 'bg-anthracite/40 text-off-white border-anthracite/50 hover:bg-anthracite/60'
        },
        {
          id: 'salle_bain_residentiel',
          title: t('faq_section.decision_tree.residential.options.bathroom.title'),
          subtitle: t('faq_section.decision_tree.residential.options.bathroom.subtitle'),
          description: t('faq_section.decision_tree.residential.options.bathroom.description'),
          icon: Bath,
          color: 'bg-elegant-gold/15 text-elegant-gold border-elegant-gold/35 hover:bg-elegant-gold/25'
        }
      ]
    },

    // COMMERCIAL
    commercial: {
      title: t('faq_section.decision_tree.commercial.title'),
      subtitle: t('faq_section.decision_tree.commercial.subtitle'),
      options: [
        {
          id: 'showroom_commercial',
          title: t('faq_section.decision_tree.commercial.options.showroom.title'),
          subtitle: t('faq_section.decision_tree.commercial.options.showroom.subtitle'),
          description: t('faq_section.decision_tree.commercial.options.showroom.description'),
          icon: Car,
          color: 'bg-elegant-gold/10 text-elegant-gold border-elegant-gold/30 hover:bg-elegant-gold/20'
        },
        {
          id: 'restaurant_commercial',
          title: t('faq_section.decision_tree.commercial.options.restaurant.title'),
          subtitle: t('faq_section.decision_tree.commercial.options.restaurant.subtitle'),
          description: t('faq_section.decision_tree.commercial.options.restaurant.description'),
          icon: UtensilsCrossed,
          color: 'bg-white/10 text-white border-white/30 hover:bg-white/20'
        },
        {
          id: 'bureau_commercial',
          title: t('faq_section.decision_tree.commercial.options.office.title'),
          subtitle: t('faq_section.decision_tree.commercial.options.office.subtitle'),
          description: t('faq_section.decision_tree.commercial.options.office.description'),
          icon: Briefcase,
          color: 'bg-anthracite/40 text-off-white border-anthracite/50 hover:bg-anthracite/60'
        },
        {
          id: 'boutique_commercial',
          title: t('faq_section.decision_tree.commercial.options.store.title'),
          subtitle: t('faq_section.decision_tree.commercial.options.store.subtitle'),
          description: t('faq_section.decision_tree.commercial.options.store.description'),
          icon: Store,
          color: 'bg-elegant-gold/15 text-elegant-gold border-elegant-gold/35 hover:bg-elegant-gold/25'
        }
      ]
    },

    // INDUSTRIEL
    industriel: {
      title: t('faq_section.decision_tree.industrial.title'),
      subtitle: t('faq_section.decision_tree.industrial.subtitle'),
      options: [
        {
          id: 'entrepot_industriel',
          title: t('faq_section.decision_tree.industrial.options.warehouse.title'),
          subtitle: t('faq_section.decision_tree.industrial.options.warehouse.subtitle'),
          description: t('faq_section.decision_tree.industrial.options.warehouse.description'),
          icon: Warehouse,
          color: 'bg-anthracite/60 text-off-white border-anthracite/50 hover:bg-anthracite/80'
        },
        {
          id: 'laboratoire_industriel',
          title: t('faq_section.decision_tree.industrial.options.laboratory.title'),
          subtitle: t('faq_section.decision_tree.industrial.options.laboratory.subtitle'),
          description: t('faq_section.decision_tree.industrial.options.laboratory.description'),
          icon: FlaskConical,
          color: 'bg-white/10 text-white border-white/30 hover:bg-white/20'
        },
        {
          id: 'atelier_industriel',
          title: t('faq_section.decision_tree.industrial.options.workshop.title'),
          subtitle: t('faq_section.decision_tree.industrial.options.workshop.subtitle'),
          description: t('faq_section.decision_tree.industrial.options.workshop.description'),
          icon: Wrench,
          color: 'bg-elegant-gold/10 text-elegant-gold border-elegant-gold/30 hover:bg-elegant-gold/20'
        }
      ]
    },

    // QUESTIONS GÉNÉRALES
    questions_generales: {
      title: t('faq_section.decision_tree.general_questions.title'),
      subtitle: t('faq_section.decision_tree.general_questions.subtitle'),
      options: [
        {
          id: 'couts_delais',
          title: t('faq_section.decision_tree.general_questions.options.costs_deadlines.title'),
          subtitle: t('faq_section.decision_tree.general_questions.options.costs_deadlines.subtitle'),
          description: t('faq_section.decision_tree.general_questions.options.costs_deadlines.description'),
          icon: DollarSign,
          color: 'bg-elegant-gold/20 text-elegant-gold border-elegant-gold/40 hover:bg-elegant-gold/30'
        },
        {
          id: 'compatibilite_sols',
          title: t('faq_section.decision_tree.general_questions.options.floor_compatibility.title'),
          subtitle: t('faq_section.decision_tree.general_questions.options.floor_compatibility.subtitle'),
          description: t('faq_section.decision_tree.general_questions.options.floor_compatibility.description'),
          icon: Hammer,
          color: 'bg-anthracite/40 text-off-white border-anthracite/50 hover:bg-anthracite/60'
        },
        {
          id: 'entretien_nettoyage',
          title: t('faq_section.decision_tree.general_questions.options.maintenance_cleaning.title'),
          subtitle: t('faq_section.decision_tree.general_questions.options.maintenance_cleaning.subtitle'),
          description: t('faq_section.decision_tree.general_questions.options.maintenance_cleaning.description'),
          icon: Droplets,
          color: 'bg-white/10 text-white border-white/30 hover:bg-white/20'
        },
        {
          id: 'proprietes_techniques',
          title: t('faq_section.decision_tree.general_questions.options.technical_properties.title'),
          subtitle: t('faq_section.decision_tree.general_questions.options.technical_properties.subtitle'),
          description: t('faq_section.decision_tree.general_questions.options.technical_properties.description'),
          icon: Shield,
          color: 'bg-elegant-gold/15 text-elegant-gold border-elegant-gold/35 hover:bg-elegant-gold/25'
        }
      ]
    }
  };

  // Base de données enrichie des FAQ
  const getFAQsForPath = () => {
    const pathKey = selectedPath.join('_');
    
    const faqDatabase = {
      // GARAGE RÉSIDENTIEL
      'residentiel_garage_residentiel': [
        {
          question: t('faq_section.database.residential_garage.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_garage.a1_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.residential_garage.a1_li1')}</li>
                <li>{t('faq_section.database.residential_garage.a1_li2')}</li>
                <li>{t('faq_section.database.residential_garage.a1_li3')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.residential_garage.a1_p2')}</p>
              <p className="mb-2">{t('faq_section.database.residential_garage.a1_p3')}</p>
              <p>{t('faq_section.database.residential_garage.a1_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_garage.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_garage.a2_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.residential_garage.a2_li1')}</li>
                <li>{t('faq_section.database.residential_garage.a2_li2')}</li>
                <li>{t('faq_section.database.residential_garage.a2_li3')}</li>
              </ul>
              <p>{t('faq_section.database.residential_garage.a2_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_garage.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_garage.a3_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.residential_garage.a3_li1')}</li>
                <li>{t('faq_section.database.residential_garage.a3_li2')}</li>
                <li>{t('faq_section.database.residential_garage.a3_li3')}</li>
              </ul>
              <p>{t('faq_section.database.residential_garage.a3_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_garage.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_garage.a4_p1')}</p>
              <p className="mb-2">{t('faq_section.database.residential_garage.a4_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.residential_garage.a4_li1')}</li>
                <li>{t('faq_section.database.residential_garage.a4_li2')}</li>
                <li>{t('faq_section.database.residential_garage.a4_li3')}</li>
                <li>{t('faq_section.database.residential_garage.a4_li4')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.residential_garage.a4_p3')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.residential_garage.a4_li5')}</li>
                <li>{t('faq_section.database.residential_garage.a4_li6')}</li>
                <li>{t('faq_section.database.residential_garage.a4_li7')}</li>
              </ul>
              <p>{t('faq_section.database.residential_garage.a4_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_garage.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_garage.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.residential_garage.a5_p2')}</p>
              <p>{t('faq_section.database.residential_garage.a5_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_garage.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_garage.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.residential_garage.a6_p2')}</p>
              <p className="mb-2">{t('faq_section.database.residential_garage.a6_p3')}</p>
              <p>{t('faq_section.database.residential_garage.a6_p4')}</p>
            </>
          ),
        }
      ],

      // CUISINE RÉSIDENTIELLE
      'residentiel_cuisine_residentiel': [
        {
          question: t('faq_section.database.residential_kitchen.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a1_p1')}</p>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a1_p2')}</p>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a1_p3')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.residential_kitchen.a1_li1')}</li>
                <li>{t('faq_section.database.residential_kitchen.a1_li2')}</li>
                <li>{t('faq_section.database.residential_kitchen.a1_li3')}</li>
              </ul>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_kitchen.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a2_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.residential_kitchen.a2_li1')}</li>
                <li>{t('faq_section.database.residential_kitchen.a2_li2')}</li>
                <li>{t('faq_section.database.residential_kitchen.a2_li3')}</li>
              </ul>
              <p>{t('faq_section.database.residential_kitchen.a2_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_kitchen.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a3_p1')}</p>
              <p>{t('faq_section.database.residential_kitchen.a3_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_kitchen.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a4_p1')}</p>
              <p>{t('faq_section.database.residential_kitchen.a4_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_kitchen.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a5_p2')}</p>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a5_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_kitchen.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.residential_kitchen.a6_p2')}</p>
              <p>{t('faq_section.database.residential_kitchen.a6_p3')}</p>
            </>
          ),
        }
      ],

      // SALON RÉSIDENTIEL
      'residentiel_salon_residentiel': [
        {
          question: t('faq_section.database.residential_living_room.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_living_room.a1_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_living_room.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_living_room.a2_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_living_room.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_living_room.a3_p1')}</p>
              <p className="mb-2">{t('faq_section.database.residential_living_room.a3_p2')}</p>
              <p className="mb-2">{t('faq_section.database.residential_living_room.a3_p3')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.residential_living_room.a3_li1')}</li>
                <li>{t('faq_section.database.residential_living_room.a3_li2')}</li>
              </ul>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_living_room.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_living_room.a4_p1')}</p>
              <p>{t('faq_section.database.residential_living_room.a4_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_living_room.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_living_room.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.residential_living_room.a5_p2')}</p>
              <p>{t('faq_section.database.residential_living_room.a5_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_living_room.q6'),
          answer: (
            <>
              <p>{t('faq_section.database.residential_living_room.a6_p1')}</p>
            </>
          ),
        }
      ],

      // SALLE DE BAIN RÉSIDENTIELLE
      'residentiel_salle_bain_residentiel': [
        {
          question: t('faq_section.database.residential_bathroom.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_bathroom.a1_p1')}</p>
              <p>{t('faq_section.database.residential_bathroom.a1_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_bathroom.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_bathroom.a2_p1')}</p>
              <p className="mb-2">{t('faq_section.database.residential_bathroom.a2_p2')}</p>
              <p className="mb-2">{t('faq_section.database.residential_bathroom.a2_p3')}</p>
              <p>{t('faq_section.database.residential_bathroom.a2_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_bathroom.q3'),
          answer: (
            <>
              <p>{t('faq_section.database.residential_bathroom.a3_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_bathroom.q4'),
          answer: (
            <>
              <p>{t('faq_section.database.residential_bathroom.a4_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_bathroom.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.residential_bathroom.a5_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.residential_bathroom.a5_li1')}</li>
                <li>{t('faq_section.database.residential_bathroom.a5_li2')}</li>
                <li>{t('faq_section.database.residential_bathroom.a5_li3')}</li>
                <li>{t('faq_section.database.residential_bathroom.a5_li4')}</li>
              </ul>
              <p>{t('faq_section.database.residential_bathroom.a5_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.residential_bathroom.q6'),
          answer: (
            <>
              <p>{t('faq_section.database.residential_bathroom.a6_p1')}</p>
            </>
          ),
        }
      ],

      // SHOWROOM COMMERCIAL
      'commercial_showroom_commercial': [
        {
          question: t('faq_section.database.commercial_showroom.q1'),
          answer: (
            <>
              <p>{t('faq_section.database.commercial_showroom.a1_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_showroom.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_showroom.a2_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_showroom.a2_p2')}</p>
              <p>{t('faq_section.database.commercial_showroom.a2_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_showroom.q3'),
          answer: (
            <>
              <p>{t('faq_section.database.commercial_showroom.a3_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_showroom.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_showroom.a4_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_showroom.a4_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_showroom.a4_li1')}</li>
                <li>{t('faq_section.database.commercial_showroom.a4_li2')}</li>
                <li>{t('faq_section.database.commercial_showroom.a4_li3')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.commercial_showroom.a4_p3')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_showroom.a4_p4')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_showroom.a4_li4')}</li>
                <li>{t('faq_section.database.commercial_showroom.a4_li5')}</li>
                <li>{t('faq_section.database.commercial_showroom.a4_li6')}</li>
              </ul>
              <p>{t('faq_section.database.commercial_showroom.a4_p5')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_showroom.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_showroom.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_showroom.a5_p2')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_showroom.a5_p3')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_showroom.a5_li1')}</li>
                <li>{t('faq_section.database.commercial_showroom.a5_li2')}</li>
                <li>{t('faq_section.database.commercial_showroom.a5_li3')}</li>
              </ul>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_showroom.q6'),
          answer: (
            <>
              <p>{t('faq_section.database.commercial_showroom.a6_p1')}</p>
            </>
          ),
        }
      ],

      // RESTAURANT COMMERCIAL
      'commercial_restaurant_commercial': [
        {
          question: t('faq_section.database.commercial_restaurant.q1'),
          answer: (
            <>
              <p>{t('faq_section.database.commercial_restaurant.a1_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_restaurant.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_restaurant.a2_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_restaurant.a2_p2')}</p>
              <ul className="list-decimal list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_restaurant.a2_li1')}</li>
                <li>{t('faq_section.database.commercial_restaurant.a2_li2')}</li>
                <li>{t('faq_section.database.commercial_restaurant.a2_li3')}</li>
                <li>{t('faq_section.database.commercial_restaurant.a2_li4')}</li>
              </ul>
              <p>{t('faq_section.database.commercial_restaurant.a2_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_restaurant.q3'),
          answer: (
            <>
              <p>{t('faq_section.database.commercial_restaurant.a3_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_restaurant.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_restaurant.a4_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_restaurant.a4_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_restaurant.a4_li1')}</li>
                <li>{t('faq_section.database.commercial_restaurant.a4_li2')}</li>
                <li>{t('faq_section.database.commercial_restaurant.a4_li3')}</li>
              </ul>
              <p>{t('faq_section.database.commercial_restaurant.a4_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_restaurant.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_restaurant.a5_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_restaurant.a5_li1')}</li>
                <li>{t('faq_section.database.commercial_restaurant.a5_li2')}</li>
              </ul>
              <p>{t('faq_section.database.commercial_restaurant.a5_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_restaurant.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_restaurant.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_restaurant.a6_p2')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_restaurant.a6_p3')}</p>
            </>
          ),
        }
      ],

      // BUREAU COMMERCIAL
      'commercial_bureau_commercial': [
        {
          question: t('faq_section.database.commercial_office.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_office.a1_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_office.a1_p2')}</p>
              <p>{t('faq_section.database.commercial_office.a1_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_office.q2'),
          answer: (
            <>
              <p>{t('faq_section.database.commercial_office.a2_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_office.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_office.a3_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_office.a3_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_office.a3_li1')}</li>
                <li>{t('faq_section.database.commercial_office.a3_li2')}</li>
              </ul>
              <p>{t('faq_section.database.commercial_office.a3_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_office.q4'),
          answer: (
            <>
              <p>{t('faq_section.database.commercial_office.a4_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_office.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_office.a5_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_office.a5_li1')}</li>
                <li>{t('faq_section.database.commercial_office.a5_li2')}</li>
                <li>{t('faq_section.database.commercial_office.a5_li3')}</li>
              </ul>
              <p>{t('faq_section.database.commercial_office.a5_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_office.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_office.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_office.a6_p2')}</p>
              <p>{t('faq_section.database.commercial_office.a6_p3')}</p>
            </>
          ),
        }
      ],

      // BOUTIQUE COMMERCIAL
      'commercial_boutique_commercial': [
        {
          question: t('faq_section.database.commercial_retail.q1'),
          answer: (
            <>
              <p>{t('faq_section.database.commercial_retail.a1_p1')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_retail.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a2_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_retail.a2_li1')}</li>
                <li>{t('faq_section.database.commercial_retail.a2_li2')}</li>
                <li>{t('faq_section.database.commercial_retail.a2_li3')}</li>
              </ul>
              <p>{t('faq_section.database.commercial_retail.a2_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_retail.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a3_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a3_p2')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a3_p3')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_retail.a3_li1')}</li>
                <li>{t('faq_section.database.commercial_retail.a3_li2')}</li>
                <li>{t('faq_section.database.commercial_retail.a3_li3')}</li>
              </ul>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_retail.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a4_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a4_p2')}</p>
              <p>{t('faq_section.database.commercial_retail.a4_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_retail.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a5_p2')}</p>
              <p>{t('faq_section.database.commercial_retail.a5_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.commercial_retail.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.commercial_retail.a6_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.commercial_retail.a6_li1')}</li>
                <li>{t('faq_section.database.commercial_retail.a6_li2')}</li>
                <li>{t('faq_section.database.commercial_retail.a6_li3')}</li>
              </ul>
            </>
          ),
        }
      ],

      // ENTREPÔT INDUSTRIEL
      'industriel_entrepot_industriel': [
        {
          question: t('faq_section.database.industrial_warehouse.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a1_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_warehouse.a1_li1')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a1_li2')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a1_li3')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a1_p2')}</p>
              <p>{t('faq_section.database.industrial_warehouse.a1_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_warehouse.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a2_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_warehouse.a2_li1')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a2_li2')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a2_li3')}</li>
              </ul>
              <p>{t('faq_section.database.industrial_warehouse.a2_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_warehouse.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a3_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_warehouse.a3_li1')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a3_li2')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a3_li3')}</li>
              </ul>
              <p>{t('faq_section.database.industrial_warehouse.a3_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_warehouse.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a4_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_warehouse.a4_li1')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a4_li2')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a4_li3')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a4_p2')}</p>
              <p>{t('faq_section.database.industrial_warehouse.a4_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_warehouse.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a5_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_warehouse.a5_li1')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a5_li2')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a5_li3')}</li>
              </ul>
              <p>{t('faq_section.database.industrial_warehouse.a5_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_warehouse.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a6_p2')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_warehouse.a6_p3')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_warehouse.a6_li1')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a6_li2')}</li>
                <li>{t('faq_section.database.industrial_warehouse.a6_li3')}</li>
              </ul>
            </>
          ),
        }
      ],

      // LABORATOIRE INDUSTRIEL
      'industriel_laboratoire_industriel': [
        {
          question: t('faq_section.database.industrial_laboratory.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a1_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_laboratory.a1_li1')}</li>
                <li>{t('faq_section.database.industrial_laboratory.a1_li2')}</li>
                <li>{t('faq_section.database.industrial_laboratory.a1_li3')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a1_p2')}</p>
              <p>{t('faq_section.database.industrial_laboratory.a1_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_laboratory.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a2_p1')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a2_p2')}</p>
              <p>{t('faq_section.database.industrial_laboratory.a2_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_laboratory.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a3_p1')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a3_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_laboratory.a3_li1')}</li>
                <li>{t('faq_section.database.industrial_laboratory.a3_li2')}</li>
                <li>{t('faq_section.database.industrial_laboratory.a3_li3')}</li>
              </ul>
              <p>{t('faq_section.database.industrial_laboratory.a3_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_laboratory.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a4_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_laboratory.a4_li1')}</li>
                <li>{t('faq_section.database.industrial_laboratory.a4_li2')}</li>
                <li>{t('faq_section.database.industrial_laboratory.a4_li3')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a4_p2')}</p>
              <p>{t('faq_section.database.industrial_laboratory.a4_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_laboratory.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a5_p2')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a5_p3')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_laboratory.a5_li1')}</li>
                <li>{t('faq_section.database.industrial_laboratory.a5_li2')}</li>
                <li>{t('faq_section.database.industrial_laboratory.a5_li3')}</li>
              </ul>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_laboratory.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a6_p2')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_laboratory.a6_p3')}</p>
              <p>{t('faq_section.database.industrial_laboratory.a6_p4')}</p>
            </>
          ),
        }
      ],

      // ATELIER INDUSTRIEL
      'industriel_atelier_industriel': [
        {
          question: t('faq_section.database.industrial_workshop.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a1_p1')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a1_p2')}</p>
              <p>{t('faq_section.database.industrial_workshop.a1_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_workshop.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a2_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_workshop.a2_li1')}</li>
                <li>{t('faq_section.database.industrial_workshop.a2_li2')}</li>
                <li>{t('faq_section.database.industrial_workshop.a2_li3')}</li>
                <li>{t('faq_section.database.industrial_workshop.a2_li4')}</li>
              </ul>
              <p>{t('faq_section.database.industrial_workshop.a2_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_workshop.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a3_p1')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a3_p2')}</p>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a3_p3')}</p>
              <p>{t('faq_section.database.industrial_workshop.a3_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_workshop.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a4_p1')}</p>
              <p>{t('faq_section.database.industrial_workshop.a4_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_workshop.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a5_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_workshop.a5_li1')}</li>
                <li>{t('faq_section.database.industrial_workshop.a5_li2')}</li>
                <li>{t('faq_section.database.industrial_workshop.a5_li3')}</li>
                <li>{t('faq_section.database.industrial_workshop.a5_li4')}</li>
              </ul>
              <p>{t('faq_section.database.industrial_workshop.a5_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.industrial_workshop.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a6_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.industrial_workshop.a6_li1')}</li>
                <li>{t('faq_section.database.industrial_workshop.a6_li2')}</li>
                <li>{t('faq_section.database.industrial_workshop.a6_li3')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.industrial_workshop.a6_p2')}</p>
              <p>{t('faq_section.database.industrial_workshop.a6_p3')}</p>
            </>
          ),
        }
      ],

      // COÛTS ET DÉLAIS
      'questions_generales_couts_delais': [
        {
          question: t('faq_section.database.general_costs_deadlines.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a1_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a1_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_costs_deadlines.a1_li1')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a1_li2')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a1_li3')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a1_li4')}</li>
              </ul>
              <p>{t('faq_section.database.general_costs_deadlines.a1_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_costs_deadlines.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a2_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_costs_deadlines.a2_li1')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a2_li2')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a2_li3')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a2_li4')}</li>
              </ul>
              <p>{t('faq_section.database.general_costs_deadlines.a2_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_costs_deadlines.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a3_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_costs_deadlines.a3_li1')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a3_li2')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a3_li3')}</li>
              </ul>
              <p>{t('faq_section.database.general_costs_deadlines.a3_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_costs_deadlines.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a4_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_costs_deadlines.a4_li1')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a4_li2')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a4_li3')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a4_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_costs_deadlines.a4_li4')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a4_li5')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a4_li6')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a4_li7')}</li>
              </ul>
              <p>{t('faq_section.database.general_costs_deadlines.a4_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_costs_deadlines.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a5_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_costs_deadlines.a5_li1')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a5_li2')}</li>
                <li>{t('faq_section.database.general_costs_deadlines.a5_li3')}</li>
              </ul>
              <p>{t('faq_section.database.general_costs_deadlines.a5_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_costs_deadlines.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_costs_deadlines.a6_p2')}</p>
              <p>{t('faq_section.database.general_costs_deadlines.a6_p3')}</p>
            </>
          ),
        }
      ],

      // COMPATIBILITÉ SOLS
      'questions_generales_compatibilite_sols': [
        {
          question: t('faq_section.database.general_floor_compatibility.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a1_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_floor_compatibility.a1_li1')}</li>
                <li>{t('faq_section.database.general_floor_compatibility.a1_li2')}</li>
                <li>{t('faq_section.database.general_floor_compatibility.a1_li3')}</li>
                <li>{t('faq_section.database.general_floor_compatibility.a1_li4')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a1_p2')}</p>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a1_p3')}</p>
              <p>{t('faq_section.database.general_floor_compatibility.a1_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_floor_compatibility.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a2_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a2_p2')}</p>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a2_p3')}</p>
              <p>{t('faq_section.database.general_floor_compatibility.a2_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_floor_compatibility.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a3_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a3_p2')}</p>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a3_p3')}</p>
              <p>{t('faq_section.database.general_floor_compatibility.a3_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_floor_compatibility.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a4_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a4_p2')}</p>
              <p>{t('faq_section.database.general_floor_compatibility.a4_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_floor_compatibility.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a5_p2')}</p>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a5_p3')}</p>
              <p>{t('faq_section.database.general_floor_compatibility.a5_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_floor_compatibility.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_floor_compatibility.a6_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_floor_compatibility.a6_li1')}</li>
                <li>{t('faq_section.database.general_floor_compatibility.a6_li2')}</li>
                <li>{t('faq_section.database.general_floor_compatibility.a6_li3')}</li>
                <li>{t('faq_section.database.general_floor_compatibility.a6_li4')}</li>
              </ul>
              <p>{t('faq_section.database.general_floor_compatibility.a6_p2')}</p>
            </>
          ),
        }
      ],

      // ENTRETIEN ET NETTOYAGE
      'questions_generales_entretien_nettoyage': [
        {
          question: t('faq_section.database.general_maintenance_cleaning.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a1_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_maintenance_cleaning.a1_li1')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a1_li2')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a1_li3')}</li>
              </ul>
              <p>{t('faq_section.database.general_maintenance_cleaning.a1_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_maintenance_cleaning.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a2_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_maintenance_cleaning.a2_li1')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a2_li2')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a2_li3')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a2_li4')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a2_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_maintenance_cleaning.a2_li5')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a2_li6')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a2_li7')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a2_li8')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a2_li9')}</li>
              </ul>
              <p>{t('faq_section.database.general_maintenance_cleaning.a2_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_maintenance_cleaning.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a3_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_maintenance_cleaning.a3_li1')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a3_li2')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a3_li3')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a3_li4')}</li>
              </ul>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_maintenance_cleaning.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a4_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a4_p2')}</p>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a4_p3')}</p>
              <p>{t('faq_section.database.general_maintenance_cleaning.a4_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_maintenance_cleaning.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a5_p1')}</p>
              <p>{t('faq_section.database.general_maintenance_cleaning.a5_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_maintenance_cleaning.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_maintenance_cleaning.a6_p2')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_maintenance_cleaning.a6_li1')}</li>
                <li>{t('faq_section.database.general_maintenance_cleaning.a6_li2')}</li>
              </ul>
              <p>{t('faq_section.database.general_maintenance_cleaning.a6_p3')}</p>
            </>
          ),
        }
      ],

      // PROPRIÉTÉS TECHNIQUES
      'questions_generales_proprietes_techniques': [
        {
          question: t('faq_section.database.general_technical_properties.q1'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a1_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_technical_properties.a1_li1')}</li>
                <li>{t('faq_section.database.general_technical_properties.a1_li2')}</li>
                <li>{t('faq_section.database.general_technical_properties.a1_li3')}</li>
              </ul>
              <p>{t('faq_section.database.general_technical_properties.a1_p2')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_technical_properties.q2'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a2_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a2_p2')}</p>
              <p>{t('faq_section.database.general_technical_properties.a2_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_technical_properties.q3'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a3_p1')}</p>
              <ul className="list-disc list-inside mb-2 pl-4">
                <li>{t('faq_section.database.general_technical_properties.a3_li1')}</li>
                <li>{t('faq_section.database.general_technical_properties.a3_li2')}</li>
                <li>{t('faq_section.database.general_technical_properties.a3_li3')}</li>
              </ul>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a3_p2')}</p>
              <p>{t('faq_section.database.general_technical_properties.a3_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_technical_properties.q4'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a4_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a4_p2')}</p>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a4_p3')}</p>
              <p>{t('faq_section.database.general_technical_properties.a4_p4')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_technical_properties.q5'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a5_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a5_p2')}</p>
              <p>{t('faq_section.database.general_technical_properties.a5_p3')}</p>
            </>
          ),
        },
        {
          question: t('faq_section.database.general_technical_properties.q6'),
          answer: (
            <>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a6_p1')}</p>
              <p className="mb-2">{t('faq_section.database.general_technical_properties.a6_p2')}</p>
              <p>{t('faq_section.database.general_technical_properties.a6_p3')}</p>
            </>
          ),
        }
      ]
    };

    return faqDatabase[pathKey as keyof typeof faqDatabase] || [];
  };

  const currentNode = decisionTree[currentStep as keyof typeof decisionTree];
  const currentFAQs = getFAQsForPath();

  return (
    <section id="faq-section" className="py-20 bg-deep-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-unbounded text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            {t('faq_section.title')}
          </h2>
          <p className="font-manrope text-lg text-white/60">
            {t('faq_section.subtitle')}
          </p>
        </div>

        {/* Breadcrumb */}
        {selectedPath.length > 0 && (
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            <button
              onClick={resetPath}
              className="text-elegant-gold hover:text-white transition-colors text-sm"
            >
              {t('faq_section.breadcrumb.home')}
            </button>
            {selectedPath.map((step, index) => (
              <React.Fragment key={step}>
                <ChevronRight className="w-4 h-4 text-white/40" />
                <span className="text-white/60 text-sm">
                  {t(`faq_section.decision_tree.${step.replace('_residentiel', '.options.living_room').replace('_commercial', '.options.showroom').replace('_industriel', '.options.warehouse').replace('_generales', '.options.costs_deadlines')}.title`)}
                </span>
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Navigation */}
        {selectedPath.length > 0 && (
          <div className="flex justify-center mb-8">
            <button
              onClick={goBack}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('faq_section.navigation.back')}
            </button>
          </div>
        )}

        {/* Decision Tree Interface */}
        {currentNode && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-unbounded text-2xl md:text-3xl font-light text-white mb-4">
                {currentNode.title}
              </h3>
              <p className="font-manrope text-white/60">
                {currentNode.subtitle}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto">
              {currentNode.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => selectOption(option.id)}
                  className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 w-full md:w-1/2 lg:w-1/4 ${option.color}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-current/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <option.icon className="w-8 h-8" />
                    </div>
                    
                    <h4 className="font-unbounded text-lg font-semibold mb-2">
                      {option.title}
                    </h4>
                    
                    <p className="text-sm opacity-80 mb-2">
                      {option.subtitle}
                    </p>
                    
                    <p className="text-xs opacity-60">
                      {option.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Results */}
        {currentFAQs.length > 0 && (
          <div className="space-y-4 mb-16">
            <div className="text-center mb-8">
              <h3 className="font-unbounded text-2xl font-light text-white mb-4">
                {t('faq_section.results.title')}
              </h3>
              <div className="bg-elegant-gold/10 border border-elegant-gold/20 rounded-xl p-4 max-w-2xl mx-auto">
                <p className="font-manrope text-elegant-gold">
                  ✨ {currentFAQs.length} {t('faq_section.results.count_message')}
                </p>
              </div>
            </div>

            {currentFAQs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/8"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between group"
                >
                  <h3 className="font-manrope text-base md:text-lg font-medium text-white pr-4 group-hover:text-white/80 transition-colors leading-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-white/60" />
                    ) : (
                      <Plus className="w-5 h-5 text-white/60" />
                    )}
                  </div>
                </button>

                {openFAQ === index && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="border-t border-white/10 pt-6">
                      <p className="font-manrope text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="font-unbounded text-2xl font-light text-white mb-4">
              {t('faq_section.cta.title')}
            </h3>
            <p className="font-manrope text-white/60 mb-8">
              {t('faq_section.cta.subtitle')}
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-elegant-gold text-deep-black px-8 py-4 rounded-full font-manrope font-semibold hover:bg-elegant-gold/90 transition-all duration-300 hover:scale-105"
            >
              {t('faq_section.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;