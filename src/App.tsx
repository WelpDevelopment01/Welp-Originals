/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Droplets, Sparkles, CheckCircle2, Instagram, Twitter, Facebook, ArrowRight, Mail, User, Menu, X, FileText, ShieldAlert, Truck, ShoppingBag, ArrowLeft, Copy, Check } from 'lucide-react';

// Import our professionally generated flavor mockup photos
import PINEAPPLE_IMAGE from './assets/images/yolo_pineapple_soda_new_1779701435246.png';
import GUAVA_IMAGE from './assets/images/yolo_guava_soda_new_1779700840333.png';
import APPLE_IMAGE from './assets/images/yolo_apple_new_1779701558294.png';

// Custom vector-based ultra-realistic soda bottle artwork utilizing pure SVG, custom gradients, glossy reflections, and dynamic product labeling.
function SodaBottleVector({ flavor, className = "h-64" }: { flavor: 'pineapple' | 'guava' | 'apple'; className?: string }) {
  const configs = {
    pineapple: {
      liquidColor: '#f3c623',
      liquidGradient: 'from-amber-400 to-yellow-500',
      labelColor: 'bg-amber-950',
      textColor: 'text-amber-400',
      borderColor: 'border-amber-200/50',
      glow: 'shadow-amber-500/20',
      accentColor: '#f39c12',
      name: 'PINEAPPLE SQUEEZED'
    },
    guava: {
      liquidColor: '#e05c75',
      liquidGradient: 'from-rose-400 to-pink-500',
      labelColor: 'bg-rose-950',
      textColor: 'text-rose-400',
      borderColor: 'border-rose-200/50',
      glow: 'shadow-rose-500/20',
      accentColor: '#c27ba0',
      name: 'GUAVA CHILLI'
    },
    apple: {
      liquidColor: '#4bb543',
      liquidGradient: 'from-emerald-400 to-green-500',
      labelColor: 'bg-emerald-950',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-200/50',
      glow: 'shadow-emerald-500/20',
      accentColor: '#2ecc71',
      name: 'GREEN APPLE'
    }
  };

  const config = configs[flavor];

  return (
    <div className={`relative flex items-center justify-center ${className} select-none`}>
      {/* Background radial glow */}
      <div className={`absolute w-32 h-64 rounded-full blur-3xl opacity-35 pointer-events-none bg-gradient-to-b ${config.liquidGradient}`}></div>

      {/* SVG Bottle Silhouette Outline */}
      <svg
        viewBox="0 0 100 280"
        className="w-auto h-full filter drop-shadow-2xl relative z-10 font-sans"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${flavor}-liquid-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={config.liquidColor} stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor={config.liquidColor} stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id={`${flavor}-glass-reflection`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="15%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="85%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="cap-threads-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a1a1c" />
            <stop offset="50%" stopColor="#55555c" />
            <stop offset="100%" stopColor="#1a1a1c" />
          </linearGradient>
        </defs>

        {/* Cap (Glossy Charcoal Polypropylene) */}
        <rect x="34" y="10" width="32" height="18" rx="3" fill="url(#cap-threads-grad)" />
        {/* Cap ridges vertical lines */}
        <line x1="38" y1="12" x2="38" y2="26" stroke="#111" strokeWidth="1.5" />
        <line x1="42" y1="12" x2="42" y2="26" stroke="#111" strokeWidth="1.5" />
        <line x1="46" y1="12" x2="46" y2="26" stroke="#111" strokeWidth="1.5" />
        <line x1="50" y1="12" x2="50" y2="26" stroke="#111" strokeWidth="1.5" />
        <line x1="54" y1="12" x2="54" y2="26" stroke="#111" strokeWidth="1.5" />
        <line x1="58" y1="12" x2="58" y2="26" stroke="#111" strokeWidth="1.5" />
        <line x1="62" y1="12" x2="62" y2="26" stroke="#111" strokeWidth="1.5" />

        {/* Cap Collar support ring */}
        <rect x="32" y="28" width="36" height="4" rx="1" fill="#18181c" />

        {/* Neck of the bottle & glass silhouette */}
        <path d="M37 32 L37 55 C37 75, 14 85, 14 110 L14 260 C14 270, 24 270, 50 270 C76 270, 86 270, 86 260 L86 110 C86 85, 63 75, 63 55 L63 32 Z" fill="none" stroke="#ccc" strokeWidth="1" />

        {/* Bubbly Liquid Level inside Bottle (stops near the neck transition) */}
        <path d="M38 68 C38 68, 50 69, 62 68 L62 55 C63 75, 84 85, 84 108 L84 256 C84 266, 76 266, 50 266 C24 266, 16 266, 16 256 L16 108 C16 85, 37 75, 37 55 Z" fill={`url(#${flavor}-liquid-grad)`} />

        {/* Tiny bubbles rising inside the liquid */}
        <circle cx="28" cy="90" r="1.5" fill="#ffffff" opacity="0.6" />
        <circle cx="68" cy="100" r="1" fill="#ffffff" opacity="0.7" />
        <circle cx="34" cy="150" r="2" fill="#ffffff" opacity="0.5" />
        <circle cx="62" cy="180" r="1.5" fill="#ffffff" opacity="0.6" />
        <circle cx="26" cy="195" r="1" fill="#ffffff" opacity="0.8" />
        <circle cx="72" cy="140" r="2" fill="#ffffff" opacity="0.4" />
        <circle cx="48" cy="220" r="1.5" fill="#ffffff" opacity="0.7" />

        {/* Pure Black Label Wrap around the center of the bottle */}
        <rect x="15" y="115" width="70" height="96" rx="4" fill="#0c0c0e" />
        {/* Fine flavor colored border detail on label */}
        <rect x="17" y="117" width="66" height="92" rx="2" fill="none" stroke={config.liquidColor} strokeWidth="1" opacity="0.8" />

        {/* Label Content - Welp Logo */}
        <g transform="translate(25.5, 120) scale(0.35)">
          {/* W */}
          <path d="M6 4h4.5l3.25 15L17 4h3.5l3.25 15L27 4h4.5l-5 24h-4.5l-3.25-15L15.5 28H11L6 4z" fill="#ffffff" />
          {/* E */}
          <path d="M37 4h14v4H41.5v5H50v4h-8.5v6H51v4H37V4z" fill="#ffffff" />
          {/* L */}
          <path d="M57 4h4.5v20H70v4H57V4z" fill="#ffffff" />
          {/* P custom with sliced loop & elegant slash */}
          <path d="M76 4h12c4 0 7 2.5 7 6.5s-1.8 6.5-5.8 6.5H80.5v11H76V4zm4.5 9h7.5c1.8 0 2.8-.8 2.8-2.5s-1-2.5-2.8-2.5H80.5v5z" fill="#ffffff" />
          {/* Signature diagonal slash slicing through the P */}
          <path d="M84 15l22-13.5c-4.5.5-12.5 3-18.5 6l-3.5 7.5z" fill="#ffffff" />
          {/* Subtext ORIGINALS below WELP letters */}
          <text 
            x="56" 
            y="41" 
            textAnchor="middle" 
            fill="#ffffff"
            style={{ 
              fontSize: '5.8px', 
              letterSpacing: '0.46em', 
              fontWeight: 800, 
              fontFamily: '"Syncopate", "Orbitron", sans-serif' 
            }}
          >
            ORIGINALS
          </text>
        </g>
        <line x1="28" y1="141" x2="72" y2="141" stroke="#33333a" strokeWidth="0.5" />

        {/* Label Content - Flavor Title */}
        <text x="50" y="156" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1">YOLO</text>
        <text x="50" y="166" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1">SODA</text>

        <rect x="25" y="174" width="50" height="0.5" fill={config.liquidColor} opacity="0.8" />

        <text x="50" y="184" fill={config.liquidColor} fontSize="5.5" fontWeight="900" textAnchor="middle" letterSpacing="0.5">{config.name}</text>
        
        <text x="50" y="194" fill="#888890" fontSize="4" fontWeight="900" textAnchor="middle" letterSpacing="0.18">PREMIUM SODA</text>
        <text x="50" y="202" fill="#888890" fontSize="4" fontWeight="500" textAnchor="middle">250ml</text>

        {/* Inner glass highlights & reflections left/right to look transparent and high-end */}
        <path d="M17 110 L17 258 C17 262, 20 264, 25 264" fill="none" stroke={`url(#${flavor}-glass-reflection)`} strokeWidth="2.5" />
        <path d="M83 110 L83 258 C83 262, 80 264, 75 264" fill="none" stroke={`url(#${flavor}-glass-reflection)`} strokeWidth="2.5" />

        {/* Outer overall glass sheen */}
        <path d="M37 32 L37 55 C37 75, 14 85, 14 110 L14 260 C14 270, 24 270, 50 270 C76 270, 86 270, 86 260 L86 110 C86 85, 63 75, 63 55 L63 32 Z" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.2" />
      </svg>
    </div>
  );
}

// Brand-approved luxurious capitalized logo matching the user photoshoot with the signature P slash
function WelpLogo({ className = "h-8", slashColor }: { className?: string; slashColor?: string }) {
  const finalSlashColor = slashColor || "currentColor";
  return (
    <svg 
      viewBox="0 0 300 60" 
      className={`${className} transition-all duration-300 fill-none`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* W */}
      <path d="M 12 8 L 26 36 L 40 8 L 54 36 L 68 8" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* E */}
      <path d="M 112 8 L 84 8 L 84 36 L 112 36 M 84 22 L 105 22" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* L */}
      <path d="M 128 8 L 128 36 L 158 36" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* P custom with sliced loop & elegant slash */}
      <path d="M 174 36 L 174 8 L 194 8 C 204 8 207 14 207 20 C 207 26 194 26 L 174 26" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Signature diagonal slash slicing dynamically through the P */}
      <path d="M 178 36 C 185 29 208 16 228 10 C 248 4 275 1.5 292 1.5 C 262 4.5 238 12.5 218 18.5 C 198 24.5 185 32 178 36 Z" fill={finalSlashColor} />
      {/* Subtext ORIGINALS, centered below WELP letters */}
      <text 
        x="109" 
        y="53" 
        textAnchor="middle" 
        fill="currentColor"
        style={{ 
          fontSize: '7.5px', 
          letterSpacing: '0.65em', 
          fontWeight: 900, 
          fontFamily: '"Inter", sans-serif' 
        }}
      >
        ORIGINALS
      </text>
    </svg>
  );
}

export interface TrialIngredient {
  name: string;
  amount: string;
}

export interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  tag: string;
  badgeColor: string;
  gradient: string;
  description: string;
  aboutText: string;
  ingredientsText: string;
  trialName: string;
  trialIngredients: TrialIngredient[];
  tasteGoals: string[];
  nutrition: {
    calories: string;
    sugar: string;
    carbs: string;
    vitaminC: string;
    sodium: string;
  };
}

