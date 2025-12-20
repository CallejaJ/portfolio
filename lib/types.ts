// ============================================
// TIPOS Y CONSTANTES
// ============================================
type ProjectKey =
  | "gaslessSwap"
  | "usdtStaking"
  | "nftLaunchpad"
  | "realEstate"
  | "tokenLaunchpad"
  | "smartMeterDashboard"
  | "faviconGenerator"
  | "retroGamehub"
  | "geoOptimization"
  | "cryptoTracker"
  | "docudid";

interface ProjectData {
  title: string;
  description: string;
  metrics: string;
}

interface Project {
  id: number;
  titleKey: ProjectKey;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}
