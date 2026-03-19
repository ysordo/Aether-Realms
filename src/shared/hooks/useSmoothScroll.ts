export function useSmoothScroll() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
      });
      
      history.pushState(null, '', sectionId);
    }
  };

  return { scrollToSection };
}