// Custom wrapper to place the beautiful wide-spaced SpaceX-style WELP logo perfectly on product bottle labels
function BottleImageWithOverlay({ 
  src, 
  alt, 
  className = "w-full h-auto block", 
  overlayClassName,
  imgClassName = "w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105",
  slashColor
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  overlayClassName?: string;
  imgClassName?: string;
  slashColor?: string;
}) {
  const lowerAlt = alt.toLowerCase();
  
  // Custom fine-tuned positioning metrics for each specific bottle photo asset
  let topPercent = "34.85%";
  let leftPercent = "50.15%";
  let widthPercent = "14.8%";
  let heightPercent = "5.7%";

  if (lowerAlt.includes("pineapple")) {
    // The Pineapple Squeezed bottle is shifted rightward in the photo asset to balance the pineapple fruit on the left.
    leftPercent = "56.35%";
    topPercent = "34.85%";
    widthPercent = "14.8%";
    heightPercent = "5.7%";
  } else if (lowerAlt.includes("guava")) {
    // Centered exactly in the middle of the photo asset.
    leftPercent = "50.25%";
    topPercent = "34.85%";
    widthPercent = "14.8%";
    heightPercent = "5.7%";
  } else {
    // Green Apple centered exactly in the middle of the photo asset.
    leftPercent = "50.15%";
    topPercent = "34.85%";
    widthPercent = "14.8%";
    heightPercent = "5.7%";
  }

  // Auto-deduce the perfect signature slash color matching the bottle base juice
  const resolvedSlashColor = slashColor || (
    lowerAlt.includes('pineapple') ? '#f3c623' : 
    lowerAlt.includes('guava') ? '#e05c75' : '#4bb543'
  );

  // Clean container classes: strip conflicting height or aspect-ratios
  const containerClean = className
    .replace(/\b(h-auto|h-full|aspect-\[.*?\])\b/g, '')
    .trim();

  // Clean image classes: strip height/object classes to prevent browser-specific override issues
  const imgClean = imgClassName
    .replace(/\b(h-auto|h-full|object-\w+)\b/g, '')
    .trim();

  return (
    <div className={`relative w-full aspect-[3/4] sm:aspect-auto overflow-hidden ${containerClean}`}>
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full sm:h-auto object-contain block ${imgClean}`}
        referrerPolicy="no-referrer"
      />
      {/* Absolute overlay of our perfect SpaceX brand logo covering old mockup texts */}
      {!(src && (src.includes('guava_soda_new') || src.includes('pineapple_soda_new') || src.includes('apple_new'))) && (
        overlayClassName ? (
          <div className={overlayClassName}>
            <WelpLogo className="h-full text-white" slashColor={resolvedSlashColor} />
          </div>
        ) : (
          <div 
            className="absolute -translate-x-1/2 bg-[#0a0a0c] text-white flex items-center justify-center py-0 px-0.5 pointer-events-none rounded-none shadow-none"
            style={{
              top: topPercent,
              left: leftPercent,
              width: widthPercent,
              height: heightPercent,
            }}
          >
            <WelpLogo className="h-full text-white" slashColor={resolvedSlashColor} />
          </div>
        )
      )}
    </div>
  );
}

export const productsList: ProductType[] = [
  {
    id: 'pineapple',
    name: 'Pineapple Squeezed',
    price: 50,
    image: PINEAPPLE_IMAGE,
    tag: 'Tropical Sweet',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    gradient: 'from-amber-50 to-orange-50/50',
    description: 'Made with pure pineapple juice and refreshing carbonation. Enhanced with ginger extracts for a delightful, bubbly, guilt-free tropical hydration booster.',
    aboutText: 'Sourced from the sun-drenched orchards of coastal India, Pineapple Squeezed represents the finest premium tropical bubble balance. Infused with fresh ginger, it is refreshing, fizzy, and deeply satisfying.',
    ingredientsText: 'Carbonated water, crisp pineapple juice concentrate (12%), raw cane sugar, organic ginger root extract, citric acid, natural pineapple flavor.',
    trialName: 'YOLO Soda - Pineapple Squeezed (250ml Trial)',
    trialIngredients: [
      { name: 'Pineapple Juice', amount: '50 ml (20%)' },
      { name: 'Carbonated Water', amount: '180-190 ml' },
      { name: 'Cane Sugar', amount: '12-15 g' },
      { name: 'Citric Acid', amount: 'Small amount for tartness' },
      { name: 'Natural Pineapple Flavor', amount: 'Very small amount' }
    ],
    tasteGoals: [
      'Strong pineapple aroma',
      'Sweet tropical start',
      'Refreshing fizzy finish'
    ],
    nutrition: {
      calories: '88 kcal',
      sugar: '15g (natural fruit & cane sugar)',
      carbs: '22g',
      vitaminC: '45% RDA',
      sodium: '15mg'
    }
  },
  {
    id: 'guava',
    name: 'Guava Chilli',
    price: 50,
    image: GUAVA_IMAGE,
    tag: 'Sweet & Spicy',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
    gradient: 'from-rose-50 to-pink-50/50',
    description: 'An adventure in a bottle. Ripe local pink guavas meet a subtle, tickling spark of Guntur red chilli. Deeply revitalizing and delicious.',
    aboutText: 'Designed for the daring. Ripe pink guava pulp is carefully carbonated and laced with a hand-selected spice of Guntur chilli flakes. This complex taste profile keeps you refreshed and dynamic.',
    ingredientsText: 'Carbonated water, organic pink guava puree (10%), natural cane sugar, red chilli extract, citric acid, sea salt, natural guava flavor.',
    trialName: 'YOLO Soda - Guava Chilli Shot (250ml Trial)',
    trialIngredients: [
      { name: 'Guava Juice/Pulp', amount: '50 ml (20%)' },
      { name: 'Carbonated Water', amount: '180-190 ml' },
      { name: 'Cane Sugar', amount: '12-15 g' },
      { name: 'Citric Acid', amount: 'Small amount' },
      { name: 'Chilli Extract', amount: 'Tiny spark' }
    ],
    tasteGoals: [
      'Sweet guava first',
      'Mild chilli kick later',
      'Refreshing aftertaste'
    ],
    nutrition: {
      calories: '92 kcal',
      sugar: '16g (natural fruit & cane sugar)',
      carbs: '24g',
      vitaminC: '120% RDA',
      sodium: '25mg'
    }
  },
  {
    id: 'apple',
    name: 'Green Apple',
    price: 50,
    image: APPLE_IMAGE,
    tag: 'Crisp Sour',
    badgeColor: 'bg-emerald-100/90 text-emerald-950 border-emerald-200',
    gradient: 'from-emerald-50 to-green-50/50',
    description: 'Extremely clean, sour, and tart juice of Himalayan green apples blended with carbonation and fresh mint extract. Total cooling purity.',
    aboutText: 'The perfect green pick-me-up. We blend crisp sour green apples with cooling fresh mint to provide sustained focus and soothing pure recovery.',
    ingredientsText: 'Carbonated water, crisp green apple juice (11%), natural cane sugar, fresh spearmint extract, citric acid, natural green apple flavor.',
    trialName: 'YOLO Soda - Green Apple Shot (250ml Trial)',
    trialIngredients: [
      { name: 'Apple Juice', amount: '50 ml (20%)' },
      { name: 'Carbonated Water', amount: '180-190 ml' },
      { name: 'Cane Sugar', amount: '12-15 g' },
      { name: 'Citric/Malic Acid', amount: 'Small amount' },
      { name: 'Natural Apple Flavor', amount: 'Optional' }
    ],
    tasteGoals: [
      'Crisp apple',
      'Slight tartness',
      'Clean finish'
    ],
    nutrition: {
      calories: '84 kcal',
      sugar: '14g (natural fruit & cane sugar)',
      carbs: '21g',
      vitaminC: '50% RDA',
      sodium: '10mg'
    }
  }
];

interface ProductsPageProps {
  setSelectedProduct: (product: { name: string; price: number; image: string } | null) => void;
  setOrderForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; count: number; address: string }>>;
  onSelectProductDetail?: (id: string) => void;
}

function ProductsPage({ setSelectedProduct, setOrderForm, onSelectProductDetail }: ProductsPageProps) {
  // Hold active detailed tab inside each product card ('about' | 'ingredients' | 'nutrition')
  const [activeTab, setActiveTab] = useState<Record<string, 'about' | 'ingredients' | 'nutrition'>>({
    'pineapple': 'about',
    'guava': 'about',
    'apple': 'about'
  });

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto space-y-12">
      {/* Back to Home row */}
      <div className="flex justify-between items-center border-b border-brand-muted pb-4">
        <a 
          href="#/"
          className="flex items-center gap-2 group text-brand-secondary hover:text-brand-primary transition-all font-sans font-bold text-xs uppercase tracking-widest cursor-pointer no-underline"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Homepage
        </a>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#2d5a27] bg-[#E8F0E5] px-3 py-1 rounded-full border border-[#2d5a27]/20 font-mono">
          Interactive Catalog
        </span>
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-black uppercase tracking-widest text-brand-primary bg-brand-muted px-4 py-1.5 rounded-full">
          Official Products Registry
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-brand-dark italic leading-tight">
          The Pure <br />
          <span className="not-italic font-sans font-black text-brand-primary uppercase">YOLO Soda Lineup</span>
        </h1>
        <p className="text-sm sm:text-base text-brand-secondary opacity-85 leading-relaxed">
          Pre-order individual bottles of our signature flavors. Each bottle is priced at <span className="font-bold text-brand-dark">₹50</span> and packed with active botanicals, zero artificial chemicals, and fine carbonation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {productsList.map((product) => {
          const tab = activeTab[product.id] || 'about';
          return (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              onClick={(e) => {
                const target = e.target as HTMLElement;
                // Only open detail page if user didn't click a interactive button or tab
                if (!target.closest('button') && !target.closest('a')) {
                  onSelectProductDetail?.(product.id);
                }
              }}
              className="bg-white rounded-[32px] sm:rounded-[40px] border border-brand-muted shadow-2xl shadow-brand-primary/5 flex flex-col h-full overflow-hidden group cursor-pointer"
            >
              {/* Product Image Poster */}
              <div 
                onClick={() => onSelectProductDetail?.(product.id)}
                className="w-full bg-white relative overflow-hidden border-b border-brand-muted/40 cursor-pointer"
                title={`View ${product.name} Details`}
              >
                <BottleImageWithOverlay 
                  src={product.image} 
                  alt={product.name} 
                  imgClassName="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content box */}
              <div className="p-8 flex flex-col flex-grow space-y-6">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 
                      onClick={() => onSelectProductDetail?.(product.id)}
                      className="text-lg sm:text-xl font-black text-brand-dark leading-snug uppercase font-sans cursor-pointer hover:text-brand-primary transition-colors flex-grow text-left"
                      title={`View ${product.name} Details`}
                    >
                      {product.name}
                    </h3>
                    <div className="flex flex-col items-end gap-0.5 shrink-0 pl-2">
                      <span className="text-xs font-sans font-black text-white bg-brand-primary px-2.5 py-1 rounded-full whitespace-nowrap shadow-md shadow-brand-primary/10">
                        ₹{product.price}
                      </span>
                      <p className="text-[8px] text-brand-secondary uppercase font-extrabold tracking-widest leading-none">Bottle</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-brand-secondary font-bold uppercase tracking-widest leading-none text-left">
                    YOLO SODA • 250ML PREMIUM FLASK
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed min-h-[48px] text-left">
                  {product.description}
                </p>

                {/* Tab selectors */}
                <div className="bg-brand-muted/40 p-1 rounded-xl flex gap-1 text-[10px] uppercase font-bold tracking-widest">
                  {(['about', 'ingredients', 'nutrition'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setActiveTab(prev => ({ ...prev, [product.id]: t }))}
                      className={`flex-grow py-1.5 rounded-lg text-center transition-all cursor-pointer ${tab === t ? 'bg-brand-primary text-white shadow-sm' : 'text-brand-secondary hover:text-brand-primary'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Tab content panel */}
                <div className="bg-brand-muted/20 p-4 rounded-2xl flex-grow min-h-[110px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {tab === 'about' && (
                      <motion.p 
                        key="about"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-xs text-brand-secondary leading-relaxed font-sans text-left"
                      >
                        {product.aboutText}
                      </motion.p>
                    )}
                    {tab === 'ingredients' && (
                      <motion.div 
                        key="ingredients"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-left text-[11px] text-brand-secondary space-y-3 font-sans"
                      >
                        <div>
                          <p className="font-extrabold text-brand-primary uppercase text-[8px] tracking-widest mb-1">Retail Ingredients:</p>
                          <p className="leading-relaxed text-slate-600 bg-white/40 p-2 rounded-lg border border-brand-muted/50">{product.ingredientsText}</p>
                        </div>
                        
                        <div className="space-y-1.5 pt-1 border-t border-brand-muted">
                          <div className="flex justify-between items-center">
                            <p className="font-extrabold text-brand-primary uppercase text-[8px] tracking-widest">250ml Trial Formulation:</p>
                            <span className="text-[7.5px] font-black uppercase tracking-wider text-brand-accent bg-brand-muted px-1.5 py-0.5 rounded">R&D Recipe</span>
                          </div>
                          
                          <div className="bg-brand-muted/20 rounded-lg overflow-hidden border border-brand-muted/40 max-h-[140px] overflow-y-auto custom-scrollbar">
                            <table className="w-full text-left text-[10px]">
                              <thead>
                                <tr className="bg-brand-muted/40 text-[7.5px] uppercase font-bold text-brand-primary border-b border-brand-muted/40 font-mono">
                                  <th className="px-2 py-1">Ingredient</th>
                                  <th className="px-2 py-1 text-right">Approx Amount</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-brand-muted/20 font-sans">
                                {product.trialIngredients.map((ing, k) => (
                                  <tr key={k} className="hover:bg-brand-muted/10">
                                    <td className="px-2 py-1 font-medium text-slate-700">{ing.name}</td>
                                    <td className="px-2 py-1 text-right text-brand-dark font-mono font-bold text-[9px]">{ing.amount}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          
                          {/* Taste Goals */}
                          <div className="bg-brand-primary/5 p-2 rounded-lg border border-brand-primary/10 space-y-1">
                            <p className="text-[7.5px] font-extrabold uppercase tracking-widest text-[#2c5822]">Taste Goals:</p>
                            <div className="flex flex-wrap gap-1">
                              {product.tasteGoals.map((g, k) => (
                                <span key={k} className="bg-white px-1.5 py-0.5 rounded text-[8px] font-medium text-slate-600 border border-brand-muted/40">{g}</span>
                              ))}
                            </div>
                          </div>

                          {/* Responsible Disclaimer */}
                          <p className="text-[7.5px] italic text-brand-accent leading-normal mt-1 border-l-2 border-brand-accent/50 pl-1.5">
                            * Note: Beverage formulation needs food science, stability testing, pH control, preservatives, shelf-life testing, and regulatory compliance before mixing safely.
                          </p>
                        </div>
                      </motion.div>
                    )}
                    {tab === 'nutrition' && (
                      <motion.div 
                        key="nutrition"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px] font-sans"
                      >
                        <div className="flex justify-between border-b border-brand-muted/40 pb-1">
                          <span className="text-brand-accent uppercase font-bold">Calories</span>
                          <span className="font-extrabold text-brand-dark">{product.nutrition.calories}</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-muted/40 pb-1">
                          <span className="text-brand-accent uppercase font-bold">Sodium</span>
                          <span className="font-extrabold text-brand-dark">{product.nutrition.sodium}</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-muted/40 pb-1 col-span-2">
                          <span className="text-brand-accent uppercase font-bold">Sugars</span>
                          <span className="font-extrabold text-brand-dark">{product.nutrition.sugar}</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-muted/40 pb-1">
                          <span className="text-brand-accent uppercase font-bold">Total Carbs</span>
                          <span className="font-extrabold text-brand-dark">{product.nutrition.carbs}</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-muted/40 pb-1">
                          <span className="text-brand-accent uppercase font-bold">Vitamin C</span>
                          <span className="font-extrabold text-brand-dark">{product.nutrition.vitaminC}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="grid grid-cols-2 gap-3.5 pt-2">
                  <button 
                    onClick={() => onSelectProductDetail?.(product.id)}
                    className="py-3.5 px-3 bg-brand-muted text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-xl cursor-pointer hover:bg-brand-primary hover:text-white transition-all border border-brand-primary/10 flex items-center justify-center gap-1 font-sans"
                  >
                    View Formula <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedProduct({ name: product.name, price: product.price, image: product.image });
                      setOrderForm(prev => ({ ...prev, address: '' }));
                    }}
                    className="py-3.5 px-3 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl cursor-pointer hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/10 flex items-center justify-center gap-1 font-sans"
                  >
                    Pre-order ₹{product.price}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-brand-muted rounded-[32px] p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute top-[-30px] right-[-30px] w-48 h-48 bg-brand-accent/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="max-w-xl mx-auto space-y-4">
          <Leaf className="w-12 h-12 text-brand-primary mx-auto animate-pulse" />
          <h3 className="text-2xl font-serif text-brand-dark italic font-bold">Pre-order Details & Guarantee</h3>
          <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
            All orders on this platform are priority reservations for our initial batch production. Once your order is locked, you will receive dispatch updates and a payment link securely to your inbox. Reach us anytime at <span className="font-bold text-brand-primary">welpdrinks.desk@gmail.com</span> for modifications.
          </p>
        </div>
      </div>
    </div>
  );
}

