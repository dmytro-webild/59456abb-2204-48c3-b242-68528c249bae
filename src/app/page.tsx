"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Github, MessageCircle, Play, Star, Twitter, Zap, Gamepad2, Share2, Coins } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Discovery", id: "anime-grid" },
        { name: "Community", id: "testimonials" },
        { name: "Rewards", id: "pricing" },
        { name: "Games", id: "features" },
        { name: "Sharing", id: "contact" }
      ]}
      brandName="AniVerse"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      title="Your All-in-One Anime Universe"
      description="Watch, discover, earn rewards, play mini-games, and share your favorite clips. The ultimate destination for anime lovers."
      testimonials={[]}
      imageSrc="http://img.b2bpic.net/free-photo/intense-anime-fighter-with-energy-blade_23-2152031302.jpg"
      mediaAnimation="slide-up"
      marqueeItems={[
        { type: "text-icon", text: "DISCOVERY", icon: Zap },
        { type: "text-icon", text: "COMMUNITY", icon: MessageCircle },
        { type: "text-icon", text: "REWARDS", icon: Coins },
        { type: "text-icon", text: "MINI GAMES", icon: Gamepad2 },
        { type: "text-icon", text: "CLIP SHARING", icon: Share2 },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="The Hub"
      title="More Than Just Viewing"
      description="AniVerse Hub is an interactive platform built for the modern anime fan. Whether you're hunting for hidden gems, discussing theories in our forums, or competing in our mini-games, there's always something new to do."
      subdescription="Unlock rewards, climb the leaderboard, and become part of our growing global community."
      icon={Zap}
      imageSrc="http://img.b2bpic.net/free-photo/anime-style-scene-depicting-girls-friendship_23-2151445246.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { tag: "Engagement", title: "Mini-Games", subtitle: "Play & Level Up", description: "Enjoy casual anime-themed mini-games to earn XP and points.", imageSrc: "http://img.b2bpic.net/free-photo/anime-character-playing-drums_23-2151103440.jpg" },
        { tag: "Social", title: "Clip Sharing", subtitle: "Share the Hype", description: "Upload, edit, and share your favorite clips from your favorite series.", imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-warrior-urban-scenery_23-2150712336.jpg" },
        { tag: "Rewards", title: "Rewards System", subtitle: "Earn Perks", description: "Complete daily tasks, win games, and share content to earn exclusive platform rewards.", imageSrc: "http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572153.jpg" }
      ]}
      title="Dynamic Features"
      description="Experience the full potential of an interactive anime platform."
    />
  </div>

  <div id="anime-grid" data-section="anime-grid">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Neon Genesis", price: "Discover", variant: "Action", imageSrc: "http://img.b2bpic.net/free-photo/anime-girl-gothic-attire-with-lilac-flowers_23-2152013226.jpg" },
        { id: "2", name: "Cyber Samurai", price: "Explore", variant: "Sci-Fi", imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-anime-woman-flying-city-night_23-2151975915.jpg" },
        { id: "3", name: "Soul Garden", price: "Top Picks", variant: "Romance", imageSrc: "http://img.b2bpic.net/free-photo/anime-style-illustration-rose_23-2151548352.jpg" },
        { id: "4", name: "Titan Gear", price: "New", variant: "Mecha", imageSrc: "http://img.b2bpic.net/free-photo/cute-anime-fairy-girl_23-2151567471.jpg" }
      ]}
      title="Anime Discovery"
      description="Find your next obsession with curated collections."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        { id: "basic", tag: "Standard", price: "Free", period: "", description: "Get started with basic access and core features.", button: { text: "Join" }, featuresTitle: "Core Features", features: ["Discovery Engine", "Community Access", "Earn Daily Points"] },
        { id: "pro", tag: "Legend", price: "$9.99", period: "/mo", description: "Unlock the full AniVerse experience with perks.", button: { text: "Upgrade" }, featuresTitle: "Elite Access", features: ["Advanced Mini-Games", "Premium Rewards Multiplier", "Exclusive Clip Storage"] }
      ]}
      title="Rewards System"
      description="Unlock rewards, climb ranks, and earn exclusive platform badges."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Join the Conversation"
      description="Stay updated on community clips, mini-game challenges, and rewards events."
      inputs={[
        { name: "username", type: "text", placeholder: "Username" },
        { name: "email", type: "email", placeholder: "Email Address" }
      ]}
      buttonText="Get Involved"
      imageSrc="http://img.b2bpic.net/free-photo/cyberpunk-anime-girl-neon-alley_23-2152008013.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="AniVerse"
      copyrightText="© 2025 AniVerse Hub"
      socialLinks={[
        { icon: Twitter, href: "#", ariaLabel: "Twitter" },
        { icon: Github, href: "#", ariaLabel: "Github" }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
