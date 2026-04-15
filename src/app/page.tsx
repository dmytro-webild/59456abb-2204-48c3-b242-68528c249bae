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
import { Award, Github, MessageCircle, Play, Star, Twitter, Users, Zap } from "lucide-react";

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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Browse",
          id: "anime-grid",
        },
        {
          name: "Community",
          id: "testimonials",
        },
        {
          name: "Rewards",
          id: "pricing",
        },
      ]}
      brandName="AniVerse"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Your All-in-One Anime Universe"
      description="Watch, discover, earn, and connect with the ultimate anime community. Powered by neon, fueled by rewards."
      testimonials={[
        {
          name: "Alex R.",
          handle: "@otaku_fan",
          testimonial: "Finally, a platform that understands what anime fans actually want.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/anime-character-using-virtual-reality-glasses-metaverse_23-2151568861.jpg",
        },
        {
          name: "Maya S.",
          handle: "@anime_guru",
          testimonial: "The reward system is addictive and the recommendations are spot on.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/anime-character-playing-drums_23-2151103440.jpg",
        },
        {
          name: "Kenji D.",
          handle: "@weeb_king",
          testimonial: "Community features here are top-tier. Best anime hub ever.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100264.jpg",
        },
        {
          name: "Sarah L.",
          handle: "@anime_luna",
          testimonial: "I love how easy it is to earn rewards while watching my favorites!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-warrior-urban-scenery_23-2150712336.jpg",
        },
        {
          name: "Hiro T.",
          handle: "@hiro_samurai",
          testimonial: "The interface is absolutely stunning, feels like a real digital hub.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cartoon-man-wearing-glasses_23-2151136831.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/intense-anime-fighter-with-energy-blade_23-2152031302.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100256.jpg",
          alt: "Avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100232.jpg",
          alt: "Avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100245.jpg",
          alt: "Avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100201.jpg",
          alt: "Avatar 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100220.jpg",
          alt: "Avatar 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "JOIN THE HUB",
        },
        {
          type: "text-icon",
          text: "REWARDS",
          icon: Star,
        },
        {
          type: "text",
          text: "DISCOVER NEW SERIES",
        },
        {
          type: "text-icon",
          text: "CONNECT",
          icon: MessageCircle,
        },
        {
          type: "text",
          text: "WATCH ANIME",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About AniVerse"
      title="Community Meets Discovery"
      description="AniVerse Hub bridges the gap between passive viewing and active engagement. We provide an ecosystem where your love for anime is rewarded."
      subdescription="Our AI-powered engine helps you find hidden gems while our community platform connects you with like-minded fans worldwide."
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
        {
          tag: "Discovery",
          title: "AI Recommendations",
          subtitle: "Find what you'll love next",
          description: "Describe your taste and our AI finds the perfect match for you.",
          imageSrc: "http://img.b2bpic.net/free-photo/anime-character-using-virtual-reality-glasses-metaverse_23-2151568814.jpg",
        },
        {
          tag: "Community",
          title: "Forums & Threads",
          subtitle: "Discuss, debate, connect",
          description: "Engage in meaningful conversations with fans globally.",
          imageSrc: "http://img.b2bpic.net/free-photo/boys-friendship-cartoon_23-2151495153.jpg",
        },
        {
          tag: "Rewards",
          title: "Earn While You Watch",
          subtitle: "Get rewarded for activity",
          description: "Daily logins, commenting, and watching unlock premium perks.",
          imageSrc: "http://img.b2bpic.net/free-photo/lone-figure-snowy-cyberpunk-alley_23-2152020183.jpg",
        },
      ]}
      title="Platform Features"
      description="Everything you need to level up your anime obsession."
    />
  </div>

  <div id="anime-grid" data-section="anime-grid">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Neon Genesis",
          price: "Trending",
          variant: "Action",
          imageSrc: "http://img.b2bpic.net/free-photo/anime-girl-gothic-attire-with-lilac-flowers_23-2152013226.jpg",
        },
        {
          id: "2",
          name: "Cyber Samurai",
          price: "Hot",
          variant: "Sci-Fi",
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-anime-woman-flying-city-night_23-2151975915.jpg",
        },
        {
          id: "3",
          name: "Soul Garden",
          price: "New",
          variant: "Romance",
          imageSrc: "http://img.b2bpic.net/free-photo/anime-style-illustration-rose_23-2151548352.jpg",
        },
        {
          id: "4",
          name: "Titan Gear",
          price: "Popular",
          variant: "Mecha",
          imageSrc: "http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572153.jpg",
        },
        {
          id: "5",
          name: "Star Dust",
          price: "Classic",
          variant: "Fantasy",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-anime-fairy-girl_23-2151567471.jpg",
        },
        {
          id: "6",
          name: "Dragon Soul",
          price: "Top",
          variant: "Shonen",
          imageSrc: "http://img.b2bpic.net/free-photo/anime-style-character-space_23-2151134310.jpg",
        },
      ]}
      title="Trending Anime"
      description="Explore the latest and most popular series."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          tag: "Free",
          price: "$0",
          period: "/mo",
          description: "Access basic features and start earning.",
          button: {
            text: "Join Free",
          },
          featuresTitle: "Includes",
          features: [
            "Limited Ads",
            "Rewards System",
            "Community Access",
          ],
        },
        {
          id: "pro",
          tag: "Elite",
          price: "$9.99",
          period: "/mo",
          description: "For the ultimate otaku experience.",
          button: {
            text: "Go Elite",
          },
          featuresTitle: "Everything in Basic, plus:",
          features: [
            "Ad-Free Viewing",
            "Exclusive Badges",
            "Early Access",
          ],
        },
      ]}
      title="Premium Membership"
      description="Unlock exclusive content and ad-free experience."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Users,
          title: "Active Fans",
          value: "50K+",
        },
        {
          id: "m2",
          icon: Play,
          title: "Anime Titles",
          value: "2K+",
        },
        {
          id: "m3",
          icon: Award,
          title: "Points Earned",
          value: "1M+",
        },
      ]}
      title="Platform Impact"
      description="Growing daily with a passionate community."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "User 1",
          handle: "@user1",
          testimonial: "I love the community!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-enjoying-time-outdoors_23-2150100125.jpg",
        },
        {
          id: "t2",
          name: "User 2",
          handle: "@user2",
          testimonial: "So many hidden gems found.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-portrait-asian-man_23-2151836582.jpg",
        },
        {
          id: "t3",
          name: "User 3",
          handle: "@user3",
          testimonial: "Earned rewards for watching? Yes!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100274.jpg",
        },
        {
          id: "t4",
          name: "User 4",
          handle: "@user4",
          testimonial: "Best platform experience.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-short-curly-hair-green-t-shirt-looking-surprised-standing_141793-29211.jpg",
        },
        {
          id: "t5",
          name: "User 5",
          handle: "@user5",
          testimonial: "Amazing community forums.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-zoom-call-avatar_23-2149556781.jpg",
        },
      ]}
      showRating={true}
      title="Community Voices"
      description="See why everyone is switching to AniVerse."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How do rewards work?",
          content: "You earn points for daily logins, interactions, and watching.",
        },
        {
          id: "f2",
          title: "Is the content legal?",
          content: "We embed legal sources and highlight trailers/clips.",
        },
        {
          id: "f3",
          title: "How can I upgrade?",
          content: "Go to the rewards dashboard or pricing page.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Need help? We've got answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Stay Updated"
      description="Join our newsletter for the latest anime news."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
        },
      ]}
      buttonText="Subscribe"
      imageSrc="http://img.b2bpic.net/free-photo/cyberpunk-anime-girl-neon-alley_23-2152008013.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="AniVerse"
      copyrightText="© 2025 AniVerse Hub"
      socialLinks={[
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
        {
          icon: Github,
          href: "#",
          ariaLabel: "Github",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