interface ProductDetailPageProps {
  productId: 'pineapple' | 'guava' | 'apple';
  onClose: () => void;
  onGoToHome: () => void;
  setSelectedProduct: (product: { name: string; price: number; image: string } | null) => void;
  setOrderForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; count: number; address: string }>>;
}

function ProductDetailPage({ productId, onClose, onGoToHome, setSelectedProduct, setOrderForm }: ProductDetailPageProps) {
  const product = productsList.find(p => p.id === productId);
  if (!product) return null;

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto space-y-12">
      {/* Back button row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-muted pb-6">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button 
            onClick={onGoToHome}
            className="flex items-center gap-2 group text-brand-secondary hover:text-brand-primary transition-all font-sans font-bold text-xs uppercase tracking-widest cursor-pointer bg-transparent border-0"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Homepage
          </button>
          <span className="text-slate-300 hidden sm:inline-block">|</span>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 group text-brand-secondary hover:text-brand-primary transition-all font-sans font-bold text-xs uppercase tracking-widest cursor-pointer bg-transparent border-0"
          >
            Browse Other Flavors
          </button>
        </div>
        <div className="text-left sm:text-right">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent bg-[#F5F7F4] px-3 py-1 rounded-full border border-brand-accent/20 font-mono">
            Interactive R&D Archive
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Product Photo Shoot Spotlight */}
        <div className="lg:col-span-5 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-[32px] sm:rounded-[40px] bg-gradient-to-b ${product.id === 'pineapple' ? 'from-amber-100/55 to-amber-200/10' : product.id === 'guava' ? 'from-rose-100/55 to-rose-200/10' : 'from-emerald-100/55 to-emerald-200/10'} p-8 sm:p-12 border border-brand-muted/80 shadow-2xl shadow-brand-primary/5 relative group overflow-hidden`}
          >
            <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-white/95 to-transparent pointer-events-none"></div>
            
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative z-10 mx-auto max-h-[480px] w-full"
            >
              <BottleImageWithOverlay 
                src={product.image} 
                alt={product.name}
                imgClassName="w-full h-auto block rounded-2xl mx-auto max-h-[480px] object-contain drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

          <div className="bg-brand-muted p-6 rounded-[24px] border border-brand-accent/10 flex items-center gap-4 text-left">
            <Sparkles className="w-8 h-8 text-brand-primary shrink-0 animate-pulse" />
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#2c5822]">Premium Heritage</p>
              <p className="text-xs text-brand-secondary leading-relaxed font-sans">
                Formulated using only high-fidelity carbonation, pure fruit juice blends, and natural wholesome sweeteners.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Deep-dive Formulation, Policies & Nutrition details */}
        <div className="lg:col-span-7 space-y-8 font-sans">
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${product.badgeColor} border`}>
                {product.tag}
              </span>
              <span className="bg-brand-muted text-brand-primary border border-brand-accent/20 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                ₹{product.price} Special Price
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-brand-dark uppercase tracking-tight font-sans text-left">
              {product.name}
            </h1>
            
            <p className="text-[11px] text-brand-accent font-black uppercase tracking-widest text-left">
              YOLO Soda Original • Hand-Formulated in India
            </p>
          </div>

          <p className="text-sm sm:text-lg text-brand-secondary leading-relaxed opacity-95 text-left">
            {product.description}
          </p>

          {/* Deep-dive 1: The Product Story */}
          <div className="bg-brand-muted/20 p-6 rounded-[24px] border border-brand-muted/40 space-y-3 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-primary text-left">The Blender's Note</h4>
            <p className="text-xs text-brand-secondary leading-relaxed font-medium text-left">
              {product.aboutText}
            </p>
          </div>

          {/* Deep-dive 2: Formulation, Recipes & Ingredients list */}
          <div className="space-y-5 border-t border-brand-muted pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black uppercase tracking-wider text-brand-dark flex items-center gap-2">
                <Leaf className="w-4 h-4 text-brand-primary" /> Formulation & Recipe
              </h3>
              <span className="text-[8px] font-bold uppercase tracking-widest bg-[#E8F0E5] text-[#2D5A27] px-2 py-0.5 rounded-md border border-[#2D5A27]/20 font-mono">
                Carbonated Blend
              </span>
            </div>

            {/* Trial Formulation details */}
            <div className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-[9px] font-extrabold text-brand-primary uppercase tracking-widest">
                    250ml Trial Formulation (R&D Recipe Ratio):
                  </p>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden border border-brand-muted/60 shadow-sm">
                  <table className="w-full text-left text-[11px]">
                    <thead>
                      <tr className="bg-brand-muted/50 text-[8px] uppercase font-medium text-brand-primary border-b border-brand-muted/60 font-mono">
                        <th className="px-3 py-2">Ingredient</th>
                        <th className="px-3 py-2 text-right">Approx Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-muted/40 font-sans">
                      {product.trialIngredients.map((ing, k) => (
                        <tr key={k} className="hover:bg-brand-muted/5 transition-colors">
                          <td className="px-3 py-2 font-semibold text-slate-700">{ing.name}</td>
                          <td className="px-3 py-2 text-right text-brand-dark font-mono font-bold text-[10px]">{ing.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Taste goals & retail text */}
              <div className="md:col-span-5 space-y-4 font-sans">
                <div className="bg-brand-primary/5 p-4 rounded-xl border border-brand-primary/10 space-y-2 text-left">
                  <p className="text-[8px] font-black uppercase tracking-widest text-[#2c5822]">Aesthetic Taste Benchmarks:</p>
                  <div className="flex flex-col gap-1.5">
                    {product.tasteGoals.map((g, k) => (
                      <div key={k} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                        <span className="text-[10px] font-bold text-slate-600 font-mono tracking-tight">{g}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FAFBF9] p-4 rounded-xl border border-brand-muted/60 space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-widest text-brand-accent">Retail Packaging Notes:</p>
                  <p className="text-[10px] text-brand-secondary leading-relaxed">
                    Carbonated water, organic fruit bases, and natural cane sugar. Packed professionally under strict ISO & FSSAI standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="font-extrabold text-brand-primary uppercase text-[8px] tracking-widest">Full Retail Ingredients:</p>
              <p className="text-xs leading-relaxed text-slate-600 bg-brand-muted/30 p-3 rounded-xl border border-brand-muted/40 font-sans">{product.ingredientsText}</p>
            </div>

            {/* Disclaimer */}
            <p className="text-[8.5px] italic text-brand-accent leading-normal border-l-2 border-brand-accent/50 pl-2">
              * Safety Notice: Mixing any active beverage formulation commercially requires advanced food technology, stability analyses, pH calibrations, shelf-life testing, and formal regulatory compliance. Do not self-formulate for commercial sale without expert guidance.
            </p>
          </div>

          {/* Deep-dive 3: Nutrition Panel */}
          <div className="space-y-4 border-t border-brand-muted pt-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-brand-dark flex items-center gap-2">
              <Droplets className="w-4 h-4 text-brand-primary" /> Nutrition Facts Factsheet
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="bg-brand-muted/20 border border-brand-muted/60 p-3 rounded-xl text-center">
                <p className="text-[8px] font-black uppercase tracking-widest text-brand-accent mb-1">Calories</p>
                <p className="text-sm font-black text-brand-dark underline decoration-brand-accent/30">{product.nutrition.calories}</p>
              </div>
              <div className="bg-brand-muted/20 border border-brand-muted/60 p-3 rounded-xl text-center">
                <p className="text-[8px] font-black uppercase tracking-widest text-brand-accent mb-1">Sugars</p>
                <p className="text-xs font-black text-brand-dark truncate leading-none pt-0.5">{product.nutrition.sugar}</p>
              </div>
              <div className="bg-brand-muted/20 border border-brand-muted/60 p-3 rounded-xl text-center">
                <p className="text-[8px] font-black uppercase tracking-widest text-brand-accent mb-1">Carbs</p>
                <p className="text-sm font-black text-brand-dark">{product.nutrition.carbs}</p>
              </div>
              <div className="bg-brand-muted/20 border border-brand-muted/60 p-3 rounded-xl text-center">
                <p className="text-[8px] font-black uppercase tracking-widest text-brand-accent mb-1">Vitamin C</p>
                <p className="text-sm font-black text-brand-dark">{product.nutrition.vitaminC}</p>
              </div>
              <div className="bg-brand-muted/20 border border-brand-muted/60 p-3 rounded-xl text-center col-span-2 sm:col-span-1">
                <p className="text-[8px] font-black uppercase tracking-widest text-brand-accent mb-1">Sodium</p>
                <p className="text-sm font-black text-brand-dark">{product.nutrition.sodium}</p>
              </div>
            </div>
          </div>

          {/* Deep-dive 4: Shipping and Return Policy IN SHORT */}
          <div className="space-y-4 border-t border-brand-muted pt-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-brand-dark">Policies & Fulfillment In Short</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-brand-muted/15 border border-brand-muted/50 p-4 rounded-xl space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-brand-muted text-brand-primary rounded-lg">
                    <Truck className="w-4 h-4" />
                  </div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark">Shipping Policy</h4>
                </div>
                <ul className="text-[10px] text-brand-secondary space-y-1.5 leading-relaxed font-sans list-disc list-inside">
                  <li><span className="font-bold text-slate-700">Free priority shipping:</span> Across major cities in India on pre-orders.</li>
                  <li><span className="font-bold text-slate-700">24-hour processing:</span> Bottles packed and sanitized with high diligence.</li>
                  <li><span className="font-bold text-slate-700">Inbox tracking links:</span> Live tracker IDs dispatched upon shipment.</li>
                </ul>
              </div>

              <div className="bg-brand-muted/15 border border-brand-muted/50 p-4 rounded-xl space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-brand-muted text-brand-primary rounded-lg">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark">Return Policy</h4>
                </div>
                <ul className="text-[10px] text-brand-secondary space-y-1.5 leading-relaxed font-sans list-disc list-inside">
                  <li><span className="font-bold text-slate-700">3-Day replacement:</span> In cases of broken bottle seal or damage.</li>
                  <li><span className="font-bold text-slate-700">Quick proof submission:</span> Just mail photo/video files within 3 days.</li>
                  <li><span className="font-bold text-slate-700">Frictionless dispatch:</span> Our support desk handles everything seamlessly.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core pre-order interactive action button */}
          <div className="pt-6 border-t border-brand-muted flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedProduct({ name: product.name, price: product.price, image: product.image });
                setOrderForm(prev => ({ ...prev, address: '' }));
              }}
              className="flex-grow py-4.5 bg-brand-primary text-white text-xs font-black uppercase tracking-widest rounded-xl cursor-pointer hover:bg-brand-dark transition-colors shadow-xl shadow-brand-primary/25 flex items-center justify-center gap-2.5"
            >
              Pre-Order Now ₹{product.price} <ArrowRight className="w-5 h-5" />
            </motion.button>

            <button
              onClick={onClose}
              className="py-4.5 px-6 border border-brand-muted rounded-xl text-xs font-bold uppercase tracking-widest text-brand-secondary hover:text-brand-primary transition-all cursor-pointer bg-transparent"
            >
              Browse other flavors
            </button>

            <button
              onClick={onGoToHome}
              className="py-4.5 px-6 border border-brand-muted rounded-xl text-xs font-bold uppercase tracking-widest text-brand-secondary hover:text-brand-primary transition-all cursor-pointer bg-transparent"
            >
              Back to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PolicyPortalProps {
  activePolicy: 'terms' | 'return' | 'shipping';
}

function PolicyPortal({ activePolicy }: PolicyPortalProps) {
  const switchPolicy = (p: 'terms' | 'return' | 'shipping') => {
    window.location.hash = `#${p}`;
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto space-y-12">
      {/* Back to Home row */}
      <div className="flex justify-between items-center border-b border-brand-muted pb-4">
        <a 
          href="#/"
          className="flex items-center gap-2 group text-brand-secondary hover:text-brand-primary transition-all font-sans font-bold text-xs uppercase tracking-widest cursor-pointer no-underline"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Homepage
        </a>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#2d5a27] bg-[#E8F0E5] px-3 py-1 rounded-full border border-[#2d5a27]/20 font-mono">
          Regulatory Portal
        </span>
      </div>

      <div className="grid lg:grid-cols-4 gap-12 items-start">
        {/* Policy navigation sidebar panel */}
        <aside className="lg:col-span-1 space-y-4 lg:sticky lg:top-28">
          <div className="p-6 bg-brand-muted/40 rounded-2xl border border-brand-muted/80 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-2">Legal Division</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => switchPolicy('terms')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-between gap-2 border cursor-pointer ${activePolicy === 'terms' ? 'bg-brand-primary text-white border-brand-primary font-black shadow-sm' : 'bg-transparent text-brand-secondary border-transparent hover:bg-brand-muted'}`}
              >
                <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Terms & Conditions</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activePolicy === 'terms' ? 'translate-x-1' : ''}`} />
              </button>
              <button
                onClick={() => switchPolicy('return')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-between gap-2 border cursor-pointer ${activePolicy === 'return' ? 'bg-brand-primary text-white border-brand-primary font-black shadow-sm' : 'bg-transparent text-brand-secondary border-transparent hover:bg-brand-muted'}`}
              >
                <span className="flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> Return Policy</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activePolicy === 'return' ? 'translate-x-1' : ''}`} />
              </button>
              <button
                onClick={() => switchPolicy('shipping')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-between gap-2 border cursor-pointer ${activePolicy === 'shipping' ? 'bg-brand-primary text-white border-brand-primary font-black shadow-sm' : 'bg-transparent text-brand-secondary border-transparent hover:bg-brand-muted'}`}
              >
                <span className="flex items-center gap-2"><Truck className="w-4 h-4" /> Shipping Policy</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activePolicy === 'shipping' ? 'translate-x-1' : ''}`} />
              </button>
            </div>
          </div>
          
          <div className="bg-white border border-brand-muted/60 rounded-2xl p-6 text-center space-y-3">
             <p className="text-[10px] font-bold text-brand-accent uppercase">Operational Desk</p>
             <p className="text-xs text-brand-secondary">Have questions or need support? Write directly to:</p>
             <a href="mailto:welpdrinks.desk@gmail.com" className="text-xs font-serif font-black underline text-brand-primary hover:text-brand-dark transition-colors">welpdrinks.desk@gmail.com</a>
          </div>
        </aside>

        {/* Dynamic policy presentation pane */}
        <section className="lg:col-span-3 bg-white border border-brand-muted rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 md:p-16 shadow-2xl shadow-brand-primary/5 min-h-[60vh] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-muted/30 rounded-bl-[100px] pointer-events-none"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activePolicy}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {activePolicy === 'terms' && (
                <article className="space-y-6 font-serif">
                  <div className="space-y-2 pb-6 border-b border-brand-muted">
                    <span className="text-[9px] uppercase font-sans font-black tracking-widest text-[#2D5A27] px-3 py-1 bg-[#E8F0E5] rounded-full">Legal standard v1.0</span>
                    <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark italic font-black pt-2">Terms & Conditions</h2>
                    <p className="text-xs sm:text-sm text-brand-secondary font-sans font-medium">Welcome to Welp’s Original. By accessing or using our website and products, you agree to comply with the following terms and conditions.</p>
                  </div>

                  <div className="space-y-8 text-sm sm:text-base text-brand-text leading-relaxed">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">1. Company Information</h3>
                      <p className="font-sans text-brand-secondary">Welp’s Original is a beverage company developing and selling fruit-based sparkling beverages under the product name YOLO Soda.</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">2. Product Information</h3>
                      <p className="font-sans text-brand-secondary">We aim to provide accurate information regarding:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1">
                        <li>flavours,</li>
                        <li>ingredients,</li>
                        <li>packaging,</li>
                        <li>pricing,</li>
                        <li>and availability.</li>
                      </ul>
                      <p className="font-sans text-brand-secondary text-xs italic mt-2">However, product specifications may change during development or future updates.</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">3. Intellectual Property</h3>
                      <p className="font-sans text-brand-secondary">All content displayed on this website including:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1">
                        <li>logos,</li>
                        <li>product names,</li>
                        <li>branding,</li>
                        <li>bottle designs,</li>
                        <li>graphics,</li>
                        <li>mockups,</li>
                        <li>and visuals</li>
                      </ul>
                      <p className="font-sans text-brand-secondary">are the property of Welp’s Original and may not be copied, reused, or reproduced without permission.</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">4. User Responsibilities</h3>
                      <p className="font-sans text-brand-secondary">Users agree not to:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1">
                        <li>misuse the website,</li>
                        <li>attempt unauthorized access,</li>
                        <li>spread harmful software,</li>
                        <li>or engage in unlawful activity through the platform.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">5. Orders & Availability</h3>
                      <p className="font-sans text-brand-secondary">All orders are subject to:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1">
                        <li>product availability,</li>
                        <li>delivery serviceability,</li>
                        <li>and operational conditions.</li>
                      </ul>
                      <p className="font-sans text-brand-secondary">Welp’s Original reserves the right to:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1">
                        <li>modify pricing,</li>
                        <li>limit order quantities,</li>
                        <li>or cancel orders if necessary.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">6. Limitation of Liability</h3>
                      <p className="font-sans text-brand-secondary">Welp’s Original shall not be held responsible for:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1">
                        <li>temporary website interruptions,</li>
                        <li>logistics delays,</li>
                        <li>third-party service failures,</li>
                        <li>or misuse of products after delivery.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">7. Policy Updates</h3>
                      <p className="font-sans text-brand-secondary">These policies and terms may be updated periodically without prior notice.</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-brand-muted">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">8. Contact</h3>
                      <p className="font-sans text-brand-secondary">For support or inquiries:</p>
                      <p className="font-sans font-bold text-brand-primary">Email: welpdrinks.desk@gmail.com</p>
                    </div>
                  </div>
                </article>
              )}

              {activePolicy === 'return' && (
                <article className="space-y-6 font-serif">
                  <div className="space-y-2 pb-6 border-b border-brand-muted">
                    <span className="text-[9px] uppercase font-sans font-black tracking-widest text-[#2D5A27] px-3 py-1 bg-[#E8F0E5] rounded-full">Replacements Clause</span>
                    <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark italic font-black pt-2">Return & Replacement Policy</h2>
                    <p className="text-xs sm:text-sm text-brand-secondary font-sans font-medium">At Welp’s Original, product safety and customer satisfaction are important to us.</p>
                  </div>

                  <div className="space-y-8 text-sm sm:text-base text-brand-text leading-relaxed">
                    <div className="space-y-2">
                      <p className="font-sans text-brand-secondary">Customers may request a replacement if:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1.5">
                        <li>the bottle seal is broken,</li>
                        <li>the product arrives damaged,</li>
                        <li>or the wrong product is delivered.</li>
                      </ul>
                    </div>

                    <div className="space-y-3 bg-brand-muted/20 p-6 rounded-2xl border border-brand-muted/40 font-sans">
                      <h3 className="text-base font-bold text-brand-primary uppercase tracking-wider">Replacement Conditions</h3>
                      <p className="text-brand-secondary text-sm">To apply for a replacement:</p>
                      <ul className="list-disc list-inside pl-4 text-brand-secondary space-y-1 text-sm">
                        <li>valid photo or video proof must be provided,</li>
                        <li>the request must be submitted within 3 days of delivery,</li>
                        <li>and the product must remain unused.</li>
                      </ul>
                      <p className="text-brand-secondary text-sm mt-3">If approved, customers may receive:</p>
                      <ul className="list-disc list-inside pl-4 text-brand-primary space-y-1.5 text-sm font-bold mt-1">
                        <li>a replacement bottle of the same flavour, <span className="text-brand-secondary font-normal">OR</span></li>
                        <li>another available YOLO Soda flavour of equal value.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-red-800 uppercase tracking-tight font-sans">Non-Eligible Cases</h3>
                      <p className="font-sans text-brand-secondary">Replacement requests may not be accepted if:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1">
                        <li>proof is not provided,</li>
                        <li>the request is submitted after 3 days,</li>
                        <li>or the damage appears caused after delivery.</li>
                      </ul>
                      <p className="font-sans text-brand-secondary italic text-xs mt-3">Welp’s Original reserves the right to verify and review all replacement claims before approval.</p>
                    </div>
                  </div>
                </article>
              )}

              {activePolicy === 'shipping' && (
                <article className="space-y-6 font-serif">
                  <div className="space-y-2 pb-6 border-b border-brand-muted">
                    <span className="text-[9px] uppercase font-sans font-black tracking-widest text-[#2D5A27] px-3 py-1 bg-[#E8F0E5] rounded-full">Fulfillment Clause</span>
                    <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark italic font-black pt-2">Shipping Policy</h2>
                    <p className="text-xs sm:text-sm text-brand-secondary font-sans font-medium">Clear insights regarding how we pack, process, and route your premium beverages.</p>
                  </div>

                  <div className="space-y-8 text-sm sm:text-base text-brand-text leading-relaxed">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">1. Processing & Shipping</h3>
                      <p className="font-sans text-brand-secondary">Orders will be processed and shipped based on:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1">
                        <li>product availability,</li>
                        <li>operational status,</li>
                        <li>and delivery location.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">2. Delivery Timelines</h3>
                      <p className="font-sans text-brand-secondary">Delivery timelines may vary depending on:</p>
                      <ul className="list-disc list-inside pl-4 font-sans text-brand-secondary space-y-1">
                        <li>logistics providers,</li>
                        <li>city availability,</li>
                        <li>weather conditions,</li>
                        <li>or unforeseen operational delays.</li>
                      </ul>
                      <p className="font-sans text-brand-secondary pt-2">Customers will receive updates once their order is processed and shipped.</p>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-brand-muted">
                      <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight font-sans">3. Support</h3>
                      <p className="font-sans text-brand-secondary">For shipping-related support, please contact us immediately:</p>
                      <p className="font-sans font-bold text-brand-primary">Email: welpdrinks.desk@gmail.com</p>
                    </div>
                  </div>
                </article>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'terms' | 'return' | 'shipping'>('home');
  const [detailedProductId, setDetailedProductId] = useState<'pineapple' | 'guava' | 'apple' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', flavor: 'Pineapple Squeezed' });
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroFlavor, setHeroFlavor] = useState<'pineapple' | 'guava' | 'apple'>('pineapple');

  // New features: submission status and coupon states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPreorderSubmitting, setIsPreorderSubmitting] = useState(false);
  const [receivedCoupon, setReceivedCoupon] = useState('YOLO15');
  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ sent: boolean; warning?: string } | null>(null);

  // Quick checkout pre-order modal state (50 Rupees)
  const [selectedProduct, setSelectedProduct] = useState<{name: string, price: number, image: string} | null>(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: '', email: '', count: 1, address: '' });

  // List of active user pre-orders stored locally
  const [userOrders, setUserOrders] = useState<Array<{id: string, name: string, email: string, product: string, count: number, price: number, address: string, date: string}>>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#products') {
        setCurrentPage('products');
      } else {
        setDetailedProductId(null);
        if (hash === '#terms') {
          setCurrentPage('terms');
        } else if (hash === '#return') {
          setCurrentPage('return');
        } else if (hash === '#shipping') {
          setCurrentPage('shipping');
        } else {
          setCurrentPage('home');
        }
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/preorder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "registration",
            name: formData.name,
            email: formData.email,
            product: formData.flavor,
          }),
        });
        const data = await response.json();
        if (data.success) {
          setReceivedCoupon(data.couponCode || "YOLO15");
          setEmailStatus({ sent: !!data.emailSent, warning: data.warning });
        } else {
          setReceivedCoupon("YOLO15");
          setEmailStatus({ sent: false, warning: data.error || "Failed to submit" });
        }
      } catch (err) {
        console.error("Failed to register for pre-order launch updates", err);
        setReceivedCoupon("YOLO15"); // safe client-side default fallback
        setEmailStatus({ sent: false, warning: "Network connection error" });
      } finally {
        setIsSubmitting(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text flex items-center justify-center p-4 sm:p-6 font-sans relative overflow-hidden">
        {/* Background blobs for success page too */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand-muted rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-[-150px] right-[-50px] w-[500px] h-[500px] bg-brand-accent rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        {/* Gentle background design embellishment */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#2d5a27_1px,transparent_1px)] [background-size:24px_24px] mix-blend-multiply"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-6 sm:space-y-8 bg-white p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] border border-brand-muted shadow-2xl shadow-brand-primary/10 backdrop-blur-xl relative z-10"
        >
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
            >
              <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-brand-primary" />
            </motion.div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">You have officially become a WELPER</h1>
            <p className="text-brand-secondary text-sm sm:text-base md:text-lg leading-relaxed">
              You are now part of an exclusive pool of First Buyers and will be able to purchase <span className="font-semibold text-brand-primary">{formData.flavor}</span> with special discounts.
            </p>
          </div>

          {/* Copyable Promo Code Container */}
          <div className="bg-[#FAFBF9] border-2 border-dashed border-[#2d5a27]/30 rounded-2xl p-6 space-y-3 relative max-w-sm mx-auto">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#2d5a27] block font-sans">Your Live Launch Discount Code</span>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-black text-[#2d5a27] tracking-widest font-sans uppercase">{receivedCoupon}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(receivedCoupon);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="p-2 text-brand-accent hover:text-brand-primary transition-colors cursor-pointer rounded-xl bg-white border border-[#2d5a27]/10 flex items-center justify-center shadow-sm"
                title="Copy Code to Clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#2d5a27]" />}
              </button>
            </div>
            {copied && (
              <p className="text-[10px] text-emerald-700 font-bold animate-pulse">Code copied successfully!</p>
            )}
            <p className="text-[11px] text-brand-secondary leading-normal">
              Copy this code and apply it during preorder or keep it safe. Use it to redeem 15% OFF your cart value once we go officially live!
            </p>
          </div>

          {/* Email Delivery Connection Status */}
          {emailStatus && (
            <div className={`p-4 rounded-xl border text-left space-y-1.5 ${
              emailStatus.sent 
                ? "bg-[#E8F0E5] border-[#2d5a27]/20 text-[#2d5a27]" 
                : "bg-amber-50/70 border-amber-200/60 text-amber-900"
            }`}>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${emailStatus.sent ? "bg-[#2d5a27] animate-pulse" : "bg-amber-500 animate-pulse"}`}></span>
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {emailStatus.sent ? "Active Email Routing Live" : "Email Sandbox Routing (No Password)"}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed opacity-90">
                {emailStatus.sent ? (
                  <>
                    Sign-up details have been automatically routed from <strong className="font-semibold">welporiginals@gmail.com</strong> to <strong className="font-semibold">welpdrinks.desk@gmail.com</strong>, and your 15% coupon has been dispatched to <strong className="font-semibold">{formData.email}</strong>!
                  </>
                ) : (
                  <>
                    Success! Sign-up saved on server.
                    <span className="block mt-1.5 font-bold text-[10px] text-amber-700 bg-amber-100/50 py-1.5 px-2 rounded border border-amber-200">
                      💡 Bypass 2-Step Verification: We've enabled a direct Google Apps Script integration! Just save your script URL as "GOOGLE_SCRIPT_URL" in your Settings menu to activate real-time email forwarding.
                    </span>
                  </>
                )}
              </p>
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/30 cursor-pointer"
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-muted selection:text-brand-primary font-sans relative overflow-hidden">
      {/* Theme Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand-muted rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-[-50px] w-[500px] h-[500px] bg-brand-accent rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      {/* Gentle background design embellishment */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#2d5a27_1px,transparent_1px)] [background-size:24px_24px] mix-blend-multiply"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex max-w-7xl mx-auto px-12 md:px-16 justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#/"
            className="flex items-center gap-2 cursor-pointer"
          >
            <WelpLogo className="h-6 text-black hover:text-neutral-700" />
          </motion.a>
          
          <div className="flex items-center gap-6 xl:gap-8 text-[11px] font-extrabold uppercase tracking-widest text-brand-secondary">
            <a 
              href="#/" 
              className={`pb-1 transition-all hover:text-brand-primary ${currentPage === 'home' ? 'text-brand-primary border-b-2 border-brand-primary' : 'border-b-2 border-transparent'}`}
            >
              Home
            </a>
            <a 
              href="#products" 
              className={`pb-1 transition-all hover:text-brand-primary ${currentPage === 'products' ? 'text-brand-primary border-b-2 border-brand-primary' : 'border-b-2 border-transparent'}`}
            >
              Products
            </a>
            <a 
              href="#terms" 
              className={`pb-1 transition-all hover:text-brand-primary ${currentPage === 'terms' ? 'text-brand-primary border-b-2 border-brand-primary' : 'border-b-2 border-transparent'}`}
            >
              Terms & Conditions
            </a>
            <a 
              href="#return" 
              className={`pb-1 transition-all hover:text-brand-primary ${currentPage === 'return' ? 'text-brand-primary border-b-2 border-brand-primary' : 'border-b-2 border-transparent'}`}
            >
              Return Policy
            </a>
            <a 
              href="#shipping" 
              className={`pb-1 transition-all hover:text-brand-primary ${currentPage === 'shipping' ? 'text-brand-primary border-b-2 border-brand-primary' : 'border-b-2 border-transparent'}`}
            >
              Shipping Policy
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* CTA action button on Top/Navbar as requested */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.hash = '#products';
              }}
              className="px-5 py-2.5 bg-brand-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-md shadow-brand-primary/20 hover:bg-brand-dark transition-colors cursor-pointer"
            >
              Check out our products
            </motion.button>
            
            {/* Interactive Shopping Bag / Pre-order tracker */}
            <div className="relative group cursor-pointer" onClick={() => window.location.hash = '#products'}>
              <div className="w-9 h-9 rounded-full bg-brand-muted flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <ShoppingBag className="w-4 h-4" />
              </div>
              {userOrders.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white font-sans font-bold text-[9px] rounded-full flex items-center justify-center animate-bounce">
                  {userOrders.length}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Brand-accurate Photo shoot header Layout (Left option toggle, Centered Logo, Right Action Bag) */}
        <div className="lg:hidden max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center relative h-12">
          {/* Left: Hamburger menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-primary focus:outline-none cursor-pointer z-50 -ml-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Center: Centered Logo precisely as in the photoshoot photo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a href="#/" onClick={() => setMobileMenuOpen(false)}>
              <WelpLogo className="h-5 text-black" />
            </a>
          </div>

          {/* Right: Shopping Cart/Bag icon as in the photoshoot photo */}
          <div 
            onClick={() => {
              setMobileMenuOpen(false);
              window.location.hash = '#products';
            }}
            className="p-2 text-brand-primary cursor-pointer relative -mr-2"
          >
            <ShoppingBag className="w-5 h-5 text-brand-primary" />
            {userOrders.length > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white font-sans font-bold text-[8px] rounded-full flex items-center justify-center">
                {userOrders.length}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-brand-muted shadow-lg overflow-hidden z-40"
            >
              <div className="flex flex-col px-6 py-8 gap-5 text-xs font-bold uppercase tracking-widest text-brand-secondary text-center">
                <a 
                  href="#/" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b border-brand-muted/40 transition-colors ${currentPage === 'home' ? 'text-brand-primary' : 'hover:text-brand-primary'}`}
                >
                  Home
                </a>
                <a 
                  href="#products" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b border-brand-muted/40 transition-colors ${currentPage === 'products' ? 'text-brand-primary' : 'hover:text-brand-primary'}`}
                >
                  Products
                </a>
                <a 
                  href="#terms" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b border-brand-muted/40 transition-colors ${currentPage === 'terms' ? 'text-brand-primary' : 'hover:text-brand-primary'}`}
                >
                  Terms & Conditions
                </a>
                <a 
                  href="#return" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b border-brand-muted/40 transition-colors ${currentPage === 'return' ? 'text-brand-primary' : 'hover:text-brand-primary'}`}
                >
                  Return Policy
                </a>
                <a 
                  href="#shipping" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`py-2 border-b border-brand-muted/40 transition-colors ${currentPage === 'shipping' ? 'text-brand-primary' : 'hover:text-brand-primary'}`}
                >
                  Shipping Policy
                </a>
                
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.hash = '#products';
                  }}
                  className="px-8 py-3.5 bg-brand-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-md shadow-brand-primary/20 cursor-pointer self-center mt-3 w-full max-w-xs"
                >
                  Check out our products
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-48 md:pb-0 overflow-hidden px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-muted text-brand-primary rounded-full text-xs font-bold uppercase tracking-tighter">
              Refreshing the Urban Youth
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-brand-dark leading-[0.9] italic">
              Naturally <br />
              <span className="not-italic font-sans font-black text-brand-primary">Bubbly.</span>
            </h1>
            
            <div className="max-w-md space-y-4">
              <p className="text-base sm:text-lg text-brand-secondary opacity-90 leading-relaxed font-sans">
                Experience the perfect balance of natural herbs and crisp carbonation. India's favorite healthy alternative to sugary drinks.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.hash = '#products';
                }}
                className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-full font-bold shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-2 cursor-pointer relative z-20"
              >
                Check out our products <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.getElementById('join');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.hash = '#/';
                    setTimeout(() => {
                      document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-brand-muted text-brand-dark rounded-full font-bold border border-brand-accent/40 shadow-sm flex items-center justify-center gap-2 cursor-pointer relative z-20"
              >
                Be our first WELPER!
              </motion.button>
              
              <div className="flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-brand-bg bg-brand-accent"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-brand-bg bg-[#789B74]"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-brand-bg bg-brand-primary"></div>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-brand-accent">
                  Join 2,400+ First Welpers
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="absolute inset-x-0 -top-10 -bottom-10 bg-brand-accent/10 blur-3xl rounded-full scale-105 pointer-events-none"></div>
            
            <div 
              onClick={() => {
                setDetailedProductId(heroFlavor);
                window.location.hash = '#products';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="relative z-10 w-full max-w-[480px] transition-transform duration-500 cursor-pointer group"
              title={`View ${heroFlavor === 'pineapple' ? 'Pineapple' : heroFlavor === 'guava' ? 'Guava Chilli' : 'Green Apple'} Formula & History`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroFlavor}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto"
                >
                  <BottleImageWithOverlay 
                    src={heroFlavor === 'pineapple' ? PINEAPPLE_IMAGE : heroFlavor === 'guava' ? GUAVA_IMAGE : APPLE_IMAGE} 
                    alt={`YOLO Soda ${heroFlavor}`}
                    className="w-full h-auto relative"
                    imgClassName="w-full h-auto block rounded-[32px] md:rounded-[40px] shadow-2xl shadow-brand-primary/5 border border-brand-muted/30 group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-brand-primary/5 rounded-[32px] md:rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-white/95 text-brand-primary text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-lg border border-brand-primary/10 flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform font-sans">
                  Explore Formula & Story →
                </span>
              </div>
            </div>

            {/* Interactive Theme Tab Selectors below the main image container */}
            <div className="relative z-20 bg-white/80 backdrop-blur-md border border-brand-muted/80 p-1.5 rounded-2xl flex gap-1 shadow-lg max-w-sm w-full font-sans">
              {(['pineapple', 'guava', 'apple'] as const).map((flavor) => {
                const colors = {
                  pineapple: 'bg-amber-100 text-amber-950 border-amber-200/50',
                  guava: 'bg-rose-100 text-rose-950 border-rose-200/50',
                  apple: 'bg-emerald-100/90 text-emerald-950 border-emerald-200/50'
                };
                const labels = {
                  pineapple: 'Pineapple',
                  guava: 'Guava Chilli',
                  apple: 'Green Apple'
                };
                return (
                  <button
                    key={flavor}
                    type="button"
                    onClick={() => setHeroFlavor(flavor)}
                    className={`flex-grow py-2 px-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-center transition-all cursor-pointer border ${heroFlavor === flavor ? `${colors[flavor]} shadow-sm` : 'border-transparent text-brand-secondary hover:text-brand-primary'}`}
                  >
                    {labels[flavor]}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-32 bg-white relative overflow-hidden px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -left-20 top-0 w-64 h-64 bg-brand-muted rounded-full blur-3xl opacity-40 pointer-events-none"></div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10 w-full">
              <div className="space-y-4 sm:space-y-6">
                <div className="h-48 sm:h-64 rounded-[32px] sm:rounded-[40px] bg-brand-muted flex flex-col items-center justify-center p-6 sm:p-8 border border-brand-muted text-center">
                   <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mb-3 sm:mb-4" />
                   <p className="text-xl sm:text-2xl font-black text-brand-primary uppercase tracking-tighter">Guilt Free</p>
                </div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-36 sm:h-44 rounded-[32px] sm:rounded-[40px] bg-brand-primary flex items-center justify-center p-6 sm:p-8 text-white font-bold text-xl sm:text-2xl shadow-xl shadow-brand-primary/20 text-center"
                >
                  Refreshing Soda
                </motion.div>
              </div>
              <div className="space-y-4 sm:space-y-6 pt-0 md:pt-12">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-36 sm:h-44 rounded-[32px] sm:rounded-[40px] bg-brand-dark flex items-center justify-center p-6 sm:p-8 text-white font-bold text-xl sm:text-2xl shadow-xl shadow-brand-dark/20 text-center"
                >
                  100% Natural
                </motion.div>
                 <div className="h-48 sm:h-64 rounded-[32px] sm:rounded-[40px] bg-brand-muted flex flex-col items-center justify-center p-6 sm:p-8 border border-brand-muted text-center">
                   <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mb-3 sm:mb-4" />
                   <p className="text-xl sm:text-2xl font-black text-brand-primary uppercase tracking-tighter">Purely Original</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 order-1 md:order-2"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-dark italic leading-tight">
              Crafted for the <br />
              <span className="not-italic font-sans font-black text-brand-primary">Conscious.</span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-brand-secondary leading-relaxed opacity-90">
                "We are a passionate team dedicated to crafting the finest <span className="font-semibold text-brand-primary">original sodas</span> and providing Indian youth a refreshing yet healthy alternative to traditional sugary drinks, using only natural ingredients and carbonation processes."
              </p>
              <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed border-l-2 border-brand-accent pl-4 sm:pl-6">
                Our aim is to provide Urban youth with a delightful and guilt-free beverage option, promoting wellness and natural goodness in every sip.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-8 pt-6 sm:pt-8 border-t border-brand-muted">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-dark italic">0%</p>
                <p className="text-[9px] sm:text-[10px] text-brand-accent font-bold uppercase tracking-wider sm:tracking-widest">Added Sugar</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-dark italic">ALL</p>
                <p className="text-[9px] sm:text-[10px] text-brand-accent font-bold uppercase tracking-wider sm:tracking-widest">Natural</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-dark italic">YES</p>
                <p className="text-[9px] sm:text-[10px] text-brand-accent font-bold uppercase tracking-wider sm:tracking-widest">Healthy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-32 bg-brand-muted/40 relative overflow-hidden px-6 sm:px-12 md:px-16 border-t border-brand-muted">
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-brand-accent rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-brand-muted border border-brand-accent/30 text-brand-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
              Check out our products
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-dark italic leading-tight">
              YOLO Soda <br />
              <span className="not-italic font-sans font-black text-brand-primary uppercase">Lineup.</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-secondary">
              Hand-formulated premium sodas crafted in India with 100% natural juices, active botanical herbs, and zero artificial sweeteners. Discover your signature bubble.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
            {productsList.map((product) => (
              <motion.div 
                 key={product.id}
                 whileHover={{ y: -8 }}
                 onClick={(e) => {
                   const target = e.target as HTMLElement;
                   // Only trigger details if clicking non-button elements
                   if (!target.closest('button') && !target.closest('a')) {
                     setDetailedProductId(product.id as 'pineapple' | 'guava' | 'apple');
                     window.location.hash = '#products';
                     window.scrollTo({ top: 0, behavior: 'instant' });
                   }
                 }}
                 className="bg-white rounded-[32px] sm:rounded-[40px] border border-brand-muted overflow-hidden shadow-xl shadow-brand-primary/5 flex flex-col h-full group cursor-pointer"
              >
                <div 
                  onClick={() => {
                    setDetailedProductId(product.id as 'pineapple' | 'guava' | 'apple');
                    window.location.hash = '#products';
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="w-full bg-white relative overflow-hidden border-b border-brand-muted/40 cursor-pointer"
                  title={`View ${product.name} Details & Formulation`}
                >
                  <BottleImageWithOverlay 
                    src={product.image} 
                    alt={`${product.name} YOLO SODA`} 
                    imgClassName="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 
                        onClick={() => {
                          setDetailedProductId(product.id as 'pineapple' | 'guava' | 'apple');
                          window.location.hash = '#products';
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        }}
                        className="text-lg sm:text-xl font-black text-brand-dark leading-snug uppercase font-sans cursor-pointer hover:text-brand-primary transition-colors animate-fade-in flex-grow text-left"
                        title={`View ${product.name} Details & Formulation`}
                      >
                        {product.name}
                      </h3>
                      <div className="flex flex-col items-end gap-0.5 shrink-0 pl-2">
                        <span className="text-xs font-sans font-black text-white bg-brand-primary px-2.5 py-1 rounded-full whitespace-nowrap shadow-md shadow-brand-primary/10">
                          ₹{product.price}
                        </span>
                        <p className="text-[8px] text-brand-secondary uppercase font-extrabold tracking-widest leading-none">Bottle</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-brand-secondary font-bold uppercase tracking-widest leading-none text-left">
                      YOLO SODA • 250ML PREMIUM BOTTLE
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed flex-grow text-left">
                    {product.description}
                  </p>
                  <div className="border-t border-brand-muted pt-4 flex items-center justify-between gap-4">
                    <button 
                      onClick={() => {
                        setDetailedProductId(product.id as 'pineapple' | 'guava' | 'apple');
                        window.location.hash = '#products';
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="text-[10px] font-black uppercase tracking-widest text-[#2d5a27] hover:underline cursor-pointer bg-transparent border-none"
                    >
                      View Formula →
                    </button>
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedProduct({ name: product.name, price: product.price, image: product.image });
                        setOrderForm(prev => ({...prev, address: ''}));
                      }}
                      className="px-5 py-2.5 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest rounded-full cursor-pointer hover:bg-brand-dark transition-colors shadow-md shadow-brand-primary/20"
                    >
                      Pre-order
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="join" className="py-16 md:py-32 relative px-6 sm:px-12 md:px-16 border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
             <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-brand-dark italic leading-[0.9]">
              Start your <br />
              <span className="not-italic font-sans font-black text-brand-primary uppercase">Wellness.</span>
             </h2>
             <p className="text-base sm:text-lg text-brand-secondary opacity-80 max-w-sm mx-auto md:mx-0">
               Join our exclusive early access pool and be the first to taste the original soda revolution.
             </p>
          </div>

          <div className="w-full md:w-1/2 max-w-lg mx-auto md:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-10 md:p-14 rounded-[32px] sm:rounded-[40px] shadow-2xl shadow-brand-primary/10 border border-brand-muted relative overflow-visible"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-bg rounded-bl-[100px] z-0 opacity-50 pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2">Be our first <span className="text-brand-primary uppercase tracking-tighter">Welper!</span></h2>
                  <p className="text-xs sm:text-sm text-brand-secondary">Exclusive early access & first-batch discounts for the original soda revolution.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-2 px-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-accent group-focus-within:text-brand-primary transition-colors" />
                      <input 
                        type="text" 
                        placeholder="Arjun Sharma" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-11 pr-6 py-3.5 sm:py-4 bg-[#F9FAF8] border border-brand-muted rounded-xl sm:rounded-2xl focus:outline-none focus:border-brand-primary transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-2 px-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-accent group-focus-within:text-brand-primary transition-colors" />
                      <input 
                        type="email" 
                        placeholder="arjun@welp.in" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-11 pr-6 py-3.5 sm:py-4 bg-[#F9FAF8] border border-brand-muted rounded-xl sm:rounded-2xl focus:outline-none focus:border-brand-primary transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-2 px-1">Select Flavor Preference</label>
                    <select 
                      value={formData.flavor}
                      onChange={(e) => setFormData({...formData, flavor: e.target.value})}
                      className="w-full px-4 py-3.5 sm:py-4 bg-[#F9FAF8] border border-brand-muted rounded-xl sm:rounded-2xl focus:outline-none focus:border-brand-primary transition-all text-sm text-brand-text font-medium cursor-pointer"
                    >
                      <option value="Pineapple Squeezed">YOLO SODA Pineapple Squeezed</option>
                      <option value="Guava Chilli">YOLO SODA Guava Chilli</option>
                      <option value="Green Apple">YOLO SODA Green Apple</option>
                      <option value="Tribe Sampler Pack (All Flavors)">Tribe Sampler Pack (All 3 Flavors)</option>
                    </select>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 sm:py-5 bg-brand-primary text-white rounded-xl sm:rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-brand-primary/30 hover:bg-brand-dark transition-all flex items-center justify-center gap-3 cursor-pointer"
                  >
                    Join the Tribe <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>

                <div className="pt-6 sm:pt-8 border-t border-brand-bg flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-accent">Official Welper Status Pending</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
        </>
      )}

      {currentPage === 'products' && (
        detailedProductId ? (
          <ProductDetailPage 
            productId={detailedProductId}
            onClose={() => setDetailedProductId(null)}
            onGoToHome={() => {
              setDetailedProductId(null);
              setCurrentPage('home');
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            setSelectedProduct={setSelectedProduct}
            setOrderForm={setOrderForm}
          />
        ) : (
          <ProductsPage 
            setSelectedProduct={setSelectedProduct} 
            setOrderForm={setOrderForm} 
            onSelectProductDetail={(id) => setDetailedProductId(id as 'pineapple' | 'guava' | 'apple')}
          />
        )
      )}

      {(currentPage === 'terms' || currentPage === 'return' || currentPage === 'shipping') && (
        <PolicyPortal activePolicy={currentPage} />
      )}

      {/* Footer */}
      <footer className="w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 py-12 border-t border-brand-muted bg-white/50 backdrop-blur-sm z-10 gap-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Contact Us</p>
            <a href="mailto:welpdrinks.desk@gmail.com" className="text-xs font-serif italic text-brand-dark hover:text-brand-primary transition-colors">
              welpdrinks.desk@gmail.com
            </a>
          </div>
          <div className="w-[1px] h-8 bg-brand-muted hidden md:block"></div>
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Follow the Bubble</p>
            <div className="flex gap-4 mt-2">
              <a 
                href="https://www.instagram.com/welpdrinks.global?igsh=enZ2ZzZvZ3lia3Bp" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-brand-muted flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full border border-brand-muted flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-[10px] text-brand-accent font-bold uppercase tracking-widest">
            © 2026 Welp. Originals
          </p>
          <div className="flex items-center gap-2">
            <WelpLogo className="h-5 text-black hover:text-neutral-700" />
          </div>
        </div>
      </footer>

      {/* Quick Pre-order Popup Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedProduct(null);
                setOrderSubmitted(false);
              }}
              className="absolute inset-0 bg-brand-dark/60 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl border border-brand-muted p-6 sm:p-10 max-w-lg w-full relative z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => {
                  setSelectedProduct(null);
                  setOrderSubmitted(false);
                }}
                className="absolute top-4 right-4 p-2 text-brand-secondary hover:text-brand-primary transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                {!orderSubmitted ? (
                  <motion.div 
                    key="checkout-form"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4 border-b border-brand-muted pb-4">
                      <div className="w-16 h-20 bg-white border border-brand-muted/50 rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
                        <img 
                          src={selectedProduct.image} 
                          alt={selectedProduct.name} 
                          className="w-full h-full object-cover block"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-brand-accent">Pre-order Special</span>
                        <h3 className="text-lg sm:text-xl font-bold text-brand-dark uppercase">{selectedProduct.name}</h3>
                        <p className="text-base text-brand-primary font-serif font-black">₹{selectedProduct.price} <span className="text-xs text-brand-secondary font-sans font-medium">/ 250ml bottle</span></p>
                      </div>
                    </div>

                    <form 
                      onSubmit={async (e) => {
                        e.preventDefault();
                        if (orderForm.name && orderForm.email && orderForm.address) {
                          setIsPreorderSubmitting(true);
                          const finalTotal = isCouponApplied 
                            ? Number((selectedProduct.price * orderForm.count * 0.85).toFixed(2))
                            : selectedProduct.price * orderForm.count;

                          try {
                            const response = await fetch("/api/preorder", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                type: "preorder",
                                name: orderForm.name,
                                email: orderForm.email,
                                product: selectedProduct.name,
                                count: orderForm.count,
                                address: orderForm.address,
                                total: finalTotal,
                                discountApplied: isCouponApplied,
                              }),
                            });
                            const data = await response.json();
                            if (data.success) {
                              setReceivedCoupon(data.couponCode || "YOLO15");
                              setEmailStatus({ sent: !!data.emailSent, warning: data.warning });
                            } else {
                              setReceivedCoupon("YOLO15");
                              setEmailStatus({ sent: false, warning: data.error || "Pre-order failed" });
                            }
                          } catch (err) {
                            console.error("Failed to post pre-order to email endpoint", err);
                            setReceivedCoupon("YOLO15"); // fallback
                            setEmailStatus({ sent: false, warning: "Network connection error" });
                          } finally {
                            setIsPreorderSubmitting(false);
                            const newOrder = {
                              id: Math.random().toString(36).substring(2, 9),
                              name: orderForm.name,
                              email: orderForm.email,
                              product: selectedProduct.name,
                              count: orderForm.count,
                              price: finalTotal,
                              address: orderForm.address,
                              date: new Date().toLocaleDateString()
                            };
                            setUserOrders(prev => [...prev, newOrder]);
                            setOrderSubmitted(true);
                          }
                        }
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-1 px-1">Full Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-accent" />
                          <input 
                            type="text" 
                            required
                            placeholder="Your Name"
                            value={orderForm.name}
                            onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                            className="w-full pl-11 pr-5 py-3 bg-[#F9FAF8] border border-brand-muted rounded-xl focus:outline-none focus:border-brand-primary transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-1 px-1">Email Address</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-accent" />
                          <input 
                            type="email" 
                            required
                            placeholder="email@example.com"
                            value={orderForm.email}
                            onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                            className="w-full pl-11 pr-5 py-3 bg-[#F9FAF8] border border-brand-muted rounded-xl focus:outline-none focus:border-brand-primary transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-1 px-1">Quantity</label>
                          <select 
                            value={orderForm.count}
                            onChange={(e) => setOrderForm({...orderForm, count: Number(e.target.value)})}
                            className="w-full px-4 py-3 bg-[#F9FAF8] border border-brand-muted rounded-xl focus:outline-none focus:border-brand-primary transition-all text-sm cursor-pointer"
                          >
                            {[1, 2, 4, 6, 12, 24].map(n => (
                              <option key={n} value={n}>{n} {n === 1 ? 'Bottle' : 'Bottles'}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-1 px-1">Total Price</label>
                          <div className="w-full px-4 py-3 bg-brand-muted text-brand-primary font-bold rounded-xl text-sm flex flex-col items-center justify-center">
                            {isCouponApplied ? (
                              <>
                                <span className="text-xs line-through text-brand-secondary">₹{selectedProduct.price * orderForm.count}</span>
                                <span className="text-sm text-brand-primary">₹{(selectedProduct.price * orderForm.count * 0.85).toFixed(2)}</span>
                              </>
                            ) : (
                              <span>₹{selectedProduct.price * orderForm.count}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Promo Code Input Fields */}
                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-1 px-1">Promo Code (Get 15% OFF)</label>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="e.g. YOLO15"
                            value={couponCodeInput}
                            onChange={(e) => {
                              setCouponCodeInput(e.target.value);
                              setCouponError(false);
                            }}
                            disabled={isCouponApplied}
                            className="flex-grow px-4 py-2.5 bg-[#F9FAF8] border border-brand-muted rounded-xl focus:outline-none focus:border-brand-primary transition-all text-sm uppercase tracking-wider"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const inputCode = couponCodeInput.trim().toUpperCase();
                              const isValidGeneratedCode = /^[A-Z0-9]{7}$/.test(inputCode);
                              if (inputCode === 'YOLO15' || inputCode === receivedCoupon.toUpperCase() || isValidGeneratedCode) {
                                setIsCouponApplied(true);
                                setCouponError(false);
                              } else {
                                setCouponError(true);
                              }
                            }}
                            disabled={isCouponApplied || !couponCodeInput}
                            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer border transition-all ${
                              isCouponApplied 
                                ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                                : "bg-brand-dark text-white hover:bg-brand-primary border-brand-dark hover:border-brand-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            }`}
                          >
                            {isCouponApplied ? "Applied!" : "Apply"}
                          </button>
                        </div>
                        {isCouponApplied && (
                          <p className="text-[11px] text-emerald-700 font-bold mt-1.5 flex items-center gap-1 px-1">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Discount Applied: 15% OFF!
                          </p>
                        )}
                        {couponError && (
                          <p className="text-[11px] text-red-600 font-semibold mt-1.5 px-1">
                            Invalid code. Please enter your signed up coupon code or 'YOLO15'.
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-1 px-1">Delivery Address</label>
                        <textarea 
                          rows={2}
                          required
                          placeholder="Your complete Indian delivery address..."
                          value={orderForm.address}
                          onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                          className="w-full px-4 py-3 bg-[#F9FAF8] border border-brand-muted rounded-xl focus:outline-none focus:border-brand-primary transition-all text-sm"
                        />
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isPreorderSubmitting}
                        className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-brand-primary/30 hover:bg-brand-dark transition-all flex items-center justify-center gap-3 cursor-pointer mt-2 disabled:bg-brand-secondary/40 disabled:cursor-not-allowed"
                      >
                        {isPreorderSubmitting ? (
                          <>
                            <span className="inline-block w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                            Reserving...
                          </>
                        ) : (
                          <>
                            Reserve Order <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-6 space-y-6"
                  >
                    <div className="flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 10, stiffness: 100 }}
                        className="w-16 h-16 bg-brand-muted rounded-full flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-10 h-10 text-brand-primary" />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-brand-dark">Order Reserved!</h4>
                      <p className="text-xs text-brand-accent font-extrabold uppercase tracking-widest">
                        YOU ARE AN OFFICIAL WELPER
                      </p>
                      <p className="text-sm text-brand-secondary max-w-sm mx-auto leading-relaxed pt-2">
                        Hey <span className="font-semibold text-brand-dark">{orderForm.name}</span>, we have reserved your order of <span className="font-semibold text-brand-dark">{orderForm.count} {orderForm.count === 1 ? 'bottle' : 'bottles'}</span> of <span className="font-semibold text-brand-primary">{selectedProduct.name}</span>. An order confirmation has been dispatched to <span className="font-semibold text-brand-dark">{orderForm.email}</span> with detail records sent to the tribe desk.
                      </p>
                    </div>

                    {/* Copied Coupon Promo Code Banner */}
                    <div className="bg-[#FAFBF9] border-2 border-dashed border-[#2d5a27]/30 rounded-2xl p-5 space-y-2 relative max-w-xs mx-auto">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-brand-accent block font-sans">Official Launch Promo Code</span>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-black text-[#2d5a27] tracking-widest font-sans uppercase">{receivedCoupon}</span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(receivedCoupon);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                          }}
                          className="p-1.5 text-brand-accent hover:text-brand-primary transition-colors cursor-pointer rounded-lg bg-white border border-[#2d5a27]/10 inline-flex items-center justify-center"
                          title="Copy Promo Code"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#2d5a27]" />}
                        </button>
                      </div>
                      {copied && (
                        <p className="text-[10px] text-emerald-700 font-bold animate-pulse">Copied!</p>
                      )}
                      <p className="text-[10px] text-brand-secondary leading-normal">
                        Redeem 15% discount across all products when we officially go live!
                      </p>
                    </div>

                    {/* Email Delivery Connection Status */}
                    {emailStatus && (
                      <div className={`p-3.5 rounded-xl border text-left space-y-1 max-w-xs mx-auto ${
                        emailStatus.sent 
                          ? "bg-[#E8F0E5] border-[#2d5a27]/20 text-[#2d5a27]" 
                          : "bg-amber-50/70 border-amber-200/60 text-amber-900"
                      }`}>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${emailStatus.sent ? "bg-[#2d5a27] animate-pulse" : "bg-amber-500 animate-pulse"}`}></span>
                          <span className="text-[9px] font-black uppercase tracking-widest">
                            {emailStatus.sent ? "Pre-order Routing Active" : "Pre-order Sandbox Logged"}
                          </span>
                        </div>
                        <p className="text-[10px] leading-relaxed opacity-95">
                          {emailStatus.sent ? (
                            <>
                              Confirmation forwarded from <strong className="font-semibold">welporiginals@gmail.com</strong> to the desk at <strong className="font-semibold">welpdrinks.desk@gmail.com</strong>!
                            </>
                          ) : (
                            <>
                              Captured locally! Configure <strong className="font-semibold">GOOGLE_SCRIPT_URL</strong> or <strong className="font-semibold">SMTP_PASS</strong> in your Settings to automate live email delivery.
                            </>
                          )}
                        </p>
                      </div>
                    )}

                    <button 
                      onClick={() => {
                        setSelectedProduct(null);
                        setOrderSubmitted(false);
                        setIsCouponApplied(false);
                        setCouponCodeInput('');
                      }}
                      className="px-6 py-2.5 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest rounded-full cursor-pointer hover:bg-brand-dark"
                    >
                      Awesome!
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


